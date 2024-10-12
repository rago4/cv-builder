import { cn } from '@/lib/utils'

export function Select({
  className,
  ...props
}: JSX.IntrinsicElements['select']) {
  return (
    <select
      {...props}
      className={cn(
        'h-[30px] rounded-md border border-slate-300 px-2 text-sm text-slate-800 shadow',
        className
      )}
    />
  )
}
