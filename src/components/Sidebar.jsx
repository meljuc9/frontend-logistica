import { Link } from 'react-router-dom'

import {
  FaHome,
  FaUsers,
  FaBox,
  FaPlusCircle,
  FaEdit,
  FaTruck,
  FaSyncAlt,
  FaHistory
} from 'react-icons/fa'

function Sidebar() {

  return (

    <div
      className='text-white p-4'
      style={{
        width: '270px',
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #0f172a, #1e293b)'
      }}
    >

      <h2 className='text-warning fw-bold mb-5'>
        LOGÍSTICA
      </h2>

      <ul className='nav flex-column'>

        <li className='mb-3'>
          <Link className='nav-link text-white sidebar-link' to='/dashboard'>
            <FaHome className='me-2' />
            Dashboard
          </Link>
        </li>

        <li className='mb-3'>
          <Link className='nav-link text-white sidebar-link' to='/usuarios'>
            <FaUsers className='me-2' />
            Usuarios
          </Link>
        </li>

        <li className='mb-3'>
          <Link className='nav-link text-white sidebar-link' to='/pedidos'>
            <FaBox className='me-2' />
            Pedidos
          </Link>
        </li>
{/*
        <li className='mb-3'>
          <Link className='nav-link text-white sidebar-link' to='/crear-pedido'>
            <FaPlusCircle className='me-2' />
            Crear Pedido
          </Link>
        </li>

        <li className='mb-3'>
          <Link className='nav-link text-white sidebar-link' to='/editar-pedido'>
            <FaEdit className='me-2' />
            Editar Pedido
          </Link>
        </li>

        <li className='mb-3'>
          <Link className='nav-link text-white sidebar-link' to='/asignar-repartidor'>
            <FaTruck className='me-2' />
            Asignar Repartidor
          </Link>
        </li>

        <li className='mb-3'>
          <Link className='nav-link text-white sidebar-link' to='/actualizar-estado'>
            <FaSyncAlt className='me-2' />
            Actualizar Estado
          </Link>
        </li>

        <li>
          <Link className='nav-link text-white sidebar-link' to='/historial'>
            <FaHistory className='me-2' />
            Historial
          </Link>
        </li>
*/}
      </ul>

    </div>
  )
}

export default Sidebar