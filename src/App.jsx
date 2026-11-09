import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Library from './pages/Library.jsx'
import Dictionary from './pages/Dictionary.jsx'
import Profile from './pages/Profile.jsx'
import BookPage from './pages/BookPage.jsx'
import ChapterPage from './pages/ChapterPage.jsx'
import ReferencePage from './pages/ReferencePage.jsx'
import Approach from './pages/Approach.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="library" element={<Library />} />
        <Route path="dictionary" element={<Dictionary />} />
        <Route path="profile" element={<Profile />} />
        <Route path="library/:bookSlug" element={<BookPage />} />
        <Route path="library/:bookSlug/read/:chapterId" element={<ReferencePage />} />
        <Route path="library/:bookSlug/:chapterSlug" element={<ChapterPage />} />
        <Route path="approach" element={<Approach />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
