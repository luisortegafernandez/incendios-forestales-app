
import { Navigation } from '@/components/navigation'

export default function GuiaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <Navigation />
      {children}
    </div>
  )
}
