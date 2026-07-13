import { useState, useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { router } from '@/router'
import LoadingScreen from '@/components/shared/LoadingScreen'
import CustomCursor from '@/components/shared/CustomCursor'
import ScrollProgress from '@/components/ui/ScrollProgress'

const App = () => {
  const [loading, setLoading] = useState(true)

  return (
    <>
      <CustomCursor />
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: 'rgba(15,15,26,0.9)',
            color: '#f0f0ff',
            border: '1px solid rgba(255,255,255,0.08)',
            backdropFilter: 'blur(20px)',
            borderRadius: '12px',
          },
        }}
      />
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      {!loading && (
        <>
          <RouterProvider router={router} />
          <ScrollProgress />
        </>
      )}
    </>
  )
}

export default App
