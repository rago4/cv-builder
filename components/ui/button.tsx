import { cn } from '@/lib/utils'

export function Button({
  variant,
  className,
  ...props
}: JSX.IntrinsicElements['button'] & {
  variant: 'primary' | 'outline'
}) {
  return (
    <button
      {...props}
      className={cn(
        {
          'rounded-md px-3 py-2 text-sm font-medium transition-colors': true,
          'bg-slate-900 text-white hover:bg-slate-800': variant === 'primary',
          'border border-slate-300 bg-white text-slate-800 hover:bg-slate-100':
            variant === 'outline',
        },
        className
      )}
    />
  )
}
