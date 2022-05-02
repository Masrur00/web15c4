import { Route , Routes } from "react-router-dom"
import { Navbar } from './component/Navbar'
import { Login } from './component/Login'
import { Home } from './component/Home'


function App() {
  

  return (
    <div className="App">
     <Navbar />     
     <Routes>
       <Route path="/">
         <Home />
       </Route>
       <Route path="/login">
         <Login />
       </Route>
       
     </Routes>
    </div>
  )
}

export default App
