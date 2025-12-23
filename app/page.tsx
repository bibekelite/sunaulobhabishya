"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Heart } from "lucide-react"
import Navigation from "@/components/navigation"
import AppointmentModal from "@/components/appointment-modal"
import Footer from "@/components/footer"

export default function Home() {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Navigation onBookAppointment={() => setAppointmentModalOpen(true)} />
      <AppointmentModal isOpen={appointmentModalOpen} onClose={() => setAppointmentModalOpen(false)} />

      <section
        className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32 md:pt-48 md:pb-40 min-h-[600px] sm:min-h-[700px] flex items-center"
        style={{
          backgroundImage: "url(/images/486102985-663541166372302-626069482775589497-n.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="text-accent font-bold text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4">
              सुखी परिवार, समृद्धिको आधार
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 text-balance leading-tight">
              <span className="text-accent">सुनौलो भविष्य नेपाल</span> मा स्वागत छ
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 text-balance leading-relaxed">
              नेपालभरि परिवार नियोजन, प्रजनन स्वास्थ्य, र सामुदायिक कल्याणमा तपाईंको विश्वसनीय साथी।
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={() => setAppointmentModalOpen(true)}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2 text-sm sm:text-base shadow-lg"
              >
                अपोइन्टमेन्ट बुक गर्नुहोस्
              </button>
              <Link
                href="/services"
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors text-center text-sm sm:text-base shadow-lg backdrop-blur-sm"
              >
                हाम्रा सेवाहरू
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Family Planning Products Showcase Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 text-balance">
              परिवार नियोजन विधिहरू
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
              सुरक्षित र प्रभावकारी गर्भनिरोधक विकल्पहरू तपाईंको आवश्यकता अनुसार
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
            {/* Birth Control Pills */}
            <div className="group cursor-pointer">
              <div className="relative h-40 sm:h-48 bg-card border-2 border-border rounded-xl overflow-hidden hover:border-primary transition-all hover:shadow-lg">
                <Image
                  src="/birth-control-pills-contraceptive.jpg"
                  alt="मौखिक गर्भनिरोधक चक्की"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h4 className="font-semibold text-foreground mt-3 text-center text-sm sm:text-base">गर्भनिरोधक चक्की/पिल</h4>
              <p className="text-xs text-muted-foreground text-center mt-1"></p>
            </div>

            {/* IUCD */}
            <div className="group cursor-pointer">
              <div className="relative h-40 sm:h-48 bg-card border-2 border-border rounded-xl overflow-hidden hover:border-primary transition-all hover:shadow-lg">
                <Image
                  src="/iucd-intrauterine-device-copper-t.jpg"
                  alt="अन्तर्गर्भाशयी उपकरण"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h4 className="font-semibold text-foreground mt-3 text-center text-sm sm:text-base">आईयूसीडी (कपर टी)</h4>
              <p className="text-xs text-muted-foreground text-center mt-1">दीर्घकालीन सुरक्षा</p>
            </div>

            {/* Condoms */}
            <div className="group cursor-pointer">
              <div className="relative h-40 sm:h-48 bg-card border-2 border-border rounded-xl overflow-hidden hover:border-primary transition-all hover:shadow-lg">
                <Image
                  src="/condoms-contraceptive-protection.jpg"
                  alt="कन्डम"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h4 className="font-semibold text-foreground mt-3 text-center text-sm sm:text-base">कन्डम</h4>
              <p className="text-xs text-muted-foreground text-center mt-1">सुरक्षा र रोकथाम</p>
            </div>

            {/* Injectable */}
            <div className="group cursor-pointer">
              <div className="relative h-40 sm:h-48 bg-card border-2 border-border rounded-xl overflow-hidden hover:border-primary transition-all hover:shadow-lg">
                <Image
                  src="/contraceptive-injection-syringe.jpg"
                  alt="सुई गर्भनिरोधक"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h4 className="font-semibold text-foreground mt-3 text-center text-sm sm:text-base">सुई (डिपो)</h4>
              <p className="text-xs text-muted-foreground text-center mt-1">३ महिनाको सुरक्षा</p>
            </div>

            {/* Implant */}
            <div className="group cursor-pointer">
              <div className="relative h-40 sm:h-48 bg-card border-2 border-border rounded-xl overflow-hidden hover:border-primary transition-all hover:shadow-lg">
                <Image
                  src="/contraceptive-implant-arm.jpg"
                  alt="इम्प्लान्ट"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h4 className="font-semibold text-foreground mt-3 text-center text-sm sm:text-base">इम्प्लान्ट</h4>
              <p className="text-xs text-muted-foreground text-center mt-1">३-५ वर्षको सुरक्षा</p>
            </div>
          </div>

          <div className="mt-10 sm:mt-12 text-center">
            <button
              onClick={() => setAppointmentModalOpen(true)}
              className="px-6 sm:px-8 py-2.5 sm:py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              परामर्श र परीक्षणका लागि अपोइन्टमेन्ट बुक गर्नुहोस्
            </button>
          </div>
        </div>
      </section>

      {/* Introduction / Overview Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="mx-auto max-w-6xl px-3 sm:px-4 md:px-6 lg:px-8">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-8 sm:mb-10 md:mb-12 text-center text-balance">
            सुनौलो भविष्य नेपाल बारे
          </h3>

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-12">
            {/* Left side - Maternal Health Icon */}
            <div className="flex-shrink-0 w-48 sm:w-56 md:w-64 lg:w-72">
              <Image
                src="/images/screenshot-202025-12-15-20122400.png"
                alt="संरक्षित मातृत्व सेवा - Safe Motherhood Services"
                width={300}
                height={300}
                className="w-full h-auto"
              />
            </div>

            {/* Right side - Text content */}
            <div className="flex-1 space-y-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
              <p>
                सुनौलो भविष्य नेपाल (एसबीएन) परिवार नियोजन, सुरक्षित गर्भपतन सेवा, यौन तथा प्रजनन स्वास्थ्य सेवा र शिक्षाका क्षेत्रमा
                काम गर्ने गैर-सरकारी तथा गैर-नाफामूलक संस्थाको रूपमा २०६४ सालमा स्थापना भएको थियो।
              </p>
              <p>
                अनुभवी पेशेवर तथा समाजसेवीहरूको आर्थिक, व्यवस्थापकीय र प्राविधिक सहयोगमा, एसबीएनले मातृ तथा बाल स्वास्थ्य सुधार गर्न,
                परिवार नियोजनमा पहुँच विस्तार गर्न, खोप लगाउन र नेपाली समुदायहरूको सामाजिक-आर्थिक अवस्था सुधार गर्न प्रतिबद्ध छ।
              </p>
              <div className="pt-4">
                <Link
                  href="/about"
                  className="px-6 sm:px-8 py-2.5 sm:py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  हाम्रो बारेमा थप जान्नुहोस्
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services Preview */}
      <section className="py-12 sm:py-16 md:py-20 bg-primary/5">
        <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14 md:mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-4 text-balance">
              हाम्रा सेवाहरू
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground text-balance">
              नेपालभरि परिवार र समुदायका लागि व्यापक स्वास्थ्य सेवाहरू
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8">
            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary hover:shadow-lg transition-all text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Heart className="text-primary" size={32} />
              </div>
              <h4 className="font-semibold text-foreground mb-2">परिवार नियोजन</h4>
              <p className="text-sm text-muted-foreground">व्यापक परामर्श र गर्भनिरोधक विधिहरू</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary hover:shadow-lg transition-all text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Heart className="text-primary" size={32} />
              </div>
              <h4 className="font-semibold text-foreground mb-2">मातृ स्वास्थ्य</h4>
              <p className="text-sm text-muted-foreground">गर्भवती र सुत्केरी स्याहार सेवा र सुरक्षित प्रसव सहयोग</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary hover:shadow-lg transition-all text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Heart className="text-primary" size={32} />
              </div>
              <h4 className="font-semibold text-foreground mb-2">युवा परामर्श</h4>
              <p className="text-sm text-muted-foreground">उमेर अनुकूल प्रजनन स्वास्थ्य जानकारी</p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary/5 transition-colors inline-flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              सबै सेवाहरू हेर्नुहोस्
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 text-balance">
            आफ्नो स्वास्थ्यको नियन्त्रण लिन तयार हुनुहुन्छ?
          </h3>
          <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 opacity-90 text-balance">
            आज नै हाम्रा स्वास्थ्य पेशेवरहरूसँग अपोइन्टमेन्ट बुक गर्नुहोस्
          </p>
          <button
            onClick={() => setAppointmentModalOpen(true)}
            className="px-6 sm:px-8 py-2.5 sm:py-3 bg-primary-foreground text-primary rounded-lg font-medium hover:bg-primary-foreground/90 transition-colors inline-flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            Contact Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Google Translate Widget */}
      <div
        id="google_translate_element"
        className="fixed bottom-20 right-4 z-40 bg-primary text-primary-foreground rounded-full shadow-lg"
      ></div>
    </div>
  )
}
