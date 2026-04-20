import { Sidebar } from './components/sidebar/index'
import { SermoForm } from './components/SermoForm/index'
import { Sermo } from './components/Sermo/index'
import { v4 } from "uuid"
import { getAvatar, getRandomImage } from './utils/generateImages'
import { useState } from 'react'


function App() {
  const[sermos, setSermos] = useState([])

  const addNewSermo = (content, includeImage = false) => {
    const newSermo = {
      id: v4(),
      name: "User",
      username: `users${Math.floor(Math.random() * 1000)}`,
      avatar: getAvatar(`user${Math.floor (Math.random() * 1000)}@email.com`),
      content,
      time: new Date().toLocaleString([],{
        hour: '2-digit',
        minute: '2-digit'
      }),
      image: includeImage ?  getRandomImage() : null,
      likes: 0,
      resermos: 0,
      comments: 0

  }

  setSermos(prevSermos => [newSermo, ...prevSermos])

  }

  return (

    <div className='flex h-screen bg-sermo-background'>
      <Sidebar />
      <main className='grow border-l border-r border-gray-700 max-w-2xl'>
        <header className='sticky top-0 z-10 bg-sermo-background bg-opacity-80 backdrop-blur-sm border-b border-gray-700'>
          <h2 className='px-4 py-3 text-xl font-bold text-white'>For You</h2>
        </header>
        <SermoForm onSermo={ (content) => addNewSermo(content, Math.random() > 0.8)}/>
        <div>
          <Sermo />
        </div>
      </main>
      <div className='hidden lg:block w-80 border-l border-gray-700'>
      </div>
    </div>
  )
}

export default App
