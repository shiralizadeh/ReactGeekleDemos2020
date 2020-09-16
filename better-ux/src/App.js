import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/meaningful-loadings">Meaningful Loadings</Link>
                </li>
                <li>
                  <Link to="/lazy-load">LazyLoad</Link>
                </li>
                <li>
                  <Link to="/event-loop">Event Loop</Link>
                </li>
              </ul>
            </nav>

            <Suspense fallback={<img src="loading.svg" alt="loading..." />}>
              <Switch>
                <Route
                  path="/event-loop"
                  component={React.lazy(() => import("./pages/event-loop"))}
                ></Route>
                <Route
                  path="/lazy-load"
                  component={React.lazy(() => import("./pages/lazy-load"))}
                ></Route>
                <Route
                  path="/meaningful-loadings"
                  component={React.lazy(() =>
                    import("./pages/meaningful-loadings")
                  )}
                ></Route>
                <Route
                  path="/"
                  component={React.lazy(() => import("./pages/home"))}
                ></Route>
              </Switch>
            </Suspense>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
