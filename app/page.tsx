// app/page.tsx
import Link from 'next/link'

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Authentico</h1>
        <p className="text-xl mb-8">The official document verification platform using blockchain technology</p>
        <div className="space-x-4">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">Get Started</button>
          <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">Learn More</button>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-2xl font-bold mb-4">Secure Uploads</h2>
          <p>Upload your documents securely using our blockchain-powered platform.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-2xl font-bold mb-4">Quick Verification</h2>
          <p>Get your documents verified quickly by authorized organizations.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-2xl font-bold mb-4">Blockchain Security</h2>
          <p>Benefit from the immutability and security of blockchain technology.</p>
        </div>
      </section>

      <section className="bg-white p-8 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <h2 className="text-3xl font-bold mb-6">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
            <h3 className="font-bold mb-2">Sign Up</h3>
            <p>Create your account using a Web3 wallet</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
            <h3 className="font-bold mb-2">Upload</h3>
            <p>Upload your documents to the platform</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
            <h3 className="font-bold mb-2">Verify</h3>
            <p>Documents are verified by authorized organizations</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
            <h3 className="font-bold mb-2">Access</h3>
            <p>Access your verified documents anytime, anywhere</p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
        <button className="bg-blue-500 text-white px-8 py-4 rounded-lg font-bold text-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">Sign Up Now</button>
      </section>
    </div>
  )
}
