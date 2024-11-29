import React, { useContext } from "react"
import { AppContext } from "../context/AppContext"

function ComponentOne(){
    const someText = useContext(AppContext)
    return(
        <div className="contextStyle">
    <p>ComponentOne</p>
    <p>{someText}</p>
    </div>)
}
export default ComponentOne