// "use client";
// import { PropsWithChildren, useState, Dispatch,SetStateAction}from "react";
// import { createContext } from "vm";
// type AuthContextType = {
//     get: boolean;
//     setGet: Dispatch<SetStateAction<boolean>>;
//   };
// export const AuthContext = createContext<AuthContextType>(
//     {} as AuthContextType
//   );

// export const AuthProviders = ({children}: PropsWithChildren) => {
//     const [get,setGet] = useState(false)
//     return(
//         <AuthContext.Providers value={{get,setGet}}>{children}</AuthContext.Providers>
//     )
// }