import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AdminDashborad } from './component/AdminDashboard';

import { Login } from './component/Login';
import { Navbar } from './component/Navbar';
import {Registration} from './component/Registration';
import { UserDashboard } from './component/UserDashboard';

import { AddSchedule } from './component/AddSchedule';
import { Dashboard } from './component/Dashboard';
import { ScheduleMasterList } from './component/ScheduleMasterList';
import { ScheduleMasterdetailes } from './component/ScheduleMasterdetailes';
import { AddDailyScheule } from './component/AddDailyScheule';
import { AddDailyScheduleDetailes } from './component/AddDailyScheduleDetailes';
import { AddTask } from './component/AddTask';
import { TaskDetailes, UserTaskList } from './component/UserTaskList';
import { AddRemider } from './component/AddReminder';


function App() {
  return (
    
    <div class="layout-wrapper loyout-content-navbar">
    {/* <div className="layout-container"></div> */}
      <Navbar/>
      <Routes>
        <Route path='/UserDashborad' element={<UserDashboard/>}/>
        <Route path='/AdminDashborad' element={<AdminDashborad/>}/>
        <Route path='/AddSchedule' element={<AddSchedule/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
        <Route path='/Schedulemasterlist' element={<ScheduleMasterList/>}/>


        <Route path="/" element={<Login/>}/>
        <Route path="/Registration" element={<Registration/>}/>
        {/* <Route path="/ForgotPassword" element={<ForgotPassword/>}/> */}
        {/* <Route path="/UserScheduleList" element={<UserScheduleList/>}/> */}
        <Route path="/ScheduleMasterdetailes/:id" element={<ScheduleMasterdetailes/>}/>
        <Route path='/addDailyScheule/' element={<AddDailyScheule/>}/>
        <Route path='/addDailyScheuleDetailes' element={<AddDailyScheduleDetailes/>}/>
        <Route path='/AddTask' element={<AddTask/>}/>
        <Route path='/UserTaskList' element={<UserTaskList/>}/>
        <Route path='/AddRemider' element={<AddRemider/>}/>

      </Routes>
     
    </div>
    
  );
}

export default App;
