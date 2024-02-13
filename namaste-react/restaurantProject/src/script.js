import React from "react";
import ReactDom from "react-dom/client"
import Header from "./components/Header";

const AppLayout=()=>{
    return(
        <div className="app">
        <Header/>
            <h1>Hi..</h1>
        </div>
    )
};


const root=ReactDom.createRoot(document.getElementById("root"))

root.render(<AppLayout/>)