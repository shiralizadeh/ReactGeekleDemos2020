import React, { useEffect, useState } from "react";
import { githubServices } from "../../services/github-services";
import _ from "lodash";
import { LazyImg } from "../../components";
import Skeleton from "react-loading-skeleton";

function startTimer() {
  let lastTime = undefined;
  let diff = undefined;

  const timer = setInterval(() => {
    const timer = document.getElementById("timer");
    const time = new Date().getTime();

    if (time - lastTime > 500) {
      diff = time - lastTime;
      timer.style.color = "red";

      setTimeout(() => {
        timer.style.color = "white";
        diff = undefined;
      }, diff);
    }

    lastTime = time;
    timer.innerText = time + (diff ? ` (${diff / 1000.0} sec)` : "");
  }, 1);

  return timer;
}

export function EventLoop() {
  const [users, setUsers] = useState();

  useEffect(() => {
    githubServices.getUsers().then(({ data }) => {
      setUsers(data);
    });

    const timer = startTimer();

    return () => clearInterval(timer);
  }, []);

  const onChange = (query) => {
    setUsers(_.shuffle(users));
  };

  return (
    <div>
      <p id="timer"></p>
      <input onChange={(e) => onChange(e.target.value)} />
      <table width="100%">
        <thead>
          <tr>
            <th>#</th>
            <th>Avatar</th>
            <th>Username</th>
            <th>Node</th>
          </tr>
        </thead>
        <tbody>
          {!users && (
            <React.Fragment>
              <tr>
                <td>
                  <Skeleton />
                </td>
                <td>
                  <Skeleton />
                </td>
                <td>
                  <Skeleton />
                </td>
                <td>
                  <Skeleton />
                </td>
              </tr>
              <tr>
                <td>
                  <Skeleton />
                </td>
                <td>
                  <Skeleton />
                </td>
                <td>
                  <Skeleton />
                </td>
                <td>
                  <Skeleton />
                </td>
              </tr>
              <tr>
                <td>
                  <Skeleton />
                </td>
                <td>
                  <Skeleton />
                </td>
                <td>
                  <Skeleton />
                </td>
                <td>
                  <Skeleton />
                </td>
              </tr>
              <tr>
                <td>
                  <Skeleton />
                </td>
                <td>
                  <Skeleton />
                </td>
                <td>
                  <Skeleton />
                </td>
                <td>
                  <Skeleton />
                </td>
              </tr>
            </React.Fragment>
          )}

          {users &&
            users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>
                  <LazyImg
                    highSrc={user.avatar_url}
                    lowSrc="loading.svg"
                    width="24"
                  />
                </td>
                <td>{user.login}</td>
                <td>{user.node_id}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default EventLoop;
