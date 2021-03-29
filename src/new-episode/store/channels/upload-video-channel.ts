import axios from "axios";
import { buffers, eventChannel, END } from "redux-saga";

import { File as FileEntity } from "#/core/entities/file";

export function uploadVideoChannel(fileEntity: FileEntity, file: File) {
  return eventChannel((emitter) => {
    axios
      .put(fileEntity.url, file, {
        headers: {
          "Content-Type": fileEntity.getContentType(),
        },
        onUploadProgress: (event: any) => {
          const progress: number = Math.round((event.loaded * 100) / event.total);

          emitter({ progress });
        },
      })
      .then((response) => {
        emitter({ finished: true });
        emitter(END);
      })
      .catch((error) => {
        emitter({ error });
        emitter(END);
      });

    return () => null;
  }, buffers.sliding(2));
}
