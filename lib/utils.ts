import clsx, { type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

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
