import { Sidebar } from './components/sidebar/index'

function App() {

  return (

    <div className='flex mx-auto max-w-7xl'>
      <Sidebar />
      <main className='flex-grow boder-l border-r border-grey-700 max-w-xl'>
        <header>
          <h2>For You</h2>
        </header>
      </main>
    </div>
  )
}

export default App
