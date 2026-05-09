import { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Swal from 'sweetalert2'

function CrearPedido() {

  const [origen, setOrigen] = useState('')
  const [destino, setDestino] = useState('')
  const [descripcion, setDescripcion] = useState('')

  const guardarPedido = (e) => {

    e.preventDefault()

    if (!origen || !destino || !descripcion) {

      Swal.fire({
        icon: 'warning',
        title: 'Campos requeridos',
        text: 'Completa todos los campos'
      })

      return
    }

    const nuevoPedido = {
      id: Date.now(),
      origen,
      destino,
      descripcion,
      estado: 'Pendiente'
    }

    const pedidosGuardados =
      JSON.parse(localStorage.getItem('pedidos')) || []

    pedidosGuardados.push(nuevoPedido)

    localStorage.setItem(
      'pedidos',
      JSON.stringify(pedidosGuardados)
    )

    Swal.fire({
      icon: 'success',
      title: 'Pedido creado',
      text: 'Pedido registrado correctamente'
    })

    setOrigen('')
    setDestino('')
    setDescripcion('')
  }

  return (

    <div>

      <Navbar />

      <div className='d-flex'>

        <Sidebar />

        <div className='container-fluid p-4'>

          <div className='card border-0 custom-shadow p-5'>

            <h2 className='mb-4 fw-bold'>
              Crear Pedido
            </h2>

            <form onSubmit={guardarPedido}>

              <label className='form-label'>
                Origen
              </label>

              <input
                type='text'
                className='form-control p-3 mb-4'
                placeholder='Ciudad origen'
                value={origen}
                onChange={(e) => setOrigen(e.target.value)}
              />

              <label className='form-label'>
                Destino
              </label>

              <input
                type='text'
                className='form-control p-3 mb-4'
                placeholder='Ciudad destino'
                value={destino}
                onChange={(e) => setDestino(e.target.value)}
              />

              <label className='form-label'>
                Descripción
              </label>

              <textarea
                className='form-control p-3 mb-4'
                rows='4'
                placeholder='Descripción del pedido'
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
              />

              <button className='btn btn-dark rounded-pill px-5 py-2'>
                Guardar Pedido
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  )
}

export default CrearPedido