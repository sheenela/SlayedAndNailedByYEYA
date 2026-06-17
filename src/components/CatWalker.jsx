import { useState, useEffect, useRef, useCallback } from 'react'

const SPEED = 65 // px/s
const CAT_W = 90

const CATEGORY_STOPS = [
  { frac: 0.10, text: 'Psst… check our Services! 💅' },
  { frac: 0.25, text: 'See our Gallery! ✨' },
  { frac: 0.42, text: 'Peek at our Pricing! 💜' },
  { frac: 0.58, text: 'Book now! 📅' },
  { frac: 0.74, text: 'Read our Reviews! ⭐' },
  { frac: 0.88, text: 'Visit our Blog! 📖' },
]

function startPurrAudio() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)()
    const osc = ctx.createOscillator()
    const lfo = ctx.createOscillator()
    const lfoGain = ctx.createGain()
    const masterGain = ctx.createGain()

    osc.type = 'sawtooth'
    osc.frequency.value = 88
    lfo.type = 'sine'
    lfo.frequency.value = 26
    lfoGain.gain.value = 0.035

    lfo.connect(lfoGain)
    lfoGain.connect(masterGain.gain)
    osc.connect(masterGain)
    masterGain.connect(ctx.destination)
    masterGain.gain.value = 0.038

    osc.start()
    lfo.start()
    return { ctx, osc, lfo }
  } catch (_) {
    return null
  }
}

function stopPurrAudio(nodes) {
  if (!nodes) return
  try {
    nodes.osc.stop()
    nodes.lfo.stop()
    nodes.ctx.close()
  } catch (_) {}
}

function CatWalker() {
  const posRef = useRef(-CAT_W)
  const dirRef = useRef(1)
  const pausedRef = useRef(false)
  const lastTsRef = useRef(null)
  const rafRef = useRef()
  const seenStopsRef = useRef(new Set())
  const pauseTimerRef = useRef()
  const purrRef = useRef(null)
  const interactedRef = useRef(false)

  const [pos, setPos] = useState({ x: -CAT_W, dir: 1 })
  const [sitting, setSitting] = useState(false)
  const [speech, setSpeech] = useState('')

  // Unlock audio on first page interaction
  useEffect(() => {
    const unlock = () => { interactedRef.current = true }
    window.addEventListener('click', unlock, { once: true })
    window.addEventListener('touchstart', unlock, { once: true })
    return () => {
      window.removeEventListener('click', unlock)
      window.removeEventListener('touchstart', unlock)
    }
  }, [])

  const sitDown = useCallback((text) => {
    pausedRef.current = true
    setSitting(true)
    setSpeech(text)
    if (interactedRef.current) {
      purrRef.current = startPurrAudio()
    }
    pauseTimerRef.current = setTimeout(() => {
      stopPurrAudio(purrRef.current)
      purrRef.current = null
      pausedRef.current = false
      setSitting(false)
      setSpeech('')
    }, 2800)
  }, [])

  useEffect(() => {
    const tick = (ts) => {
      if (lastTsRef.current === null) {
        lastTsRef.current = ts
        rafRef.current = requestAnimationFrame(tick)
        return
      }
      const dt = Math.min((ts - lastTsRef.current) / 1000, 0.05)
      lastTsRef.current = ts

      if (!pausedRef.current) {
        posRef.current += dirRef.current * SPEED * dt
        const vw = window.innerWidth
        const maxX = vw + CAT_W

        if (posRef.current > maxX) {
          posRef.current = maxX
          dirRef.current = -1
          seenStopsRef.current.clear()
        } else if (posRef.current < -CAT_W) {
          posRef.current = -CAT_W
          dirRef.current = 1
          seenStopsRef.current.clear()
        }

        // Check if near a category stop
        const frac = posRef.current / vw
        for (const stop of CATEGORY_STOPS) {
          if (
            !seenStopsRef.current.has(stop.frac) &&
            Math.abs(frac - stop.frac) < 0.025
          ) {
            seenStopsRef.current.add(stop.frac)
            // ~60% chance to actually stop
            if (Math.random() < 0.6) {
              sitDown(stop.text)
              break
            }
          }
        }
      }

      setPos({ x: posRef.current, dir: dirRef.current })
      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(rafRef.current)
      clearTimeout(pauseTimerRef.current)
      stopPurrAudio(purrRef.current)
    }
  }, [sitDown])

  const { x, dir } = pos

  return (
    <div
      className="fixed bottom-20 md:bottom-2 z-[53] pointer-events-none select-none"
      style={{ left: x, willChange: 'left' }}
    >
      {/* Speech bubble */}
      {speech && (
        <div className="cat-speech-pop absolute bottom-[72px] left-[-8px] whitespace-nowrap bg-white/95 backdrop-blur-sm rounded-2xl px-3 py-2 shadow-xl border border-[#8B5CF6]/25">
          <p className="text-xs font-semibold text-gray-700 leading-tight">{speech}</p>
          <span className="absolute bottom-[-6px] left-8 w-3 h-3 bg-white/95 rotate-45 border-r border-b border-[#8B5CF6]/25" />
        </div>
      )}

      {/* Cat — flip horizontally when going left */}
      <div
        className={sitting ? 'cat-walk-sit' : 'cat-walk-bob'}
        style={{ transform: dir === -1 ? 'scaleX(-1)' : 'none' }}
      >
        <svg viewBox="0 0 100 75" width="90" height="68" xmlns="http://www.w3.org/2000/svg">
          {/* Tail — swishes at its base */}
          <g className="cat-walk-tail" style={{ transformOrigin: '83px 44px' }}>
            <path
              d="M 83,44 Q 96,32 92,18 Q 90,10 81,16"
              stroke="#6D28D9" strokeWidth="6" fill="none" strokeLinecap="round"
            />
            <path
              d="M 83,44 Q 96,32 92,18 Q 90,10 81,16"
              stroke="#A78BFA" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.4"
            />
          </g>

          {/* Body */}
          <ellipse cx="59" cy="46" rx="27" ry="15" fill="#8B5CF6" />
          <ellipse cx="55" cy="44" rx="18" ry="10" fill="#9333EA" opacity="0.35" />

          {/* Back legs */}
          <g className="cat-walk-leg-a">
            <rect x="65" y="56" width="7" height="16" rx="3.5" fill="#6D28D9" />
            <ellipse cx="68.5" cy="72" rx="4" ry="1.5" fill="#5B21B6" />
          </g>
          <g className="cat-walk-leg-b">
            <rect x="75" y="56" width="7" height="16" rx="3.5" fill="#7C3AED" />
            <ellipse cx="78.5" cy="72" rx="4" ry="1.5" fill="#5B21B6" />
          </g>

          {/* Front legs */}
          <g className="cat-walk-leg-b">
            <rect x="33" y="56" width="7" height="16" rx="3.5" fill="#6D28D9" />
            <ellipse cx="36.5" cy="72" rx="4" ry="1.5" fill="#5B21B6" />
          </g>
          <g className="cat-walk-leg-a">
            <rect x="43" y="56" width="7" height="16" rx="3.5" fill="#7C3AED" />
            <ellipse cx="46.5" cy="72" rx="4" ry="1.5" fill="#5B21B6" />
          </g>

          {/* Left ear */}
          <polygon points="13,23 9,8 22,18" fill="#8B5CF6" />
          <polygon points="14,22 11,12 20,18" fill="#F9A8D4" opacity="0.75" />

          {/* Right ear */}
          <polygon points="27,17 25,4 34,13" fill="#8B5CF6" />
          <polygon points="28,16 26,8 32,13" fill="#F9A8D4" opacity="0.75" />

          {/* Head */}
          <circle cx="24" cy="30" r="18" fill="#8B5CF6" />
          <circle cx="22" cy="28" r="12" fill="#9333EA" opacity="0.2" />

          {/* Eyes */}
          <ellipse cx="18" cy="27" rx="4.5" ry="5.5" fill="#0f0520" />
          <ellipse cx="30" cy="27" rx="4.5" ry="5.5" fill="#0f0520" />
          {/* Eye shine — big */}
          <circle cx="20" cy="25" r="2.2" fill="white" />
          <circle cx="32" cy="25" r="2.2" fill="white" />
          {/* Eye shine — small sparkle */}
          <circle cx="15.5" cy="29" r="0.9" fill="white" opacity="0.6" />
          <circle cx="27.5" cy="29" r="0.9" fill="white" opacity="0.6" />
          {/* Iris color */}
          <circle cx="20.5" cy="25.5" r="1" fill="#C084FC" />
          <circle cx="32.5" cy="25.5" r="1" fill="#C084FC" />

          {/* Nose */}
          <path d="M22,33 L24.5,31.5 L27,33 L24.5,35 Z" fill="#EC4899" />

          {/* Mouth */}
          <path d="M22,35 Q24.5,38 27,35" stroke="#7C3AED" strokeWidth="1.3" fill="none" strokeLinecap="round" />

          {/* Whiskers */}
          <line x1="1" y1="30" x2="16" y2="32" stroke="white" strokeWidth="0.9" opacity="0.55" />
          <line x1="1" y1="34" x2="16" y2="34.5" stroke="white" strokeWidth="0.9" opacity="0.55" />
          <line x1="33" y1="32" x2="47" y2="30" stroke="white" strokeWidth="0.9" opacity="0.55" />
          <line x1="33" y1="34.5" x2="47" y2="34" stroke="white" strokeWidth="0.9" opacity="0.55" />

          {/* Blush */}
          <ellipse cx="11" cy="34" rx="5.5" ry="3" fill="#EC4899" opacity="0.22" />
          <ellipse cx="37" cy="34" rx="5.5" ry="3" fill="#EC4899" opacity="0.22" />

          {/* Collar */}
          <path d="M 10,40 Q 24,46 38,40" stroke="#EC4899" strokeWidth="3" fill="none" strokeLinecap="round" />
          <circle cx="24" cy="44.5" r="3" fill="#FCD34D" />
          <circle cx="24" cy="44.5" r="1.5" fill="#F59E0B" />
        </svg>
      </div>
    </div>
  )
}

export default CatWalker
