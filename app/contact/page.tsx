"use client"

import { useState } from "react"
import { MapPin, Phone, Mail } from "lucide-react"
import Navigation from "@/components/navigation"
import AppointmentModal from "@/components/appointment-modal"
import Footer from "@/components/footer"

export default function ContactPage() {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Navigation onBookAppointment={() => setAppointmentModalOpen(true)} />
      <AppointmentModal isOpen={appointmentModalOpen} onClose={() => setAppointmentModalOpen(false)} />

      {/* Page Header */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Contact Us</h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            Get in touch with us for any inquiries or appointments
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12">
            <div className="p-6 sm:p-8 rounded-xl bg-card border border-border text-center hover:border-primary transition-colors">
              <MapPin className="text-primary mx-auto mb-4" size={32} />
              <h4 className="font-semibold text-foreground mb-2 text-base sm:text-lg">Visit Us</h4>
              <p className="text-sm text-muted-foreground">5 Clinics across Nepal</p>
            </div>
            <div className="p-6 sm:p-8 rounded-xl bg-card border border-border text-center hover:border-primary transition-colors">
              <Phone className="text-primary mx-auto mb-4" size={32} />
              <h4 className="font-semibold text-foreground mb-2 text-base sm:text-lg">Call Us</h4>
              <a href="tel:+977-9851000531" className="text-sm text-muted-foreground hover:text-primary">
                +977-9851000531
              </a>
            </div>
            <div className="p-6 sm:p-8 rounded-xl bg-card border border-border text-center hover:border-primary transition-colors">
              <Mail className="text-primary mx-auto mb-4" size={32} />
              <h4 className="font-semibold text-foreground mb-2 text-base sm:text-lg">Email Us</h4>
              <a href="mailto:sunaulobhabishya@gmail.com" className="text-sm text-muted-foreground hover:text-primary">
                sunaulobhabishya@gmail.com
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-bold text-foreground text-xl sm:text-2xl">Head Office & Clinics</h4>
              <div className="space-y-3">
                <div className="p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors">
                  <p className="font-semibold text-foreground mb-1">Mitra Park Kathmandu Branch</p>
                  <p className="text-sm text-muted-foreground">📞 014585797 | 9851000531</p>
                </div>
                <div className="p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors">
                  <p className="font-semibold text-foreground mb-1">Koteshwor Bhaktapur Branch</p>
                  <p className="text-sm text-muted-foreground">📞 9760870137</p>
                </div>
                <div className="p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors">
                  <p className="font-semibold text-foreground mb-1">Hetauda Branch</p>
                  <p className="text-sm text-muted-foreground">📞 057527325 | 9855068832</p>
                </div>
                <div className="p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors">
                  <p className="font-semibold text-foreground mb-1">Narayanghat Branch</p>
                  <p className="text-sm text-muted-foreground">📞 056595106 | 9761734125</p>
                </div>
                <div className="p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors">
                  <p className="font-semibold text-foreground mb-1">Samakhusi Branch</p>
                  <p className="text-sm text-muted-foreground">📞 014985398 | 9851006564</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-foreground text-xl sm:text-2xl">Leadership Contact</h4>
              <div className="p-6 bg-card border border-border rounded-lg hover:border-primary transition-colors">
                <p className="font-semibold text-foreground text-lg mb-1">Phadindra Sapkota</p>
                <p className="text-sm text-primary mb-3">Chief Executive Officer</p>
                <div className="space-y-2">
                  <a
                    href="mailto:psapkotasbn@gmail.com"
                    className="text-sm text-muted-foreground hover:text-primary flex items-center gap-2"
                  >
                    <Mail size={16} />
                    psapkotasbn@gmail.com
                  </a>
                  <a
                    href="tel:+977-9851000531"
                    className="text-sm text-muted-foreground hover:text-primary flex items-center gap-2"
                  >
                    <Phone size={16} />
                    +977-9851000531
                  </a>
                </div>
              </div>

              {/* <div className="p-6 bg-primary/5 border border-primary/20 rounded-lg">
                <h5 className="font-semibold text-foreground mb-2 text-lg">Website</h5>
                <a
                  href="http://sunaulobhabishya.org.np"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  🌐 sunaulobhabishya.org.np
                </a>
              </div> */}
            </div>
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
