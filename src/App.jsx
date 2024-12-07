import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider 
} from "react-router-dom"
import HomePage from './pages/HomePage'
import MainLayOut from "./layouts/MainLayOut";
import JobsPage from "./pages/JobsPage";
import JobPage from "./pages/JobPage";
import jobLoader from "./controllers/jobLoader";
import NotFoundPage from "./pages/NotFoundPage";
import AddJobPage from "./pages/AddJobPage";

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={ <MainLayOut /> }>
    <Route index element={<HomePage />}/>
    <Route path="/jobs" element={<JobsPage />}/>
    <Route path="/jobs/:id" element={<JobPage />} loader= {jobLoader}/>
    <Route path="/add-job" element={<AddJobPage />} />
    <Route path="*" element={<NotFoundPage />}/>
  </Route>
  
)
);

const App = () => {
  return <RouterProvider router= {router} />
}

export default App