import React, { useState, useEffect } from "react";
import axios from "axios";
import userMock from "./mockedData/user.json";
import reposMock from "./mockedData/repos.json";
import followersMock from "./mockedData/followers.json";

interface StoreType {
  user: object;
  repos: object;
  followers: object;
  error: object;
  searchGithubUser?: (user: string) => void;
  isLoading: boolean;
}

const AppContext = React.createContext<StoreType>({
  user: {},
  repos: {},
  followers: {},
  error: {},
  isLoading: false,
});

const AppProvider = ({ children }: any) => {
  const [user, setUser] = useState(userMock);
  const [repos, setRepos] = useState(reposMock);
  const [followers, setFollowers] = useState(followersMock);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ show: false, msg: "" });

  const rootUrl = "https://api.github.com";

  const searchGithubUser = async (user: string) => {
    toggleError();
    setIsLoading(true);
    const response = await axios(`${rootUrl}/users/${user}`).catch((err) =>
      console.log(err)
    );
    if (response) {
      setUser(response.data);
      const { login, followers_url } = response.data;

      await Promise.allSettled([
        axios(`${rootUrl}/users/${login}/repos?per_page=100`),
        axios(`${followers_url}?per_page=100`),
      ])
        .then((results) => {
          const [repos, followers] = results;
          const status = "fulfilled";
          if (repos.status === status) {
            setRepos(repos.value.data);
          }
          if (followers.status === status) {
            setFollowers(followers.value.data);
          }
        })
        .catch((err) => console.log(err));
    } else {
      toggleError(true, "there is no user with that username");
    }
    setIsLoading(false);
  };

  const toggleError = (show = false, msg = "") => {
    setError({ show, msg });
  };
  useEffect(() => {
    // searchGithubUser("maciejlys");
  }, []);

  return (
    <AppContext.Provider
      value={{
        user,
        repos,
        followers,
        error,
        searchGithubUser,
        isLoading,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
