```
░█▀▀█ ▒█▄░▒█ ▀█▀ ▒█▀▄▀█ ▒█▀▀▀ ▒█▀▀▀█ ▀▀█▀▀ ▒█▀▀█ ▒█▀▀▀ ░█▀▀█ ▒█▀▄▀█
▒█▄▄█ ▒█▒█▒█ ▒█░ ▒█▒█▒█ ▒█▀▀▀ ░▀▀▀▄▄ ░▒█░░ ▒█▄▄▀ ▒█▀▀▀ ▒█▄▄█ ▒█▒█▒█
▒█░▒█ ▒█░░▀█ ▄█▄ ▒█░░▒█ ▒█▄▄▄ ▒█▄▄▄█ ░▒█░░ ▒█░▒█ ▒█▄▄▄ ▒█░▒█ ▒█░░▒█
```

Watch your favorite series

# Motivation

I like to use my knowledge in software development to solve problems of my day to day, watching series is something I do very often and often depend on third party sites that do not always have a good subtitle, a good quality or a good content provider to assist, I joined the useful to the pleasant and applied my knowledge in this project, both in Front-End and Back-End (the source code is closed by the hour, but in the future it may be open too).

> This project was incredibly enriching in learning the redux saga (did you see the progress upload every X seconds :cowboy_hat_face: ?), Electron, Github Actions, DDD and AWS technologies.

# CI/CD

This project has actions to make automatic build for windows and linux with each new tag following the pattern 'vX.X.X'.

# Commits

Use `git cz` to create your commit messages.

# Requirements

| Name     | Version    | Description                                                                                        |
| -------- | ---------- | -------------------------------------------------------------------------------------------------- |
| Electron | ^11.2.3    | Framework used to make desktop applications with HTML, Javascript and CSS.                         |
| React    | ^16.13.1   | React is an open source JavaScript library focused on creating user interfaces on web pages        |
| NodeJS   | >= 10.14.2 | Node.js is open source, multiplatform software that executes JavaScript code on the backend/server |

# Running locally

## Development
1. You need a copy of the enviroment variables (ask to @NicholasKuchiniski)
2. Inside a shell run the following commands:

    ```bash
    $ make install
    $ yarn start
    ```

## Building

1. You need a copy of the enviroment variables (ask to @NicholasKuchiniski)
2. Inside a shell run the following commands:

    ```bash
    $ make install
    $ make compile
    $ make linux windows
    ```

# Structure

All modules have their own folder inside src and inside their folders, there is the following structure:

```
/components // Unitary components like Inputs, Buttons, etc...
/routes     // Main route entry points for react-router
/store      // Redux files
```

Reusable things like services, entities and collections should be created inside the `core` module.

# Styling

This project uses a declarable UI approach like Flutter or SwiftUI, using [Chakra](https://chakra-ui.com/) to style the components.

# Theming

You can switch between light and dark themes and select the main color of the application.

<img src="./images/prints/light/theme.png" >

# Images

## Home

<img src="./images/prints/dark/home.png" >

## Search

<img src="./images/prints/dark/search.png" />

## Serie

<img src="./images/prints/dark/serie.png" />

## Episode

<img src="./images/prints/dark/episode.png" />
