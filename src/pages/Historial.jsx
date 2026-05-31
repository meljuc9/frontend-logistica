import { useEffect, useState } from 'react'
import api from '../services/api'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

function Historial() {

  const [historial, setHistorial] = useState([])

  useEffect(() => {
    cargarHistorial()
  }, [])

  const cargarHistorial = async () => {
    try {
      const response = await api.get('/historial')
      setHistorial(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  const getColor = (estado) => {
    switch (estado) {
      case 'Entregado': return 'text-success'
      case 'Pendiente': return 'text-warning'
      case 'En Ruta': return 'text-primary'
      default: return 'text-secondary'
    }
  }

  return (
    <div>
      <Navbar />

      <div className='d-flex'>
        <Sidebar />

        <div className='container-fluid p-4'>
          <h1 className='fw-bold mb-4'>Historial de Pedidos</h1>

          <div className='card shadow-lg border-0 rounded-4'>
            <div className='card-body'>

              <table className='table table-hover align-middle'>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Cliente</th>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Estado</th>
                    <th>Fecha</th>
                  </tr>
                </thead>

                <tbody>
                  {historial.map((item) => (
                    <tr key={item.id_pedido}>
                      <td>{item.id_pedido}</td>
                      <td>{item.cliente}</td>
                      <td>{item.producto}</td>
                      <td>{item.cantidad}</td>
                      <td className={getColor(item.estado)}>
                        <strong>{item.estado}</strong>
                      </td>
                      <td>
                        {new Date(item.fecha_registro).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Historial