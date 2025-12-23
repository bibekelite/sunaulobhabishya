"use client"

import { useState } from "react"
import Image from "next/image"
import { Users, Heart, FileText, Activity, MessageSquare, Award, Stethoscope, Baby, Shield } from "lucide-react"
import Navigation from "@/components/navigation"
import AppointmentModal from "@/components/appointment-modal"
import Footer from "@/components/footer"

export default function ServicesPage() {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false)

  const services = [
    {
      title: "परिवार नियोजन सेवा",
      description:
        "व्यापक परिवार नियोजन परामर्श, गर्भनिरोधक विधिहरू - मौखिक चक्की, सुई (डिपो), आईयूसीडी (कपर टी), इम्प्लान्ट, र स्थायी विधिहरू (NSV/Minilap) सहित। निःशुल्क परामर्श र सेवा उपलब्ध।",
      icon: Users,
      image: "/family-planning-consultation-healthcare.jpg",
    },
    {
      title: "मातृ तथा प्रजनन स्वास्थ्य",
      description:
        "गर्भवती / सुत्केरी स्याहार सेवा, सुरक्षित प्रसव सहयोग, गर्भावस्था परामर्श, प्रसव पूर्व जाँच, अल्ट्रासाउन्ड, र आमा र नवजात शिशुहरूका लागि सुत्केरी स्याहार। पोषण परामर्श र स्तनपान सहयोग।",
      icon: Heart,
      image: "/maternal-health-reproductive-care-women-health.jpg",
    },
    {
      title: "स्वास्थ्य शिक्षा र प्रशिक्षण",
      description:
        "सामुदायिक सचेतना कार्यक्रम, विद्यालय स्वास्थ्य शिक्षा, किशोर-मैत्री सेवाहरू, साथी शिक्षक प्रशिक्षण, र स्वास्थ्य कार्यकर्ता तालिम। महिला समूह र युवा क्लब सँग साझेदारी।",
      icon: FileText,
      image: "/health-education-training-community-workshop.jpg",
    },
    {
      title: "यौनरोग / प्रजनन संक्रमण र एचआईभी परीक्षण",
      description:
        "गोप्य यौनरोग / प्रजनन संक्रमण निदान र उपचार, एचआईभी परामर्श र परीक्षण सेवा, रोकथाम कार्यक्रम, र नि:शुल्क प्रयोगशाला परीक्षण। गोपनीयता र सम्मानजनक सेवा सुनिश्चित।",
      icon: Activity,
      image: "/medical-testing-laboratory-healthcare.jpg",
    },
    {
      title: "युवा र किशोर परामर्श",
      description:
        "उमेर अनुकूल प्रजनन स्वास्थ्य जानकारी, साथी शिक्षा कार्यक्रम, युवाहरूका लागि गोप्य परामर्श, मासिक धर्म स्वच्छता व्यवस्थापन, र यौन शिक्षा। विशेष युवा क्लिनिक सेवा।",
      icon: MessageSquare,
      image: "/counseling-youth-healthcare-support.jpg",
    },
    {
      title: "आपतकालीन गर्भनिरोधक सेवा",
      description:
        "आपतकालीन गर्भनिरोधक चक्की (Emergency Contraceptive Pills), गर्भपतन पश्चात् स्याहार (Post Abortion Care), र जटिलताहरूको लागि रेफरल सेवाहरू। २४/७ आपतकालीन परामर्श।",
      icon: Award,
      image: "/emergency-medical-healthcare-hospital.jpg",
    },
    {
      title: "सुरक्षित गर्भपतन सेवा (MVA/MA)",
      description:
        "कानूनी र सुरक्षित गर्भपतन सेवा, म्यानुअल भ्याकुम एस्पिरेसन (MVA) र मेडिकल एबोर्शन (MA) विधि, गर्भपतन पूर्व र पश्चात् परामर्श, र फलोअप स्याहार।",
      icon: Stethoscope,
      image: "/medical-testing-laboratory-healthcare.jpg",
    },
    {
      title: "बाल स्वास्थ्य र खोप सेवा",
      description:
        "नियमित बाल स्वास्थ्य जाँच, खोप कार्यक्रम (निःशुल्क शिशु सुरक्षा खोप प्रत्येक मंगलबार), पोषण परामर्श, र वृद्धि अनुगमन। बाल रोग विशेषज्ञ परामर्श उपलब्ध।",
      icon: Baby,
      image: "/counseling-youth-healthcare-support.jpg",
    },
    {
      title: "पाठेघर मुखको क्यान्सर जाँच (VIA/PAP Smear)",
      description:
        "प्रारम्भिक पहिचानका लागि नियमित स्क्रिनिङ सेवा, VIA (Visual Inspection with Acetic Acid) र PAP Smear परीक्षण, र आवश्यक उपचार रेफरल। महिलाहरूका लागि निःशुल्क जाँच सुविधा।",
      icon: Shield,
      image: "/maternal-health-reproductive-care-women-health.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation onBookAppointment={() => setAppointmentModalOpen(true)} />
      <AppointmentModal isOpen={appointmentModalOpen} onClose={() => setAppointmentModalOpen(false)} />

      {/* Page Header */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">हाम्रा सेवाहरू</h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            नेपालभरि परिवार र समुदायका लागि व्यापक स्वास्थ्य सेवाहरू
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon
              return (
                <div
                  key={idx}
                  className="rounded-xl bg-card border border-border overflow-hidden hover:border-primary hover:shadow-lg transition-all group flex flex-col"
                >
                  <div className="relative h-48 sm:h-56 bg-muted overflow-hidden flex-shrink-0">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 sm:p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="text-primary" size={24} />
                      </div>
                    </div>
                    <h4 className="font-semibold text-foreground mb-3 text-base sm:text-lg">{service.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">
                      {service.description}
                    </p>
                    <button
                      onClick={() => setAppointmentModalOpen(true)}
                      className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium mt-auto"
                    >
                      अपोइन्टमेन्ट बुक गर्नुहोस्
                    </button>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Additional Service Information */}
          <div className="mt-12 sm:mt-16 p-6 sm:p-8 bg-primary/5 rounded-xl border border-primary/20">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 text-center">सेवा समय र विशेष सुविधाहरू</h3>
            <div className="grid sm:grid-cols-2 gap-6 mt-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">सेवा समय:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• बिहान १०:०० बजे देखि बेलुकी ४:३० बजे सम्म</li>
                  <li>• शनिबार तथा सार्वजनिक बिदाका दिनमा पनि सेवा उपलब्ध</li>
                  <li>• निःशुल्क शिशु सुरक्षा खोप - प्रत्येक मंगलबार</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">विशेष सुविधाहरू:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• रंगीन भिडियो एक्स-रे (Anomaly Scan)</li>
                  <li>• आधुनिक प्रयोगशाला सेवा</li>
                  <li>• डिजिटल एक्स-रे सुविधा</li>
                  <li>• विशेषज्ञ डाक्टर परामर्श</li>
                </ul>
              </div>
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
