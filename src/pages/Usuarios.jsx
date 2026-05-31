import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

import api from '../services/api'

function Usuarios() {

  const [usuarios, setUsuarios] = useState([])
  const [roles, setRoles] = useState([])

  useEffect(() => {

    cargarUsuarios()
    cargarRoles()

  }, [])

  const cargarUsuarios = async () => {

    try {

      const response =
      await api.get('/usuarios')

      setUsuarios(response.data)

    }

    catch (error) {

      console.error(error)

    }

  }

  const cargarRoles = async () => {

    try {

      const response =
      await api.get('/roles')

      setRoles(response.data)

    }

    catch (error) {

      console.error(error)

    }

  }

  const registrarUsuario = async () => {

    const opcionesRoles = roles
      .map(
        rol =>
          `<option value="${rol.nombre_rol}">
            ${rol.nombre_rol}
          </option>`
      )
      .join('')

    const { value: formValues } =
    await Swal.fire({

      title: 'Registrar Usuario',

      html: `

        <input
          id="nombre"
          class="swal2-input"
          placeholder="Nombre Completo"
        >

        <input
          id="email"
          class="swal2-input"
          placeholder="Correo Electrónico"
        >

        <input
          id="password"
          class="swal2-input"
          placeholder="Contraseña"
        >

        <label
          style="
            display:block;
            text-align:left;
            font-weight:bold;
            margin-top:10px;
            color:#334155;
          "
        >
          Rol del Usuario
        </label>

        <select
          id="rol"
          class="swal2-input"
        >
          ${opcionesRoles}
        </select>

      `,

      focusConfirm: false,

      preConfirm: () => {

        return {

          nombre:
          document.getElementById('nombre').value,

          email:
          document.getElementById('email').value,

          contraseña:
          document.getElementById('password').value,

          rol:
          document.getElementById('rol').value

        }

      }

    })

    if (!formValues) return

    try {

      await api.post(
        '/usuarios',
        formValues
      )

      Swal.fire({
        icon: 'success',
        title: 'Usuario registrado correctamente'
      })

      cargarUsuarios()

    }

    catch (error) {

      Swal.fire({
        icon: 'error',
        title: 'Error al registrar usuario'
      })

    }

  }

  const editarUsuario = async (usuario) => {

    const opcionesRoles = roles
      .map(
        rol =>
          `<option
            value="${rol.nombre_rol}"
            ${usuario.rol === rol.nombre_rol ? 'selected' : ''}
          >
            ${rol.nombre_rol}
          </option>`
      )
      .join('')

    const { value: formValues } =
    await Swal.fire({

      title: 'Editar Usuario',

      html: `

        <input
          id="nombre"
          class="swal2-input"
          value="${usuario.nombre}"
        >

        <input
          id="email"
          class="swal2-input"
          value="${usuario.email}"
        >

        <input
          id="password"
          class="swal2-input"
          value="${usuario.contraseña}"
        >

        <label
          style="
            display:block;
            text-align:left;
            font-weight:bold;
            margin-top:10px;
            color:#334155;
          "
        >
          Rol del Usuario
        </label>

        <select
          id="rol"
          class="swal2-input"
        >
          ${opcionesRoles}
        </select>

      `,

      focusConfirm: false,

      preConfirm: () => {

        return {

          nombre:
          document.getElementById('nombre').value,

          email:
          document.getElementById('email').value,

          contraseña:
          document.getElementById('password').value,

          rol:
          document.getElementById('rol').value

        }

      }

    })

    if (!formValues) return

    try {

      await api.put(
        `/usuarios/${usuario.id_usuario}`,
        formValues
      )

      Swal.fire({
        icon: 'success',
        title: 'Usuario actualizado'
      })

      cargarUsuarios()

    }

    catch (error) {

      Swal.fire({
        icon: 'error',
        title: 'Error al actualizar'
      })

    }

  }

  const eliminarUsuario = async (id) => {

    const respuesta =
    await Swal.fire({

      title: '¿Eliminar usuario?',

      text: 'Esta acción no podrá revertirse',

      icon: 'warning',

      showCancelButton: true,

      confirmButtonText: 'Sí, eliminar',

      cancelButtonText: 'Cancelar'

    })

    if (!respuesta.isConfirmed) return

    try {

      await api.delete(`/usuarios/${id}`)

      Swal.fire({
        icon: 'success',
        title: 'Usuario eliminado'
      })

      cargarUsuarios()

    }

    catch (error) {

      Swal.fire({
        icon: 'error',
        title: 'Error al eliminar'
      })

    }

  }

  return (

    <div className='table-responsive'>

      <Navbar />

      <div className='d-flex'>

        <Sidebar />

        <div className='container-fluid p-4'>

          <div className='d-flex justify-content-between align-items-center'>

            <h1 className='fw-bold'>
              Gestión de Usuarios
            </h1>

            <button
              onClick={registrarUsuario}
              className='btn btn-success rounded-pill px-4'
            >
              Registrar Usuario
            </button>

          </div>

          <table className='table table-hover table-striped mt-4'>

            <thead className='table-dark'>

              <tr>

                <th>ID</th>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Rol</th>
                <th>Acciones</th>

              </tr>

            </thead>

            <tbody>

              {usuarios.map((usuario) => (

                <tr key={usuario.id_usuario}>

                  <td>{usuario.id_usuario}</td>

                  <td>{usuario.nombre}</td>

                  <td>{usuario.email}</td>

                  <td>{usuario.rol}</td>

                  <td>

                    <button
                      onClick={() =>
                        editarUsuario(usuario)
                      }
                      className='btn btn-primary btn-sm me-2'
                    >
                      Editar
                    </button>

                    <button
                      onClick={() =>
                        eliminarUsuario(usuario.id_usuario)
                      }
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

export default Usuarios