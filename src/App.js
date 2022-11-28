import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.scss'
import Layout from './components/Layout'
import Main from './components/Main'
import About from './components/About'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path='/about' element={<About />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
