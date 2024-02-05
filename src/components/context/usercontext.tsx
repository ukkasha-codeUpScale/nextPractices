"use client";
import React from "react";
import { createContext, useEffect, useContext } from "react";

export interface userValues {
    username : string;
    type : string;
}

export type UserContextType = {
  state: {
    user: userValues;
  };
  method: {
    setUser: (e?: any) => void;
  };
};
export const UserContext = createContext<UserContextType>({
  state: {
    user: {
        username:'',
        type:''
    },
  },
  method: {
    setUser: (e?: any) => {},
  },
});
export function DashboardTitle({ value }: { value: userValues }) {
  const {
    method: { setUser },
  } = useContext<UserContextType>(UserContext);
  useEffect(() => setUser(value), []);
  return <></>;
}
