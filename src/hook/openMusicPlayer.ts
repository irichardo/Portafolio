import { useState } from "react";

export function OpenMusicPlayer(): {
   musicPlayer: boolean;
   HandlerMusicPlayer: () => void;
} {
   const [musicPlayer, SetMusicPlayer] = useState<boolean>(true);

   const HandlerMusicPlayer = () => {
      SetMusicPlayer(!musicPlayer);
   };

   return {
      musicPlayer,
      HandlerMusicPlayer,
   };
}

export function clickMusicButton(): {
   button: boolean;
   handlerMusicDown: () => void;
   handlerMusicUp: () => void;
} {
   const [button, setColorButton] = useState<boolean>(false);

   const handlerMusicDown = () => {
      setColorButton(true);
   };

   const handlerMusicUp = () => {
      setColorButton(false);
   };

   return {
      button,
      handlerMusicDown,
      handlerMusicUp,
   };
}
