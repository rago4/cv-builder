import clsx, { type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...classes: ClassValue[]): string {
  return twMerge(clsx(...classes))
}

export function uuid() {
  return Math.random().toString(16).substring(2)
}
