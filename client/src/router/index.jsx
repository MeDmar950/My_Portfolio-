import { Navigate, createBrowserRouter, RouterProvider, Outlet, ScrollRestoration } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HomePage from '@/features/home/HomePage'

const Layout = () => (
  <>
    <ScrollRestoration />
    <Navbar />
    <main className="min-h-screen">
      <Outlet />
    </main>
    <Footer />
  </>
)

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/about', element: <Navigate to="/#about" replace /> },
      { path: '/skills', element: <Navigate to="/#skills" replace /> },
      { path: '/projects', element: <Navigate to="/#projects" replace /> },
      { path: '/services', element: <Navigate to="/#services" replace /> },
      { path: '/testimonials', element: <Navigate to="/#testimonials" replace /> },
      { path: '/contact', element: <Navigate to="/#contact" replace /> },
      {
        path: '*',
        element: (
          <div className="min-h-screen flex items-center justify-center flex-col gap-4 text-center px-4">
            <h1 className="text-8xl font-black gradient-text">404</h1>
            <p className="text-[var(--text-secondary)] text-lg">Page not found.</p>
            <a href="/" className="mt-4 px-6 py-3 rounded-xl bg-gradient-to-r from-[#6c63ff] to-[#00d4aa] text-white font-semibold">
              Go Home
            </a>
          </div>
        ),
      },
    ],
  },
])
