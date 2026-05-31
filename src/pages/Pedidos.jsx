import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import api from '../services/api'

function Pedidos() {

  const [pedidos, setPedidos] = useState([])

  const [cliente, setCliente] = useState('')
  const [producto, setProducto] = useState('')
  const [cantidad, setCantidad] = useState('')
  const [estado, setEstado] = useState('Pendiente')

  const [editando, setEditando] = useState(false)
  const [idEditar, setIdEditar] = useState(null)

  useEffect(() => {
    cargarPedidos()
  }, [])

  const cargarPedidos = async () => {

    const response =
    await api.get('/pedidos')

    setPedidos(response.data)

  }

  const guardarPedido = async () => {

    try {

      if (
        !cliente ||
        !producto ||
        !cantidad
      ) {

        Swal.fire(
          'Error',
          'Completa todos los campos',
          'warning'
        )

        return
      }

      if(editando){

        await api.put(`/pedidos/${idEditar}`,{
          cliente,
          producto,
          cantidad,
          estado
        })

        Swal.fire(
          'Actualizado',
          'Pedido actualizado',
          'success'
        )

      }else{

        await api.post('/pedidos',{
          cliente,
          producto,
          cantidad,
          estado
        })

        Swal.fire(
          'Correcto',
          'Pedido registrado',
          'success'
        )

      }

      limpiarFormulario()
      cargarPedidos()

    }

    catch(error){

      console.error(error)

    }

  }

  const editarPedido = (pedido) => {

    setEditando(true)

    setIdEditar(pedido.id_pedido)

    setCliente(pedido.cliente)
    setProducto(pedido.producto)
    setCantidad(pedido.cantidad)
    setEstado(pedido.estado)

  }

  const eliminarPedido = async(id)=>{

    const result =
    await Swal.fire({
      title:'¿Eliminar?',
      icon:'warning',
      showCancelButton:true
    })

    if(!result.isConfirmed) return

    await api.delete(`/pedidos/${id}`)

    Swal.fire(
      'Eliminado',
      '',
      'success'
    )

    cargarPedidos()

  }

  const limpiarFormulario = ()=>{

    setEditando(false)
    setIdEditar(null)

    setCliente('')
    setProducto('')
    setCantidad('')
    setEstado('Pendiente')

  }

  return (

    <div>

      <Navbar />

      <div className='d-flex'>

        <Sidebar />

        <div className='container-fluid p-4'>

          <h1 className='fw-bold mb-4'>
            Gestión de Pedidos
          </h1>

          <div className='card p-4 mb-4'>

            <div className='row'>

              <div className='col-md-3'>

                <input
                  className='form-control'
                  placeholder='Cliente'
                  value={cliente}
                  onChange={(e)=>setCliente(e.target.value)}
                />

              </div>

              <div className='col-md-3'>

                <input
                  className='form-control'
                  placeholder='Producto'
                  value={producto}
                  onChange={(e)=>setProducto(e.target.value)}
                />

              </div>

              <div className='col-md-2'>

                <input
                  type='number'
                  className='form-control'
                  placeholder='Cantidad'
                  value={cantidad}
                  onChange={(e)=>setCantidad(e.target.value)}
                />

              </div>

              <div className='col-md-2'>

                <select
                  className='form-select'
                  value={estado}
                  onChange={(e)=>setEstado(e.target.value)}
                >

                  <option>Pendiente</option>
                  <option>En Ruta</option>
                  <option>Entregado</option>

                </select>

              </div>

              <div className='col-md-2'>

                <button
                  onClick={guardarPedido}
                  className='btn btn-success w-100'
                >

                  {
                    editando
                    ? 'Actualizar'
                    : 'Registrar'
                  }

                </button>

              </div>

            </div>

          </div>

          <table className='table table-hover'>

            <thead className='table-dark'>

              <tr>

                <th>ID</th>
                <th>Cliente</th>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Estado</th>
                <th>Acciones</th>

              </tr>

            </thead>

            <tbody>

              {pedidos.map((pedido)=>(

                <tr key={pedido.id_pedido}>

                  <td>{pedido.id_pedido}</td>
                  <td>{pedido.cliente}</td>
                  <td>{pedido.producto}</td>
                  <td>{pedido.cantidad}</td>
                  <td>{pedido.estado}</td>

                  <td>

                    <button
                      onClick={()=>editarPedido(pedido)}
                      className='btn btn-primary btn-sm me-2'
                    >
                      Editar
                    </button>

                    <button
                      onClick={()=>eliminarPedido(pedido.id_pedido)}
                      className='btn btn-danger btn-sm'
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

  )

}

export default Pedidos