import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'

// Placeholder page for routes not yet built
function ComingSoon({ name }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center px-4">
        <h2 className="font-serif text-4xl font-bold text-primary mb-3">{name}</h2>
        <p className="text-slate-400 text-sm tracking-wide">This page is under construction.</p>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* Main pages */}
          <Route index element={<Home />} />
          <Route path="about" element={<ComingSoon name="About Us" />} />
          <Route path="blog" element={<ComingSoon name="Blog" />} />
          <Route path="contact" element={<ComingSoon name="Contact Us" />} />

          {/* Projects */}
          <Route path="projects/ongoing" element={<ComingSoon name="Ongoing Projects" />} />
          <Route path="projects/completed" element={<ComingSoon name="Completed Projects" />} />
          <Route path="projects/upcoming" element={<ComingSoon name="Upcoming Projects" />} />

          {/* Portals */}
          <Route path="portal/buyer" element={<ComingSoon name="Buyer Portal" />} />
          <Route path="portal/agent" element={<ComingSoon name="Agent Portal" />} />
          <Route path="portal/employee" element={<ComingSoon name="Employee Portal" />} />

          {/* Legal */}
          <Route path="privacy" element={<ComingSoon name="Privacy Policy" />} />
          <Route path="terms" element={<ComingSoon name="Terms of Use" />} />
          <Route path="sitemap" element={<ComingSoon name="Sitemap" />} />

          {/* 404 */}
          <Route
            path="*"
            element={
              <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="text-center">
                  <p className="font-serif text-8xl font-bold text-primary/20 mb-4">404</p>
                  <h2 className="font-serif text-2xl font-bold text-primary mb-2">
                    Page Not Found
                  </h2>
                  <p className="text-slate-400 text-sm">
                    The page you are looking for does not exist.
                  </p>
                </div>
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
