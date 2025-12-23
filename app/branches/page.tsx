"use client"

import { useState } from "react"
import Image from "next/image"
import { MapPin, Phone, Clock } from "lucide-react"
import Navigation from "@/components/navigation"
import AppointmentModal from "@/components/appointment-modal"
import Footer from "@/components/footer"

export default function BranchesPage() {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Navigation onBookAppointment={() => setAppointmentModalOpen(true)} />
      <AppointmentModal isOpen={appointmentModalOpen} onClose={() => setAppointmentModalOpen(false)} />

      {/* Page Header */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Our Clinic Locations
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            SBN operates 5 static clinics in major cities across Nepal
          </p>
        </div>
      </section>

      {/* Branches Grid */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                name: "Mitra Park Kathmandu Branch",
                address: "Pulchowk, Lalitpur",
                phone: "014585797",
                whatsapp: "9851000531",
                hours: "Sunday-Friday: 9 AM - 5 PM",
                image: "/kathmandu-nepal-city-landscape.jpg",
                mapUrl: "https://maps.app.goo.gl/GhNzJaeXVMLGzXNHA",
              },
              {
                name: "Koteshwor Bhaktapur Branch",
                address: "Suryabinayak 02, Bhaktapur",
                phone: "",
                whatsapp: "9760870137",
                hours: "Sunday-Friday: 9 AM - 5 PM",
                image: "/bhaktapur-nepal.jpg",
                mapUrl: "https://www.google.com/maps/search/?api=1&query=Suryabinayak+Bhaktapur+Nepal",
              },
              {
                name: "Hetauda Branch",
                address: "Hetauda-10, Makawanpur",
                phone: "057527325",
                whatsapp: "9855068832",
                hours: "Sunday-Friday: 9 AM - 5 PM",
                image: "/hetauda-nepal.jpg",
                mapUrl: "https://maps.app.goo.gl/dYfDyc9XwgrFcpkw6",
              },
              {
                name: "Narayanghat Branch",
                address: "Redcross Building, Chitwan",
                phone: "056595106",
                whatsapp: "9761734125",
                hours: "Sunday-Friday: 9 AM - 5 PM",
                image: "/narayanghat-nepal.jpg",
                mapUrl: "https://maps.app.goo.gl/oNXoezB46VGJtG8d7",
              },
              {
                name: "Samakhusi Branch",
                address: "near agriculture bank",
                phone: "014985398",
                whatsapp: "9851006564",
                hours: "Sunday-Friday: 9 AM - 5 PM",
                image: "/pokhara-nepal.jpg",
                mapUrl: "https://maps.app.goo.gl/Nz6xab5PGx47GjYc6",
              },
            ].map((branch, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-card border border-border overflow-hidden hover:border-primary hover:shadow-lg transition-all group"
              >
                <div
                  className="relative h-48 sm:h-56 bg-muted cursor-pointer overflow-hidden"
                  onClick={() => window.open(branch.mapUrl, "_blank")}
                >
                  <Image
                    src={branch.image || "/placeholder.svg"}
                    alt={branch.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <MapPin className="text-white" size={32} />
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <h4 className="font-semibold text-foreground text-lg sm:text-xl mb-3">{branch.name}</h4>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-muted-foreground flex items-start gap-2">
                      <MapPin size={18} className="flex-shrink-0 mt-0.5 text-primary" />
                      <span
                        className="hover:text-primary cursor-pointer transition-colors"
                        onClick={() => window.open(branch.mapUrl, "_blank")}
                      >
                        {branch.address}
                      </span>
                    </p>
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <Phone size={18} className="flex-shrink-0 text-primary" />
                      <a href={`tel:${branch.phone}`} className="hover:text-primary transition-colors">
                        {branch.phone}
                      </a>
                    </p>
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <Clock size={18} className="flex-shrink-0 text-primary" />
                      <span>{branch.hours}</span>
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <a
                      href={branch.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 text-sm bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors text-center font-medium"
                    >
                      View on Google Maps
                    </a>
                    <a
                      href={`https://wa.me/${branch.whatsapp}?text=Hello%20Sunaulo%20Bhabishya%20Nepal`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 text-sm bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-center font-medium"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Google Translate Widget */}
      <div
        id="google_translate_element"
        className="fixed bottom-20 right-4 z-40 bg-primary text-primary-foreground rounded-full shadow-lg"
      ></div>
    </div>
  )
}
