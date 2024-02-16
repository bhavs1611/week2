import React from "react";

const MyComponentWithoutJSX=()=>{
    return(
        React.createElement('p',{},[
            React.createElement('h1',{},'Hello World!!!without JSX'),
            React.createElement('h1',{},'This is MyComponentWithoutJSX')
        ])
    );
}
export default MyComponentWithoutJSX;