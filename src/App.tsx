function App() {
  return (
    <div className="bg-fg-base text-fg-text h-screen w-full overflow-hidden flex flex-col relative font-body">
      {/* Fondo Ambientacion */}
      <div className="absolute inset-0 bg-grid z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-fg-base via-transparent to-transparent z-0 pointer-events-none" />

      {/* Contenido Principal */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 relative z-10 w-full max-w-5xl mx-auto text-center">
        {/* Logo Placeholder */}
        <div className="mb-12 relative group">
          <div className="absolute -inset-1 bg-fg-gold rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000" />
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-fg-surface border-2 border-fg-gold/30 flex items-center justify-center shadow-2xl">
            {/* SVG Icon: Dumbbell */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 text-fg-gold"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6.5 6.5 11 11" />
              <path d="m21 21-1-1" />
              <path d="m3 3 1 1" />
              <path d="m18 22 4-4" />
              <path d="m2 6 4-4" />
              <path d="m3 10 7-7" />
              <path d="m14 21 7-7" />
            </svg>
          </div>
        </div>

        {/* Titular */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-wider uppercase leading-tight mb-6">
          NOSOTROS TAMBIEN <br />
          <span className="text-fg-gold">NOS TRANSFORMAMOS</span>
        </h1>

        {/* Mensaje */}
        <div className="h-1 w-24 bg-fg-gold mb-8 rounded-full" />

        <p className="text-lg md:text-xl text-fg-muted max-w-2xl leading-relaxed">
          Estamos actualizando nuestra infraestructura digital.{' '}
          <br className="hidden md:block" />
          Preparando la mejor experiencia de{' '}
          <span className="text-white font-semibold">
            nutricion y entrenamiento
          </span>{' '}
          para tu rendimiento.
        </p>
      </main>

      {/* Footer Simple */}
      <footer className="relative z-10 py-6 text-center border-t border-white/5 bg-fg-base/80 backdrop-blur-sm w-full">
        <p className="text-fg-muted text-xs tracking-widest uppercase">
          &copy; 2026 FG Fitness Performance. All Rights Reserved.
        </p>
      </footer>
    </div>
  )
}

export default App
