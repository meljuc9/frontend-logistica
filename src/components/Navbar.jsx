import {
  FaBell,
  FaUserCircle,
  FaSearch,
  FaSignOutAlt
} from 'react-icons/fa'

import Swal from 'sweetalert2'

import { useNavigate } from 'react-router-dom'

function Navbar() {

  const navigate = useNavigate()

  const cerrarSesion = () => {

    Swal.fire({
      title: '¿Cerrar sesión?',
      text: 'La sesión actual finalizará',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, salir',
      cancelButtonText: 'Cancelar'
    }).then((result) => {

      if (result.isConfirmed) {

        localStorage.removeItem('token')

        Swal.fire({
          icon: 'success',
          title: 'Sesión finalizada',
          timer: 1500,
          showConfirmButton: false
        })

        navigate('/')
      }

    })
  }

  return (

    <nav
      className='navbar navbar-expand-lg px-4 py-3'
      style={{
        background: '#ffffff',
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        borderBottom: '1px solid #e5e7eb'
      }}
    >

      <div className='container-fluid'>

        <div className='d-flex align-items-center'>

          <div
            className='me-4 d-flex align-items-center justify-content-center'
            style={{
              width: '45px',
              height: '45px',
              borderRadius: '12px',
              background: 'linear-gradient(to right,#2563eb,#1d4ed8)',
              color: 'white'
            }}
          >
            <FaSearch />
          </div>

          <div>

            <h5 className='m-0 fw-bold text-dark'>
              Sistema Logístico
            </h5>

            <small className='text-muted'>
              Panel administrativo
            </small>

          </div>

        </div>

        <div className='d-flex align-items-center'>

          <div
            className='position-relative me-4'
            style={{
              cursor: 'pointer'
            }}
          >

            <FaBell size={22} className='text-secondary' />

            <span
              className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'
            >
              3
            </span>

          </div>

          <div
            className='d-flex align-items-center me-4'
            style={{
              background: '#f8fafc',
              padding: '8px 15px',
              borderRadius: '14px'
            }}
          >

            <FaUserCircle
              size={38}
              className='text-primary me-3'
            />

            <div>

              <strong className='text-dark'>
                Administrador
              </strong>

              <br />

              <small className='text-muted'>
                admin@gmail.com
              </small>

            </div>

          </div>

          <button
            onClick={cerrarSesion}
            className='btn btn-danger rounded-pill px-4'
          >

            <FaSignOutAlt className='me-2' />

            Salir

          </button>

        </div>

      </div>

    </nav>
  )
}

export default Navbar