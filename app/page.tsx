import Link from 'next/link'
import Logo from '@/components/Logo'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">
              <span className="text-red-600">Fire</span>Academy.io
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl font-bold mb-6">
              Service Discontinuation Notice
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              The FireAcademy.io Chia RPC API will become unavailable on January 30th, 2025.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              You may still access your{' '}
              <Link href="https://dashboard.fireacademy.io" className="text-red-600 hover:underline">
                dashboard
              </Link>{' '}
              until the deadline.
            </p>
            <p className="text-lg text-gray-600">
              Our blog is available{' '}
              <Link href="https://blog.fireacademy.io" className="text-red-600 hover:underline">
                here
              </Link>.
            </p>
          </div>
          
          <div className="w-full md:w-1/2">
            <Logo />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="font-bold text-gray-700 uppercase mb-4">
                FIREACADEMY SRL
              </h3>
              <p className="text-gray-600">
                Str. Amiral Ioan Murgescu 1<br />
                Bl. 401, Sc.A, Ap. 1, Parter<br />
                Sector 2, 021753, Bucuresti, Romania<br />
                Contact: support@fireacademy.io
              </p>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="font-bold text-gray-700 uppercase mb-4">
                Legal
              </h3>
              <div className="space-y-2">
                <div>
                  <Link href="/terms-and-conditions.txt" className="text-gray-600 hover:text-red-600">
                    Terms and Conditions
                  </Link>
                </div>
                <div>
                  <Link href="/privacy-policy.txt" className="text-gray-600 hover:text-red-600">
                    Privacy Policy
                  </Link>
                </div>
                <div>
                  <Link href="/cookie-policy.txt" className="text-gray-600 hover:text-red-600">
                    Cookie Policy
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center text-gray-600 text-sm mt-8">
            Copyright 2021-2024 FireAcademy SRL
          </div>
        </div>
      </footer>
    </main>
  )
}
