export enum FileExtensions {
  PNG = "png",
  MP4 = "mp4",
}

export enum FileFolders {
  IMAGES = "images",
  VIDEOS = "videos",
}

const filesContentTypes = new Map<FileExtensions, string>([
  [FileExtensions.PNG, "image/png"],
  [FileExtensions.MP4, "video/mp4"],
]);

const filesContentEncodings = new Map<FileExtensions, string>([[FileExtensions.PNG, "base64"]]);

export class File {
  public constructor(
    public name: string,
    public extension: FileExtensions,
    public folder: FileFolders,
    public url: string,
  ) {
    this.name = `${name}.${extension}`;
  }

  public static empty() {
    return new File("", FileExtensions.PNG, FileFolders.IMAGES, "");
  }

  public isEmpty(): boolean {
    return this.url === "";
  }

  public getUrl() {
    const url = new URL(this.url);

    return url.href.replace(url.search, "");
  }

  public getContentType() {
    return String(filesContentTypes.get(this.extension));
  }

  public getContentEncoding() {
    return String(filesContentEncodings.get(this.extension));
  }
}
