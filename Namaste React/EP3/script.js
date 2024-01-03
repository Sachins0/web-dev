import React from "react"
import ReactDOM from "react-dom/client"

// const heading=React.createElement(
//     "h1",
//     {id:"heading"},
//     "Hello world from react by akshay saini"
//     );
//      console.log(heading);

const jsxHeading=<h1 id="heading">Hello World from JSX 0</h1>
//console.log(jsxHeading);
const head2=(
    <h1 id="heading">
    {jsxHeading}
    Hello World from JSX</h1>
    )
const Title=()=> <h1 id="heading">Hello World from JSX</h1>
const Title2= function(){
    return(
        <h1 id="heading">Hello World from JSX -2</h1>
    );
};
const HeadingComponent=()=>(
    <div id="container">
        <Title/>
        {Title()}
         {head2}
        <Title></Title>
        <Title2/>
        <h1 className="head">Functional Component</h1>
    </div>
);

const root=ReactDOM.createRoot(document.getElementById("root"));
//root.render(jsxHeading);
root.render(<HeadingComponent/>);
