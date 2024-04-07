// import { createContext, useMemo, useState } from "react";

// export const UserAuthContext = createContext();

// const UserAuthProvider = ({ children }) => {
//   const [user, setUser] = useState(localStorage.getItem("userToken"));

//   const userTokenSetter = (newToken) => {
//     setUser(newToken);
//     localStorage.setItem("token", newToken);
//   };

//   const authValues = useMemo(() => {
//     return {
//       user,
//       setUser,
//       userTokenSetter,
//     };
//   });
//   return (
//     <UserAuthContext.Provider value={authValues}>
//       {children}
//     </UserAuthContext.Provider>
//   );
// };

// export default UserAuthProvider;
