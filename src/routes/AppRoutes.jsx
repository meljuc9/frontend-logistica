import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import ProtectedRoute from './ProtectedRoute'

import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import Usuarios from '../pages/Usuarios'
import Pedidos from '../pages/Pedidos'
import CrearPedido from '../pages/CrearPedido'
import EditarPedido from '../pages/EditarPedido'
import AsignarRepartidor from '../pages/AsignarRepartidor'
import ActualizarEstado from '../pages/ActualizarEstado'
import Historial from '../pages/Historial'

function AppRoutes() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path='/'
          element={<Login />}
        />

        <Route
          path='/dashboard'
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path='/usuarios'
          element={
            <ProtectedRoute>
              <Usuarios />
            </ProtectedRoute>
          }
        />

        <Route
          path='/pedidos'
          element={
            <ProtectedRoute>
              <Pedidos />
            </ProtectedRoute>
          }
        />

        <Route
          path='/crear-pedido'
          element={
            <ProtectedRoute>
              <CrearPedido />
            </ProtectedRoute>
          }
        />

        <Route
          path='/editar-pedido'
          element={
            <ProtectedRoute>
              <EditarPedido />
            </ProtectedRoute>
          }
        />

        <Route
          path='/asignar-repartidor'
          element={
            <ProtectedRoute>
              <AsignarRepartidor />
            </ProtectedRoute>
          }
        />

        <Route
          path='/actualizar-estado'
          element={
            <ProtectedRoute>
              <ActualizarEstado />
            </ProtectedRoute>
          }
        />

        <Route
          path='/historial'
          element={
            <ProtectedRoute>
              <Historial />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>

  )
}

export default AppRoutes