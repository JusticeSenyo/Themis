"use client"
import { X, ArrowRight, CheckCircle, Users, Award, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface PracticeAreaModalProps {
  practiceArea: {
    title: string
    description: string
    icon: any
    stats: string
    details: {
      overview: string
      keyServices: string[]
      expertise: string[]
      experience: string
      clientTypes: string[]
      recentWork: string[]
      whyChooseUs: string[]
    }
  } | null
  isOpen: boolean
  onClose: () => void
  onContact: () => void
}

export function PracticeAreaModal({ practiceArea, isOpen, onClose, onContact }: PracticeAreaModalProps) {
  if (!isOpen || !practiceArea) return null

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white dark:bg-slate-900 rounded-none max-w-6xl w-full max-h-[90vh] overflow-y-auto professional-shadow-lg corner-lines">
        {/* Header */}
        <div
          className="relative p-8 bg-overlay text-white"
          style={{
            backgroundImage: `url('/giammarco-boscaro-OPzWvgL-upY-unsplash.jpg?height=400&width=1200&text=${practiceArea.title.replace(/\s+/g, "+")}+Practice')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="content-overlay">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gold-500 flex items-center justify-center">
                  <practiceArea.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2">{practiceArea.title}</h2>
                  <Badge className="bg-gold-500/20 text-gold-400 border-gold-500/30">{practiceArea.stats}</Badge>
                </div>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-none transition-colors rounded">
                <X className="h-6 w-6" />
              </button>
            </div>
            <p className="text-xl text-slate-200 leading-relaxed max-w-4xl">{practiceArea.description}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-12">
          {/* Overview */}
          <section className="decorative-lines">
            <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-6">OVERVIEW</h3>
            <div className="w-16 h-1 bg-gold-500 mb-6 animate-line"></div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
              {practiceArea.details.overview}
            </p>
          </section>

          {/* Key Services */}
          <section className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-6">KEY SERVICES</h3>
              <div className="w-16 h-1 bg-gold-500 mb-6 animate-line"></div>
              <div className="space-y-4">
                {practiceArea.details.keyServices.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gold-500 mt-1 flex-shrink-0" />
                    <span className="text-slate-600 dark:text-slate-400">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-6">OUR EXPERTISE</h3>
              <div className="w-16 h-1 bg-gold-500 mb-6 animate-line"></div>
              <div className="space-y-4">
                {practiceArea.details.expertise.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Award className="h-5 w-5 text-gold-500 mt-1 flex-shrink-0" />
                    <span className="text-slate-600 dark:text-slate-400">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Experience */}
          <section className="bg-slate-50 dark:bg-slate-800 p-8 corner-lines">
            <div className="flex items-center space-x-4 mb-6">
              <TrendingUp className="h-8 w-8 text-gold-500" />
              <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white">
                EXPERIENCE & TRACK RECORD
              </h3>
            </div>
            <div className="w-16 h-1 bg-gold-500 mb-6 animate-line"></div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
              {practiceArea.details.experience}
            </p>
          </section>

          {/* Client Types & Recent Work */}
          <section className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-6">CLIENT TYPES</h3>
              <div className="w-16 h-1 bg-gold-500 mb-6 animate-line"></div>
              <div className="space-y-3">
                {practiceArea.details.clientTypes.map((client, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Users className="h-5 w-5 text-gold-500 mt-1 flex-shrink-0" />
                    <span className="text-slate-600 dark:text-slate-400">{client}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-6">RECENT WORK</h3>
              <div className="w-16 h-1 bg-gold-500 mb-6 animate-line"></div>
              <div className="space-y-4">
                {practiceArea.details.recentWork.map((work, index) => (
                  <div key={index} className="p-4 bg-white dark:bg-slate-900 professional-shadow">
                    <p className="text-slate-600 dark:text-slate-400 text-sm">{work}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="bg-gold-500/5 border border-gold-500/20 p-8 corner-lines">
            <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-6">WHY CHOOSE THEMIS</h3>
            <div className="w-16 h-1 bg-gold-500 mb-6 animate-line"></div>
            <div className="grid md:grid-cols-2 gap-6">
              {practiceArea.details.whyChooseUs.map((reason, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gold-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">{index + 1}</span>
                  </div>
                  <span className="text-slate-600 dark:text-slate-400">{reason}</span>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center py-8 border-t border-slate-200 dark:border-slate-700">
            <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4">
              READY TO DISCUSS YOUR {practiceArea.title.toUpperCase()} NEEDS?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              Contact our experienced team for a consultation tailored to your specific requirements in{" "}
              {practiceArea.title.toLowerCase()}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={onContact}
                className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-3 font-medium tracking-wider rounded"
              >
                SCHEDULE CONSULTATION
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                onClick={onClose}
                className="border-2 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-white px-8 py-3 font-medium tracking-wider bg-transparent rounded"
              >
                CLOSE
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
