import { useEffect, useState } from 'react'

import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

import Swal from 'sweetalert2'

function Pedidos() {

  const [pedidos, setPedidos] = useState([])

  useEffect(() => {

    const pedidosGuardados =
      JSON.parse(localStorage.getItem('pedidos')) || []

    setPedidos(pedidosGuardados)

  }, [])

  const eliminarPedido = (id) => {

    Swal.fire({
      title: '¿Eliminar pedido?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar'
    }).then((result) => {

      if (result.isConfirmed) {

        const nuevosPedidos =
          pedidos.filter((pedido) => pedido.id !== id)

        setPedidos(nuevosPedidos)

        localStorage.setItem(
          'pedidos',
          JSON.stringify(nuevosPedidos)
        )

        Swal.fire(
          'Eliminado',
          'Pedido eliminado correctamente',
          'success'
        )
      }

    })

  }

  return (

    <div>

      <Navbar />

      <div className='d-flex'>

        <Sidebar />

        <div className='container-fluid p-4'>

          <div className='d-flex justify-content-between align-items-center mb-4'>

            <h1 className='dashboard-title'>
              Gestión de Pedidos
            </h1>

          </div>

          <div className='card border-0 custom-shadow p-4'>

            <table className='table table-hover align-middle table-striped mt-4'>

              <thead className='table-dark'>

                <tr>
                  <th>ID</th>
                  <th>Origen</th>
                  <th>Destino</th>
                  <th>Descripción</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>

              </thead>

              <tbody>

                {pedidos.map((pedido) => (

                  <tr key={pedido.id}>

                    <td>{pedido.id}</td>
                    <td>{pedido.origen}</td>
                    <td>{pedido.destino}</td>
                    <td>{pedido.descripcion}</td>
                    <td>{pedido.estado}</td>

                    <td>

                      <button
                        className='btn btn-danger btn-sm rounded-pill'
                        onClick={() => eliminarPedido(pedido.id)}
                      >
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

    </div>
  )
}

export default Pedidos