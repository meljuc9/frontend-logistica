import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import usuarios from '../mock/usuarios.json'

function Usuarios() {

  return (
    <div className='table-responsive'>

      <Navbar />

      <div className='d-flex'>

        <Sidebar />

        <div className='container-fluid p-4'>

          <div className='d-flex justify-content-between align-items-center'>

            <h1>Gestión de Usuarios</h1>

            <button className='btn btn-success rounded-pill px-4 me-2'>
              Registrar Usuario
            </button>

          </div>

          <table className='table table-hover align-middle table-striped mt-4'>

            <thead className='table-dark'>

              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Rol</th>
                <th>Acciones</th>
              </tr>

            </thead>

            <tbody>

              {usuarios.map((usuario) => (

                <tr key={usuario.id}>

                  <td>{usuario.id}</td>
                  <td>{usuario.nombre}</td>
                  <td>{usuario.email}</td>
                  <td>{usuario.rol}</td>

                  <td>

                    <button className='btn btn-primary rounded-pill px-4 btn-sm me-2'>
                      Editar
                    </button>

                    <button className='btn btn-danger rounded-pill px-4 btn-sm me-2'>
                      Eliminar
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>
      </div>

    </div>
  )
}

export default Usuarios