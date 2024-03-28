import Sidebar from "./components/sidebar"
// import Routes from "./routes/routes"
import { useLocation } from "react-router-dom"
import Header from "./components/header"
import Routes from "./routes/routes"

function App() {

  return (
    <main className=" h-svh flex bg-secondary">
      <Sidebar/>
      <section className="flex flex-col w-full">
        <Header/>
        
        <div className="mainContent flex-grow">
          <Routes/>
        </div>
      </section>
    </main>
  )
}

export default App
