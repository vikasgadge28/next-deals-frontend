import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import { Header } from "./components/header"
import { Home } from "./views/home"
import { Project } from "./views/project"
import { Hotel } from "./views/hotel"
import { Land } from "./views/land"
import { Footer } from "./components/footer"
import { About } from "./views/about"



function Layout(){
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    
    </>
  )
}
const router = createBrowserRouter([
  {path:'/', element:<Layout/>, children:[
    {index:true, element:<Home/>},
    {path:'about', element:<About/>},
    {path:'projects', element:<Project/>},
    {path:'hotels', element:<Hotel/>},
    {path:'lands', element:<Land/>},
    {path:'contact', element:<a href="/">project</a>},

  ]},
  
  
])


function App() {
  

  return (
    <RouterProvider router={router}/>

    
  )
}

export default App
