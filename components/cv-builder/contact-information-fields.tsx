import { XIcon } from 'lucide-react'

import { useContentContext } from '@/components/main-content'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { socials } from '@/lib/utils'

export function ContactInformationFields() {
  const { contactInformation, setContactInformation } = useContentContext()
  const handleFieldChange = (id: string, key: string, value: string) => {
    setContactInformation((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, [key]: value }
        }
        return item
      })
    )
  }
  const handleRemove = (id: string) => {
    setContactInformation((prev) => {
      return prev.filter((item) => item.id !== id)
    })
  }
  return (
    <div className="space-y-2">
      {contactInformation.map(({ id, type, value }) => {
        return (
          <div key={id} className="flex items-center space-x-2">
            <Select
              className="w-full"
              value={type}
              onChange={(e) => {
                handleFieldChange(id, 'type', e.target.value)
              }}
            >
              {Object.entries(socials).map(([type, display]) => {
                return (
                  <option key={type} value={type}>
                    {display}
                  </option>
                )
              })}
            </Select>
            <Input
              className="w-full"
              type={
                type === 'mail' ? 'email' : type === 'phone' ? 'tel' : 'text'
              }
              value={value}
              onChange={(e) => {
                handleFieldChange(id, 'value', e.target.value)
              }}
              placeholder={
                type === 'mail'
                  ? 'test@mail.com'
                  : type === 'phone'
                    ? '+1234567890'
                    : `https://${type}.com`
              }
            />
            <button
              type="button"
              onClick={() => {
                handleRemove(id)
              }}
            >
              <XIcon className="text-slate-800" size={16} />
            </button>
          </div>
        )
      })}
    </div>
  )
}
