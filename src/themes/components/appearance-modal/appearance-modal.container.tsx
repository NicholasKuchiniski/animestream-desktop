import { useColorMode } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { closeModal } from "#/application/store/actions";
import { ApplicationState } from "#/core/store/store";
import { AppearanceModal } from "#/themes/components/appearance-modal/appearance-modal";
import { setThemeBackgrounhd, setThemeColor } from "#/themes/store/actions";
import { ThemeBackgrounds, ThemeColors, ThemeState } from "#/themes/store/types";

export function AppearanceModalContainer() {
  const dispatch = useDispatch();
  const { setColorMode } = useColorMode();

  const isOpen = useSelector<ApplicationState, boolean>((state) => state.application.modals.appearance);
  const { color, background } = useSelector<ApplicationState, ThemeState>((state) => state.theme);

  function onClose() {
    dispatch(closeModal("appearance"));
  }

  function onColorSelect(newColor: ThemeColors) {
    dispatch(
      setThemeColor({
        color: newColor,
      }),
    );
  }

  function onBackgroundSelect(newBackground: ThemeBackgrounds) {
    dispatch(
      setThemeBackgrounhd({
        background: newBackground,
      }),
    );
  }

  useEffect(() => {
    const colorMode = background === ThemeBackgrounds.Light ? "light" : "dark";

    setColorMode(colorMode);
  }, [background]);

  return (
    <AppearanceModal
      isOpen={isOpen}
      color={color}
      background={background}
      onColorSelect={onColorSelect}
      onBackgroundSelect={onBackgroundSelect}
      onClose={onClose}
    />
  );
}
