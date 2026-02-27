import React, { useEffect, useState } from 'react'
import axios from 'axios'
const App = () => {


   const[notes , setNotes] = useState(
  [
    {
      title: 'test title 1',
      description: 'test description',
    },
    {
      title: 'test title 2',
      description: 'test description',
    },
  ]
 )

//  console.log("hello");
 
 function fetchNotes() {
    axios.get('http://localhost:3000/api/notes')
      .then((res) => {
        // console.log(res.data.notes);
        setNotes(res.data.notes)
      })
  }

  useEffect(()=>{
    
 fetchNotes()
  
  },[])


    // submit button ko handle karta hai
    function handleSubmit(e) {
      e.preventDefault()
      const { title, description ,age} = e.target.elements
      console.log(title.value);
  
      axios.post('http://localhost:3000/notes', {
        title: title.value,
        description: description.value,
        age:age.value,
      }).then((res) => {
        console.log(res.data);
        // direct data aa jaye bina reload kare a
        fetchNotes()
        e.target.reset()
      })
  
    }


// delete
function handleDelete(noteId){
axios.delete(`http://localhost:3000/api/notes/${noteId}`)
      .then(res => {
        console.log(res.data);
        fetchNotes();
      })

}

  return (
  
  
    <div className="flex flex-wrap gap-4">
      <form onSubmit={handleSubmit} className=" m-5  p-4 bg-gray-400 rounded-2xl shadow w-80 space-y-3">
 <h1 className='text-3xl flex items-center justify-center font-mono'>Add Customers</h1>
  <input
    name="title"
    type="text"
    placeholder="Enter name"
    className="w-full border p-2 rounded"
  />

  <input
    name="description"
    type="text"
    placeholder="Enter occupation"
    className="w-full border p-2 rounded"
  />

    <input
    name="age"
    type="number"
    placeholder="Enter age"
    className="w-full border p-2 rounded"
  />

  <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
    CREATE
  </button>

</form>

  {
    notes.map((note , idx)=>{
     return  <div key={idx} className="  h-44 bg-red-300 mt-4 ml-10 font-mono  p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 w-80">

  <h1 className="text-xl font-bold text-gray-800 mb-2">
    Name : {note.title}
  </h1>

  <p className="text-gray-600 text-sm">
   Occupation : {note.description } 
  </p>
  <p>
  age : {note.age}
  </p>

  <button onClick={(()=>{
    handleDelete(note._id)
  })} className=" cursor-pointer mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
    Delete
  </button>

</div>
    })
  }
    </div>
  )
}

export default App