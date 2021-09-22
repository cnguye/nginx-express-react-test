import "./App.css";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
function App() {
    return (
        <div className="App">
            <Router>
                <header className="App-header">Welcome Route-r!</header>
                <div className="nav-bar">
                    <ul className="nav-bar__list">
                        <li className="nav-bar__item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav-bar__item">
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </div>
                <div className="app-body">
                    <Route exact path="/" component={Home} />
                    <Route exact path="/About" component={About} />
                </div>
            </Router>
        </div>
    );
}

export default App;
