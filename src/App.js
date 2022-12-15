import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.scss'
import Layout from './components/Layout'
import Main from './components/Main'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'




function App() {
  return (
    <>
      <BrowserRouter basename="/Salma">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/portfolio' element={<Portfolio />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
