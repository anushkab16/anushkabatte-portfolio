'use client'

import { useEffect, useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { TrafficLights } from './projectsData'

const CONTACT_EMAIL = 'anushkabatte.work@gmail.com'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export function ContactModal({ onClose }: { onClose: () => void }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })
      if (!res.ok) throw new Error('request failed')
      setStatus('sent')
      setName('')
      setEmail('')
      setMessage('')
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'mt-1.5 w-full rounded-lg border bg-bg px-3.5 py-2.5 text-[13px] text-text placeholder:text-muted focus:outline-none focus:border-rose'

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-6"
      style={{ background: 'rgba(10,6,8,0.7)', backdropFilter: 'blur(4px)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 12 }}
        transition={{ type: 'spring', stiffness: 300, damping: 28 }}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[85vh] w-full max-w-md overflow-y-auto rounded-[20px] border"
        style={{ background: '#2a1820', borderColor: 'rgba(232,217,193,0.12)' }}
      >
        <div
          className="sticky top-0 z-10 flex items-center gap-3 rounded-t-[20px] border-b px-4 py-3"
          style={{ background: '#2a1820', borderColor: 'rgba(232,217,193,0.08)' }}
        >
          <button type="button" onClick={onClose} aria-label="Close" className="cursor-pointer">
            <TrafficLights />
          </button>
          <div
            className="flex-1 rounded-md px-3 py-1 text-center text-[11px] text-muted"
            style={{ background: 'rgba(232,217,193,0.06)' }}
          >
            Contact
          </div>
        </div>

        <div className="p-6">
          <h3 className="font-display text-[26px] font-bold text-text">Contact</h3>
          <p className="mt-2 text-[13px] font-light leading-relaxed text-muted">
            Open to DevRel roles, collabs, research conversations, or just a good chat about
            what&rsquo;s next.
          </p>

          <div className="my-6 h-px w-full" style={{ background: 'rgba(232,217,193,0.08)' }} />

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label className="block text-[12px] text-text">
              Name <span className="text-rose">*</span>
              <input
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className={inputClass}
              />
            </label>

            <label className="block text-[12px] text-text">
              Email <span className="text-rose">*</span>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className={inputClass}
              />
            </label>

            <label className="block text-[12px] text-text">
              Message
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your message"
                rows={4}
                className={`${inputClass} resize-none`}
              />
            </label>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="mt-2 w-full rounded-xl bg-burgundy px-5 py-3 text-[13px] font-medium text-text transition-colors hover:bg-rose hover:text-bg disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending…' : 'Send it →'}
            </button>

            {status === 'sent' && (
              <p className="text-center text-[12px] text-rose">
                Message sent — thanks for reaching out!
              </p>
            )}

            {status === 'error' && (
              <p className="text-center text-[12px] text-muted">
                Something went wrong. Email me directly at{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-rose hover:underline">
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            )}
          </form>
        </div>
      </motion.div>
    </motion.div>
  )
}
