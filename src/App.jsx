import React, { useState } from 'react'

const App = () => {

// let   a= 10;
  // function changea(){
  //   console.log(a)
  //   a=30

  //   console.log(a)
    
  // }
  const [num, setNum]=useState(10);
   const[username,setUsername]= useState("ncnencj");

  function changenum(){
    setNum(30)
    setUsername('nitin')

  }

  return (
    <div>
         <div> value of num is {num} <br /> value of user is {username}</div>
         <button onClick={changenum}></button>


    </div>

 
  )
}

export default App