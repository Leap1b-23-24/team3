"use client";
import { PropsWithChildren, createContext, useContext } from "react";

type AuthContextType = {};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export const Auth = () => {
  return useContext(AuthContext);
};
