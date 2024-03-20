import { Route, Routes } from "react-router-dom"
import { MarvelPage, DcPage } from '../heroes'
import { LoginPage } from '../auth'
import { Navbar } from "../UI"


export const AppRouter = () => {
  return (
    <>

      <Navbar/>
      
        <Routes>
            <Route path='marvel' element={<MarvelPage/>}/>
            <Route path='dc' element={<DcPage/>}/>
            
            <Route path='login' element={<LoginPage/>}/>
            
            <Route path='/' element={<MarvelPage/>}/>
        </Routes>
    </>
  )
}
