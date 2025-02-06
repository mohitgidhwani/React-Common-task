import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Adddata() {
     const [name, setName] = useState("")

       const sendData = ()=>{
       
            fetch('http://localhost:1345/data',{
                method:"post",
                headers:{"content-type":"application/json"},
                body:JSON.stringify({name})
            })
        }
              
         
  return (
   <>
   <h1>Add Page</h1>
   <Link to={'/'}>Home</Link>
     <form onSubmit={sendData}>
        <label>Name : </label>
        <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}}></input>

        <div>
            <input type='submit' value={'Add'}></input>
        </div>
     </form>
   </>
  )
}

export default Adddata