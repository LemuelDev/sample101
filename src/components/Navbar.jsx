import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <header>
        <div className="logo">
            <Link to="/"> <h4>Logo</h4></Link>
        </div>
        <div className="link-tags">
              <Link to="/events">Event</Link>
              <Link to="/services">Services</Link>
         </div>

    </header>
  )
}

export default Navbar