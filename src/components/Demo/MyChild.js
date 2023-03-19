import React from "react";


export default function MyChild(props) {

console.log('child runnning')
    return (
        <p>{props.children}</p>
    )
}