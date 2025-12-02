// Creating a variable in JSX
/*import React from 'react'

const App = () => {

  //here we are creating a variable in jsx
  // const a = 10

  const user = "Rishith"
  return (
    <div>
       //<h1>Hello a</h1>//this will print Hello a 
       //but in order to print the value of a we should use the curly brackets ie {a} 
      <h1>Hello {user}</h1>
      <h2>World</h2>
    </div>
  )
}

export default App
*/

// creating a function in JSX and returning value from it
/*
import React from 'react'

const App = () => {
   const username = "Rishith"

  //  this function abc is used to print Hello in the console whneever button is clicked
  const abc = () =>{
    console.log("Hello")
  }
  abc();

  return (
    <div>
      <h1>Username is {username}</h1>
      {/* When the button is clicked it will call the function abc, i.e it will print hello in the browser console. 
      <button onClick={abc}>Change user</button>
    </div>
  )
}

export default App
*/

/*
import React from 'react'
const App = () => {

    const username = "Rishith" // this is a constant variable and we cannot change its value. So changing it to "let"
    let username = "Rishith"
    // creating a function to change the name of the username upon button click
    const changeUser = () => {
      username = "Sunila"
    }

  return (
    <div>

      <h1>Hello {username}</h1>
      <button onClick={changeUser}>Change User</button>
    </div>
  )
}

export default App
*/

// to change the value dynamically by a button click we have to use useState hook.
/*import React, {useState} from 'react'

const App = () => {
  //const a = 15//but from now we dont use normal variables instead we use react variables i.e using useState hook
  const [a, SetA] = useState(10) // here a is the variable and SetA is the function used to change the value of a. useState(10) means initial value of a is 10
  
  //function to change the value of a
  const changeA = () => {
    SetA(20) // this will change the value of a to 20 when the button is clicked
  }

  return (
    <div>
      <h1>Value of a is {a}</h1>
      <button onClick={changeA}>Change A</button>
    </div>
  )
}

export default App*/

// changing username dynamically by a button click using useState hook
/*import React,{useState} from 'react'

const App = () => {
  const [user, setUser] = useState("Rishith")

  const changeUser = () =>{
    setUser("Sunila")
  }
  return (
    <div>
      
      <h1>Username is {user }</h1>
      <button onClick={changeUser}>Change Username</button>
    </div>
  )
}

export default App*/


//below is the code for a simple counter app that is  using React functional components and hooks
/*import React, {useState} from 'react'

const App = () => {
  //num is the readable function, setNum is used to update the value of num and useState is initialized with 0(present value)
  const [num, setNum] = useState(0)

  return (
    <div>
      <h3>Counter: {num}</h3>
      // here we will add buttons to increment and decrement the counter and write the functions inside the onClick attribute }
      <button onClick={() => setNum(num+10) }>Increment</button> //he value of num by increases by 10 on each click
      <button onClick={() => setNum(num-10) }>Decrement</button> //the value of num by decreases by 10 on each click
    </div>
  )
}

export default App*/
