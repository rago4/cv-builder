'use client'

import { PlusIcon } from 'lucide-react'

import { useContentContext } from '@/components/main-content'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn, uuid } from '@/lib/utils'

import { ContactInformationFields } from './contact-information-fields'

function H2({ className, ...props }: JSX.IntrinsicElements['h2']) {
  return (
    <h2
      {...props}
      className={cn('text-lg font-bold text-slate-800', className)}
    />
  )
}

function Button({ className, ...props }: JSX.IntrinsicElements['button']) {
  return (
    <button
      {...props}
      className={cn(
        'rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-800 transition-colors hover:bg-slate-100',
        className
      )}
    />
  )
}

export function CVBuidler() {
  const { fields, onFieldChange, contactInformation, setContactInformation } =
    useContentContext()
  const handleContactInformationAdd = () => {
    setContactInformation((prev) => [
      ...prev,
      { id: uuid(), type: 'mail', value: '' },
    ])
  }
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div>
        <H2>Personal Information</H2>
        <div className="mt-1 grid grid-cols-1 gap-3 md:grid-cols-2">
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
      </div>
      <div className="mt-5">
        <H2>Contact Information</H2>
        <Button
          className="mb-3 mt-2 flex w-full items-center justify-center space-x-0.5 md:w-auto"
          type="button"
          onClick={handleContactInformationAdd}
        >
          <PlusIcon size={16} />
          <span>Add Contact Information</span>
        </Button>
        {contactInformation.length > 0 && <ContactInformationFields />}
      </div>
    </form>
  )
}
