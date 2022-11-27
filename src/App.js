import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.scss'
import Layout from './components/Layout'
import Main from './components/Main'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
