import clsx, { type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const defaultConsent =
  'I hereby give consent for my personal data included in the application to be processed by (company name) for the purposes of the recruitment process.'

export const socials = {
  dribbble: 'Dribbble',
  github: 'GitHub',
  linkedin: 'LinkedIn',
  mail: 'Email',
  other: 'Other',
  phone: 'Phone',
  x: 'X (formerly Twitter)',
}

export function cn(...classes: ClassValue[]): string {
  return twMerge(clsx(...classes))
}

export function uuid() {
  return Math.random().toString(16).substring(2)
}
