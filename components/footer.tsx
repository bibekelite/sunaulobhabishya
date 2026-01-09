import Link from "next/link"
import { Heart, Facebook } from "lucide-react"

export default function Footer() {
  const branches = [
    { name: "Mitra Park", facebook: "https://facebook.com/sunaulobhabishyakathmandu" },
    { name: "Koteshwor", facebook: "https://facebook.com/sunaulobhabishyabhaktapur" },
    { name: "Hetauda", facebook: "https://www.facebook.com/sunaulobhabishyanepal.hetauda.9" },
    { name: "Narayanghat", facebook: "https://www.facebook.com/profile.php?id=100081492745681" },
    { name: "Samakhusi", facebook: "https://facebook.com/sunaulobhabishyapokhara" },
  ]

  return (
    <footer className="bg-foreground text-background py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary border-2 border-accent flex items-center justify-center">
                <Heart className="text-primary-foreground" size={16} />
              </div>
              <h3 className="font-bold text-sm sm:text-base">Sunaulo Bhabishya Nepal</h3>
            </div>
            <p className="text-xs sm:text-sm opacity-80 mb-2">सुखी परिवार, समृद्धिको आधार</p>
            <p className="text-xs sm:text-sm opacity-80">Established 2007 - Non-Government, Non-Profit Organization</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-2 text-xs sm:text-sm opacity-80">
              <li>
                <Link href="/" className="hover:opacity-100 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:opacity-100 transition-opacity">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:opacity-100 transition-opacity">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/branches" className="hover:opacity-100 transition-opacity">
                  Our Clinics
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:opacity-100 transition-opacity">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm sm:text-base">Contact</h4>
            <ul className="space-y-2 text-xs sm:text-sm opacity-80">
              <li>
                <a href="mailto:sunaulobhabishya@gmail.com" className="hover:opacity-100 transition-opacity">
                  sunaulobhabishyanepal@gmail.com
                  sunaulobhabishyanepalsbn@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+977-9851000531" className="hover:opacity-100 transition-opacity">
                  +977-9851000531
                </a>
              </li>
              {/* <li>
                <a
                  href="http://sunaulobhabishya.org.np"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-100 transition-opacity"
                >
                  sunaulobhabishya.org.np
                </a>
              </li> */}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm sm:text-base">Follow Us</h4>
            <div className="space-y-2">
              {branches.map((branch) => (
                <a
                  key={branch.name}
                  href={branch.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs sm:text-sm opacity-80 hover:opacity-100 transition-opacity group"
                >
                  <div className="p-1.5 bg-accent/20 rounded group-hover:bg-accent/40 transition-colors">
                    <Facebook size={14} />
                  </div>
                  <span>{branch.name} Branch</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-background/20 pt-6 sm:pt-8 text-center space-y-2">
          <p className="text-xs sm:text-sm opacity-80">&copy; 2025 Sunaulo Bhabishya Nepal. All rights reserved.</p>
          <p className="text-xs opacity-70">Designed with care for community health</p>
        </div>
      </div>
    </footer>
  )
}
