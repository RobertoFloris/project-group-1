import { GlobalProvider } from "./context/GlobalContext"

import { BrowserRouter, Routes, Route } from "react-router-dom"

import DefaultLayout from "./layouts/DefaultsLayout"

import Home from "./pages/Home"
import TravelPage from "./pages/TravelPage"
import DetailstravelPage from "./pages/DetailstravelPage"


const App = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<DefaultLayout />}>
            <Route path="/travels" element={<TravelPage />} />
            <Route path="/travels/details/:id" element={<DetailstravelPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App