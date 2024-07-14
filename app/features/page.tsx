// app/features/page.tsx
import { CloudArrowUpIcon, ShieldCheckIcon, ClockIcon, DocumentCheckIcon, UserGroupIcon, ChartBarIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Secure Document Upload',
    description: 'Upload your documents securely using our advanced encryption techniques and blockchain technology.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Blockchain Verification',
    description: 'Leverage the power of blockchain for tamper-proof and immutable document verification.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Quick Turnaround',
    description: 'Get your documents verified quickly by authorized organizations with our efficient process.',
    icon: ClockIcon,
  },
  {
    name: 'Multi-Format Support',
    description: 'Upload and verify various document formats including PDFs, images, and more.',
    icon: DocumentCheckIcon,
  },
  {
    name: 'Organization Accounts',
    description: 'Special accounts for verifying organizations with team management capabilities.',
    icon: UserGroupIcon,
  },
  {
    name: 'Detailed Audit Logs',
    description: 'Access comprehensive audit trails for all actions taken on the platform.',
    icon: ChartBarIcon,
  },
]

export default function Features() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Authentico Features
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Discover the powerful features that make Authentico the leading platform for document verification.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="bg-white overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-lg p-6 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <div>
                  <feature.icon className="h-12 w-12 text-blue-500" aria-hidden="true" />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-gray-900">Ready to experience these features?</h3>
          <div className="mt-8">
            <button className="bg-blue-500 text-white px-8 py-4 rounded-lg font-bold text-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
