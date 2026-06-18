import { useState } from 'react'
import type { EcosystemRole, RegistrationForm, FormStatus } from '../../types'

const API_URL = 'https://botleague-server.onrender.com'

const roles: { id: EcosystemRole; title: string }[] = [
  { id: 'judge',     title: 'Become a Judge' },
  { id: 'volunteer', title: 'Volunteer' },
  { id: 'member',    title: 'Community Member' },
]

type FormsState  = Record<EcosystemRole, RegistrationForm>
type StatusState = Record<EcosystemRole, FormStatus>

const emptyForm = (): RegistrationForm => ({ name: '', location: '', email: '' })

export default function Ecosystem() {
  const [forms, setForms] = useState<FormsState>({
    judge: emptyForm(), volunteer: emptyForm(), member: emptyForm(),
  })
  const [status, setStatus] = useState<StatusState>({
    judge: 'idle', volunteer: 'idle', member: 'idle',
  })

  const handleChange = (role: EcosystemRole, field: keyof RegistrationForm, value: string) => {
    setForms(prev => ({ ...prev, [role]: { ...prev[role], [field]: value } }))
  }

  const handleSubmit = async (role: EcosystemRole) => {
    const { name, location, email } = forms[role]
    if (!name || !location || !email) {
      setStatus(prev => ({ ...prev, [role]: 'error' }))
      return
    }
    try {
      setStatus(prev => ({ ...prev, [role]: 'loading' }))
      const res = await fetch(`${API_URL}/ecosystem/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, location, email, role }),
      })
      const data = await res.json()
      if (res.ok) {
        setStatus(prev => ({ ...prev, [role]: 'success' }))
        setForms(prev => ({ ...prev, [role]: emptyForm() }))
      } else {
        setStatus(prev => ({ ...prev, [role]: data.detail ?? 'error' }))
      }
    } catch {
      setStatus(prev => ({ ...prev, [role]: 'error' }))
    }
  }

  return (
    <section className="py-20 bg-dark" id="ecosystem">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title">Join the Ecosystem</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-9">
          {roles.map(role => (
            <div key={role.id} className="card p-7">
              <h3 className="font-display text-lg font-bold uppercase tracking-wide mb-5">{role.title}</h3>
              <div className="flex flex-col gap-3">
                {(['name', 'location', 'email'] as const).map(field => (
                  <input
                    key={field}
                    type={field === 'email' ? 'email' : 'text'}
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    value={forms[role.id][field]}
                    onChange={e => handleChange(role.id, field, e.target.value)}
                    className="w-full bg-black border border-dark-border rounded px-4 py-2.5 text-sm text-white placeholder-gray-500 outline-none focus:border-yellow transition-colors"
                  />
                ))}
                <button
                  onClick={() => handleSubmit(role.id)}
                  disabled={status[role.id] === 'loading'}
                  className="btn-primary text-center mt-1 disabled:opacity-60"
                >
                  {status[role.id] === 'loading' ? 'Submitting...' : 'Sign Up'}
                </button>
                {status[role.id] === 'success' && (
                  <p className="text-green-400 text-sm">✅ Registered successfully!</p>
                )}
                {status[role.id] === 'error' && (
                  <p className="text-red text-sm">❌ Something went wrong. Try again.</p>
                )}
                {status[role.id] !== 'idle' && status[role.id] !== 'loading' && status[role.id] !== 'success' && status[role.id] !== 'error' && (
                  <p className="text-red text-sm">❌ {status[role.id]}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
