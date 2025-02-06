import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Edit() {
     const [name, setName] = useState("")


     const {id} = useParams()
    
          
           const handleEdit = ()=>{
            fetch(`http://localhost:1345/data/${id}`,{
                method:"put",
                headers:{"content-type":"application/json"},
                body:JSON.stringify({name})
            }
           
        )
           }
          
  return (
   <>
     <h1>Edit Page</h1>
   <Link to={'/'}>Home</Link>
     <form>
        <label>Name : </label>
        <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}}></input>
        <button onClick={handleEdit}>Save</button>
     </form>
   </>
  )
}

export default Edit