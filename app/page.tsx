"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Scale,
  Shield,
  Users,
  Building,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ChevronRight,
  Award,
  Globe,
  Briefcase,
  ArrowRight,
  TrendingUp,
  Target,
  Zap,
} from "lucide-react"

export default function ThemisLawFirm() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isLoading, setIsLoading] = useState(true)
  const [scrollY, setScrollY] = useState(0)
  const [expandedPracticeArea, setExpandedPracticeArea] = useState<number | null>(null)

  useEffect(() => {
    // Loading screen
    const timer = setTimeout(() => setIsLoading(false), 2000)

    // Scroll tracking
    const handleScroll = () => {
      setScrollY(window.scrollY)

      const sections = ["home", "about", "practice-areas", "team", "clients", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-white dark:bg-slate-900 flex items-center justify-center z-50">
        <div className="text-center space-y-8">
          <div className="relative corner-lines">
            <div className="w-24 h-24 border-4 border-gold-500 bg-white dark:bg-slate-900 flex items-center justify-center">
              <Scale className="h-12 w-12 text-gold-500 floating-element" />
            </div>
            <div className="absolute -inset-2 border border-gold-500/30"></div>
          </div>
          <div className="space-y-4">
            <h1 className="text-2xl font-serif font-bold text-slate-900 dark:text-white">
              THEMIS SOLICITORS & ADVOCATES
            </h1>
            <div className="w-64 h-1 bg-slate-200 dark:bg-slate-700 mx-auto">
              <div className="h-full bg-gold-500 animate-pulse" style={{ width: "100%" }}></div>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 tracking-wider">EXCELLENCE IN LEGAL PRACTICE</p>
          </div>
        </div>
      </div>
    )
  }

  const practiceAreas = [
    {
      title: "Banking & Securities Law",
      description: "Comprehensive regulatory compliance and transaction structuring for financial institutions.",
      icon: Building,
      stats: "50+ Transactions",
    },
    {
      title: "Insurance Law",
      description: "Expert counsel on regulatory matters, policy disputes, and claims management.",
      icon: Shield,
      stats: "200+ Cases",
    },
    {
      title: "Intellectual Property",
      description: "Strategic protection and enforcement of patents, trademarks, and copyrights.",
      icon: Award,
      stats: "1000+ Registrations",
    },
    {
      title: "FinTech & Technology",
      description: "Cutting-edge legal solutions for digital finance and emerging technologies.",
      icon: Globe,
      stats: "30+ Startups",
    },
    {
      title: "Natural Resources",
      description: "Comprehensive services for oil, gas, and mining operations.",
      icon: Briefcase,
      stats: "$2B+ Deals",
    },
    {
      title: "Corporate Transactions",
      description: "Strategic guidance on mergers, acquisitions, and complex restructuring.",
      icon: Users,
      stats: "100+ M&A Deals",
    },
  ]

  const stats = [
    { number: "20+", label: "Years Experience", icon: TrendingUp },
    { number: "500+", label: "Cases Won", icon: Target },
    { number: "50+", label: "Corporate Clients", icon: Building },
    { number: "99%", label: "Success Rate", icon: Zap },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 border-2 border-gold-500 bg-white dark:bg-slate-900 flex items-center justify-center corner-lines">
                <Scale className="h-6 w-6 text-gold-500" />
              </div>
              <div>
                <h1 className="text-xl font-serif font-bold text-slate-900 dark:text-white tracking-tight">
                  THEMIS SOLICITORS
                </h1>
                <p className="text-xs text-slate-600 dark:text-slate-400 tracking-widest">& ADVOCATES</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {[
                { id: "home", label: "HOME" },
                { id: "about", label: "ABOUT" },
                { id: "practice-areas", label: "SERVICES" },
                { id: "team", label: "TEAM" },
                { id: "clients", label: "CLIENTS" },
                { id: "contact", label: "CONTACT" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium tracking-wider transition-all duration-300 relative ${
                    activeSection === item.id
                      ? "text-gold-500"
                      : "text-slate-700 dark:text-slate-300 hover:text-gold-500"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold-500 animate-line"></div>
                  )}
                </button>
              ))}
              <ThemeToggle />
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-gold-500 hover:bg-gold-600 text-white px-6 py-2 font-medium tracking-wider transition-all duration-300"
              >
                CONSULT NOW
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-2">
              <ThemeToggle />
              <button className="p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden mt-6 pb-6 border-t border-slate-200 dark:border-slate-700">
              <div className="flex flex-col space-y-4 pt-6">
                {[
                  { id: "home", label: "HOME" },
                  { id: "about", label: "ABOUT" },
                  { id: "practice-areas", label: "SERVICES" },
                  { id: "team", label: "TEAM" },
                  { id: "clients", label: "CLIENTS" },
                  { id: "contact", label: "CONTACT" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-slate-700 dark:text-slate-300 hover:text-gold-500 font-medium tracking-wider transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-gold-500 hover:bg-gold-600 text-white w-full mt-4 tracking-wider"
                >
                  CONSULT NOW
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-overlay"
        style={{
          backgroundImage: `url('/giammarco-boscaro-zeH-ljawHtg-unsplash.jpg?height=1080&width=1920&text=Modern+Law+Office')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto px-6 content-overlay">
          <div className="max-w-6xl mx-auto text-center">
            <div className="animate-box-in decorative-lines">
              <div className="inline-block p-8 bg-white/5- dark:bg-slate-900/50 professional-shadow-lg mb-8 corner-lines">
                <Scale className="h-16 w-16 text-gold-500 mx-auto mb-6 floating-element" />
                <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                  WORLD-CLASS
                  <br />
                  <span className="text-gold-500">LEGAL SOLUTIONS</span>
                </h1>
                <div className="w-24 h-1 bg-gold-500 mx-auto mb-6 animate-line"></div>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Ghana's premier law firm delivering exceptional legal expertise across banking, corporate law,
                  intellectual property, and natural resources.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 text-lg font-medium tracking-wider"
                    onClick={() => scrollToSection("contact")}
                  >
                    GET CONSULTATION
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-white px-8 py-4 text-lg font-medium tracking-wider bg-transparent"
                    onClick={() => scrollToSection("practice-areas")}
                  >
                    VIEW SERVICES
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        className="py-20 bg-overlay-light vertical-lines "
        style={{
          backgroundImage: `url('/tingy-injury-law-firm-nSpj-Z12lX0-unsplash.jpg?height=600&width=1920&text=Professional+Office+Interior')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-6 content-overlay ">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 bg-white/95 dark:bg-slate-800/95 professional-shadow animate-slide-up corner-lines"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className="h-12 w-12 text-gold-500 mx-auto mb-4" />
                <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">{stat.number}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400 tracking-wider font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-24 bg-overlay-light diagonal-lines"
        style={{
          backgroundImage: `url('/plentybooks.jpg?height=800&width=1920&text=Law+Library+Books')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-6 content-overlay">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 decorative-lines">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-6">
                ABOUT THEMIS
              </h2>
              <div className="w-24 h-1 bg-gold-500 mx-auto mb-8 animate-line"></div>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Distinguished full-service legal firm committed to delivering world-class solutions with unwavering
                dedication to excellence.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              <div className="space-y-8">
                <div className="p-8 bg-white/95 dark:bg-slate-900/95 professional-shadow corner-lines">
                  <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4">OUR MISSION</h3>
                  <div className="w-12 h-1 bg-gold-500 mb-4 animate-line"></div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    To provide exceptional legal services that exceed client expectations while maintaining the highest
                    standards of professional integrity and innovation.
                  </p>
                </div>

                <div className="p-8 bg-white/95 dark:bg-slate-900/95 professional-shadow corner-lines">
                  <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4">OUR VISION</h3>
                  <div className="w-12 h-1 bg-gold-500 mb-4 animate-line"></div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    To be Ghana's premier legal firm, recognized internationally for innovative solutions and
                    client-focused service.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white text-[#c7a349] mb-8">CORE VALUES</h3>
                {[
                  { title: "RESPECT", desc: "Honor clients, colleagues, and the legal profession" },
                  { title: "EXCELLENCE", desc: "Highest quality and innovation in everything we do" },
                  { title: "INTEGRITY", desc: "Unwavering ethical standards and transparency" },
                  { title: "RESULTS", desc: "Measurable outcomes that create lasting value" },
                ].map((value, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-6 bg-white/95 dark:bg-slate-900/95 professional-shadow animate-stagger corner-lines"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-4 h-4 bg-gold-500 mt-1 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white mb-2 tracking-wider">{value.title}</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section
        id="practice-areas"
        className="py-24 bg-overlay-light"
        style={{
          backgroundImage: `url('/patrick-fore-H5Lf0nGyetk-unsplash.jpg?height=800&width=1920&text=Modern+Conference+Room')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-6 content-overlay">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 decorative-lines">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-6">
                PRACTICE AREAS
              </h2>
              <div className="w-24 h-1 bg-gold-500 mx-auto mb-8 animate-line"></div>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Comprehensive legal services across multiple practice areas, delivering strategic solutions for complex
                challenges.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {practiceAreas.map((area, index) => (
                <div
                  key={index}
                  className="group bg-white/95 dark:bg-slate-800/95 p-8 professional-shadow hover:professional-shadow-lg transition-all duration-300 animate-box-in corner-lines"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <area.icon className="h-12 w-12 text-gold-500" />
                    <Badge variant="secondary" className="bg-gold-500/10 text-gold-500 border-gold-500/20">
                      {area.stats}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-slate-900 dark:text-white mb-4">{area.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed">{area.description}</p>
                  <button className="flex items-center text-gold-500 font-medium text-sm tracking-wider group-hover:translate-x-2 transition-all duration-300">
                    LEARN MORE
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        id="team"
        className="py-24 bg-overlay-light vertical-lines"
        style={{
          backgroundImage: `url('/inaki-del-olmo-NIJuEQw0RKg-unsplash.jpg?height=800&width=1920&text=Professional+Team+Meeting')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-6 content-overlay">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 decorative-lines">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-6">
                OUR EXPERTISE
              </h2>
              <div className="w-24 h-1 bg-gold-500 mx-auto mb-8 animate-line"></div>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Experienced legal professionals with deep industry knowledge and proven track record.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="p-8 bg-white/95 dark:bg-slate-900/95 professional-shadow corner-lines">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gold-500 flex items-center justify-center">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white">
                        PROVEN EXPERIENCE
                      </h3>
                      <div className="w-16 h-0.5 bg-gold-500 mt-2 animate-line"></div>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    Our lawyers have over{" "}
                    <span className="font-bold text-gold-500">20 years of combined legal experience</span> and more than{" "}
                    <span className="font-bold text-gold-500">30 years of general work experience</span>, providing
                    integrated representation across all legal matters.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Building, name: "BANKING" },
                    { icon: Briefcase, name: "CONSTRUCTION" },
                    { icon: Globe, name: "OIL & GAS" },
                    { icon: Users, name: "HR SERVICES" },
                    { icon: Award, name: "TECHNOLOGY" },
                    { icon: Scale, name: "MINING" },
                  ].map((industry, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-4 bg-white/95 dark:bg-slate-900/95 professional-shadow corner-lines"
                    >
                      <industry.icon className="h-5 w-5 text-gold-500" />
                      <span className="text-slate-900 dark:text-white font-medium text-sm tracking-wider">
                        {industry.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative decorative-lines">
                <div className="w-full h-96 bg-gradient-to-br from-slate-200/95 to-slate-300/95 dark:from-slate-700/95 dark:to-slate-600/95 flex items-center justify-center professional-shadow-lg corner-lines">
                  <div className="text-center">
                    <Scale className="h-24 w-24 text-gold-500 mx-auto mb-4 floating-element" />
                    <div className="text-2xl font-serif font-bold text-slate-700 dark:text-slate-300">
                      EXCELLENCE IN
                      <br />
                      LEGAL PRACTICE
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold-500/30 -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section
        id="clients"
        className="py-24 bg-overlay-light diagonal-lines"
        style={{
          backgroundImage: `url('/clarisse-meyer-jKU2NneZAbI-unsplash.jpg?height=800&width=1920&text=Corporate+Handshake')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-6 content-overlay">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 decorative-lines">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-6">
                INDUSTRIES WE SERVE
              </h2>
              <div className="w-24 h-1 bg-gold-500 mx-auto mb-8 animate-line"></div>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Specialized legal expertise across diverse sectors with deep understanding of industry challenges.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
              {[
                "Banking & Financial Services",
                "Mining & Natural Resources",
                "Technology & FinTech",
                "Oil & Gas",
                "Marine & Shipping",
                "Manufacturing",
                "Agribusiness & Food",
                "Healthcare & Pharmaceuticals",
              ].map((industry, index) => (
                <div
                  key={index}
                  className="p-6 bg-white/95 dark:bg-slate-800/95 text-center professional-shadow hover:professional-shadow-lg transition-all duration-300 corner-lines"
                >
                  <div className="text-sm font-medium text-slate-900 dark:text-white tracking-wider">{industry}</div>
                </div>
              ))}
            </div>

            <div className="text-center p-12 bg-gold-500/10 border border-gold-500/20 corner-lines">
              <blockquote className="text-2xl md:text-3xl font-serif italic text-slate-700 dark:text-slate-300 mb-6">
                "Excellence in legal service is not just our goal—it's our standard."
              </blockquote>
              <p className="text-gold-500 font-medium tracking-wider">— THEMIS SOLICITORS & ADVOCATES</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 bg-overlay text-white"
        style={{
          backgroundImage: `url('/placeholder.svg?height=800&width=1920&text=Modern+City+Skyline')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-6 content-overlay">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 decorative-lines">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">CONTACT US</h2>
              <div className="w-24 h-1 bg-gold-500 mx-auto mb-8 animate-line"></div>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Ready to discuss your legal needs? Connect with our experienced team for professional consultation.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              <div className="space-y-8 vertical-lines">
                <h3 className="text-3xl font-serif font-bold mb-8">GET IN TOUCH</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-gold-500 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 tracking-wider">OFFICE ADDRESS</h4>
                      <p className="text-slate-300">
                        No. DH20 Biakpa Close
                        <br />
                        North Kaneshie, Accra
                        <br />
                        Ghana
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-gold-500 flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 tracking-wider">PHONE</h4>
                      <p className="text-slate-300">+233 55 340 9100</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-gold-500 flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 tracking-wider">EMAIL</h4>
                      <p className="text-slate-300">info@themispruc.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 text-slate-900 p-8 professional-shadow-lg corner-lines">
                <h3 className="text-2xl font-serif font-bold mb-6">SCHEDULE CONSULTATION</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold mb-2 tracking-wider">FIRST NAME</label>
                      <input
                        type="text"
                        className="w-full p-4 border border-slate-300 focus:border-gold-500 focus:outline-none transition-colors"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-2 tracking-wider">LAST NAME</label>
                      <input
                        type="text"
                        className="w-full p-4 border border-slate-300 focus:border-gold-500 focus:outline-none transition-colors"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 tracking-wider">EMAIL ADDRESS</label>
                    <input
                      type="email"
                      className="w-full p-4 border border-slate-300 focus:border-gold-500 focus:outline-none transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 tracking-wider">LEGAL MATTER</label>
                    <select className="w-full p-4 border border-slate-300 focus:border-gold-500 focus:outline-none transition-colors">
                      <option>Select practice area</option>
                      <option>Banking & Securities Law</option>
                      <option>Insurance Law</option>
                      <option>Intellectual Property</option>
                      <option>FinTech & Technology Law</option>
                      <option>Natural Resources Law</option>
                      <option>Corporate Transactions</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 tracking-wider">MESSAGE</label>
                    <textarea
                      rows={4}
                      className="w-full p-4 border border-slate-300 focus:border-gold-500 focus:outline-none transition-colors"
                      placeholder="Describe your legal needs..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-gold-500 hover:bg-gold-600 text-white py-4 text-lg font-bold tracking-wider">
                    SEND MESSAGE
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="bg-overlay text-slate-400 py-12"
        style={{
          backgroundImage: `url('/placeholder.svg?height=400&width=1920&text=Night+City+View')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-6 content-overlay">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 mb-12">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-8 border border-gold-500 flex items-center justify-center">
                    <Scale className="h-4 w-4 text-gold-500" />
                  </div>
                  <span className="font-serif font-bold text-white text-lg tracking-wider">
                    THEMIS SOLICITORS & ADVOCATES
                  </span>
                </div>
                <p className="text-slate-400 text-sm">
                  Delivering world-class legal solutions with excellence, integrity, and unwavering commitment to client
                  success.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white mb-4 tracking-wider">QUICK LINKS</h4>
                <div className="space-y-2">
                  {["About Us", "Practice Areas", "Our Team", "Contact"].map((link) => (
                    <button key={link} className="block text-slate-400 hover:text-gold-500 transition-colors text-sm">
                      {link}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-white mb-4 tracking-wider">LEGAL NOTICE</h4>
                <p className="text-xs text-slate-400">
                  Licensed to practice law in Ghana. Regulated by the Ghana Bar Association. Prior results do not
                  guarantee a similar outcome.
                </p>
              </div>
            </div>

            <div className="border-t border-slate-800 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-xs text-slate-500 mb-4 md:mb-0">
                  © 2024 THEMIS SOLICITORS & ADVOCATES. ALL RIGHTS RESERVED.
                </p>
                <div className="flex space-x-6 text-xs text-slate-500">
                  <button className="hover:text-gold-500 transition-colors">PRIVACY POLICY</button>
                  <button className="hover:text-gold-500 transition-colors">TERMS OF SERVICE</button>
                  <button className="hover:text-gold-500 transition-colors">LEGAL DISCLAIMER</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
