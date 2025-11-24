import { useState } from "react"
import SaluteController from "./modules/salute.controller";

function App() {
  const [data, setData] = useState({
    names: "",
    surnames: ""
  });
  const [result, setResult] = useState("");

  const handleChange = ({ target }) => {
    const { name, value } = target;
    console.log(data);
    

    setData(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const salute = async () => setResult(await SaluteController.salute(data));

  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Angel Alcocer Durán - 10B</a>
        </div>
      </nav>

      <div className="container mt-5">
        <h2>Saludo</h2>
        <hr />
        <div className="row">
          <div className="col-4">
            <input onChange={(e) => handleChange(e)} name="names" type="text" placeholder="Nombres" className="form-control" />
          </div>
          <div className="col-4">
            <input onChange={(e) => handleChange(e)} name="surnames" type="text" placeholder="Apellidos" className="form-control" />
          </div>
          <div className="col-4">
            <button onClick={() => salute()} className="btn btn-success">Saludar</button>
          </div>
        </div><br />
        <h4>{result}</h4>
      </div>
    </>
  )
}

export default App
