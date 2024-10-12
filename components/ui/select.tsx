import { cn } from '@/lib/utils'

export function Select({
  className,
  ...props
}: JSX.IntrinsicElements['select']) {
  return (
    <select
      {...props}
      className={cn(
        'rounded-md border border-slate-300 px-2 py-1 text-sm shadow',
        className
      )}
    />
  )
}
