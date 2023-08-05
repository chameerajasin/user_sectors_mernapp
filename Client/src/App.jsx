import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

import { CreateUserPage } from './pages/CreateUserPage'
import { ViewUsersPage } from './pages/ViewUsersPage'
import { UpdateUserPage } from './pages/UpdateUserPage'
import { RootLayer } from './layouts/RootLayout'
import { NotFound } from './pages/NotFound'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayer />}>
      <Route index element={<ViewUsersPage />} />
      <Route path='create' element={<CreateUserPage />} />
      <Route path='update/:id' element={<UpdateUserPage />} />

      <Route path='*' element={<NotFound />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
