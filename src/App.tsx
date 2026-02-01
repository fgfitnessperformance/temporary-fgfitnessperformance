import logoWhite from './assets/logo-h-white.svg'
import NeuralNoise from './components/NeuralNoise'

function App() {
  return (
    <div className="bg-fg-base text-fg-text h-screen h-[100dvh] w-full overflow-hidden flex flex-col relative font-body">
      {/* Neural Noise Background - extends to safe areas */}
      <div className="absolute inset-0 w-full h-full overflow-hidden" style={{ top: 'env(safe-area-inset-top, 0)', bottom: 'env(safe-area-inset-bottom, 0)', marginTop: 'calc(-1 * env(safe-area-inset-top, 0))', marginBottom: 'calc(-1 * env(safe-area-inset-bottom, 0))' }}>
        <NeuralNoise />
      </div>

      {/* Gradient overlay - more opaque on mobile */}
      <div className="absolute inset-0 bg-gradient-to-t from-fg-base via-fg-base/60 to-fg-base/70 md:from-fg-base/80 md:via-transparent md:to-fg-base/40 z-[1] pointer-events-none" style={{ top: 'env(safe-area-inset-top, 0)', bottom: 'env(safe-area-inset-bottom, 0)', marginTop: 'calc(-1 * env(safe-area-inset-top, 0))', marginBottom: 'calc(-1 * env(safe-area-inset-bottom, 0))' }} />

      {/* Contenido Principal */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-6 md:p-6 relative z-10 w-full max-w-5xl mx-auto text-center pt-[env(safe-area-inset-top)]">
        {/* Logo con efecto electrico */}
        <div className="mb-4 md:mb-10 relative group">
          {/* Glow effect behind logo */}
          <div className="absolute inset-0 bg-fg-gold/20 blur-3xl animate-glow-smooth scale-150" />
          <img
            src={logoWhite}
            alt="FG Fitness Performance"
            className="relative w-40 md:w-80 lg:w-96 h-auto drop-shadow-[0_0_20px_rgba(255,215,0,0.4)] animate-float"
          />
        </div>

        {/* Titular - grande e impactante en movil */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wider uppercase leading-none mb-3 md:mb-6 px-2">
          NOSOTROS TAMBIEN <br />
          <span className="text-fg-gold animate-text-glow-smooth inline-block mt-1">NOS TRANSFORMAMOS</span>
        </h1>

        {/* Linea decorativa animada */}
        <div className="h-0.5 md:h-1 w-12 md:w-24 bg-fg-gold mb-4 md:mb-8 rounded-full animate-line-glow" />

        <p className="text-sm md:text-xl text-white/80 max-w-2xl leading-relaxed mb-6 md:mb-10 px-2">
          Estamos actualizando nuestra infraestructura digital.{' '}
          <br className="hidden md:block" />
          Preparando la mejor experiencia de{' '}
          <span className="text-white font-semibold">
            nutricion y entrenamiento
          </span>{' '}
          para tu rendimiento.
        </p>

        {/* Redes Sociales - Monochromatic with gold hover */}
        <div className="flex flex-col items-center gap-2 md:gap-4">
          <p className="text-fg-muted text-xs md:text-sm uppercase tracking-widest">Siguenos en</p>

          {/* Mobile: iconos en una fila - monochromatic */}
          <div className="flex md:hidden gap-3">
            <a
              href="https://instagram.com/fgfitnessperformance"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-fg-surface/80 border border-white/10 flex items-center justify-center hover:border-fg-gold hover:shadow-[0_0_15px_rgba(255,215,0,0.4)] transition-all duration-300"
            >
              <svg className="w-5 h-5 text-white/70" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://tiktok.com/@fgfitnessperformance"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-fg-surface/80 border border-white/10 flex items-center justify-center hover:border-fg-gold hover:shadow-[0_0_15px_rgba(255,215,0,0.4)] transition-all duration-300"
            >
              <svg className="w-5 h-5 text-white/70" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@fgfitnessperformance8547"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-fg-surface/80 border border-white/10 flex items-center justify-center hover:border-fg-gold hover:shadow-[0_0_15px_rgba(255,215,0,0.4)] transition-all duration-300"
            >
              <svg className="w-5 h-5 text-white/70" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a
              href="https://facebook.com/fgfitnessperformance"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-fg-surface/80 border border-white/10 flex items-center justify-center hover:border-fg-gold hover:shadow-[0_0_15px_rgba(255,215,0,0.4)] transition-all duration-300"
            >
              <svg className="w-5 h-5 text-white/70" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>

          {/* Desktop: con labels debajo - monochromatic with gold hover */}
          <div className="hidden md:flex gap-6">
            {/* Instagram */}
            <a
              href="https://instagram.com/fgfitnessperformance"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 transition-all duration-500 ease-out hover:scale-110"
            >
              <div className="w-12 h-12 rounded-full bg-fg-surface border border-white/10 flex items-center justify-center group-hover:border-fg-gold group-hover:shadow-[0_0_20px_rgba(255,215,0,0.4)] transition-all duration-500">
                <svg className="w-6 h-6 text-white/70 group-hover:text-fg-gold transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <span className="text-xs text-fg-muted group-hover:text-fg-gold transition-colors duration-500">@fgfitnessperformance</span>
            </a>

            {/* TikTok */}
            <a
              href="https://tiktok.com/@fgfitnessperformance"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 transition-all duration-500 ease-out hover:scale-110"
            >
              <div className="w-12 h-12 rounded-full bg-fg-surface border border-white/10 flex items-center justify-center group-hover:border-fg-gold group-hover:shadow-[0_0_20px_rgba(255,215,0,0.4)] transition-all duration-500">
                <svg className="w-6 h-6 text-white/70 group-hover:text-fg-gold transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </div>
              <span className="text-xs text-fg-muted group-hover:text-fg-gold transition-colors duration-500">@fgfitnessperformance</span>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@fgfitnessperformance8547"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 transition-all duration-500 ease-out hover:scale-110"
            >
              <div className="w-12 h-12 rounded-full bg-fg-surface border border-white/10 flex items-center justify-center group-hover:border-fg-gold group-hover:shadow-[0_0_20px_rgba(255,215,0,0.4)] transition-all duration-500">
                <svg className="w-6 h-6 text-white/70 group-hover:text-fg-gold transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
              <span className="text-xs text-fg-muted group-hover:text-fg-gold transition-colors duration-500">@fgfitnessperformance</span>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com/fgfitnessperformance"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 transition-all duration-500 ease-out hover:scale-110"
            >
              <div className="w-12 h-12 rounded-full bg-fg-surface border border-white/10 flex items-center justify-center group-hover:border-fg-gold group-hover:shadow-[0_0_20px_rgba(255,215,0,0.4)] transition-all duration-500">
                <svg className="w-6 h-6 text-white/70 group-hover:text-fg-gold transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <span className="text-xs text-fg-muted group-hover:text-fg-gold transition-colors duration-500">@fgfitnessperformance</span>
            </a>
          </div>
        </div>
      </main>

      {/* Footer - compact on mobile */}
      <footer className="relative z-10 py-3 md:py-6 text-center border-t border-white/5 bg-fg-base/90 backdrop-blur-sm w-full pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 px-4">
          <p className="text-fg-muted text-[10px] md:text-xs tracking-widest uppercase">
            &copy; 2026 FG Fitness Performance
          </p>
          <div className="flex gap-4">
            <a href="https://instagram.com/fgfitnessperformance" target="_blank" rel="noopener noreferrer" className="text-fg-muted hover:text-fg-gold transition-colors duration-300">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://tiktok.com/@fgfitnessperformance" target="_blank" rel="noopener noreferrer" className="text-fg-muted hover:text-fg-gold transition-colors duration-300">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
            <a href="https://www.youtube.com/@fgfitnessperformance8547" target="_blank" rel="noopener noreferrer" className="text-fg-muted hover:text-fg-gold transition-colors duration-300">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="https://facebook.com/fgfitnessperformance" target="_blank" rel="noopener noreferrer" className="text-fg-muted hover:text-fg-gold transition-colors duration-300">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
