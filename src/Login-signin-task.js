import { useState } from "react";
import './App.css'


export default function Login()
{   const box1 = document.getElementById('box1');
    const box2 = document.getElementById('box2');

    

   

        
        
    
  return(
    <>
    <div className="container" id="box1">
        <div className="login">
            <h3>Login</h3>
            <input type="text"></input>
            <br></br>
            <input type="email"></input>
            <br></br>
            <input type="password"></input>
            <br></br>
            <br></br>
            <input type="submit"></input>
        </div>
        <div className="login sign" id="box2">
        <h3>Sign</h3>
            <input type="text"></input>
            <br></br>
            <input type="email"></input>
            <br></br>
            <input type="password"></input>
            <br></br>
            <br></br>
            <input type="submit"></input>
        </div>
    </div>
    <button className="btn" >Sign</button>
    </>
  )
}