import { cn } from '@/lib/utils'

export function Label({ className, ...props }: JSX.IntrinsicElements['label']) {
  return (
    <label
      {...props}
      className={cn('text-sm font-semibold text-slate-800', className)}
    />
  )
}
