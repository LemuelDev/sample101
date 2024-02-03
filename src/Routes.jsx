import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Events from "./components/Events";
import Services from "./components/Services";

const Approutes = () => {
    return (
        <Routes>
            <Route exact path="/sample101/" element={<Homepage/>}/>
            <Route path="/events" element={<Events/>} />
            <Route path="/services" element={<Services/>} />
        </Routes>    
    )
}

export default Approutes;