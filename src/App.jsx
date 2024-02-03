import Approutes from "./Routes"
import Navbar from "./components/Navbar"
import './App.css'
import { BrowserRouter as Router } from "react-router-dom"
function App() {
  return (
    <main>
       <Router basename="/sample101">
       <Navbar/>
        <section>
          <Approutes/>
        </section>
       </Router>

    </main>
  )
}

export default App
