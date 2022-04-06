import React from "react";
import "./App.css";
import Profile from "./Profile/profile";



function App() {
  const handelName = () => {
    alert("this is an Alert");
  };
  return (
    <div className="App">
      <Profile
        handelName={handelName}
        fullName="Ryadh"
        bio="Hello, my name is Ryadh"
        profession="DevWeb"
      />
      <img style={{width:200,height:200,position:'absolute', top:22, left:20}} src="/Photo.jpg" alt="Photo"></img>
    </div>
  );
}
export default App;
