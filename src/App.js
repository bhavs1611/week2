import React from "react";
import MyComponentWithoutJSX from "./components/MyComponentWithoutJSX";
import MyComponentWithJSX from "./components/MyComponentWithJSX";
import MyFunctionComponent from "./components/MyFunctionComponent";
import MyClassComponent from "./components/MyClassComponent";

function week1(){
    return(
        <div>
            <h1 style={{color:'#0534a1'}}>Create React App with Components</h1>
            <MyComponentWithoutJSX/><hr/>
            <MyComponentWithJSX/><hr/>
            <MyFunctionComponent/><hr/>
            <MyClassComponent/><hr/>
        </div>
        
    );
}
export default week1;