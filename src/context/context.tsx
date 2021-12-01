import React, { useState, useEffect } from "react";
import axios from "axios";
import userMock from "./mockedData/user.json";
import reposMock from "./mockedData/repos.json";
import followersMock from "./mockedData/followers.json";

const AppContext = React.createContext({
  user: userMock,
  repos: reposMock,
  followers: followersMock,
  error: { show: false, msg: "" },
  limit: 60,
  searchGithubUser: (user: string) => {},
  isLoading: false,
});

const AppProvider = ({ children }: any) => {
  const [user, setUser] = useState(userMock);
  const [repos, setRepos] = useState(reposMock);
  const [followers, setFollowers] = useState(followersMock);
  const [limit, setLimit] = useState(60);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ show: false, msg: "" });

  const rootUrl = "https://api.github.com";

  const searchGithubUser = async (user: string) => {
    toggleError(false, "");
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
      toggleError(true, "There is no user with such username");
    }
    checkLimit();
    setIsLoading(false);
  };

  const toggleError = (show: boolean, msg: string) => {
    setError({ show, msg });
  };
  useEffect(() => {
    searchGithubUser("Maciejlys");
  }, []);

  const checkLimit = () => {
    axios(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        let {
          rate: { remaining },
        } = data;
        setLimit(remaining);
        if (remaining === 0) {
          toggleError(true, "sorry, you have exceeded your hourly rate limit!");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <AppContext.Provider
      value={{
        user,
        limit,
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
