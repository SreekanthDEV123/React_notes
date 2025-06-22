import React from 'react'
import {useState} from "react"
const UseFetch = (initial=0,step) => {

         const [count,setCount]= useState(initial);
 
 const  increment=()=>{
         setCount(count+step)
 }
 const  decrement=()=>{
         setCount(count-step)
 }
         return {count,increment,decrement}


}

export default UseFetch
