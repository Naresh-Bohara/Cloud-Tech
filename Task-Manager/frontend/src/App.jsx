
import './App.css'
import AllTasksPage from './pages/AllTasksPage'
import HomePage from './pages/HomePage'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import ImportantTasksPage from './pages/ImportantTasksPage'
import CompletedTasksPage from './pages/CompletedTasksPage'
import PendingTasksPage from './pages/PendingTasksPage'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'

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

        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
    </Router>
   </div>
    </>
  )
}

export default App
