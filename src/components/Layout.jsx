import Header from './Header'
import Footer from './Footer'

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#1a1410] via-[#2a1f17] to-[#1a1410]">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
