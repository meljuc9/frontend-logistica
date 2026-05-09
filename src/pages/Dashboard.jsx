import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

import {
  FaBox,
  FaTruck,
  FaCheckCircle,
  FaUsers
} from 'react-icons/fa'

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell
} from 'recharts'

import { motion } from 'framer-motion'

function Dashboard() {

  const pedidos =
    JSON.parse(localStorage.getItem('pedidos')) || []

  const pendientes =
    pedidos.filter(
      p => p.estado === 'Pendiente'
    ).length

  const transito =
    pedidos.filter(
      p => p.estado === 'En tránsito'
    ).length

  const entregados =
    pedidos.filter(
      p => p.estado === 'Entregado'
    ).length

  const data = [
    {
      name: 'Pendientes',
      pedidos: pendientes
    },
    {
      name: 'En tránsito',
      pedidos: transito
    },
    {
      name: 'Entregados',
      pedidos: entregados
    }
  ]

  return (

    <div className='table-responsive'
      style={{
        background: '#f1f5f9',
        minHeight: '100vh'
      }}
    >

      <Navbar />

      <div className='d-flex table-responsive'>

        <Sidebar />

        <div className='container-fluid p-4'>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >

            <h1 className='fw-bold text-dark mb-2'>
              Dashboard Empresarial
            </h1>

            <p className='text-muted mb-4'>
              Control y monitoreo logístico en tiempo real
            </p>

          </motion.div>

          <div className='row'>

            <div className='col-md-3 mb-4'>

              <motion.div
                whileHover={{ scale: 1.03 }}
                className='card border-0 shadow-lg'
                style={{
                  borderRadius: '22px',
                  background:
                    'linear-gradient(to right,#2563eb,#1d4ed8)',
                  color: 'white'
                }}
              >

                <div className='card-body p-4'>

                  <div className='d-flex justify-content-between'>

                    <div>

                      <h6>Total Pedidos</h6>

                      <h2 className='fw-bold'>
                        {pedidos.length}
                      </h2>

                    </div>

                    <FaBox size={45} />

                  </div>

                </div>

              </motion.div>

            </div>

            <div className='col-md-3 mb-4'>

              <motion.div
                whileHover={{ scale: 1.03 }}
                className='card border-0 shadow-lg'
                style={{
                  borderRadius: '22px',
                  background:
                    'linear-gradient(to right,#f59e0b,#d97706)',
                  color: 'white'
                }}
              >

                <div className='card-body p-4'>

                  <div className='d-flex justify-content-between'>

                    <div>

                      <h6>En tránsito</h6>

                      <h2 className='fw-bold'>
                        {transito}
                      </h2>

                    </div>

                    <FaTruck size={45} />

                  </div>

                </div>

              </motion.div>

            </div>

            <div className='col-md-3 mb-4'>

              <motion.div
                whileHover={{ scale: 1.03 }}
                className='card border-0 shadow-lg'
                style={{
                  borderRadius: '22px',
                  background:
                    'linear-gradient(to right,#10b981,#059669)',
                  color: 'white'
                }}
              >

                <div className='card-body p-4'>

                  <div className='d-flex justify-content-between'>

                    <div>

                      <h6>Entregados</h6>

                      <h2 className='fw-bold'>
                        {entregados}
                      </h2>

                    </div>

                    <FaCheckCircle size={45} />

                  </div>

                </div>

              </motion.div>

            </div>

            <div className='col-md-3 mb-4'>

              <motion.div
                whileHover={{ scale: 1.03 }}
                className='card border-0 shadow-lg'
                style={{
                  borderRadius: '22px',
                  background:
                    'linear-gradient(to right,#8b5cf6,#7c3aed)',
                  color: 'white'
                }}
              >

                <div className='card-body p-4'>

                  <div className='d-flex justify-content-between'>

                    <div>

                      <h6>Usuarios</h6>

                      <h2 className='fw-bold'>
                        3
                      </h2>

                    </div>

                    <FaUsers size={45} />

                  </div>

                </div>

              </motion.div>

            </div>

          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >

            <div
              className='card border-0 shadow-lg mt-4'
              style={{
                borderRadius: '22px'
              }}
            >

              <div className='card-body p-4'>

                <h4 className='fw-bold mb-4'>
                  Estadísticas Logísticas
                </h4>

                <p className='text-muted'>
                  Monitoreo de estados logísticos en tiempo real
                </p>

                <ResponsiveContainer width='100%' height={350}>
                  <BarChart
                    data={data}
                    barSize={70}
                  >

                    <XAxis
                      dataKey='name'
                      stroke='#64748b'
                      tick={{
                        fontSize: 14,
                        fontWeight: 600
                      }}
                    />

                    <YAxis
                      stroke='#64748b'
                      tick={{
                        fontSize: 13
                      }}
                    />

                    <Tooltip
                      cursor={{
                        fill:'rgba(0,0,0,0.05)'
                      }}
                      contentStyle={{
                        background:'#ffffff',
                        borderRadius:'16px',
                        border:'none',
                        boxShadow:'0 8px 25px rgba(0,0,0,0.15)',
                        padding:'12px'
                      }}
                      labelStyle={{
                        color:'#0f172a',
                        fontWeight:'bold'
                      }}
                    />

                    <Bar
                      dataKey='pedidos'
                      radius={[14,14,0,0]}
                    >

                      <Cell fill='#3b82f6' />

                      <Cell fill='#f59e0b' />

                      <Cell fill='#10b981' />

                    </Bar>

                  </BarChart>
                </ResponsiveContainer>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </div>
  )
}

export default Dashboard