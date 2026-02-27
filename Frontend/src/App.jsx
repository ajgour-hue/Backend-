import React, { useEffect, useState } from 'react'
import axios from 'axios'
const App = () => {

  // useStste 
  const [notes, setNotes] = useState([
    {
      title: 'test title 1',
      description: 'test description'
    },
    {
      title: 'test title 2',
      description: 'test description'
    },

  ])



  // console.log('heloo');

  // fetching notes by using get method
  function fetchNotes() {
    axios.get('http://localhost:3000/notes')
      .then((res) => {
        // console.log(res.data.notes);
        setNotes(res.data.notes)
      })
  }


  // yeh lagaya taaki baar baar ho rhi rendering ko rok sake
  useEffect(() => {
    fetchNotes()
  }, [])

  // submit button ko handle karta hai
  function handleSubmit(e) {
    e.preventDefault()
    const { title, description } = e.target.elements
    console.log(title.value);

    axios.post('http://localhost:3000/notes', {
      title: title.value,
      description: description.value
    }).then((res) => {
      console.log(res.data);
      // direct data aa jaye bina reload kare a
      fetchNotes()
    })

  }

  // delete functionality
  function handleDelete(noteId) {
    console.log(noteId);
    axios.delete(`http://localhost:3000/api/notes/${noteId}`)
      .then(res => {
        console.log(res.data);
        fetchNotes();
      })


  }

  // App functioning
  return (
   <div className='bg-red-400'>
      {/* form se input lena */}

      <form onSubmit={handleSubmit} >
        <input name='title' type="text" placeholder=' Enter here ' />
        <input name='description' type="text" placeholder=' Enter here ' />
        <button>CREATE </button>
      </form>


      {/* getting notes */}
      <div className='bg-rose-500 flex flex-wrap mt-20'>
        {notes.map((note) => {
          return <div className=' flex items-center flex-col justify-center gap-6 m-6 font-mono rounded-2xl bg-gray-200 h-50  w-50 p-5 border'>
            <h1 className='font-mono text-3xl'>{note.title}</h1>
            <p>description</p>
            <button onClick={() => {
              handleDelete(note._id)
            }} className='cursor-pointer bg-red-800 rounded-3xl px-4 py-1 hover:bg-black hover:text-white'>Delete</button>
          </div>
        })}
      </div>
   </div>
  )
}

export default App