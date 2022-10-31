import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import About from "./About";
import Header from "./Header";
import TextArea from "./TextArea";
import Footer from "./Footer";
import Time from "./Time";

function Navbar() {
    return (
        <div>
            <Router>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Time />
                        <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item ms-auto">
                                    <button className="btn btn-light btn-lg navbar-button"><Link to="/">Home</Link></button>
                                </li>
                                <li className="nav-item ms-auto">
                                    <button className="btn btn-light btn-lg navbar-button"><Link to="/about">About</Link></button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Routes>
                    <Route path="/about" element={<>
                        <About />
                        <Footer />
                    </>} />
                    <Route path="/" element={<>
                        <div className="container-fluid">
                            <Header />
                            <TextArea />
                            <Footer />
                        </div>
                    </>} />
                </Routes>
            </Router>
        </div>
    );
}

export default Navbar;