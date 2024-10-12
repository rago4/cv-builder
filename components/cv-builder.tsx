'use client'

import { Input } from '@/components/input'
import { Label } from '@/components/label'
import { useContentContext } from '@/components/main-content'

export function CVBuidler() {
  const { fields, onFieldChange } = useContentContext()
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <h2 className="text-lg font-bold text-slate-800">Personal Information</h2>
      <div className="mt-2 grid grid-cols-1 gap-3 md:grid-cols-2">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            className="mt-0.5 w-full"
            type="text"
            value={fields.name}
            onChange={(e) => onFieldChange('name', e.target.value)}
            placeholder="Jane Doe"
          />
        </div>
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            className="mt-0.5 w-full"
            type="text"
            value={fields.title}
            onChange={(e) => onFieldChange('title', e.target.value)}
            placeholder="Senior Software Engineer"
          />
        </div>
      </div>
    </form>
  )
}
