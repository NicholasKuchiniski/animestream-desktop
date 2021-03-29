import { Box } from "@chakra-ui/react";
import Plyr from "plyr";
import React, { useEffect } from "react";

import { VideoProps } from "#/core/components/video/types";
import { applyListenerClosure } from "#/core/components/video/utils";

export function Video({ poster, source, listeners }: VideoProps) {
  useEffect(() => {
    const plyr = new Plyr(".js-plyr", {
      i18n: {
        speed: "Velocidade",
        normal: "Normal",
        quality: "Qualidade",
      },
      volume: 1,
      storage: {
        enabled: false,
      },
      keyboard: {
        focused: false,
        global: true,
      },
      controls: ["play-large", "play", "progress", "current-time", "volume", "fullscreen"],
    });

    plyr.source = {
      type: "video",
      poster,
      sources: [
        {
          src: source,
          type: "video/mp4",
        },
      ],
    };

    if (listeners) {
      const applyListenerOnPlyr = applyListenerClosure(listeners, plyr);
      Object.keys(listeners).forEach(applyListenerOnPlyr);
    }

    return () => {
      plyr.destroy();
    };
  }, []);

  return (
    <Box
      borderRadius="md"
      boxShadow="md"
      overflow="hidden"
      __css={{
        height: 720,
        width: "100%",
        cursor: "pointer",
        ".plyr__control--overlaid ": {
          background: "animestream.500",
        },
        ".plyr--video": {
          borderRadius: "md",
        },
        ".plyr--video .plyr__control.plyr__tab-focus, .plyr--video .plyr__control:hover, .plyr--video .plyr__control[aria-expanded=true]": {
          background: "background.800",
        },
        ".plyr--full-ui input[type=range]": {
          color: "animestream.500",
        },
        ".plyr__poster": {
          backgroundSize: "cover",
          backgroundPosition: "center",
        },
        video: {
          objectFit: "contain",
        },
      }}
    >
      <video className="js-plyr plyr" />
    </Box>
  );
}
