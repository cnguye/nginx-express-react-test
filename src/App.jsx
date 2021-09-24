import "./App.css";
import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
function App() {
    const [getData, setGetData] = useState("Yes");

    useEffect(() => {
        callBackendAPI()
            .then((res) => setGetData(res.express))
            .catch((err) => console.log(err));
    }, [setGetData]);

    const callBackendAPI = async () => {
        const response = await fetch(
            "http://107.152.46.30:5000/api/express_backend",
            {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            }
        );
        const body = await response.json();
        console.log(body);
        if (response.status !== 200) {
            throw Error(body.message);
        }
        return body;
    };
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
                    <Route exact path="/">
                        <Home getData={getData} />
                    </Route>
                    <Route exact path="/About">
                        <About getData={getData} />
                    </Route>
                </div>
            </Router>
        </div>
    );
}

export default App;
