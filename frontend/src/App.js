import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { theme } from './theme';
import Home from "./pages/Home";
import NotFound from './pages/NotFound';
import LogIn from './pages/Login';
import SingleJob from './pages/SingleJob';
import UserDashboard from './pages/user/UserDashboard';
import AdminDashboard from './pages/admin/AdminDashboard';
import UserRoute from './component/UserRoute';
import AdminRoute from './component/AdminRoute';
import Layout from './pages/global/Layout';
import UserJobsHistory from './pages/user/UserJobsHistory';
import UserInfoDashboard from './pages/user/UserInfoDashboard';
import DashUsers from './pages/admin/DashUsers';
import DashJobs from './pages/admin/DashJobs';
import DashCreateJob from './pages/admin/DashCreateJob';
import DashCategory from './pages/admin/DashCategory';

//HOC
const UserDashboardHOC = Layout(UserDashboard);
const UserJobsHistoryHOC = Layout(UserJobsHistory);
const UserInfoDashboardHOC = Layout(UserInfoDashboard);
const AdminDashboardHOC = Layout(AdminDashboard);
const DashUsersHOC = Layout(DashUsers);
const DashJobsHOC = Layout(DashJobs);
const DashCreateJobHOC = Layout(DashCreateJob)
const DashCategoryHOC = Layout(DashCategory)

const App = () => {
  return (
    <>
      <ToastContainer />
      <ThemeProvider theme={theme} >
        <CssBaseline />
        <ProSidebarProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/search/location/:location' element={<Home />} />
              <Route path='/search/:keyword' element={<Home />} />
              <Route path='/login' element={<LogIn />} />
              <Route path='/job/:id' element={<SingleJob />} />
              <Route path='/admin/dashboard'  element={<AdminRoute><AdminDashboardHOC /></AdminRoute>} />
              <Route path='/admin/users' element={<AdminRoute><DashUsersHOC /></AdminRoute>} />
              <Route path='/admin/jobs' element={<AdminRoute><DashJobsHOC /></AdminRoute>} />
              <Route path='/admin/category' element={<AdminRoute><DashCategoryHOC /></AdminRoute>} />
              <Route path='/admin/job/create' element={<AdminRoute><DashCreateJobHOC /></AdminRoute>} />
              <Route path='/user/dashboard' element={<UserRoute>< UserDashboardHOC /></UserRoute>} />
              <Route path='/user/jobs' element={<UserRoute>< UserJobsHistoryHOC /></UserRoute>} />
              <Route path='/user/info' element={<UserRoute>< UserInfoDashboardHOC /></UserRoute>} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </ProSidebarProvider>
      </ThemeProvider>

    </>
  );
}

export default App;