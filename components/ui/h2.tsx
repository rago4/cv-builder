import { cn } from '@/lib/utils'

export function H2({ className, ...props }: JSX.IntrinsicElements['h2']) {
  return (
    <h2
      {...props}
      className={cn('text-lg font-bold text-slate-800', className)}
    />
  )
}
