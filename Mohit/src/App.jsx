import Layout from "./Layout";
import Home from "./components/Header/Home";
import Contact from './components/Header/Contact'
import Services from './components/Header/Services'
import About from './components/Header/About'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom";

function App() {

const router = createBrowserRouter([
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />}  />
        <Route path='about' element={<About />}  />
        <Route path='contact' element={<Contact />}  />
        <Route path='services' element={<Services />}  />
      </Route>
    )
])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
