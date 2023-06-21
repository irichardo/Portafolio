"use Client";
import React, { useState, useEffect } from "react";
import { GlobalContext } from "./globalContext";

export const Provider = ({ children }: { children: React.ReactNode }) => {
  const [gitData, setGitData] = useState([]);
  const getData = async () => {
    try {
      const url = "https://api.github.com/users/irichardo/repos";
      const headers = {
        Authorization: `token ${process.env.TOKEN_GITHUB}`,
      };
      const data = await fetch(url, { headers });
      const response = await data.json();
      const resData = response.map((a: any) => {
        return {
          url: a.html_url,
          description: a.description,
        };
      });
      setGitData(resData);
    } catch {
      throw new Error();
    }
  };

  const contextValue = {
    gitData,
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};
