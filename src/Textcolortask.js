import { useState } from "react"



export default function Color()
{

    const fun = ()=>{
      let x = document.getElementsByTagName('h1');
    //   console.log(x);

      
      
        for(let i=0;i<x.length;i++)
        {
            if(i%2 === 0)
            {
                x[i].style.color = "red"
            }
            else
            {
                x[i].style.color = "block"
            }
        }
     
    
    }


    const fun1 = ()=>{
        let x = document.getElementsByTagName('h1');

        for(let i=0;i<x.length;i++)
        {
            if(i%2 != 0)
            {
                x[i].style.display = "none"
            }
            else
            {
                 x[i].style.display = "block"
            }
        }
    }
    
    
    return(
        <>
        <h1>Hello 1</h1>
        <h1>Hello 2</h1>
        <h1>Hello 3</h1>
        <h1>Hello 4</h1>
        <h1>Hello 5</h1>
        <button onClick={fun}>Get</button>
        <button onClick={fun1}>Remove</button>
        </>
    )
}