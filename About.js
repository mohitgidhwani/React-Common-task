import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function About() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('http://localhost:1345/data')
      .then((res) => { return res.json() })
      .then((data) => {
        setData(data)
      }, [])
  })



  // const {id} = useParams()
    
          
  const handleDelete = (id)=>{
   fetch(`http://localhost:1345/data/${id}`,{
       method:"delete",
       headers:{"content-type":"application/json"},
      
   }
  
)
  }
  return (
    <>
      <h1>Data</h1>

      <Link to={'/add'}>Add</Link>
      <table className='App' border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val)=>{
              return(
                <>
                <tr key={val.id}>
                  <td>{val.id}</td>
                  <td>{val.name}</td>
                  <td>
                  <Link to={`/edit/${val.id}`}>Edit</Link>
                    <button onClick={()=>{handleDelete(val.id)}}>Delete</button>
                  </td>
                </tr>
                </>
              )
          })}
        </tbody>
      </table>
    </>
  )
}

export default About