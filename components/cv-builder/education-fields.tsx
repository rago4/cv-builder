import { XIcon } from 'lucide-react'

import { useContentContext } from '@/components/main-content'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function EducationFields() {
  const currentYear = new Date().getFullYear()
  const { education, setEducation } = useContentContext()
  const handleRemove = (id: string) => {
    setEducation((prev) => {
      return prev.filter((item) => item.id !== id)
    })
  }
  const handleFieldChange = (id: string, key: string, value: string) => {
    setEducation((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, [key]: value }
        }
        return item
      })
    )
  }
  return (
    <div className="space-y-3">
      {education.map(({ id, institution, degree, startYear, endYear }) => {
        return (
          <div
            key={id}
            className="relative grid grid-cols-2 gap-x-3 gap-y-2 rounded-md border border-slate-200 bg-white px-4 py-3 shadow-md"
          >
            <button
              className="absolute right-2 top-2"
              type="button"
              onClick={() => {
                handleRemove(id)
              }}
            >
              <XIcon size={16} />
            </button>
            <div className="space-y-1">
              <Label htmlFor={`degree-${id}`}>Degree</Label>
              <Input
                id={`degree-${id}`}
                className="w-full"
                type="text"
                value={degree}
                onChange={(e) => {
                  handleFieldChange(id, 'degree', e.target.value)
                }}
                placeholder="Bachelor of Science in Computer Science"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor={`institution-${id}`}>Institution</Label>
              <Input
                id={`institution-${id}`}
                className="w-full"
                type="text"
                value={institution}
                onChange={(e) => {
                  handleFieldChange(id, 'institution', e.target.value)
                }}
                placeholder="University of Technology"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor={`start-year-${id}`}>Start year</Label>
              <Input
                id={`start-year-${id}`}
                className="w-full"
                type="number"
                value={startYear}
                onChange={(e) => {
                  handleFieldChange(id, 'startYear', e.target.value)
                }}
                min={1800}
                max={2200}
                placeholder={String(currentYear - 4)}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor={`end-year-${id}`}>End year</Label>
              <Input
                id={`end-year-${id}`}
                className="w-full"
                type="number"
                value={endYear}
                onChange={(e) => {
                  handleFieldChange(id, 'endYear', e.target.value)
                }}
                min={1900}
                max={2100}
                placeholder={String(currentYear)}
              />
              <p className="text-xs text-slate-600">Leave empty if present</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
