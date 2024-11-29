import React, { useContext } from "react"
import { AppContext } from "../context/AppContext"

function ComponentTwo(){
    const someText = useContext(AppContext)
    return(
    <div className="contextStyle">
    <p>ComponentTwo</p>
    <p>{someText}</p>
    </div>)
}

export default ComponentTwo