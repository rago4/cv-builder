import { cn } from '@/lib/utils'

export function Input({ className, ...props }: JSX.IntrinsicElements['input']) {
  return (
    <input
      {...props}
      className={cn(
        'rounded-md border border-slate-300 px-2 py-1 text-sm shadow',
        className
      )}
    />
  )
}
