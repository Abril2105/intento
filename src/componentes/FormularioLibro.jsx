import { useState } from "react"

export const FormularioLibro = ({ agregar }) => {
    const [id, setId] = useState("");
    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");
    const [genero, setGenero] = useState("");

    const guardarLibro = (event) => {

        let libro = {
            id: id,
            titulo: titulo,
            autor: autor,
            genero: genero
        }
        agregar(libro)
        setId("");
        setTitulo("");
        setAutor("");
        setGenero("");
    }

    function habilitarButton() {
        var titu = document.getElementById("titulo").value
        var auto = document.getElementById("autor").value
        var gen = document.getElementById("genero").value
        if (titu == "") {
            document.getElementById("registrar").disabled = true;
        } else if (auto == "") {
            document.getElementById("registrar").disabled = true;
        } else if (gen == "") {
            document.getElementById("registrar").disabled = true;
        } else {
            document.getElementById("registrar").disabled = false;
        }
    }

    return (
        <>
                <nav class="navbar navbar-expand-lg bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">NAVEGADOR</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Libros</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Rentas</a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </nav>
            
            <div>
                <form onSubmit={guardarLibro} style={{ backgroundColor: "#AD9978" }}>
<<<<<<< HEAD
                    <h1 className="text-center text-dark " style={{ fontSize: "100px", backgroundColor: "#AD9978" }}>Biblioteca</h1>
=======
                    <h1 className="text-center text-dark " style={{ fontSize: "100px", backgroundColor: "#AD9978" }}>BIBLIOTECA</h1>
                    <h2 id ="Busquedas" className="text-left text-dark " style={{ fontSize: "50px", backgroundColor: "#AD9978" }}>Registros</h2>
>>>>>>> b004aa74b39cd10e58c32708096371cf492668ab
                    <div className="form-group input-group">
                        <label class="input-group-text futurama " for="inputGroupSelect01" >Titulo</label>
                        <input type="text" className="form-control" id="titulo" placeholder="Titulo" value={titulo} onChange={(event) => { setTitulo(event.target.value); habilitarButton(); }}/>
                    </div>
                    <br />
                    <div className="form-group input-group ">
                        <label class="input-group-text futurama" for="inputGroupSelect01">Autor</label>
                        <input type="text" className="form-control" id="autor" placeholder="Autor" value={autor} onChange={(event) => { setAutor(event.target.value); habilitarButton(); }}/>
                    </div>



                    <br />
                    <div className="form-floating">
                        <select class="form-select" id="genero" value={genero} onChange={(event) => { setGenero(event.target.value); habilitarButton(); }}>
                            <option value = "" selected>Seleccione un genero</option>
                            <option value="Ficcion">Ficcion</option>
                            <option value="Novela">Novela</option>
                            <option value="Suspenso">Suspenso</option>
                            <option value="Fantasia">Fantasia</option>
                            <option value="Romance">Romance</option>
                            <option value="Historia">Historia</option>

                        </select>
                        <label for="floatingSelect">Genero</label>
                    </div>
                    <br />

                    <button id="registrar" type="submit" class="btn btn-dark" disabled>Registrar</button>
                </form>
            </div>

            <style>

                {`
                 ::-webkit-scrollbar {
            width: 10px;
          }

          ::-webkit-scrollbar-track {
            background: #f1f1f1;
          }

          ::-webkit-scrollbar-thumb {
            background: #505050;
          }
          .futurama{
            background-color: #222;
            color: #fff;
            padding: 8px 12px;
            border-radius: 4px;
            font-family: 'Arial', sans-serif;
            font-size: 14px;
            text-transform: uppercase;
          }
          #registrar {
            margin-bottom: 20px
          }

        `}

            </style>
        </>
    )
}