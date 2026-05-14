import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from "react-router"
import { useEffect } from "react"
import { useAuth } from "../store/authStore"

function RootLayout() {
  const checkAuth=useAuth((state)=>state.checkAuth)
  const loading=useAuth((state)=>state.loading)
  useEffect(()=>{
    checkAuth()
  },[])
  if(loading){
    return <p className="text-center mt-10">Loading..</p>
  }
  return (
    <div className="flex flex-col min-h-screen bg-[#f8fafc]">
        <Header/>
        <main className="flex-grow px-4 md:px-8 lg:px-12 py-8 w-full max-w-7xl mx-auto">
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default RootLayout