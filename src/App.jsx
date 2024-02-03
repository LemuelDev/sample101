import Approutes from "./Routes"
import Navbar from "./components/Navbar"
import './App.css'
import { HashRouter as Router } from "react-router-dom"
function App() {
  return (
    <main>
       <Router >
       <Navbar/>
        <section>
          <Approutes/>
        </section>
       </Router>

    </main>
  )
}

export default App
