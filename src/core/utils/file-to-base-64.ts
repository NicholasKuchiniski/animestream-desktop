export function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(String(reader.result).replace(/^data:image\/\w+;base64,/, ""));
    reader.onerror = () => resolve("");
  });
}
