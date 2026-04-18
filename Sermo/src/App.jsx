import { Sidebar } from './components/sidebar/index'
import { SermoForm } from './components/SermoForm/index'
import { Sermo } from './components/Sermo/index'


function App() {

  return (

    <div className='flex h-screen bg-sermo-background'>
      <Sidebar />
      <main className='grow border-l border-r border-gray-700 max-w-2xl'>
        <header className='sticky top-0 z-10 bg-sermo-background bg-opacity-80 backdrop-blur-sm border-b border-gray-700'>
          <h2 className='px-4 py-3 text-xl font-bold text-white'>For You</h2>
        </header>
        <SermoForm/>
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
