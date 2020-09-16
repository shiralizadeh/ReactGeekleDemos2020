import React, { useEffect, useState } from "react";
import { githubServices } from "../../services/github-services";
import _ from "lodash";

export function MeaningfulLoadings() {
  const [repositories, setRepositories] = useState({
    isLoading: true,
    count: 0,
    items: [],
  });

  useEffect(() => {
    githubServices.searchRepositories("react").then(({ data }) => {
      const { items } = data;

      setRepositories({
        isLoading: false,
        count: items.length,
        items,
      });
    });
  }, []);

  // if (repositories.isLoading) return <img src="loading.svg" width="24" alt="loading..." />;

  // return (
  //   <div>
  //     <img src="logo.svg" className="App-logo" alt="logo" />
  //     <p>Repositories with React name: {repositories.count}</p>
  //   </div>
  // );

  return (
    <div>
      <img src="logo.svg" className="App-logo" alt="logo" />
      <p>
        <span>Repositories with React name: </span>
        {repositories.isLoading ? (
          <img src="loading.svg" alt="loading..." width="24" />
        ) : (
          repositories.count
        )}
      </p>
    </div>
  );
}

export default MeaningfulLoadings;
