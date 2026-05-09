import { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

function ActualizarEstado() {

  const [estado, setEstado] = useState('')

  const handleActualizar = (e) => {
    e.preventDefault()

    if (!estado) {
      alert('Seleccione un estado')
      return
    }

    alert('Estado actualizado correctamente')
  }

  return (
    <div>
      <Navbar />

      <div className='d-flex'>
        <Sidebar />

        <div className='container-fluid p-4'>

          <h1>Actualizar Estado del Pedido</h1>

          <form className='mt-4' onSubmit={handleActualizar}>

            <label className='form-label'>
              Estado
            </label>

            <select
              className='form-select mb-3'
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
            >
              <option value=''>Seleccione estado</option>
              <option>Pendiente</option>
              <option>En tránsito</option>
              <option>Entregado</option>
            </select>

            <button className='btn btn-warning rounded-pill px-4 me-2'>
              Actualizar Estado
            </button>

          </form>

        </div>
      </div>
    </div>
  )
}

export default ActualizarEstado