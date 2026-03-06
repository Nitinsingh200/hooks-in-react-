// import React, { useState } from 'react'

// const App = () => {

// // let   a= 10;
//   // function changea(){
//   //   console.log(a)
//   //   a=30

//   //   console.log(a)
    
//   // }
//   const [num, setNum]=useState(10);
//    const[username,setUsername]= useState("ncnencj");

//   function changenum(){
//     setNum(30)
//     setUsername('nitin')

//   }

//   return (
//     <div>
//          <div> value of num is {num} <br /> value of user is {username}</div>
//          <button onClick={changenum}></button>


//     </div>

 
//   )
// }

// export default App

import React, { useState } from 'react'

const App = () => {
  const [num, setNum]= useState(0);
   function increase(){
    setNum(num+1);


   }
   function decrease(){
    setNum(num+1)
   }
   function jump(){
    setNum(num+5)
   }
  
  return (

    <div>
      <h1>{num}</h1>
      <button onClick={increase} > increase </button>
      <button onClick={decrease}>decrease </button>
      <button onClick={jump}>jumping</button>


    </div>
  )
}

export default App