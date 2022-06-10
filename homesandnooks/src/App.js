import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddProperty from "./components/AddProperty";
import DisplayProperty from "./components/DisplayProperty";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Properties from "./components/Properties";
import UpdateProperty from "./components/UpdateProperty";


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element = {<Home />} />
          <Route path="/properties" element = {<Properties />} />
          <Route path="/add_property" element = {<AddProperty />} />
          <Route path="/property" element = {<DisplayProperty />} />
          <Route path="/update_property" element = {<UpdateProperty />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
