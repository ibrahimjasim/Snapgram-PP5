import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();
export const currentUserProvider = ({childern}) => {
    const [currentUser, setCurrentUser] = useState(null);

    const handleMount = async () => {
      try {
        const { data } = await axios.get("dj-rest-auth/user/");
        setCurrentUser(data);
      } catch (err) {
        console.log(err);
      }
    };
  
    useEffect(() => {
      handleMount();
    }, []);
}