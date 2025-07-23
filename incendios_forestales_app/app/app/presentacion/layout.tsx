
import { Navigation } from '@/components/navigation'

export default function PresentacionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      {children}
    </div>
  )
}
