import { useContentContext } from '@/components/main-content'

export function CVDisplay() {
  const { fields } = useContentContext()
  return (
    <div className="rounded-md bg-white p-6 shadow-lg">
      <p className="text-2xl font-bold">{fields.name}</p>
      <p className="text-slate-500">{fields.title}</p>
    </div>
  )
}
