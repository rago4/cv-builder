'use client'

import { PlusIcon } from 'lucide-react'

import { useContentContext } from '@/components/main-content'
import { H2 } from '@/components/ui/h2'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { cn, uuid } from '@/lib/utils'

import { ContactInformationFields } from './contact-information-fields'
import { WorkExperienceFields } from './work-experience-fields'

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
  const {
    fields,
    onFieldChange,
    contactInformation,
    setContactInformation,
    workExperience,
    setWorkExperience,
  } = useContentContext()
  const handleContactInformationAdd = () => {
    setContactInformation((prev) => [
      ...prev,
      { id: uuid(), type: 'mail', value: '' },
    ])
  }
  const handleWorkExperienceAdd = () => {
    setWorkExperience((prev) => {
      return [
        ...prev,
        {
          id: uuid(),
          company: '',
          position: '',
          startDate: '',
          endDate: '',
          description: '',
        },
      ]
    })
  }
  return (
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <div>
        <H2>Personal Information</H2>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <div className="space-y-1">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              className="w-full"
              type="text"
              value={fields.name}
              onChange={(e) => onFieldChange('name', e.target.value)}
              placeholder="Jane Doe"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              className="w-full"
              type="text"
              value={fields.title}
              onChange={(e) => onFieldChange('title', e.target.value)}
              placeholder="Senior Software Engineer"
            />
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <H2>Contact Information</H2>
        <Button
          className="flex w-full items-center justify-center space-x-0.5 md:w-auto"
          type="button"
          onClick={handleContactInformationAdd}
        >
          <PlusIcon size={16} />
          <span>Add Information</span>
        </Button>
        {contactInformation.length > 0 && <ContactInformationFields />}
      </div>
      <div className="space-y-2">
        <H2>Summary</H2>
        <Textarea
          className="w-full resize-none"
          value={fields.summary}
          onChange={(e) => onFieldChange('summary', e.target.value)}
          rows={3}
          placeholder="A passionate software engineer with 5 years of experience..."
        />
      </div>
      <div className="space-y-2">
        <H2>Skills</H2>
        <Input
          className="w-full"
          type="text"
          value={fields.skills}
          onChange={(e) => onFieldChange('skills', e.target.value)}
          placeholder="List of skills separated by semicolon e.g. React, Next.js; TypeScript, JavaScript (ES6+)"
        />
      </div>
      <div className="space-y-2">
        <H2>Work Experience</H2>
        <Button
          className="flex w-full items-center justify-center space-x-0.5 md:w-auto"
          type="button"
          onClick={handleWorkExperienceAdd}
        >
          <PlusIcon size={16} />
          <span>Add Experience</span>
        </Button>
        {workExperience.length > 0 && <WorkExperienceFields />}
      </div>
    </form>
  )
}
