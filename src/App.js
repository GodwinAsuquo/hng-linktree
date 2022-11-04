import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import Contact from "./pages/Contact";
import Main from "./pages/Main";

function App() {
    return (
 <Router>
    <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="contact" element={<Contact/>}/>
    </Routes>
    <Footer />
 </Router>
    )
}

export default App;
