import React from "react";
import ReactDOM from "react-dom/client";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from "./components/Header.js";
import Body from "./components/Body.js";


const AppLayout = () => {
    return (
        <div>
            <Header />
            <Body />
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);