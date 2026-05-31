import { useEffect, useState } from 'react'

import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

import api from '../services/api'

import {
  PieChart,
  Pie,
  Tooltip,
  Cell
} from 'recharts'

import {
  FaUsers,
  FaTruck,
  FaClipboardList,
  FaBoxes
} from 'react-icons/fa'

function Dashboard() {

  const [indicadores, setIndicadores] = useState({
    usuarios: 0,
    totalPedidos: 0,
    entregados: 0,
    pendientes: 0,
    enRuta: 0
  })

  useEffect(() => {
    cargarDashboard()
  }, [])

  const cargarDashboard = async () => {
    try {
      const response = await api.get('/dashboard')

      setIndicadores({
        usuarios: response.data.usuarios || 0,
        totalPedidos: response.data.totalPedidos || 0,
        entregados: response.data.entregados || 0,
        pendientes: response.data.pendientes || 0,
        enRuta: response.data.enRuta || 0
      })

    } catch (error) {
      console.error(error)
    }
  }

  const data = [
    { name: 'Entregados', value: indicadores.entregados },
    { name: 'Pendientes', value: indicadores.pendientes },
    { name: 'En Ruta', value: indicadores.enRuta }
  ]

  const COLORS = ['#22c55e', '#f59e0b', '#3b82f6']

  return (
    <div>
      <Navbar />

      <div className='d-flex'>
        <Sidebar />

        <div className='container-fluid p-4'>
          <h1 className='fw-bold mb-4'>
            Dashboard Ejecutivo
          </h1>

          <div className='row'>

            <div className='col-md-3 mb-4'>
              <div className='card border-0 shadow-lg rounded-4'>
                <div className='card-body text-center'>
                  <FaUsers size={40} className='text-primary mb-3' />
                  <h2>{indicadores.usuarios}</h2>
                  <p className='text-muted'>Usuarios</p>
                </div>
              </div>
            </div>

            <div className='col-md-3 mb-4'>
              <div className='card border-0 shadow-lg rounded-4'>
                <div className='card-body text-center'>
                  <FaClipboardList size={40} className='text-success mb-3' />
                  <h2>{indicadores.totalPedidos}</h2>
                  <p className='text-muted'>Pedidos</p>
                </div>
              </div>
            </div>

            <div className='col-md-3 mb-4'>
              <div className='card border-0 shadow-lg rounded-4'>
                <div className='card-body text-center'>
                  <FaTruck size={40} className='text-warning mb-3' />
                  <h2>{indicadores.entregados}</h2>
                  <p className='text-muted'>Entregados</p>
                </div>
              </div>
            </div>

            <div className='col-md-3 mb-4'>
              <div className='card border-0 shadow-lg rounded-4'>
                <div className='card-body text-center'>
                  <FaBoxes size={40} className='text-danger mb-3' />
                  <h2>{indicadores.pendientes}</h2>
                  <p className='text-muted'>Pendientes</p>
                </div>
              </div>
            </div>

          </div>

          <div className='row'>
            <div className='col-md-4 mb-4'>
              <div className='card border-0 shadow-lg rounded-4'>
                <div className='card-body text-center'>
                  <FaTruck size={40} className='text-info mb-3' />
                  <h2>{indicadores.enRuta}</h2>
                  <p className='text-muted'>En Ruta</p>
                </div>
              </div>
            </div>
          </div>

          <div className='card border-0 shadow-lg rounded-4 mt-3'>
            <div className='card-body'>
              <h4 className='mb-4'>Distribución de Pedidos</h4>

              <PieChart width={500} height={300}>
                <Pie
                  data={data}
                  dataKey='value'
                  outerRadius={120}
                  label
                >
                  {
                    data.map((entry, index) => (
                      <Cell key={index} fill={COLORS[index]} />
                    ))
                  }
                </Pie>

                <Tooltip />
              </PieChart>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Dashboard