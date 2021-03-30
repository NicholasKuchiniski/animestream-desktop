export interface VideoUploadChangeEvent {
  file: File;
  preview: string;
  quality: number;
  duration: number;
}

export interface VideoUploadProps {
  isLoading?: boolean;
  progress?: number;
  placeholder: string;
  onChange: (event: VideoUploadChangeEvent) => void;
}
