'use client'

import type { Dispatch, ReactNode, SetStateAction } from 'react'
import { createContext, useContext, useState } from 'react'

import { CVBuidler } from '@/components/cv-builder'
import { CVDisplay } from '@/components/cv-display'

type FieldsType = {
  name: string
  title: string
}

type ContactInformationType = {
  id: string
  type: 'dribbble' | 'github' | 'linkedin' | 'mail' | 'other' | 'phone' | 'x'
  value: string
}

type ContentContextType = {
  fields: FieldsType
  onFieldChange: (key: keyof FieldsType, value: string) => void
  contactInformation: ContactInformationType[]
  setContactInformation: Dispatch<SetStateAction<ContactInformationType[]>>
}

const ContentContext = createContext<ContentContextType | undefined>(undefined)

function ContentProvider({ children }: { children: ReactNode }) {
  const [fields, setFields] = useState({
    name: '',
    title: '',
  })
  const [contactInformation, setContactInformation] = useState<
    ContactInformationType[]
  >([])
  return (
    <ContentContext.Provider
      value={{
        fields,
        onFieldChange: (key, value) => {
          setFields((prev) => {
            return { ...prev, [key]: value }
          })
        },
        contactInformation,
        setContactInformation,
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
      <section className="bg-slate-50 p-8">
        <CVDisplay />
      </section>
    </ContentProvider>
  )
}
