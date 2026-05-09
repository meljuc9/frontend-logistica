import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

function Historial() {

  const historial = [
    {
      id: 1,
      evento: 'Pedido creado',
      fecha: '2026-05-08'
    },
    {
      id: 2,
      evento: 'Pedido asignado',
      fecha: '2026-05-09'
    }
  ]

  return (

    <div>

      <Navbar />

      <div className='d-flex'>

        <Sidebar />

        <div className='container-fluid p-4'>

          <h1 className='fw-bold mb-4'>
            Historial del Sistema
          </h1>

          <div className='card border-0 custom-shadow p-4'>

            <table className='table table-hover align-middle table-striped mt-4'>

              <thead className='table-dark'>

                <tr>
                  <th>ID</th>
                  <th>Evento</th>
                  <th>Fecha</th>
                </tr>

              </thead>

              <tbody>

                {historial.map((item) => (

                  <tr key={item.id}>

                    <td>{item.id}</td>
                    <td>{item.evento}</td>
                    <td>{item.fecha}</td>

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

export default Historial