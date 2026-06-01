import AppRoutes from './routes/AppRoutes'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="bg-bg min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  )
}

export default App
