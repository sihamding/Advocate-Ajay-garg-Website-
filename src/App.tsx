import { motion, AnimatePresence } from "motion/react";
import { Scale, Gavel, Building2, Users, FileText, Phone, Mail, MapPin, Menu, X, ChevronRight, Award, ShieldCheck, Clock, Briefcase, Car, CreditCard, Heart } from "lucide-react";
import React, { useState, useEffect } from "react";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const FloatingActions = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <motion.a
        href="https://wa.me/919646060323"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#128C7E] transition-colors"
        title="WhatsApp Us"
      >
        <WhatsAppIcon className="h-6 w-6" />
      </motion.a>
      <motion.a
        href="tel:+919646060323"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-legal-navy text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-slate-800 transition-colors"
        title="Call Us"
      >
        <Phone className="h-6 w-6 fill-current" />
      </motion.a>
    </div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Practice Areas", href: "#practice-areas" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? "bg-white shadow-md py-3" : "bg-transparent py-4 sm:py-6"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Scale className={`h-7 w-7 sm:h-8 sm:w-8 ${isScrolled || isMobileMenuOpen ? "text-legal-navy" : "text-white"}`} />
            <span className={`text-base sm:text-xl font-serif font-bold tracking-tight ${isScrolled || isMobileMenuOpen ? "text-legal-navy" : "text-white"}`}>
              Ajay Garg <span className="text-legal-gold hidden sm:inline">Legal Hub</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-legal-gold ${isScrolled ? "text-slate-600" : "text-white/90"}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/919646060323"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#128C7E] text-white p-2 rounded-md transition-all flex items-center justify-center"
              title="WhatsApp Us"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>
            <a
              href="#contact"
              className="bg-legal-gold hover:bg-legal-gold-light text-white px-5 py-2 rounded-md text-sm font-semibold transition-all"
            >
              Consultation
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="text-legal-navy" />
            ) : (
              <Menu className={isScrolled ? "text-legal-navy" : "text-white"} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-b border-slate-100 absolute top-full w-full left-0 py-4 px-6 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-600 font-medium py-2 border-b border-slate-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/919646060323"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white text-center py-3 rounded-md font-semibold flex items-center justify-center gap-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <WhatsAppIcon className="h-5 w-5" /> WhatsApp Message
              </a>
              <a
                href="#contact"
                className="bg-legal-navy text-white text-center py-3 rounded-md font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Free Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Legal Office"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-legal-navy/90 via-legal-navy/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 md:pt-0">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-block text-legal-gold font-semibold tracking-widest uppercase text-sm mb-4">
            Trusted Legal Excellence
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl text-white font-bold leading-tight mb-6">
            Expert Legal Solutions for <span className="text-legal-gold italic">Complex</span> Challenges
          </h1>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            With 15+ years of dedicated practice, Ajay Garg provides strategic legal counsel and robust representation in Divorce, Matrimonial, Property, Family, criminal, and civil matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+919646060323"
              className="bg-legal-gold hover:bg-legal-gold-light text-white px-8 py-4 rounded-md text-lg font-bold transition-all flex items-center justify-center gap-2"
            >
              Call Now <Phone className="h-5 w-5" />
            </a>
            <a
              href="https://wa.me/919646060323"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-md text-lg font-bold transition-all flex items-center justify-center gap-2"
            >
              WhatsApp <WhatsAppIcon className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white/50 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

const PracticeAreas = () => {
  const areas = [
    {
      title: "Divorce & Matrimonial",
      description: "Expert guidance through divorce proceedings with sensitivity and legal precision.",
      icon: Scale,
    },
    {
      title: "Domestic Violence",
      description: "Strong legal protection for victims under the Protection of Women from Domestic Violence Act.",
      icon: ShieldCheck,
    },
    {
      title: "Maintenance & Alimony",
      description: "Ensuring fair maintenance settlements for spouses and children.",
      icon: Users,
    },
    {
      title: "Civil Litigation",
      description: "Comprehensive civil dispute resolution in courts across Punjab.",
      icon: FileText,
    },
    {
      title: "Property Disputes",
      description: "Resolution of property and injunction matters with thorough legal expertise.",
      icon: Building2,
    },
    {
      title: "Recovery Suits",
      description: "Effective recovery of debts and financial dues through legal proceedings.",
      icon: Briefcase,
    },
    {
      title: "Motor Accident Disputes",
      description: "Legal assistance for MACT claims and compensation in motor vehicle accidents.",
      icon: Car,
    },
    {
      title: "Cheque Bounce",
      description: "Legal proceedings under Section 138 of the Negotiable Instruments Act for dishonored cheques.",
      icon: CreditCard,
    },
    {
      title: "Court Marriage",
      description: "Legal registration and solemnization of marriages under Indian Marriage Registration Laws.",
      icon: Heart,
    },
  ];

  return (
    <section id="practice-areas" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-legal-navy mb-4">Practice Areas</h2>
          <div className="w-24 h-1 bg-legal-gold mx-auto mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            We provide specialized legal services across a wide range of practice areas, ensuring our clients receive the most effective representation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 bg-slate-50 rounded-xl border border-slate-100 hover:border-legal-gold/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-white rounded-lg shadow-sm flex items-center justify-center mb-6 group-hover:bg-legal-navy transition-colors">
                <area.icon className="h-7 w-7 text-legal-gold group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-legal-navy mb-3">{area.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {area.description}
              </p>
              <a href="#contact" className="mt-6 inline-flex items-center text-legal-gold font-semibold hover:gap-2 transition-all">
                Learn More <ChevronRight className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-square"
            >
              <img
                src="https://drive.google.com/thumbnail?id=1WkYYYI1dddzzZnJrF2sdAV8tNi4qjWHG&sz=w1000"
                alt="Ajay Garg"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-legal-gold/10 rounded-full -z-0"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-legal-navy/5 rounded-full -z-0"></div>
          </div>

          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-legal-navy mb-6">About Ajay Garg</h2>
              <p className="text-xl text-legal-gold font-serif italic mb-6">"Justice is not just a goal, it's a commitment."</p>
              <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                Ajay Garg is a distinguished legal professional with a reputation for integrity, strategic thinking, and relentless advocacy. With over 15 years of experience in the Indian legal system, he has successfully handled high-stakes cases for individuals and families alike.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                Our firm is built on the foundation of client trust and legal excellence. We believe in a personalized approach, taking the time to understand each client's unique situation to deliver tailored legal strategies that achieve results.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-legal-gold/10 rounded">
                    <Award className="h-5 w-5 text-legal-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-legal-navy">Excellence</h4>
                    <p className="text-sm text-slate-500">Consistently high standards in legal practice.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-legal-gold/10 rounded">
                    <ShieldCheck className="h-5 w-5 text-legal-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-legal-navy">Integrity</h4>
                    <p className="text-sm text-slate-500">Ethical representation you can depend on.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-legal-gold/10 rounded">
                    <Clock className="h-5 w-5 text-legal-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-legal-navy">Efficiency</h4>
                    <p className="text-sm text-slate-500">Timely solutions for urgent legal matters.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-legal-gold/10 rounded">
                    <Users className="h-5 w-5 text-legal-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-legal-navy">Client-Focused</h4>
                    <p className="text-sm text-slate-500">Your success is our primary objective.</p>
                  </div>
                </div>
              </div>
              
              <a
                href="#contact"
                className="inline-block bg-legal-navy hover:bg-slate-800 text-white px-8 py-4 rounded-md text-lg font-bold transition-all"
              >
                Learn More About Our Firm
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message. We will get back to you shortly.");
    setFormState({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-legal-navy text-white overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-legal-gold/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
            <p className="text-slate-400 text-lg mb-10">
              Have a legal question or need representation? Contact us today for a confidential consultation. Our team is ready to assist you.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-legal-gold/20 rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-legal-gold" />
                </div>
                <div>
                  <h4 className="text-slate-400 text-sm uppercase tracking-widest">Call Us</h4>
                  <p className="text-xl font-semibold">+91 9646060323</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-legal-gold/20 rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-legal-gold" />
                </div>
                <div>
                  <h4 className="text-slate-400 text-sm uppercase tracking-widest">Email Us</h4>
                  <a 
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=agarg02@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-semibold hover:text-legal-gold transition-colors"
                  >
                    agarg02@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-legal-gold/20 rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-legal-gold" />
                </div>
                <div>
                  <h4 className="text-slate-400 text-sm uppercase tracking-widest">Office Location</h4>
                  <p className="text-xl font-semibold text-balance">Chamber No.6009, Laywers Chamber Complex-II, District Courts, Ludhiana, Punjab-141001.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href="tel:+919646060323"
                className="flex items-center gap-3 bg-white text-legal-navy px-6 py-3 rounded-lg font-bold hover:bg-slate-100 transition-all"
              >
                <Phone className="h-5 w-5" /> Call Now
              </a>
              <a
                href="https://wa.me/919646060323"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25D366] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#128C7E] transition-all"
              >
                <WhatsAppIcon className="h-5 w-5" /> WhatsApp Message
              </a>
            </div>
          </div>

          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-6"
            >
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 group hover:border-legal-gold/30 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-legal-gold/10 rounded-lg flex items-center justify-center group-hover:bg-legal-gold transition-colors">
                    <Phone className="h-6 w-6 text-legal-gold group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-legal-navy">Immediate Assistance</h3>
                    <p className="text-slate-500 text-sm">Speak directly with our legal experts</p>
                  </div>
                </div>
                <a 
                  href="tel:+919646060323"
                  className="w-full flex items-center justify-center gap-2 bg-legal-navy text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-all"
                >
                  Call Now: +91 9646060323
                </a>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 group hover:border-[#25D366]/30 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#25D366]/10 rounded-lg flex items-center justify-center group-hover:bg-[#25D366] transition-colors">
                    <WhatsAppIcon className="h-6 w-6 text-[#25D366] group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-legal-navy">WhatsApp Consultation</h3>
                    <p className="text-slate-500 text-sm">Fast and convenient messaging</p>
                  </div>
                </div>
                <a 
                  href="https://wa.me/919646060323"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 rounded-xl font-bold hover:bg-[#128C7E] transition-all"
                >
                  Message on WhatsApp
                </a>
              </div>

              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=agarg02@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 group hover:border-legal-gold/30 transition-all block"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-legal-gold/10 rounded-lg flex items-center justify-center group-hover:bg-legal-gold transition-colors">
                    <Mail className="h-6 w-6 text-legal-gold group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-legal-navy">Email Inquiry</h3>
                    <p className="text-slate-500 text-sm">Send us your case details via email</p>
                  </div>
                </div>
                <div className="w-full flex items-center justify-center gap-2 bg-slate-100 text-legal-navy py-4 rounded-xl font-bold group-hover:bg-legal-gold group-hover:text-white transition-all">
                  agarg02@gmail.com
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Scale className="h-8 w-8 text-legal-gold" />
              <span className="text-xl font-serif font-bold tracking-tight">
                Ajay Garg <span className="text-legal-gold">Legal Hub</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              Providing expert legal counsel and representation with a commitment to justice and client success.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <a
                href="tel:+919646060323"
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-legal-gold transition-colors cursor-pointer"
                title="Call Us"
              >
                <Phone className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/919646060323"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#25D366] transition-colors cursor-pointer"
                title="WhatsApp Us"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-legal-gold w-fit pb-2">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-slate-400 hover:text-legal-gold transition-colors">Home</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-legal-gold transition-colors">About Us</a></li>
              <li><a href="#practice-areas" className="text-slate-400 hover:text-legal-gold transition-colors">Practice Areas</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-legal-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-legal-gold w-fit pb-2">Practice Areas</h4>
            <ul className="space-y-4">
              <li><a href="#practice-areas" className="text-slate-400 hover:text-legal-gold transition-colors">Divorce & Matrimonial</a></li>
              <li><a href="#practice-areas" className="text-slate-400 hover:text-legal-gold transition-colors">Property Disputes</a></li>
              <li><a href="#practice-areas" className="text-slate-400 hover:text-legal-gold transition-colors">Domestic Violence</a></li>
              <li><a href="#practice-areas" className="text-slate-400 hover:text-legal-gold transition-colors">Civil Litigation</a></li>
              <li><a href="#practice-areas" className="text-slate-400 hover:text-legal-gold transition-colors">Recovery Suits</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Ajay Garg Legal Hub. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <PracticeAreas />
        <About />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
