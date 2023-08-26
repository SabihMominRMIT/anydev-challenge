import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';

function App() {
  return (
    <Router>
        {/* <Navbar /> */}
      <Routes>
        {/* <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/signup" element={<Signup />}></Route>
        <Route exact path="/profile" element={<Profile />}></Route>
        <Route exact path="/movies" element={<MoviesPage />}></Route> */}
      </Routes>
      <>
        {/* <Footer/> */}
      </>
      {/* <ToastContainer/> */}
    </Router>
  );
}

export default App;
