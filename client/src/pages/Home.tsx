import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { Menu, X, Code, Users, Rocket, BookOpen, ExternalLink } from "lucide-react";

/**
 * Teens in Blockchain Africa Landing Page
 * A modern, animated, fully responsive landing page
 */
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Derived data from public assets
  const teamFiles = [
    "afolabi_adejokun.jpg",
    "ann_imoagene.png",
    "ayande_victor.png",
    "barnabas_omoniwa.jpg",
    "david_amodu.jpeg",
    "Draxx.jpeg",
    "godspower_ukachi.jpg",
    "web3_precious.jpeg",
  ];

  const teamMeta: Record<string, { role: string; x?: string; linkedin?: string }> = {
    afolabi_adejokun: {
      role: "Contributor",
      x: "https://x.com/dearrkingsonn_",
      linkedin: "https://www.linkedin.com/in/afolabiadejokun",
    },
    ann_imoagene: {
      role: "Contributor",
      x: "https://x.com/ann_imoagene?t=Zc4PzmXct-xoDvy6rslztw&s=09",
      linkedin: "https://www.linkedin.com/in/ann-imoagene-378038266",
    },
    ayande_victor: {
      role: "Contributor",
      x: "https://x.com/theCryptoglyph",
    },
    barnabas_omoniwa: {
      role: "Manager",
      x: "https://x.com/sirbarna",
      linkedin: "https://www.linkedin.com/in/barnabasomoniwa",
    },
    david_amodu: {
      role: "Founder",
      x: "https://x.com/BoluwatifeAmod",
    },
    draxx: {
      role: "Tutor & Developer",
      x: "https://x.com/callmedraxxx",
    },
    godspower_ukachi: {
      role: "Manager",
      x: "https://x.com/the_gpee",
      linkedin: "https://www.linkedin.com/in/godspowerukachi",
    },
    web3_precious: {
      role: "Contributor",
      x: "https://x.com/web3precious",
    },
  };

  // Helper to transform filenames into display names
  const toDisplayName = (filename: string) => {
    const base = filename.replace(/\.[^/.]+$/, "");
    return base
      .replace(/_/g, " ")
      .split(" ")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ");
  };

  const getRolePriority = (role?: string) => {
    if (!role) return 5;
    const normalized = role.toLowerCase();
    if (normalized.includes("founder")) return 0;
    if (normalized.includes("manager")) return 1;
    if (normalized.includes("tutor") || normalized.includes("instructor")) return 2;
    if (normalized.includes("contributor")) return 3;
    return 4;
  };

  const sortedTeamFiles = [...teamFiles].sort((a, b) => {
    const keyA = a.replace(/\.[^/.]+$/, "").toLowerCase();
    const keyB = b.replace(/\.[^/.]+$/, "").toLowerCase();
    const roleA = teamMeta[keyA]?.role;
    const roleB = teamMeta[keyB]?.role;
    const pA = getRolePriority(roleA);
    const pB = getRolePriority(roleB);
    if (pA !== pB) return pA - pB;
    // Secondary sort by name for stability
    return toDisplayName(a).localeCompare(toDisplayName(b));
  });

  const eventFiles = [
    "cohort.jpeg",
    "teaching.jpeg",
    "another.jpeg",
    "another2.jpeg",
    "badagry.jpeg",
    "badary2.jpeg",
    "moreteens.jpeg",
  ];

  const eventMeta: Record<string, { title: string; description: string }> = {
    cohort: {
      title: "Cohort Kickoff",
      description: "Opening session welcoming a new batch of teen builders to the program.",
    },
    teaching: {
      title: "Hands-on Coding Workshop",
      description: "Interactive class introducing core programming and blockchain fundamentals.",
    },
    another: {
      title: "Intro to Web3 Seminar",
      description: "Foundational talk on wallets, smart contracts, and on-chain opportunities.",
    },
    another2: {
      title: "Builders Circle Meetup",
      description: "Peer collaboration for teens shipping their first decentralized applications.",
    },
    badagry: {
      title: "Badagry Tech Outreach",
      description: "Community onboarding and awareness session hosted in Badagry.",
    },
    badary2: {
      title: "Badagry Coding Clinic",
      description: "Follow-up clinic helping students debug, iterate, and ship projects.",
    },
    moreteens: {
      title: "Teen Innovators Showcase",
      description: "Students demo projects and share key lessons from the learning track.",
    },
  };

  const partnerFiles = [
    "syncthesis.jpeg",
    "telaga_charity.jpeg",
    "web3_africa.jpeg",
  ];

  const partnerDescriptions: Record<string, string> = {
    telaga_charity: "Nonprofit supporting youth education and community development.",
    web3_africa: "Community advancing Web3 education and opportunities across Africa.",
    syncthesis: "Studio building products and communities for the open Web3 ecosystem.",
  };

  const partnerXLinks: Record<string, string> = {
    telaga_charity: "https://x.com/telagacharity",
    web3_africa: "https://x.com/web3withafrica",
    syncthesis: "https://x.com/syncthesis_",
  };

  

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 animate-fade-in">
            <img src="/logo.png" alt="Teens in Blockchain Africa" className="h-10 w-10 rounded-lg" />
            <span className="text-xl font-bold text-[#6B21F8]">TEENSINBLOCKCHAIN</span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-[#6B21F8] transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("programs")}
              className="text-gray-700 hover:text-[#6B21F8] transition-colors font-medium"
            >
              Programs
            </button>
            <button
              onClick={() => scrollToSection("events")}
              className="text-gray-700 hover:text-[#6B21F8] transition-colors font-medium"
            >
              Events
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-[#6B21F8] transition-colors font-medium"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection("join")}
              className="bg-[#6B21F8] hover:bg-[#5B11E8] text-white rounded-full px-6"
            >
              Join Us Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700 hover:text-[#6B21F8] transition-colors"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 animate-slide-down">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-[#6B21F8] transition-colors font-medium text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("programs")}
                className="text-gray-700 hover:text-[#6B21F8] transition-colors font-medium text-left"
              >
                Programs
              </button>
              <button
                onClick={() => scrollToSection("events")}
                className="text-gray-700 hover:text-[#6B21F8] transition-colors font-medium text-left"
              >
                Events
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-[#6B21F8] transition-colors font-medium text-left"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection("join")}
                className="bg-[#6B21F8] hover:bg-[#5B11E8] text-white rounded-full"
              >
                Join Us Now
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-purple-50 via-white to-purple-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Empowering Africa's
              <span className="text-[#6B21F8] block">Next Gen Developers</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join a vibrant community of young innovators learning blockchain technology, building the future, and
              making an impact across Africa.
            </p>

            {/* Social Buttons */}
            <div className="flex justify-center gap-4 mb-8 flex-wrap">
              <a
                href="https://x.com/teensblockchain"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all hover:scale-110"
                aria-label="Twitter"
              >
                <svg className="w-6 h-6 text-[#1DA1F2]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://wa.me/2347035530867"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all hover:scale-110"
                aria-label="WhatsApp"
              >
                <svg className="w-6 h-6 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/teensblockchain"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6 text-[#E4405F]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://tiktok.com/@teensblockchain"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all hover:scale-110"
                aria-label="TikTok"
              >
                <svg className="w-6 h-6 text-[#000000]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                </svg>
              </a>
            </div>

            {/* CTA Button */}
            <Button
              onClick={() => scrollToSection("join")}
              className="bg-[#6B21F8] hover:bg-[#5B11E8] text-white text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105 animate-pulse-slow"
            >
              Join Us Now
            </Button>
          </div>
        </div>
      </section>

      {/* About Section - Shaping Future Developers */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Shaping Future Developers</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Teens in Blockchain Africa is a pioneering initiative dedicated to empowering young minds across the
              continent with cutting-edge blockchain technology education. We believe in nurturing the next generation
              of innovators, developers, and leaders who will shape Africa's digital future through hands-on learning,
              mentorship, and community collaboration.
            </p>
          </div>

          {/* Programs Grid */}
          <div id="programs" className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-purple-50 to-white rounded-2xl">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-[#6B21F8] rounded-2xl flex items-center justify-center mb-4">
                  <Code className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Blockchain Fundamentals</h3>
                <p className="text-gray-600 leading-relaxed">
                  Master the core concepts of blockchain technology, from distributed ledgers to consensus mechanisms,
                  through interactive workshops and real-world projects.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-blue-50 to-white rounded-2xl">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-[#6B21F8] rounded-2xl flex items-center justify-center mb-4">
                  <Rocket className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Smart Contract Development</h3>
                <p className="text-gray-600 leading-relaxed">
                  Learn to build, test, and deploy smart contracts using Solidity and modern development frameworks,
                  creating decentralized applications that solve real problems.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-pink-50 to-white rounded-2xl">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-[#6B21F8] rounded-2xl flex items-center justify-center mb-4">
                  <Users className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Community Building</h3>
                <p className="text-gray-600 leading-relaxed">
                  Connect with like-minded peers, collaborate on projects, and build lasting relationships within a
                  supportive community of young blockchain enthusiasts.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-green-50 to-white rounded-2xl">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-[#6B21F8] rounded-2xl flex items-center justify-center mb-4">
                  <BookOpen className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Mentorship Programs</h3>
                <p className="text-gray-600 leading-relaxed">
                  Get guidance from experienced blockchain developers and industry professionals who are passionate
                  about nurturing the next generation of African tech leaders.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our passionate team of educators, developers, and blockchain enthusiasts is dedicated to empowering young
              Africans with the skills and knowledge to thrive in the Web3 ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {sortedTeamFiles.map((file, index) => {
              const name = toDisplayName(file);
              const key = file.replace(/\.[^/.]+$/, "").toLowerCase();
              const meta = teamMeta[key];
              const xLink = meta?.x || "#";
              const linkedInLink = meta?.linkedin || "#";
              const gradients = [
                "from-purple-200 to-purple-400",
                "from-blue-200 to-blue-400",
                "from-pink-200 to-pink-400",
              ];
              const gradient = gradients[index % gradients.length];
              return (
                <div key={file} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.05}s` }}>
                  <div className={`w-40 h-40 mx-auto mb-4 rounded-full bg-gradient-to-br ${gradient} overflow-hidden shadow-lg`}>
                    <img src={`/team/${file}`} alt={name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
                  <p className="text-gray-600 mb-3">{meta?.role || "Role - TBD"}</p>
                  <div className="flex items-center justify-center gap-4">
                    <a
                      href={xLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[#6B21F8] hover:text-[#5B11E8] transition-colors"
                      aria-label="X profile"
                    >
                      <ExternalLink size={16} />
                      <span>X</span>
                    </a>
                    <a
                      href={linkedInLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[#6B21F8] hover:text-[#5B11E8] transition-colors"
                      aria-label="LinkedIn profile"
                    >
                      <ExternalLink size={16} />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Events</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Join our regular workshops, hackathons, and learning sessions designed to accelerate your blockchain
              journey and connect you with the vibrant African Web3 community.
            </p>
          </div>

          {/* Ongoing Event */}
          <div className="max-w-4xl mx-auto">
            <Card className="border-none shadow-xl bg-gradient-to-br from-purple-100 via-white to-blue-100 rounded-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-8 md:p-10">
                    <div className="inline-block bg-[#6B21F8] text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                      Ongoing Event
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      Advanced Class for Low-Level Programmers
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Dive deep into systems programming, memory management, and blockchain protocol development. This
                      intensive course covers C, Rust, and low-level blockchain architecture, perfect for those who
                      want to understand how blockchain works under the hood.
                    </p>
                    <div className="mb-6">
                      <p className="text-sm text-gray-500 mb-1">Instructor</p>
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-gray-900">Draxx</p>
                        <a
                          href="https://x.com/callmedraxxx"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#6B21F8] hover:text-[#5B11E8] transition-colors"
                        >
                          <ExternalLink size={16} />
                        </a>
                      </div>
                    </div>
                    <Button className="bg-[#25D366] hover:bg-[#1FA855] text-white rounded-full px-6 shadow-lg hover:shadow-xl transition-all">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                      Join WhatsApp Group
                    </Button>
                  </div>
                  <div className="h-64 md:h-auto">
                    <img
                      src={`/events/${eventFiles[0]}`}
                      alt={eventMeta["cohort"].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Past Events Gallery */}
          <div className="max-w-6xl mx-auto mt-20">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Past Events Gallery</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {eventFiles.slice(1, 7).map((file) => {
                const key = file.replace(/\.[^/.]+$/, "");
                const meta = eventMeta[key] || { title: toDisplayName(file), description: "Event" };
                return (
                  <div key={file} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <img
                      src={`/events/${file}`}
                      alt={meta.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-4 text-white">
                        <h4 className="font-bold text-lg mb-1">{meta.title}</h4>
                        <p className="text-sm text-gray-200">{meta.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Next Class Schedule Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Next Class Schedule</h2>
              <p className="text-lg text-gray-600">Mark your calendar for our upcoming low-level programming class</p>
            </div>

            <Card className="border-none shadow-2xl bg-white rounded-3xl overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-[#6B21F8] to-[#9333EA] p-8 text-white text-center">
                  <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    📅 Upcoming Class
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-2">Low-Level Programming Masterclass</h3>
                  <p className="text-purple-100 text-lg">Advanced Systems Programming & Blockchain Architecture</p>
                </div>

                <div className="p-8 md:p-12">
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 text-[#6B21F8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Schedule</p>
                          <p className="text-xl font-bold text-gray-900">Every Wednesday and Saturday, 5 PM UTC</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 text-[#6B21F8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Duration</p>
                          <p className="text-xl font-bold text-gray-900">Ongoing(2 sessions/week)</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 text-[#6B21F8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Format</p>
                          <p className="text-xl font-bold text-gray-900">Online (Google Meet)</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 text-[#6B21F8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Instructor</p>
                          <div className="flex items-center gap-2">
                            <p className="text-xl font-bold text-gray-900">Draxx</p>
                            <a
                              href="https://x.com/callmedraxxx"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#6B21F8] hover:text-[#5B11E8] transition-colors"
                            >
                              <ExternalLink size={18} />
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 text-[#6B21F8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Investment</p>
                          <p className="text-xl font-bold text-gray-900">Free for Members</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 mb-8">
                    <h4 className="font-bold text-gray-900 mb-3 text-lg">What You'll Learn:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-[#6B21F8] mt-1">✓</span>
                        <span>C, Assembly and Rust programming for blockchain development</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#6B21F8] mt-1">✓</span>
                        <span>Memory management and pointer manipulation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#6B21F8] mt-1">✓</span>
                        <span>Blockchain protocol architecture and consensus mechanisms</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#6B21F8] mt-1">✓</span>
                        <span>Building custom blockchain nodes and validators</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#6B21F8] mt-1">✓</span>
                        <span>Performance optimization and security best practices</span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-[#6B21F8] hover:bg-[#5B11E8] text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105">
                      Reserve Your Spot
                    </Button>
                    <Button className="bg-[#25D366] hover:bg-[#1FA855] text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all" asChild>
                      <a href="https://wa.me/2347035530867" target="_blank" rel="noopener noreferrer">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                      Join Class WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 text-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Partners</h2>
            <p className="text-lg text-purple-100 leading-relaxed">
              We collaborate with leading organizations and institutions to provide world-class blockchain education
              and opportunities for African youth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {partnerFiles.map((file) => {
              const name = toDisplayName(file);
              const key = file.replace(/\.[^/.]+$/, "");
              const description = partnerDescriptions[key] || "Partner";
              const xUrl = partnerXLinks[key];
              return (
                <Card key={file} className="border-none bg-white/10 backdrop-blur-lg hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 rounded-2xl">
                  <CardContent className="p-8 text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-white rounded-2xl flex items-center justify-center">
                      <img src={`/partners/${file}`} alt={name} className="w-20 h-20 object-contain" />
                    </div>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <h3 className="text-xl font-bold">{name}</h3>
                      {xUrl && (
                        <a
                          href={xUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/80 hover:text-white"
                          aria-label={`${name} on X`}
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                    <p className="text-purple-100 text-sm leading-relaxed">{description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <p className="text-xl text-purple-100 mb-4">Interested in partnering with us?</p>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-white text-[#6B21F8] hover:bg-purple-50 rounded-full px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        id="join"
        className="py-32 px-4 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1920&h=800&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-purple-800/90 to-blue-900/90"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl md:text-2xl mb-10 text-purple-100 leading-relaxed">
              Join hundreds of young Africans learning blockchain technology, building innovative projects, and shaping
              the future of Web3 on the continent.
            </p>
            <Button className="bg-white text-[#6B21F8] hover:bg-purple-50 text-xl px-12 py-8 rounded-full shadow-2xl hover:shadow-3xl transition-all hover:scale-110 font-bold">
              Join Us Now
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* About */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="/logo.png" alt="Teens in Blockchain Africa" className="h-10 w-10 rounded-lg" />
                <span className="text-xl font-bold">TEENSINBLOCKCHAIN</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Empowering Africa's next generation of blockchain developers through education, mentorship, and
                community.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <button
                  onClick={() => scrollToSection("about")}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </button>
                <button
                  onClick={() => scrollToSection("programs")}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Programs
                </button>
                <button
                  onClick={() => scrollToSection("events")}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Events
                </button>
                <button
                  onClick={() => scrollToSection("join")}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Join Us
                </button>
              </div>
            </div>

            {/* Contact & Socials */}
            <div>
              <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
              <div className="space-y-3 mb-6">
                <p className="text-gray-400">
                  <span className="font-semibold">Email:</span> info@teensinblockchain.africa
                </p>
                <p className="text-gray-400">
                  <span className="font-semibold">Phone:</span> +234 703 553 0867
                </p>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://x.com/teensblockchain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#6B21F8] transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/2347035530867"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#6B21F8] transition-colors"
                  aria-label="WhatsApp"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com/teensblockchain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#6B21F8] transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://tiktok.com/@teensblockchain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#6B21F8] transition-colors"
                  aria-label="TikTok"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Teens in Blockchain Africa. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

