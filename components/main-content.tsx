'use client'

import dynamic from 'next/dynamic'
import type { Dispatch, ReactNode, SetStateAction } from 'react'
import { createContext, useContext, useState } from 'react'

import { CVBuidler } from '@/components/cv-builder'
import { CVDisplay } from '@/components/cv-display'
import { defaultConsent } from '@/lib/utils'

const PDFExport = dynamic(
  () => import('@/components/pdf-export').then((mod) => mod.PDFExport),
  { ssr: false }
)

type FieldsType = {
  name: string
  title: string
  summary: string
  skills: string
  consentChecked: 'false' | 'true'
  consent: string
}

type ContactInformationType = {
  id: string
  type: 'dribbble' | 'github' | 'linkedin' | 'mail' | 'other' | 'phone' | 'x'
  value: string
}

type WorkExperienceType = {
  id: string
  company: string
  position: string
  startDate: string
  endDate: string
  description: string
}

type EducationType = {
  id: string
  degree: string
  institution: string
  startYear: string
  endYear: string
}

type ContentContextType = {
  fields: FieldsType
  onFieldChange: (key: keyof FieldsType, value: string) => void
  contactInformation: ContactInformationType[]
  setContactInformation: Dispatch<SetStateAction<ContactInformationType[]>>
  workExperience: WorkExperienceType[]
  setWorkExperience: Dispatch<SetStateAction<WorkExperienceType[]>>
  education: EducationType[]
  setEducation: Dispatch<SetStateAction<EducationType[]>>
}

const ContentContext = createContext<ContentContextType | undefined>(undefined)

function ContentProvider({ children }: { children: ReactNode }) {
  const [fields, setFields] = useState<FieldsType>({
    name: '',
    title: '',
    summary: '',
    skills: '',
    consentChecked: 'false',
    consent: defaultConsent,
  })
  const [contactInformation, setContactInformation] = useState<
    ContactInformationType[]
  >([])
  const [workExperience, setWorkExperience] = useState<WorkExperienceType[]>([])
  const [education, setEducation] = useState<EducationType[]>([])
  const onFieldChange = (key: keyof FieldsType, value: string) => {
    setFields((prev) => {
      return { ...prev, [key]: value }
    })
  }
  return (
    <ContentContext.Provider
      value={{
        fields,
        onFieldChange,
        contactInformation,
        setContactInformation,
        workExperience,
        setWorkExperience,
        education,
        setEducation,
      }}
    >
      {children}
    </ContentContext.Provider>
  )
}

export function useContentContext() {
  const context = useContext(ContentContext)
  if (context === undefined) {
    throw new Error('useContentContext must be used within a ContentProvider')
  }
  return context
}

export function MainContent() {
  return (
    <ContentProvider>
      <section className="border-b border-l-0 border-slate-200 p-8 lg:border-b-0 lg:border-r">
        <CVBuidler />
      </section>
      <section className="space-y-4 bg-slate-50 p-8">
        <CVDisplay />
        <PDFExport />
      </section>
    </ContentProvider>
  )
}
