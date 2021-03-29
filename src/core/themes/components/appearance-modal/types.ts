import { ThemeBackgrounds, ThemeColors } from "#/core/themes/store/types";

export interface AppearanceModalProps {
  isOpen: boolean;
  color: ThemeColors;
  background: ThemeBackgrounds;
  onColorSelect: (color: ThemeColors) => void;
  onBackgroundSelect: (background: ThemeBackgrounds) => void;
  onClose: () => void;
}
