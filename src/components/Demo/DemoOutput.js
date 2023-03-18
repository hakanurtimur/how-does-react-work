import React from "react";
import MyChild from "./MyChild";


export default function DemoOutput(props) {


    return (
        <MyChild>{props.isShown? 'This is new!' : ''}</MyChild>
    )
}