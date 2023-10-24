import React from "react";
import ReactDOM from "react-dom/client";

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

const heading = React.createElement(
  "h1",
  {
    id: "myHeading",
    className: "myClass",
    key: "skyey",
  },
  "Hello World"
);
const heading2 = React.createElement(
  "h1",
  {
    id: "my2Heading",
    className: "myClass",
    key: "myKey2",
  },
  "Hello 2nd World"
);
const container = React.createElement(
  "div",
  {
    id: "container",
    className: "container",
  },
  [heading, heading2]
);
//functional component 
const Title = () => (
     <h1>This is a title</h1>
)
//react element
const heading3 = <h1>This is a heading </h1>;

// components
const HeaderComponent = () => {
  //normal function which returns react element
  // return <h1>Heading</h1>;
  //also can be written as
  return (
  <div>
    <Title/>
    {heading3 }
    <h1>This is a heading inside a div </h1>
  </div>)
};

//name of the component should be in caps e.g. Comp1 (it's a good practice and nothing more);


console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>);
