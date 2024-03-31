import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Navbar from './common/Navbar'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/Dashboard'
import SignUpPage from './pages/SignUpPage'
import Protected from './common/Protected'
import ViewStaff from './pages/ViewStaff'
import AssignTask from './components/AssignTask'
import AllStaffPage from './pages/AllStaffPage'
import Attendance from './components/Attendance'
import AllAttendancePage from './pages/AllAttendancePage'
import StaffRoutine from './pages/StaffRoutine'
import ViewTaskPage from './pages/ViewTaskPage'

function App() {

  return (
    <div className='w-full h-full flex-col justify-center items-center'>
    <div><Navbar/></div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signUp' element={<Protected><SignUpPage/></Protected>}/>
        <Route path='/dashboard' element={<Protected><Dashboard/></Protected>}/>
        <Route path='/assignTask/:id' element={<Protected><AssignTask/></Protected>}/>
        <Route path='/viewAllStaff' element={<Protected><AllStaffPage/></Protected>}/>
        <Route path='/attendance' element={<Protected><Attendance/></Protected>}/>
        <Route path='/allAttendance' element={<Protected><AllAttendancePage/></Protected>}/>
        <Route path='/staffRoutine' element={<Protected><StaffRoutine/></Protected>}/>
        <Route path='/viewAllTask' element={<Protected><ViewTaskPage/></Protected>}/>
        
      </Routes>
    </div>
  )
}

export default App
