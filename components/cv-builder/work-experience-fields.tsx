import { XIcon } from 'lucide-react'

import { useContentContext } from '@/components/main-content'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export function WorkExperienceFields() {
  const { workExperience, setWorkExperience } = useContentContext()
  const handleRemove = (id: string) => {
    setWorkExperience((prev) => {
      return prev.filter((item) => item.id !== id)
    })
  }
  const handleFieldChange = (id: string, key: string, value: string) => {
    setWorkExperience((prev) =>
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
      {workExperience.map(
        ({ id, company, position, startDate, endDate, description }) => {
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
                <Label htmlFor={`company-${id}`}>Company</Label>
                <Input
                  id={`company-${id}`}
                  className="w-full"
                  type="text"
                  value={company}
                  onChange={(e) => {
                    handleFieldChange(id, 'company', e.target.value)
                  }}
                  placeholder="Acme Corporation"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor={`position-${id}`}>Position</Label>
                <Input
                  id={`position-${id}`}
                  className="w-full"
                  type="text"
                  value={position}
                  onChange={(e) => {
                    handleFieldChange(id, 'position', e.target.value)
                  }}
                  placeholder="Senior Software Engineer"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor={`start-date-${id}`}>Start date</Label>
                <Input
                  id={`start-date-${id}`}
                  className="w-full"
                  type="date"
                  value={startDate}
                  onChange={(e) => {
                    handleFieldChange(id, 'startDate', e.target.value)
                  }}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor={`end-date-${id}`}>End date</Label>
                <Input
                  id={`end-date-${id}`}
                  className="w-full"
                  type="date"
                  value={endDate}
                  onChange={(e) => {
                    handleFieldChange(id, 'endDate', e.target.value)
                  }}
                />
                <p className="text-xs text-slate-600">Leave empty if present</p>
              </div>
              <div className="col-span-2 space-y-1">
                <Label htmlFor={`description-${id}`}>Description</Label>
                <Textarea
                  id={`description-${id}`}
                  className="w-full resize-none"
                  value={description}
                  onChange={(e) => {
                    handleFieldChange(id, 'description', e.target.value)
                  }}
                  rows={3}
                  placeholder="Describe your role and responsibilities. Use semicolons to switch from sentence to a list."
                />
              </div>
            </div>
          )
        }
      )}
    </div>
  )
}
