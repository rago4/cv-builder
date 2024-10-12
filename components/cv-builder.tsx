'use client'

import { useState } from 'react'

import { Input } from '@/components/input'
import { Label } from '@/components/label'

export function CVBuidler() {
  const [fields, setFields] = useState({
    fullName: '',
    title: '',
    email: '',
    phone: '',
  })
  const handleChange = (key: keyof typeof fields, value: string) => {
    setFields((prev) => ({ ...prev, [key]: value }))
  }
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <h2 className="text-lg font-bold text-slate-800">Personal Information</h2>
      <div className="mt-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          className="mt-0.5 w-full"
          type="text"
          value={fields.fullName}
          onChange={(e) => handleChange('fullName', e.target.value)}
          placeholder="John Doe"
        />
      </div>
    </form>
  )
}
