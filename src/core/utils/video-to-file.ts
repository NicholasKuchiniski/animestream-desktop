/* eslint-disable no-console */
/* eslint-disable prefer-promise-reject-errors */

import { random } from "lodash";

// Thanks to https://stackoverflow.com/a/63474748
export function videoToFile(file: File): Promise<{ file: Blob; base64: string; quality: number; duration: number }> {
  const twelveMinutes = 60 * random(5, 15);

  return new Promise((resolve, reject) => {
    // load the file to a video player
    const videoPlayer = document.createElement("video");
    videoPlayer.setAttribute("src", URL.createObjectURL(file));
    videoPlayer.load();
    videoPlayer.addEventListener("error", (ex) => {
      reject(ex);
    });
    // load metadata of the video to get video duration and dimensions
    videoPlayer.addEventListener("loadedmetadata", () => {
      // seek to user defined timestamp (in seconds) if possible
      if (videoPlayer.duration < twelveMinutes) {
        reject("video is too short.");
        return;
      }
      // delay seeking or else 'seeked' event won't fire on Safari
      setTimeout(() => {
        videoPlayer.currentTime = twelveMinutes;
      }, 200);
      // extract video thumbnail once seeking is complete
      videoPlayer.addEventListener("seeked", () => {
        // define a canvas to have the same dimension as the video
        const canvas = document.createElement("canvas");
        canvas.width = videoPlayer.videoWidth;
        canvas.height = videoPlayer.videoHeight;
        // draw the video frame to canvas
        const ctx = canvas.getContext("2d");
        ctx?.drawImage(videoPlayer, 0, 0, canvas.width, canvas.height);
        // return the canvas image as a blob
        ctx?.canvas.toBlob(
          (blob) => {
            if (blob) {
              resolve({
                file: blob,
                base64: ctx.canvas.toDataURL("image/png").replace(/^data:image\/\w+;base64,/, ""),
                quality: videoPlayer.videoHeight,
                duration: videoPlayer.duration,
              });
            }
          },
          "image/png",
          1 /* quality */,
        );
      });
    });
  });
}
