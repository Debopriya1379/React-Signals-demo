import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Todos from './components/Todos'
import { todos } from './states/allStates'

function App() {

  console.log("App")

  return (
   <div className='app'>
      <Navbar todos={todos}/>
      <main>
        <Todos todos={todos}/>
        <Sidebar/>
      </main>
   </div>
  )
}

export default App
