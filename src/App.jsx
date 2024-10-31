import Navbar from "./components/navbar"
import Hero from "./components/hero"
import HomeCards from "./components/HomeCards"
import JobListings from "./components/JobListings"
import ViewAllJobs from "./components/viewAllJobs"


const App = () => {
  return (
    <>
      <Navbar />
      

    {/* <!-- Hero --> */}

      <Hero />

    {/* <!-- Developers and Employers --> */}
    
    <HomeCards />

    {/* <!-- Browse Jobs --> */}

    <JobListings />
    
    <ViewAllJobs />
    </>
  )
}

export default App