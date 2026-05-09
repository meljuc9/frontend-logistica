import { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

function AsignarRepartidor() {

  const [pedido, setPedido] = useState('')
  const [repartidor, setRepartidor] = useState('')

  const handleAsignar = (e) => {
    e.preventDefault()

    if (!pedido || !repartidor) {
      alert('Todos los campos son obligatorios')
      return
    }

    alert('Repartidor asignado correctamente')
  }

  return (
    <div>
      <Navbar />

      <div className='d-flex'>
        <Sidebar />

        <div className='container-fluid p-4'>

          <h1>Asignar Repartidor</h1>

          <form className='mt-4' onSubmit={handleAsignar}>

            <label className='form-label'>
              Pedido
            </label>

            <select
              className='form-select mb-3'
              value={pedido}
              onChange={(e) => setPedido(e.target.value)}
            >
              <option value=''>Seleccione pedido</option>
              <option>Pedido #1</option>
              <option>Pedido #2</option>
            </select>

            <label className='form-label'>
              Repartidor
            </label>

            <select
              className='form-select mb-3'
              value={repartidor}
              onChange={(e) => setRepartidor(e.target.value)}
            >
              <option value=''>Seleccione repartidor</option>
              <option>Carlos Pérez</option>
              <option>Andrés López</option>
            </select>

            <button className='btn btn-primary rounded-pill px-4 me-2'>
              Asignar
            </button>

          </form>

        </div>
      </div>
    </div>
  )
}

export default AsignarRepartidor