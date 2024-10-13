import {
  DribbbleIcon,
  GithubIcon,
  LinkedinIcon,
  LinkIcon,
  MailIcon,
  PhoneIcon,
  TwitterIcon,
} from 'lucide-react'

import { useContentContext } from '@/components/main-content'
import { H2 } from '@/components/ui/h2'
import { socials } from '@/lib/utils'

const iconMap = {
  dribbble: DribbbleIcon,
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: MailIcon,
  other: LinkIcon,
  phone: PhoneIcon,
  x: TwitterIcon,
}

function getLinkProps(type: keyof typeof socials, value: string) {
  if (type === 'mail') {
    return { href: `mailto:${value}` }
  }
  if (type === 'phone') {
    return { href: `tel:${value}` }
  }
  return { href: value, target: '_blank', rel: 'noopener noreferrer' }
}

function ContactItem({
  type,
  value,
}: {
  type: keyof typeof socials
  value: string
}) {
  const Icon = iconMap[type] ?? LinkIcon
  return (
    <li className="flex items-center space-x-2 text-slate-600">
      <Icon size={16} />
      <a className="hover:underline" {...getLinkProps(type, value)}>
        {value}
      </a>
    </li>
  )
}

export function CVDisplay() {
  const { fields, contactInformation } = useContentContext()
  return (
    <div className="rounded-md bg-white p-8 shadow-lg">
      {fields.name.length > 0 && (
        <p className="text-2xl font-bold">{fields.name}</p>
      )}
      {fields.title.length > 0 && (
        <p className="text-lg text-slate-600">{fields.title}</p>
      )}
      {contactInformation.length > 0 && (
        <div className="mt-3">
          <H2>Contact Information</H2>
          <ul className="mt-1 space-y-1">
            {contactInformation.map(({ id, type, value }) => {
              return (
                <li key={id}>
                  <ContactItem type={type} value={value} />
                </li>
              )
            })}
          </ul>
        </div>
      )}
      {fields.summary.length > 0 && (
        <div className="mt-3">
          <H2>Summary</H2>
          <p className="mt-1 text-slate-600">{fields.summary}</p>
        </div>
      )}
    </div>
  )
}
