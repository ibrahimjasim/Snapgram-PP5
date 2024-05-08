import { createContext, useContext, useEffect, useState } from "react";
import { axiosReq, axiosRes } from "../api/axiosDefaults";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import { followHelper, unfollowHelper } from "../utils/utils";

export const ProfileDataContext = createContext();
export const SetProfileDataContext = createContext();

export const useProfileData = () => useContext(ProfileDataContext);
export const useSetProfileData = () => useContext(SetProfileDataContext);

/* ProfileDataProvider component provides the profile data and handling functions to its children*/
export const ProfileDataProvider = ({ children }) => {
  /* State to manage profile data including pageProfile and popularProfiles*/
  const [profileData, setProfileData] = useState({
    pageProfile: { results: [] },
    popularProfiles: { results: [] },
  });

  /* Fetches the current user details from context*/
  const currentUser = useCurrentUser();

  /* Function to handle following a user*/
  const handleFollow = async (clickedProfile) => {
    try {
      // Attempt to create a follow relationship in the backend
      const { data } = await axiosRes.post("/followers/", {
        followed: clickedProfile.id,
      });

      /* Update the profileData state with the new follower information using helper function*/
      setProfileData((prevState) => ({
        ...prevState,
        pageProfile: {
          results: prevState.pageProfile.results.map((profile) =>
            followHelper(profile, clickedProfile, data.id)
          ),
        },
        popularProfiles: {
          ...prevState.popularProfiles,
          results: prevState.popularProfiles.results.map((profile) =>
            followHelper(profile, clickedProfile, data.id)
          ),
        },
      }));
    } catch (err) {
      /* Error handling could be implemented here*/
    }
  };

  /* Function to handle unfollowing a user*/
  const handleUnfollow = async (clickedProfile) => {
    try {
      /* Attempt to remove a follow relationship in the backend*/
      await axiosRes.delete(`/followers/${clickedProfile.following_id}/`);

      /* Update the profileData state to remove the follower using helper function*/
      setProfileData((prevState) => ({
        ...prevState,
        pageProfile: {
          results: prevState.pageProfile.results.map((profile) =>
            unfollowHelper(profile, clickedProfile)
          ),
        },
        popularProfiles: {
          results: prevState.popularProfiles.results.map((profile) =>
            unfollowHelper(profile, clickedProfile)
          ),
        },
      }));
    } catch (err) {
      /* Error handling could be implemented here*/
    }
  };

  /* Effect to fetch initial popular profiles data on component mount or when currentUser changes*/
  useEffect(() => {
    const handleMount = async () => {
      try {
        /* Fetch the profiles sorted by followers count*/
        const { data } = await axiosReq.get("/profiles/?ordering=-followers_count");
        /* Set the fetched data to state*/
        setProfileData((prevState) => ({
          ...prevState,
          popularProfiles: data,
        }));
      } catch (err) {
        /* Error handling could be implemented here*/
      }
    };

    handleMount();
  }, [currentUser]);

  /* Providing the profile data and functions to children components*/
  return (
    <ProfileDataContext.Provider value={profileData}>
      <SetProfileDataContext.Provider
        value={{ setProfileData, handleFollow, handleUnfollow }}
      >
        {children}
      </SetProfileDataContext.Provider>
    </ProfileDataContext.Provider>
  );
};