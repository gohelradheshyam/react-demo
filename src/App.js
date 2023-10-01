
// import './App.css';
// import { useState } from 'react';
import { User } from './components/User';
import { IncrementTest } from './components/IncrementTest.js';
import { TodoList } from './components/TodoList.js';
import { Navbar } from './components/Navbar.js';
import { TextUtils } from './components/TextUtils';


function App() {
  var obj=[
    {"name":"Radheshyam","age":25},
    {"name":"Naitik","age":8}
  ];
  return (
    <>
      <div className="App">
        {/* {
          obj.map((user,key)=>{
            return <User name={user.name} age={user.age} email="radheshyam" photo="https://i.imgur.com/yXOvdOSs.jpg"/>
          })
        } */}
        {/* default value set here */}
        {/* <User/> */}
        {/* <IncrementTest></IncrementTest> */}
        {/* <TodoList></TodoList> */}
        <Navbar title="Great Web Coder"/>
        <TextUtils/>
      </div>
  </>
  );
}

export default App;
