"use client"

import React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
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
  Star,
} from "lucide-react"

export default function ThemisLawFirm() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isLoading, setIsLoading] = useState(true)
  const [scrollY, setScrollY] = useState(0)
  const [expandedPracticeArea, setExpandedPracticeArea] = useState<number | null>(null)
  const [loadingProgress, setLoadingProgress] = useState(0)

  useEffect(() => {
    // Enhanced loading screen with progress
    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 100)

    // Scroll tracking for parallax
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
      clearInterval(progressInterval)
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
      <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
        <div className="text-center space-y-6">
          <div className="relative">
            <Scale className="h-16 w-16 text-amber-600 mx-auto animate-pulse" />
            <div className="absolute inset-0 animate-ping">
              <Scale className="h-16 w-16 text-amber-600/30 mx-auto" />
            </div>
          </div>
          <div className="space-y-3">
            <div className="text-foreground text-xl font-serif animate-fade-in">Themis Solicitors & Advocates</div>
            <div className="w-64 h-2 bg-muted mx-auto rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-500 to-amber-600 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${loadingProgress}%` }}
              />
            </div>
            <div className="text-sm text-muted-foreground animate-pulse">Loading Excellence...</div>
          </div>
        </div>
      </div>
    )
  }

  const practiceAreas = [
    {
      title: "Banking & Securities Law",
      description:
        "Comprehensive regulatory compliance, transaction structuring, and advisory services for financial institutions and capital markets participants.",
      icon: Building,
      details: {
        overview:
          "Our Banking & Securities Law practice provides comprehensive legal services to financial institutions, investment firms, and capital markets participants across Ghana and West Africa.",
        services: [
          "Regulatory compliance and licensing",
          "Capital markets transactions",
          "Banking operations and governance",
          "Securities offerings and listings",
          "Financial services litigation",
          "Regulatory investigations and enforcement",
        ],
        experience:
          "With over two decades of experience in Ghana's financial sector, our team has advised on landmark transactions including the largest IPOs, bond issuances, and banking mergers in the region.",
        keyClients:
          "Leading commercial banks, investment banks, pension funds, and multinational financial institutions.",
      },
    },
    {
      title: "Insurance Law",
      description:
        "Expert counsel on regulatory matters, policy disputes, claims management, and insurance company operations across all lines of coverage.",
      icon: Shield,
      details: {
        overview:
          "Our Insurance Law practice offers specialized expertise in all aspects of insurance law, from regulatory compliance to complex coverage disputes.",
        services: [
          "Insurance regulatory compliance",
          "Policy drafting and review",
          "Claims handling and disputes",
          "Reinsurance arrangements",
          "Insurance company formations",
          "Regulatory investigations",
        ],
        experience:
          "We have represented major insurance companies in high-stakes coverage disputes and have extensive experience in insurance regulatory matters before the National Insurance Commission.",
        keyClients: "Leading insurance companies, reinsurers, insurance brokers, and corporate policyholders.",
      },
    },
    {
      title: "Intellectual Property",
      description:
        "Strategic protection, enforcement, and monetization of patents, trademarks, copyrights, and trade secrets for innovative enterprises.",
      icon: Award,
      details: {
        overview:
          "Our Intellectual Property practice helps clients protect, enforce, and monetize their intellectual property assets in Ghana and across Africa.",
        services: [
          "Patent prosecution and portfolio management",
          "Trademark registration and enforcement",
          "Copyright protection and licensing",
          "Trade secret protection",
          "IP litigation and enforcement",
          "Technology transfer agreements",
        ],
        experience:
          "We have successfully registered thousands of trademarks and patents, and have extensive experience in IP enforcement actions and licensing negotiations.",
        keyClients:
          "Multinational corporations, technology companies, pharmaceutical companies, and creative industries.",
      },
    },
    {
      title: "FinTech & Technology Law",
      description:
        "Cutting-edge legal solutions for digital finance, blockchain, cryptocurrency, and emerging technology companies navigating regulatory landscapes.",
      icon: Globe,
      details: {
        overview:
          "Our FinTech & Technology Law practice is at the forefront of legal innovation, helping technology companies navigate complex regulatory environments.",
        services: [
          "FinTech regulatory compliance",
          "Cryptocurrency and blockchain legal advice",
          "Data protection and privacy compliance",
          "Technology licensing and agreements",
          "Digital payments regulation",
          "Cybersecurity and data breach response",
        ],
        experience:
          "We have advised leading FinTech companies on regulatory compliance, licensing, and innovative product launches in Ghana's evolving digital finance landscape.",
        keyClients: "FinTech startups, digital payment providers, cryptocurrency exchanges, and technology platforms.",
      },
    },
    {
      title: "Natural Resources Law",
      description:
        "Comprehensive legal services for oil, gas, and mining operations, including licensing, joint ventures, and environmental compliance.",
      icon: Briefcase,
      details: {
        overview:
          "Our Natural Resources Law practice provides comprehensive legal services to companies operating in Ghana's oil, gas, and mining sectors.",
        services: [
          "Mining and petroleum licensing",
          "Joint venture agreements",
          "Environmental compliance",
          "Local content requirements",
          "Regulatory compliance",
          "Dispute resolution and arbitration",
        ],
        experience:
          "We have extensive experience in major mining and oil & gas projects, including advising on billion-dollar investments and complex joint venture structures.",
        keyClients: "International mining companies, oil & gas operators, service providers, and government entities.",
      },
    },
    {
      title: "Corporate Transactions",
      description:
        "Strategic guidance on mergers, acquisitions, joint ventures, private equity transactions, and complex corporate restructuring matters.",
      icon: Users,
      details: {
        overview:
          "Our Corporate Transactions practice handles complex M&A transactions, private equity deals, and corporate restructuring across various industries.",
        services: [
          "Mergers and acquisitions",
          "Private equity and venture capital",
          "Joint ventures and strategic alliances",
          "Corporate restructuring",
          "Due diligence and transaction support",
          "Corporate governance advisory",
        ],
        experience:
          "We have advised on some of Ghana's largest M&A transactions, including cross-border deals worth hundreds of millions of dollars.",
        keyClients: "Multinational corporations, private equity funds, investment banks, and high-growth companies.",
      },
    },
    {
      title: "Debt Recovery & Commercial Litigation",
      description:
        "Aggressive representation in commercial disputes, debt collection, contract enforcement, and complex multi-jurisdictional litigation.",
      icon: Scale,
      details: {
        overview:
          "Our Litigation practice provides aggressive and strategic representation in commercial disputes, debt recovery, and complex litigation matters.",
        services: [
          "Commercial litigation",
          "Debt recovery and enforcement",
          "Contract disputes",
          "Employment litigation",
          "Regulatory enforcement defense",
          "International arbitration",
        ],
        experience:
          "Our litigation team has successfully recovered millions of dollars for clients and has extensive experience in high-stakes commercial disputes before Ghana's courts.",
        keyClients:
          "Financial institutions, multinational corporations, government entities, and high-net-worth individuals.",
      },
    },
    {
      title: "Company Secretarial Services",
      description:
        "Comprehensive corporate governance support, regulatory filings, board advisory services, and compliance management for businesses.",
      icon: Building,
      details: {
        overview:
          "Our Company Secretarial Services provide comprehensive corporate governance support to ensure regulatory compliance and best practices.",
        services: [
          "Corporate governance advisory",
          "Board secretarial services",
          "Regulatory filings and compliance",
          "Annual general meetings",
          "Corporate record maintenance",
          "Compliance monitoring and reporting",
        ],
        experience:
          "We serve as company secretaries to numerous public and private companies, ensuring compliance with corporate governance requirements and best practices.",
        keyClients: "Public companies, private corporations, multinational subsidiaries, and family-owned businesses.",
      },
    },
  ]

  const industries = [
    "Banking & Financial Services",
    "Mining & Natural Resources",
    "Technology & FinTech",
    "Oil & Gas",
    "Marine & Shipping",
    "Manufacturing",
    "Agribusiness & Food",
    "Healthcare & Pharmaceuticals",
  ]

  const testimonials = [
    {
      quote:
        "Themis provided exceptional guidance through our complex merger. Their expertise in corporate law is unmatched in Ghana.",
      author: "CEO, Leading Financial Institution",
      rating: 5,
    },
    {
      quote:
        "Outstanding representation in our IP portfolio development. They understand both local and international legal landscapes.",
      author: "CTO, Technology Startup",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-background overflow-x-hidden transition-colors duration-300">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border z-40 transition-all duration-300">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 animate-slide-in-left">
              <div className="relative">
                <Scale className="h-10 w-10 text-amber-600 transition-transform duration-300 hover:scale-110" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-slate-900 dark:bg-slate-100 rounded-full"></div>
              </div>
              <div>
                <h1 className="text-2xl font-serif font-bold text-foreground tracking-tight">
                  Themis Solicitors & Advocates
                </h1>
                <p className="text-sm text-muted-foreground font-light">Excellence in Legal Practice</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "practice-areas", label: "Practice Areas" },
                { id: "team", label: "Team" },
                { id: "clients", label: "Clients" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-all duration-300 hover:text-amber-600 relative ${
                    activeSection === item.id ? "text-amber-600" : "text-foreground"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-amber-600 rounded-full animate-scale-in"></div>
                  )}
                </button>
              ))}
              <ThemeToggle />
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 dark:hover:bg-slate-200 text-white dark:text-slate-900 px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105"
              >
                Book Consultation
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
            <nav className="lg:hidden mt-6 pb-6 border-t border-border animate-slide-down">
              <div className="flex flex-col space-y-4 pt-6">
                {[
                  { id: "home", label: "Home" },
                  { id: "about", label: "About" },
                  { id: "practice-areas", label: "Practice Areas" },
                  { id: "team", label: "Team" },
                  { id: "clients", label: "Clients" },
                  { id: "contact", label: "Contact" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-foreground hover:text-amber-600 font-medium transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 dark:hover:bg-slate-200 text-white dark:text-slate-900 w-full mt-4"
                >
                  Book Consultation
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-5xl mx-auto">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight tracking-tight">
                World-class legal solutions for your <span className="text-amber-400 italic">toughest challenges</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-4xl mx-auto font-light">
                Themis Solicitors & Advocates delivers exceptional legal expertise across banking, corporate law,
                intellectual property, and natural resources throughout Ghana and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 shadow-xl animate-bounce-subtle"
                  onClick={() => scrollToSection("contact")}
                >
                  Get Legal Consultation
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-10 py-4 rounded-full text-lg font-medium bg-transparent transition-all duration-300 hover:scale-105"
                  onClick={() => scrollToSection("practice-areas")}
                >
                  Explore Our Services
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 tracking-tight">
                About Themis Solicitors & Advocates
              </h2>
              <div className="w-24 h-1 bg-amber-600 mx-auto mb-8 rounded-full animate-scale-in"></div>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
                We are a distinguished full-service legal firm committed to delivering world-class legal solutions with
                unwavering dedication to our core values and client success.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 mb-20">
              <div className="space-y-12 animate-slide-in-left">
                <div>
                  <h3 className="text-3xl font-serif font-bold text-foreground mb-6">Our Mission</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed font-light">
                    To provide exceptional legal services that exceed client expectations while maintaining the highest
                    standards of professional integrity, innovation, and excellence in every engagement.
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-serif font-bold text-foreground mb-6">Our Vision</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed font-light">
                    To be Ghana's premier legal firm, recognized internationally for innovative solutions,
                    client-focused service, and significant contributions to legal excellence and business growth.
                  </p>
                </div>
              </div>

              <div className="animate-slide-in-right">
                <h3 className="text-3xl font-serif font-bold text-foreground mb-8">Core Values</h3>
                <div className="space-y-6">
                  {[
                    {
                      title: "Respect",
                      description:
                        "We honor our clients, colleagues, and the legal profession with dignity and professionalism",
                    },
                    {
                      title: "Excellence",
                      description: "We strive for the highest quality and innovation in everything we do",
                    },
                    {
                      title: "Integrity",
                      description: "We maintain unwavering ethical standards and transparency in all our dealings",
                    },
                    {
                      title: "Results",
                      description: "We deliver measurable outcomes that create lasting value for our clients",
                    },
                  ].map((value, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-6 bg-card rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 animate-fade-in-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-3 h-3 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-bold text-foreground text-lg mb-2">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section id="practice-areas" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 tracking-tight">
                Areas of Practice
              </h2>
              <div className="w-24 h-1 bg-amber-600 mx-auto mb-8 rounded-full animate-scale-in"></div>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
                Comprehensive legal services across multiple practice areas, delivering strategic solutions tailored to
                meet all your business and personal legal requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {practiceAreas.map((area, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <area.icon className="h-14 w-14 text-amber-600 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-foreground mb-4 leading-tight">{area.title}</h3>
                    <p className="text-muted-foreground leading-relaxed font-light mb-4">{area.description}</p>
                    <button
                      onClick={() => setExpandedPracticeArea(expandedPracticeArea === index ? null : index)}
                      className="flex items-center text-amber-600 font-medium group-hover:translate-x-2 transition-all duration-300 hover:text-amber-700"
                    >
                      <span className="text-sm">Learn More</span>
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Expanded Practice Area Details */}
            {expandedPracticeArea !== null && (
              <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
                <div className="bg-card rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        {React.createElement(practiceAreas[expandedPracticeArea].icon, {
                          className: "h-12 w-12 text-amber-600",
                        })}
                        <h3 className="text-3xl font-serif font-bold text-foreground">
                          {practiceAreas[expandedPracticeArea].title}
                        </h3>
                      </div>
                      <button
                        onClick={() => setExpandedPracticeArea(null)}
                        className="p-2 hover:bg-muted rounded-full transition-colors"
                      >
                        <X className="h-6 w-6 text-muted-foreground" />
                      </button>
                    </div>

                    <div className="space-y-8">
                      <div>
                        <h4 className="text-xl font-semibold text-foreground mb-4">Overview</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {practiceAreas[expandedPracticeArea].details.overview}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold text-foreground mb-4">Our Services</h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {practiceAreas[expandedPracticeArea].details.services.map((service, idx) => (
                            <div key={idx} className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-amber-600 rounded-full flex-shrink-0"></div>
                              <span className="text-muted-foreground">{service}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold text-foreground mb-4">Experience & Expertise</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {practiceAreas[expandedPracticeArea].details.experience}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold text-foreground mb-4">Key Clients</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {practiceAreas[expandedPracticeArea].details.keyClients}
                        </p>
                      </div>

                      <div className="pt-6 border-t border-border">
                        <Button
                          onClick={() => {
                            setExpandedPracticeArea(null)
                            scrollToSection("contact")
                          }}
                          className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
                        >
                          Discuss Your Needs
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 tracking-tight">
                Our Legal Team
              </h2>
              <div className="w-24 h-1 bg-amber-600 mx-auto mb-8 rounded-full animate-scale-in"></div>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
                Experienced legal professionals dedicated to delivering exceptional results across diverse industries
                and practice areas.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-slide-in-left">
                <div className="relative h-96 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 rounded-2xl overflow-hidden shadow-xl">
                  <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=600')] bg-cover bg-center opacity-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Scale className="h-24 w-24 text-amber-600 mx-auto mb-4" />
                      <div className="text-2xl font-serif font-bold text-slate-700 dark:text-slate-300">
                        Excellence in Legal Practice
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
                </div>
              </div>

              <div className="animate-slide-in-right space-y-8">
                <div>
                  <h3 className="text-3xl font-serif font-bold text-foreground mb-6">Proven Experience & Expertise</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed font-light mb-8">
                    Our lawyers have over{" "}
                    <span className="font-semibold text-amber-600">20 years of combined legal experience</span> and more
                    than <span className="font-semibold text-amber-600">30 years of general work experience</span>,
                    which gives us the capacity to provide you with integrated representation in any legal matter.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-6">Industry Experience</h4>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Our lawyers have worked extensively with clients across diverse sectors, bringing deep industry
                    knowledge and practical insights to every engagement.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: Building, name: "Banking" },
                      { icon: Briefcase, name: "Construction" },
                      { icon: Globe, name: "Oil & Gas" },
                      { icon: Users, name: "Human Resources" },
                      { icon: Award, name: "Technology" },
                      { icon: Scale, name: "Mining" },
                    ].map((industry, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 p-4 bg-card rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 animate-fade-in-up"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <industry.icon className="h-6 w-6 text-amber-600 flex-shrink-0" />
                        <span className="text-foreground font-medium">{industry.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/30 rounded-xl p-6">
                    <h4 className="font-semibold text-amber-800 dark:text-amber-400 mb-3 flex items-center">
                      <Award className="h-5 w-5 mr-2" />
                      Integrated Legal Representation
                    </h4>
                    <p className="text-sm text-amber-700 dark:text-amber-300 leading-relaxed">
                      Our diverse experience across industries and practice areas enables us to provide comprehensive,
                      integrated legal solutions that address all aspects of your business and personal legal needs.
                    </p>
                  </div>
                </div>

                <div className="pt-4">
                  <Button
                    onClick={() => scrollToSection("contact")}
                    className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
                  >
                    Meet Our Team
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Additional Stats Section */}
            <div className="mt-20 grid md:grid-cols-3 gap-8">
              <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up">
                <CardContent className="p-0">
                  <div className="text-4xl font-bold text-amber-600 mb-2">20+</div>
                  <div className="text-lg font-semibold text-foreground mb-2">Years Combined</div>
                  <div className="text-sm text-muted-foreground">Legal Experience</div>
                </CardContent>
              </Card>

              <Card
                className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: "0.1s" }}
              >
                <CardContent className="p-0">
                  <div className="text-4xl font-bold text-amber-600 mb-2">30+</div>
                  <div className="text-lg font-semibold text-foreground mb-2">Years Total</div>
                  <div className="text-sm text-muted-foreground">Work Experience</div>
                </CardContent>
              </Card>

              <Card
                className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                <CardContent className="p-0">
                  <div className="text-4xl font-bold text-amber-600 mb-2">6+</div>
                  <div className="text-lg font-semibold text-foreground mb-2">Industries</div>
                  <div className="text-sm text-muted-foreground">Served</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Clients & Industries Section */}
      <section id="clients" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 tracking-tight">
                Clients & Industries
              </h2>
              <div className="w-24 h-1 bg-amber-600 mx-auto mb-8 rounded-full animate-scale-in"></div>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
                We serve diverse industries with specialized legal expertise tailored to each sector's unique
                challenges, opportunities, and regulatory requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="text-center group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <Badge
                    variant="secondary"
                    className="text-sm py-3 px-6 bg-muted hover:bg-amber-50 dark:hover:bg-amber-950 border border-border hover:border-amber-200 dark:hover:border-amber-800 transition-all duration-300 group-hover:scale-105 font-medium"
                  >
                    {industry}
                  </Badge>
                </div>
              ))}
            </div>

            {/* Testimonials */}
            <div className="grid md:grid-cols-2 gap-12">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-lg text-muted-foreground mb-6 leading-relaxed font-light italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <p className="text-foreground font-medium">— {testimonial.author}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-20 text-center animate-fade-in-up">
              <blockquote className="text-2xl md:text-3xl font-serif italic text-muted-foreground max-w-5xl mx-auto leading-relaxed">
                "Excellence in legal service is not just our goal—it's our standard. We measure our success by the
                transformative impact we create for our clients."
              </blockquote>
              <p className="text-muted-foreground mt-6 font-medium">— Themis Solicitors & Advocates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-900 dark:bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-5"></div>
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 tracking-tight">Contact Us</h2>
              <div className="w-24 h-1 bg-amber-400 mx-auto mb-8 rounded-full animate-scale-in"></div>
              <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
                Ready to discuss your legal needs? Connect with our experienced team today for a consultation tailored
                to your specific requirements.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              <div className="animate-slide-in-left">
                <h3 className="text-3xl font-serif font-bold mb-10">Get In Touch</h3>
                <div className="space-y-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Office Address</h4>
                      <p className="text-slate-300 leading-relaxed">
                        No. DH20 Biakpa Close
                        <br />
                        North Kaneshie, Accra
                        <br />
                        Ghana
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Phone</h4>
                      <p className="text-slate-300">+233 55 340 9100</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Email</h4>
                      <p className="text-slate-300">info@themispruc.com</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-amber-600/10 border border-amber-600/20 rounded-xl backdrop-blur-sm">
                  <div className="flex items-start space-x-4">
                    <Shield className="h-6 w-6 text-amber-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-amber-400 mb-3">Security Notice</h4>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        To protect against fraud, please verify that all communications originate from our official
                        email domain: @themispruc.com. We will never request sensitive information through unofficial
                        channels or unsecured communications.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="animate-slide-in-right">
                <Card className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-2xl">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-serif font-bold mb-6">Schedule a Consultation</h3>
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold mb-3 text-slate-700 dark:text-slate-300">
                            First Name
                          </label>
                          <input
                            type="text"
                            className="w-full p-4 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all duration-300 bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                            placeholder="Your first name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold mb-3 text-slate-700 dark:text-slate-300">
                            Last Name
                          </label>
                          <input
                            type="text"
                            className="w-full p-4 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all duration-300 bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                            placeholder="Your last name"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-3 text-slate-700 dark:text-slate-300">
                          Email Address
                        </label>
                        <input
                          type="email"
                          className="w-full p-4 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all duration-300 bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                          placeholder="your.email@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-3 text-slate-700 dark:text-slate-300">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          className="w-full p-4 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all duration-300 bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                          placeholder="+233 XX XXX XXXX"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-3 text-slate-700 dark:text-slate-300">
                          Legal Matter
                        </label>
                        <select className="w-full p-4 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all duration-300 bg-white dark:bg-slate-700 text-slate-900 dark:text-white">
                          <option>Select practice area</option>
                          <option>Banking & Securities Law</option>
                          <option>Insurance Law</option>
                          <option>Intellectual Property</option>
                          <option>FinTech & Technology Law</option>
                          <option>Natural Resources Law</option>
                          <option>Corporate Transactions</option>
                          <option>Commercial Litigation</option>
                          <option>Company Secretarial Services</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-3 text-slate-700 dark:text-slate-300">
                          Message
                        </label>
                        <textarea
                          rows={4}
                          className="w-full p-4 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all duration-300 bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                          placeholder="Please describe your legal needs and how we can assist you..."
                        ></textarea>
                      </div>
                      <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105">
                        Send Message
                        <ArrowRight className="ml-3 h-5 w-5" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 dark:bg-black text-slate-400 py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 mb-12">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <Scale className="h-8 w-8 text-amber-600" />
                  <span className="font-serif font-bold text-white text-xl">Themis Solicitors & Advocates</span>
                </div>
                <p className="text-slate-400 leading-relaxed font-light">
                  Delivering world-class legal solutions with excellence, integrity, and unwavering commitment to client
                  success.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-4">Quick Links</h4>
                <div className="space-y-2">
                  {["About Us", "Practice Areas", "Our Team", "Contact"].map((link) => (
                    <button key={link} className="block text-slate-400 hover:text-amber-400 transition-colors">
                      {link}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-4">Legal Notice</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Licensed to practice law in Ghana. Regulated by the Ghana Bar Association. Attorney advertising. Prior
                  results do not guarantee a similar outcome.
                </p>
              </div>
            </div>

            <div className="border-t border-slate-800 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm text-slate-500 mb-4 md:mb-0">
                  © 2024 Themis Solicitors & Advocates. All rights reserved.
                </p>
                <div className="flex space-x-6 text-sm text-slate-500">
                  <button className="hover:text-amber-400 transition-colors">Privacy Policy</button>
                  <button className="hover:text-amber-400 transition-colors">Terms of Service</button>
                  <button className="hover:text-amber-400 transition-colors">Legal Disclaimer</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
