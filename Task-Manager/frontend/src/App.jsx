
import './App.css'
import AllTasksPage from './pages/AllTasksPage'
import HomePage from './pages/HomePage'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import ImportantTasksPage from './pages/ImportantTasksPage'
import CompletedTasksPage from './pages/CompletedTasksPage'
import PendingTasksPage from './pages/PendingTasksPage'

function App() {

  return (
    <>
   <div className='bg-gray-50 text-gray-900 h-screen p-2 relative'>
    <Router>
      <Routes>
        <Route exact path='/' element={<HomePage/>}>
        <Route index element={<AllTasksPage/>} />
        <Route path='important-tasks' element={<ImportantTasksPage/>} />
        <Route path='completed-tasks' element={<CompletedTasksPage/>} />
        <Route path='pending-tasks' element={<PendingTasksPage/>} />
        </Route>
      </Routes>
    </Router>
   </div>
    </>
  )
}

export default App
