import React from "react";
import  ReactDOM  from "react-dom/client";


/**
 HMR - Hot Module Reloading
    - Allows us to see changes in the browser without having to refresh the page
 File watcher algorithm - C++
 Bundling
 MINIFY
 Cleaning the code
 Dev and Production build
 Super fast build algo
 Image optimization
 Caching while development
 Compression
 https on dev
 consistent hashing algorithm
 zero config
 transitive dependencies
 */

const heading = React.createElement
(
    "h1",
    {
        id: "myHeading",
        className: "myClass",
        key: "skyey"
    },
    "Hello World"
);
const heading2 = React.createElement(
    "h1",
    {
        id: "my2Heading",
        className: "myClass",
        key: "myKey2"
    },
    "Hello 2nd World"
)
const container = React.createElement(
    "div",
    {
        id: "container",
        className: "container"
    },
    [heading, heading2]
)


console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);   