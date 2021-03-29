const { Socket } = require("net");
const  { exec } = require('child_process');
const axios = require('axios');

const client = new Socket();
const port  = parseInt(process.env.PORT, 10) || 3000;

let hasStarted = false;

async function closeSocket() {
    client.end();
}

async function fetchPage() {
    await axios.get(`http://localhost:${port}`);
}

async function openElectron() {
    console.log('Starting electron');

    exec(`NODE_ENV=development PORT=${port} yarn electron`);

}

function tryConnection() {
    client.connect({ port }, async () => {
        await closeSocket();
    
        if (!hasStarted) {
            hasStarted = true;
            await fetchPage();
            await openElectron();
        }
    })
}

function start() {
    tryConnection();

    client.on('error', (error) => {
        setTimeout(tryConnection, 1000);
    });
}


start();