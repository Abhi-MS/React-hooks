import React from 'react'
import { useState, useEffect } from 'react'

const useLocalStorage = (key, initialValue) => {
    const [cName, setCName]= useState(
        localStorage.getItem(key)?localStorage.getItem(key):initialValue
      )
      useEffect(()=>{
        localStorage.setItem(key, cName)
      }, [cName, key])
      
  return [cName, setCName]
}

export default useLocalStorage