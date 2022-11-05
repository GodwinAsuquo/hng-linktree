import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./Footer";
import Contact from "./pages/Contact";
import Main from "./pages/Main";

function App() {
    return (
 <Router>
    <ScrollToTop>
    <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="contact" element={<Contact/>}/>
    </Routes>
    <Footer />
    </ScrollToTop>
 </Router>
    )
}

export default App;
