'use client'

import type { ReactNode } from 'react'
import { createContext, useContext, useState } from 'react'

import { CVBuidler } from '@/components/cv-builder'
import { CVDisplay } from '@/components/cv-display'

type Fields = {
  name: string
  title: string
}

type ContentContextType = {
  fields: Fields
  onFieldChange: (key: keyof Fields, value: string) => void
}

const ContentContext = createContext<ContentContextType | undefined>(undefined)

function ContentProvider({ children }: { children: ReactNode }) {
  const [fields, setFields] = useState({
    name: '',
    title: '',
  })
  return (
    <ContentContext.Provider
      value={{
        fields,
        onFieldChange: (key, value) => {
          setFields((prevFields) => ({
            ...prevFields,
            [key]: value,
          }))
        },
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

export function ContextContent() {
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
