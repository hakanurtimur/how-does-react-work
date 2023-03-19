import React from "react";
import MyChild from "./MyChild";


function DemoOutput(props) {

    console.log('Demo op running')


    return (
        <MyChild>{props.isShown? 'This is new!' : ''}</MyChild>
    )
}


export default React.memo(DemoOutput);