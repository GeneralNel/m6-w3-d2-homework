import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


export default function App() {
  return (
    <Router>
      <div>
        <h1>TV Apps</h1>
        <div className="container">
          <div className="row">
            <ul>
              <li>
                <Link to="/netflix">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg" alt="Netflix" />
                </Link>
              </li>
              <li>
                <Link to="/hbo-max">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg" alt="HBO Max" />
                </Link>
              </li>
              <li>
                <Link to="/hulu">
                  <img src="https://i.pcmag.com/imagery/reviews/0142ww1h6aRqMkc4gP3zfUo-21..v1603983170.png" alt="Hulu" />
                </Link>
              </li>
              <li>
                <Link to="/prime-video">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png" alt="Prime Video" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Switch>
          <Route path="/:id" component={Child} />
        </Switch>
      </div>
    </Router>
  );
}

function Child() {

  // Below this comment, there's one major key script missing
  const { id } = useParams();

  return (
    <div>
      <h3>You Selected:<span>{id}</span></h3>
    </div>
  );
}
