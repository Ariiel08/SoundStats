import { useState } from "react";
import { UserContext } from "./";

export const UserProvider = ({ children }) => {

    const [ userState, setUser ] = useState();

    return (
        <UserContext.Provider value={{ userState, setUser }}>
            { children }
        </UserContext.Provider>
    )
}
