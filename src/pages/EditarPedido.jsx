import { useEffect, useState } from 'react'

import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

import Swal from 'sweetalert2'

function EditarPedido() {

  const [pedidos, setPedidos] = useState([])

  useEffect(() => {

    const pedidosGuardados =
      JSON.parse(localStorage.getItem('pedidos')) || []

    setPedidos(pedidosGuardados)

  }, [])

  const actualizarEstado = (id, nuevoEstado) => {

    const pedidosActualizados =
      pedidos.map((pedido) => {

        if (pedido.id === id) {
          return {
            ...pedido,
            estado: nuevoEstado
          }
        }

        return pedido
      })

    setPedidos(pedidosActualizados)

    localStorage.setItem(
      'pedidos',
      JSON.stringify(pedidosActualizados)
    )

    Swal.fire({
      icon: 'success',
      title: 'Pedido actualizado'
    })
  }

  return (

    <div>

      <Navbar />

      <div className='d-flex'>

        <Sidebar />

        <div className='container-fluid p-4'>

          <h1 className='fw-bold mb-4'>
            Editar Pedidos
          </h1>

          <div className='card border-0 custom-shadow p-4'>

            <table className='table table-hover align-middle table-striped mt-4'>

              <thead className='table-dark'>

                <tr>
                  <th>ID</th>
                  <th>Origen</th>
                  <th>Destino</th>
                  <th>Estado</th>
                  <th>Actualizar</th>
                </tr>

              </thead>

              <tbody>

                {pedidos.map((pedido) => (

                  <tr key={pedido.id}>

                    <td>{pedido.id}</td>
                    <td>{pedido.origen}</td>
                    <td>{pedido.destino}</td>

                    <td>
                      <span className='badge bg-warning text-dark'>
                        {pedido.estado}
                      </span>
                    </td>

                    <td>

                      <select
                        className='form-select'
                        onChange={(e) =>
                          actualizarEstado(
                            pedido.id,
                            e.target.value
                          )
                        }
                      >

                        <option>
                          Seleccionar
                        </option>

                        <option>
                          Pendiente
                        </option>

                        <option>
                          En tránsito
                        </option>

                        <option>
                          Entregado
                        </option>

                      </select>

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

export default EditarPedido