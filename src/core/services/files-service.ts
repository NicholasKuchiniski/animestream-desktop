import { File as FileEntity, FileExtensions, FileFolders } from "#/core/entities/file";
import { HttpClient } from "#/core/http-client/http-client";

export class FilesService {
  public static async create(extension: FileExtensions, folder: FileFolders) {
    const response = await HttpClient.getInstance().request({
      path: "/v1/files",
      method: "post",
      data: {
        extension,
        folder,
      },
    });

    return response.getData(FileEntity);
  }

  public static async upload(file: FileEntity, buffer: string | Buffer | File) {
    if (typeof buffer === "string") {
      buffer = Buffer.from(buffer.replace(/^data:image\/\w+;base64,/, ""), "base64");
    }

    await new HttpClient(file.url).request({
      path: "",
      method: "put",
      headers: {
        "Content-Type": file.getContentType(),
        "Content-Encoding": file.getContentEncoding(),
      },
      data: buffer,
    });

    return file;
  }
}
