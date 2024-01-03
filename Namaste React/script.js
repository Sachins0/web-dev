import React from "react"
import ReactDOM from "react-dom/client"

const heading=React.createElement(
    "h1",
    {id:"heading"},
    "Hello world from react by akshay saini"
    );
//     console.log(heading);//object
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
//  React Element ->object => HTML->browser understand


// const Parent=React.createElement("div",{id:"parent"},
//     [
//         React.createElement("div",{id:"child1"},[
//             React.createElement("h1",{},"h1 tag"),
//             React.createElement("h2",{},"h2 tag"),
//         ]
//         ),
//         React.createElement("div",{id:"child2"},[
//             React.createElement("h1",{},"h1 tag"),
//             React.createElement("h2",{},"h2 tag"),
//         ]
//         )
//     ]
//     );
//     const root=ReactDOM.createRoot(document.getElementById("root"));
//      root.render(Parent);

     //JSX
     
     //package.json is configuration fo npm