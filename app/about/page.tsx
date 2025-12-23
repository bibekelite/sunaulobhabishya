"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart, Award, Users } from "lucide-react"
import Navigation from "@/components/navigation"
import AppointmentModal from "@/components/appointment-modal"
import Footer from "@/components/footer"

export default function AboutPage() {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false)

  const boardMembers = [
   
    {
      name: "Bimal Paudel",
      position: "Chairperson",
      image: "/bimal_paudel.jpg",
    },
     {
      name: "Khuma Acharya",
      position: "Vice-Chairperson",
      image: "/khuma.jpg",
    },
     {
      name: "Phadindra Sapkota",
      position: "Chief Executive Officer",
      image: "/phadindra.jpg",
    },
   
    {
      name: "Khagendra Siwakoti",
      position: "Treasurer",
      image: "/khagendra.jpg",
    },
     {
      name: "Bhanu Kandel",
      position: "Member",
      image: "/bhanu.jpg",
    },
    {
      name: "Bijay Shrestha",
      position: "Finance/Admin Manager",
      image: "/bijay.jpg",
    },
    {
      name: "Dr. Rita Gajurel",
      position: "Advisor",
      image: "/placeholder-user.jpg",
    },
    
  ]

  return (
    <div className="min-h-screen bg-background w-full max-w-full overflow-x-hidden relative">
      <Navigation onBookAppointment={() => setAppointmentModalOpen(true)} />
      <AppointmentModal isOpen={appointmentModalOpen} onClose={() => setAppointmentModalOpen(false)} />

      {/* Page Header */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            About Sunaulo Bhabishya Nepal
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            Established in 2007, working for healthy families and strong communities
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 sm:p-8 rounded-xl bg-card border border-border">
              <div className="w-16 h-16 mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Heart className="text-primary" size={32} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide accessible, quality family planning and reproductive health services to all communities in
                Nepal, with special focus on underserved populations. We strive to empower individuals and families to
                make informed decisions about their reproductive health and well-being.
              </p>
            </div>
            <div className="p-6 sm:p-8 rounded-xl bg-card border border-border">
              <div className="w-16 h-16 mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                <Award className="text-accent" size={32} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                A Nepal where every individual has access to comprehensive reproductive health services, leading to
                healthy families, reduced maternal mortality, and improved socio-economic conditions for all
                communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 sm:py-16 md:py-20 bg-primary/5">
        <div className="mx-auto max-w-4xl px-3 sm:px-4 md:px-6 lg:px-8">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 text-center text-balance">
            Our Story
          </h3>
          <div className="space-y-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
            <p>
              Sunaulo Bhabishya Nepal (SBN) was established in 2007 as a non-governmental and non-profit organization
              working in the field of family planning, safe abortion services, sexual and reproductive health services,
              and education.
            </p>
            <p>
              With the financial, managerial, and technical support of experienced professionals and social workers, SBN
              is committed to improving maternal and child health, expanding access to family planning, providing
              vaccination services, and improving the socio-economic conditions of Nepali communities.
            </p>
            <p>
              Over the years, we have expanded our services to 5 static clinics across Nepal, serving thousands of
              families in Kathmandu, Bhaktapur, Hetauda, Narayanghat, and Pokhara. Our dedicated team of healthcare
              professionals works tirelessly to ensure quality reproductive health services are accessible to all.
            </p>
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14 md:mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-4 text-balance">
              Recognition and Awards
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground text-balance">
              Recognized for excellent, low-cost, and free health services in the community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="p-6 sm:p-8 rounded-xl bg-card border-2 border-accent/30 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent/20 rounded-full flex items-center justify-center">
                <Heart className="text-accent" size={32} />
              </div>
              <h4 className="font-bold text-foreground mb-2 text-base sm:text-lg">Certificate of Appreciation</h4>
              <p className="text-sm text-muted-foreground">District Vaccination Coordination Committee, Chitwan</p>
            </div>

            <div className="p-6 sm:p-8 rounded-xl bg-card border-2 border-accent/30 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent/20 rounded-full flex items-center justify-center">
                <Heart className="text-accent" size={32} />
              </div>
              <h4 className="font-bold text-foreground mb-2 text-base sm:text-lg">Certificate of Appreciation</h4>
              <p className="text-sm text-muted-foreground">District Vaccination Coordination Committee, Makawanpur</p>
            </div>
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-12 sm:py-16 md:py-20 bg-primary/5">
        <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14 md:mb-16">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
              <Users className="text-primary" size={32} />
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-4 text-balance">
              Board of Directors
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground text-balance">
              Leadership dedicated to community health and family welfare
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {boardMembers.map((member) => (
              <div
                key={member.name}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary hover:shadow-lg transition-all text-center"
              >
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <h4 className="font-bold text-foreground mb-1 text-base sm:text-lg">{member.name}</h4>
                <p className="text-sm text-primary font-medium">{member.position}</p>
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
