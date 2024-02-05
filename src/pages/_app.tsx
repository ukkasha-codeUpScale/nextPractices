"use client";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { UserContext, userValues } from "@/components/context/usercontext";
import { useEffect, useState } from "react";
import Defaultlayout from "@/components/layouts/defaultlayout";

import { Provider } from "react-redux";
import { store } from "../state/store";

export default function App({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<userValues>({
    username: "",
    type: "",
  });
  useEffect(() => {
    // const {username, type} = user
    setUser({ username: "user", type: "typeuser" });
  }, []);

  return (
    <UserContext.Provider value={{ state: { user }, method: { setUser } }}>
      <Provider store={store}>
        {/* <Defaultlayout> */}
          <Component {...pageProps} />
        {/* </Defaultlayout> */}
      </Provider>
    </UserContext.Provider>
  );
}
