import './App.css'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import EntryVehicles from './pages/EntryVehicles'
import Entrys from './pages/Entrys'
import RecordsListPage from './pages/RecordsListPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="entry-vehicles" element={<EntryVehicles />} />
        <Route path="entrys" element={<Entrys />} />
        <Route path='recordListPage' element={<RecordsListPage/>} />
      </Route>
    </Routes>
  )
}

export default App

