import { ReactElement } from "react";
import { MaybeArray } from "tsdef";

export interface ImageUploadProps {
  placeholder?: string;
  onChange: (fileBase64: string) => void;
  children?: ({
    onUploadClick,
    fileObjectURL,
    fileName,
    clear,
  }: {
    onUploadClick: () => void;
    fileObjectURL: string;
    fileName: string;
    clear: () => void;
  }) => MaybeArray<ReactElement>;
}
