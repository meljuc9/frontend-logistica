import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import api from '../services/api'

function Login() {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (e) => {

    e.preventDefault()

    if (!email || !password) {

      Swal.fire({
        icon: 'warning',
        title: 'Campos requeridos',
        text: 'Completa todos los campos'
      })

      return
    }

    try {

      const response = await api.post('/auth/login', {

        email,
        password

      })

      localStorage.setItem(
        'token',
        response.data.token
      )

      localStorage.setItem(
        'usuario',
        JSON.stringify(response.data.usuario)
      )

      Swal.fire({
        icon: 'success',
        title: 'Bienvenido',
        text: 'Inicio de sesión exitoso'
      })

      navigate('/dashboard')

    }

    catch(error){

      Swal.fire({
        icon:'error',
        title:'Acceso denegado',
        text:'Correo o contraseña incorrectos'
      })

    }

  }

  return (

    <div
      className='d-flex justify-content-center align-items-center'
      style={{
        height: '100vh',
        background: 'linear-gradient(to right, #0f172a, #1e293b)'
      }}
    >

      <div
        className='card p-5 border-0 custom-shadow'
        style={{
          width: '420px',
          borderRadius: '20px'
        }}
      >

        <div className='text-center mb-4'>

          <img
            src='https://cdn-icons-png.flaticon.com/512/3081/3081559.png'
            alt='logo'
            width='90'
          />

          <h2 className='mt-3 fw-bold'>
            Sistema Logístico
          </h2>

          <p className='text-muted'>
            Gestión inteligente de pedidos
          </p>

        </div>

        <form onSubmit={handleLogin}>

          <input
            type='email'
            placeholder='Correo electrónico'
            className='form-control mb-3 p-3'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type='password'
            placeholder='Contraseña'
            className='form-control mb-4 p-3'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className='btn btn-dark w-100 p-3'
            type='submit'
          >
            Ingresar
          </button>

        </form>

      </div>

    </div>
  )
}

export default Login