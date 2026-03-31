
//import WithCounter from './WithCounter'
// const About = ({count,Increment}) => {
//   return (
//     <div>
//       <h2> count:{count}</h2>
//       <button onClick={Increment}>Click</button>
//     </div>
//   )
// }

// export default WithCounter(About);
// import React from 'react'
// import Useurl from './Useurl'
// const About = () => {
//          const {data,loading}=Useurl('https://dummyjson.com/products')
//          console.log(data.products,"came")
//          if(loading)
//          {
// return <h1>...loading</h1>
//          }
//   return (
//     <div>
// {
//          data?<h1>came</h1>:<h2>coming</h2>
// }
//     </div>
//   )
// }
// // import React from 'react'
// // import UseFetch from './UseFetch'
// // const About = () => {
// //          const {count,increment,decrement}=UseFetch(0,1)
// //   return (
// //     <div>
// //       <h1>count:{count}</h1>
// //       <button onClick={increment}>+</button>
// //        <button onClick={decrement}>-</button>
// //     </div>
// //   )
// // }
//  export default About

import React,{useCallback, useMemo, useState}from 'react'

const About = () => {

         const[counter,setCounter]=useState(1)
         const  square=()=>{
                  console.log("jjdjjdj",counter,"i will call if depencychange")
                  return counter*counter
         }
         useCallback(square,[counter])
         const increment=()=>{
                  setCounter(counter+1)
         }
         const duplicate=()=>{
                 // setCounter(counter+1)
                 console.log("iam every");
                 
         }
  return (
    <div>
         <h1>square:{square()}</h1>
      <button onClick={increment}>Increment</button>
       <button onClick={duplicate}>duplicate</button>
       <button onClick={duplicate}>duplicate</button>
    </div>
  )
}
export default About
