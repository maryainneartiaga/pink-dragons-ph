import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Members } from './pages/Members'
import { Merch } from './pages/Merch'
import { News } from './pages/News'
import { NewsArticle } from './pages/NewsArticle'
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="members" element={<Members />} />
          <Route path="merch" element={<Merch />} />
          <Route path="news" element={<News />} />
          <Route path="news/:slug" element={<NewsArticle />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
