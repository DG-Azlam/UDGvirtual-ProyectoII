import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from './componets/NavBar';
import NewDoc from './Screens/NewDoc';  

function App() {
    function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    
    console.log('Procesando pedido');
  }
  
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/NewDoc" element={<NewDoc />} /> 
        </Routes>
      </Router>

      <form method="post" onSubmit={handleSubmit}>
        <label>
          No. Inventario
          <textarea name="postContent"/>
        </label> 
        <hr />
        <button type="reset"> Borrar </button>
        <button type="submit"> Crear Reporte </button>

      </form>

    </div>
  );
}

export default App;