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

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  })
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
  const { fields, contactInformation, workExperience, education } =
    useContentContext()
  const skills = fields.skills
    .split(';')
    .map((skill) => skill.trim())
    .filter((skill) => skill.length > 0)
  return (
    <div className="space-y-3 rounded-md bg-white p-8 shadow-lg">
      <div>
        {fields.name.length > 0 && (
          <p className="text-3xl font-bold">{fields.name}</p>
        )}
        {fields.title.length > 0 && (
          <p className="text-lg text-slate-600">{fields.title}</p>
        )}
      </div>
      {contactInformation.length > 0 && (
        <div className="space-y-1">
          <H2>Contact Information</H2>
          <ul className="space-y-1">
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
        <div className="space-y-1">
          <H2>Summary</H2>
          <p className="text-slate-600">{fields.summary}</p>
        </div>
      )}
      {skills.length > 0 && (
        <div className="space-y-1">
          <H2>Skills</H2>
          <ul className="list-inside list-disc">
            {skills.map((skill) => {
              return (
                <li key={skill} className="text-slate-600">
                  {skill}
                </li>
              )
            })}
          </ul>
        </div>
      )}
      {workExperience.length > 0 && (
        <div className="space-y-1">
          <H2>Work Experience</H2>
          <div className="space-y-2">
            {workExperience.map(
              ({ id, company, position, startDate, endDate, description }) => {
                const descriptionList = description
                  .split(';')
                  .map((item) => item.trim())
                  .filter((item) => item.length > 0)
                return (
                  <div key={id}>
                    <p className="font-medium text-slate-800">
                      {[position, company].join(' - ')}
                    </p>
                    <p className="text-slate-600">
                      {[
                        formatDate(startDate),
                        endDate ? formatDate(endDate) : 'Present',
                      ].join(' - ')}
                    </p>
                    {descriptionList.length > 1 ? (
                      <ul className="mt-1 list-inside list-disc">
                        {descriptionList.map((item) => (
                          <li key={item} className="text-slate-600">
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mt-1 text-slate-600">{description}</p>
                    )}
                  </div>
                )
              }
            )}
          </div>
        </div>
      )}
      {education.length > 0 && (
        <div className="space-y-1">
          <H2>Education</H2>
          <div className="space-y-2">
            {education.map(
              ({ id, institution, degree, startYear, endYear }) => {
                return (
                  <div key={id}>
                    <p className="font-medium text-slate-800">{degree}</p>
                    <p className="text-slate-600">{`${institution}, ${startYear} - ${endYear || 'Present'}`}</p>
                  </div>
                )
              }
            )}
          </div>
        </div>
      )}
    </div>
  )
}
