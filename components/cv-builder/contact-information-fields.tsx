import { useContentContext } from '@/components/main-content'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'

type SocialsType = keyof typeof socials

const socials = {
  dribbble: 'Dribbble',
  github: 'GitHub',
  linkedin: 'LinkedIn',
  mail: 'Email',
  other: 'Other',
  phone: 'Phone',
  x: 'X (formerly Twitter)',
}

export function ContactInformationFields() {
  const { contactInformation, setContactInformation } = useContentContext()
  const handleTypeChange = (id: string, type: SocialsType) => {
    setContactInformation((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, type }
        }
        return item
      })
    )
  }
  const handleValueChange = (id: string, value: string) => {
    setContactInformation((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, value }
        }
        return item
      })
    )
  }
  return (
    <div className="space-y-3">
      {contactInformation.map(({ id, type, value }) => {
        return (
          <div key={id} className="grid grid-cols-2 gap-3">
            <Select
              value={type}
              onChange={(event) => {
                handleTypeChange(id, event.target.value as SocialsType)
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
              type={
                type === 'mail' ? 'email' : type === 'phone' ? 'tel' : 'text'
              }
              value={value}
              onChange={(event) => {
                handleValueChange(id, event.target.value)
              }}
              placeholder={
                type === 'mail'
                  ? 'test@mail.com'
                  : type === 'phone'
                    ? '+1234567890'
                    : `https://${type}.com`
              }
            />
          </div>
        )
      })}
    </div>
  )
}
