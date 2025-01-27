import Homepage from './components/Homepage'
import Mountains from './components/Mountains'
import Seas from './components/Seas'
import Deserts from './components/Deserts'
import Plains from './components/Plains'
import Forests from './components/Forests'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
<Route path="/" element={<Homepage/>}/>
<Route path="/Mountainss" element={<Mountains/>}/>
<Route path="/Seass" element={<Seas/>}/>
<Route path="/Desertss" element={<Deserts/>}/>
<Route path="/Plainss" element={<Plains/>}/>
<Route path="/Forestss" element={<Forests/>}/>
    </Routes>
    </>
  )
}

export default App
