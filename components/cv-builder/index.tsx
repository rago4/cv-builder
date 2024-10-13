'use client'

import { PlusIcon } from 'lucide-react'

import { useContentContext } from '@/components/main-content'
import { Button } from '@/components/ui/button'
import { H2 } from '@/components/ui/h2'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { defaultConsent, uuid } from '@/lib/utils'

import { ContactInformationFields } from './contact-information-fields'
import { EducationFields } from './education-fields'
import { WorkExperienceFields } from './work-experience-fields'

export function CVBuidler() {
  const {
    fields,
    onFieldChange,
    contactInformation,
    setContactInformation,
    workExperience,
    setWorkExperience,
    education,
    setEducation,
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
  const handleEducationAdd = () => {
    setEducation((prev) => {
      return [
        ...prev,
        {
          id: uuid(),
          degree: '',
          institution: '',
          startYear: '',
          endYear: '',
        },
      ]
    })
  }
  const handleFieldsClear = () => {
    if (confirm("Clear all fields? This can't be undone.")) {
      onFieldChange('name', '')
      onFieldChange('title', '')
      setContactInformation([])
      onFieldChange('summary', '')
      onFieldChange('skills', '')
      setWorkExperience([])
      setEducation([])
      onFieldChange('consentChecked', 'false')
      onFieldChange('consent', defaultConsent)
    }
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
          variant="outline"
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
        <Textarea
          className="w-full resize-none"
          value={fields.skills}
          onChange={(e) => onFieldChange('skills', e.target.value)}
          rows={3}
          placeholder="List of skills separated by semicolon e.g. React, Next.js; TypeScript, JavaScript (ES6+)"
        />
      </div>
      <div className="space-y-2">
        <H2>Work Experience</H2>
        <Button
          className="flex w-full items-center justify-center space-x-0.5 md:w-auto"
          variant="outline"
          type="button"
          onClick={handleWorkExperienceAdd}
        >
          <PlusIcon size={16} />
          <span>Add Experience</span>
        </Button>
        {workExperience.length > 0 && <WorkExperienceFields />}
      </div>
      <div className="space-y-2">
        <H2>Education</H2>
        <Button
          className="flex w-full items-center justify-center space-x-0.5 md:w-auto"
          variant="outline"
          type="button"
          onClick={handleEducationAdd}
        >
          <PlusIcon size={16} />
          <span>Add Education</span>
        </Button>
        {education.length > 0 && <EducationFields />}
      </div>
      <div className="space-y-2">
        <H2>Consent</H2>
        <label className="flex w-fit items-center space-x-2">
          <input
            type="checkbox"
            checked={fields.consentChecked === 'true'}
            onChange={(e) => {
              onFieldChange('consentChecked', String(e.target.checked))
            }}
          />
          <span className="text-sm">Include consent</span>
        </label>
        <Textarea
          className="w-full resize-none"
          value={fields.consent}
          onChange={(e) => {
            onFieldChange('consent', e.target.value)
          }}
          disabled={fields.consentChecked === 'false'}
          rows={3}
          placeholder="I hereby give consent..."
        />
      </div>
      <Button variant="primary" type="button" onClick={handleFieldsClear}>
        Clear fields
      </Button>
    </form>
  )
}
