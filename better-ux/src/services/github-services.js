import axios from "axios";

class GithubServices {
  getUsers() {
    return new Promise((resolve) => {
      axios.get(`http://localhost:3001/users`).then((response) =>
        setTimeout(() => {
          resolve(response);
        }, 1000)
      );
    }, 1000);
  }

  searchRepositories(query) {
    return axios.get(`https://api.github.com/search/repositories?q=${query}`);
  }
}

export const githubServices = new GithubServices();
