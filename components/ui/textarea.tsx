import { cn } from '@/lib/utils'

export function Textarea({
  className,
  ...props
}: JSX.IntrinsicElements['textarea']) {
  return (
    <textarea
      {...props}
      className={cn(
        'rounded-md border border-slate-300 px-2 py-1 text-sm text-slate-800 shadow',
        className
      )}
    />
  )
}
