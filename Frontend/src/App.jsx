import React, { useState } from 'react'
import axios from 'axios'
const App = () => {

  const[notes,setNotes] =useState ([
    {
      title:'test title 1',
      description: 'test description' 
    },
     {
      title:'test title 2',
      description: 'test description' 
    },
     
  ])





  axios.get('http://localhost:3000/notes').then((res)=>{
    console.log(res.data.notes);
    setNotes(res.data.notes)
    
  })
  return (

    <>
    {notes.map((note)=>{
     return <div className=' flex items-center flex-col justify-center gap-6 m-6 font-mono rounded-2xl bg-gray-200 h-[200px]  w-[200px] p-5 border-1'>
      <h1 className='font-mono text-3xl'>{note.title}</h1>
      <p>description</p>
    </div>
    })}
    </>
  )
}

export default App
