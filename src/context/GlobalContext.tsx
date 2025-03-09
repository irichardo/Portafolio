import React from "react";

interface GitData {
  url: string;
  description: string;
}
interface globalContext {
  gitData: Array<GitData>;
  actualPage: number;
  introBlogAnimation: boolean;
  setActualPage: React.Dispatch<React.SetStateAction<number>>;
  setIntroBlogAnimation: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GlobalContext = React.createContext<globalContext>({
  gitData: [],
  actualPage: 0,
  setActualPage: () => {},
  introBlogAnimation: false,
  setIntroBlogAnimation: () => {},
});
