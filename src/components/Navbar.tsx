'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [time, setTime] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const tick = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('uz-UZ', { hour: '2-digit', minute: '2-digit', second: '2-digit' }))
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  const links = [
    { href: '/', label: 'Bosh sahifa' },
    { href: '/weather', label: 'Ob-havo' },
    { href: '/currency', label: 'Valyuta' },
  ]

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(5, 10, 20, 0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(0, 163, 255, 0.15)' : '1px solid transparent',
      transition: 'all 0.4s ease',
      padding: '0 1.5rem',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', height: '72px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '38px', height: '38px', borderRadius: '10px',
            background: 'linear-gradient(135deg, #00a3ff, #00e5ff)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '18px', boxShadow: '0 0 20px rgba(0, 163, 255, 0.4)',
          }}>🌐</div>
          <span style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: '1.4rem', background: 'linear-gradient(135deg, #00a3ff, #00e5ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>MeteoX</span>
        </Link>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }} className="hidden-mobile">
          {links.map(l => (
            <Link key={l.href} href={l.href} style={{
              textDecoration: 'none',
              padding: '8px 18px',
              borderRadius: '10px',
              fontSize: '0.9rem',
              fontWeight: 500,
              color: pathname === l.href ? '#00e5ff' : '#8ba7c2',
              background: pathname === l.href ? 'rgba(0, 163, 255, 0.12)' : 'transparent',
              border: pathname === l.href ? '1px solid rgba(0, 163, 255, 0.3)' : '1px solid transparent',
              transition: 'all 0.2s',
            }}>{l.label}</Link>
          ))}
        </div>

        {/* Live Clock */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '10px',
          padding: '8px 16px', borderRadius: '10px',
          background: 'rgba(0, 163, 255, 0.08)',
          border: '1px solid rgba(0, 163, 255, 0.2)',
        }}>
          <div style={{ position: 'relative', width: '8px', height: '8px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#2ed573', position: 'absolute' }} />
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#2ed573', position: 'absolute', animation: 'ping 1.5s ease-out infinite', opacity: 0.6 }} />
          </div>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem', color: '#00e5ff', fontWeight: 500 }}>{time}</span>
        </div>
      </div>
      <style>{`
        @keyframes ping { 0% { transform: scale(1); opacity: 0.6; } 100% { transform: scale(2.5); opacity: 0; } }
        @media (max-width: 768px) { .hidden-mobile { display: none !important; } }
      `}</style>
    </nav>
  )
}
