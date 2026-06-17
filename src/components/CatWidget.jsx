import { useState } from 'react'
import { Link } from 'react-router-dom'

function playMeow() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)()
    const osc1 = ctx.createOscillator()
    const osc2 = ctx.createOscillator()
    const gain = ctx.createGain()
    osc1.connect(gain)
    osc2.connect(gain)
    gain.connect(ctx.destination)

    const now = ctx.currentTime
    osc1.type = 'sine'
    osc2.type = 'sine'

    osc1.frequency.setValueAtTime(950, now)
    osc1.frequency.exponentialRampToValueAtTime(550, now + 0.18)
    osc1.frequency.exponentialRampToValueAtTime(750, now + 0.32)
    osc1.frequency.exponentialRampToValueAtTime(420, now + 0.55)

    osc2.frequency.setValueAtTime(1900, now)
    osc2.frequency.exponentialRampToValueAtTime(1100, now + 0.18)
    osc2.frequency.exponentialRampToValueAtTime(1500, now + 0.32)
    osc2.frequency.exponentialRampToValueAtTime(840, now + 0.55)

    gain.gain.setValueAtTime(0, now)
    gain.gain.linearRampToValueAtTime(0.18, now + 0.04)
    gain.gain.setValueAtTime(0.18, now + 0.3)
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.55)

    osc1.start(now)
    osc1.stop(now + 0.55)
    osc2.start(now)
    osc2.stop(now + 0.55)
  } catch (_) {}
}

function CatWidget() {
  const [bouncing, setBouncing] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  const handleClick = () => {
    playMeow()
    setBouncing(true)
    setShowTooltip(true)
    setTimeout(() => setBouncing(false), 600)
    setTimeout(() => setShowTooltip(false), 3500)
  }

  return (
    <div className="fixed bottom-44 right-4 md:bottom-24 md:right-6 z-[55] flex flex-col items-end gap-2.5">
      {showTooltip && (
        <div className="cat-tooltip-enter bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-xl border border-[#8B5CF6]/20 whitespace-nowrap">
          <p className="text-sm font-medium text-gray-700 mb-2">Meow! Ready to get slayed? 🐾</p>
          <Link
            to="/booking"
            onClick={() => setShowTooltip(false)}
            className="block text-xs px-3 py-1.5 bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white rounded-full text-center font-semibold hover:shadow-md hover:scale-105 transition-all duration-200"
          >
            Book Your Appointment
          </Link>
        </div>
      )}

      <button
        onClick={handleClick}
        aria-label="Book your appointment"
        className={`w-20 h-20 cursor-pointer focus:outline-none select-none ${bouncing ? 'cat-bounce' : ''}`}
        style={{ filter: 'drop-shadow(0 6px 12px rgba(139,92,246,0.45))' }}
      >
        <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" width="80" height="80">
          <defs>
            <radialGradient id="catBg" cx="50%" cy="55%" r="50%">
              <stop offset="0%" stopColor="#A78BFA" />
              <stop offset="100%" stopColor="#EC4899" />
            </radialGradient>
          </defs>

          {/* Background bubble */}
          <circle cx="40" cy="40" r="38" fill="url(#catBg)" />

          {/* Left ear */}
          <polygon points="22,30 16,12 33,24" fill="#FFE4D6" />
          <polygon points="23,28 19,16 31,23" fill="#FECDD3" />

          {/* Right ear */}
          <polygon points="58,30 64,12 47,24" fill="#FFE4D6" />
          <polygon points="57,28 61,16 49,23" fill="#FECDD3" />

          {/* Cat face */}
          <circle cx="40" cy="43" r="22" fill="#FFE4D6" />

          {/* Eyes */}
          <ellipse cx="32" cy="39" rx="5" ry="6" fill="#1a0a2e" />
          <ellipse cx="48" cy="39" rx="5" ry="6" fill="#1a0a2e" />
          {/* Eye shine */}
          <circle cx="34" cy="37" r="2" fill="white" />
          <circle cx="50" cy="37" r="2" fill="white" />
          <circle cx="34.5" cy="37.5" r="0.9" fill="#8B5CF6" />
          <circle cx="50.5" cy="37.5" r="0.9" fill="#8B5CF6" />

          {/* Nose */}
          <ellipse cx="40" cy="47" rx="3" ry="2" fill="#EC4899" />

          {/* Mouth */}
          <path d="M37,49 Q40,53 43,49" stroke="#9F6B8A" strokeWidth="1.2" fill="none" strokeLinecap="round" />

          {/* Whiskers left */}
          <line x1="16" y1="45" x2="34" y2="47" stroke="#C9A9B8" strokeWidth="0.9" opacity="0.8" />
          <line x1="16" y1="49" x2="34" y2="49" stroke="#C9A9B8" strokeWidth="0.9" opacity="0.8" />

          {/* Whiskers right */}
          <line x1="46" y1="47" x2="64" y2="45" stroke="#C9A9B8" strokeWidth="0.9" opacity="0.8" />
          <line x1="46" y1="49" x2="64" y2="49" stroke="#C9A9B8" strokeWidth="0.9" opacity="0.8" />

          {/* Blush */}
          <ellipse cx="27" cy="48" rx="4.5" ry="2.5" fill="#EC4899" opacity="0.22" />
          <ellipse cx="53" cy="48" rx="4.5" ry="2.5" fill="#EC4899" opacity="0.22" />

          {/* Left arm (static, slightly visible) */}
          <ellipse cx="22" cy="60" rx="5" ry="8" fill="#FFE4D6" transform="rotate(-15,22,60)" />

          {/* Waving right paw */}
          <g className="cat-paw-wave" style={{ transformOrigin: '56px 57px' }}>
            <ellipse cx="62" cy="52" rx="7" ry="5" fill="#FFE4D6" transform="rotate(-35,62,52)" />
            <circle cx="58" cy="47" r="3" fill="#FFE4D6" />
            <circle cx="63" cy="45" r="3" fill="#FFE4D6" />
            <circle cx="68" cy="47" r="2.5" fill="#FFE4D6" />
            {/* Paw pads */}
            <ellipse cx="58" cy="47" rx="2" ry="1.5" fill="#FECDD3" opacity="0.7" />
            <ellipse cx="63" cy="45" rx="2" ry="1.5" fill="#FECDD3" opacity="0.7" />
            <ellipse cx="68" cy="47" rx="1.5" ry="1.2" fill="#FECDD3" opacity="0.7" />
          </g>
        </svg>
      </button>
    </div>
  )
}

export default CatWidget
