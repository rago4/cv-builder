import { cn } from '@/lib/utils'

export const styles = {
  base: 'rounded-md px-3 py-2 text-sm font-medium transition-colors',
  primary: 'bg-slate-900 text-white hover:bg-slate-800',
  outline: 'border border-slate-300 bg-white text-slate-800 hover:bg-slate-100',
}

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
          [styles.base]: true,
          [styles.primary]: variant === 'primary',
          [styles.outline]: variant === 'outline',
        },
        className
      )}
    />
  )
}
