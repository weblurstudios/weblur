import React, { useState } from 'react';

export default function WebLurLanding() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    businessType: '',
    projectDetails: ''
  });

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Tack för ditt meddelande! Vi återkommer inom 24 timmar.');
    setFormData({ fullName: '', email: '', phone: '', businessType: '', projectDetails: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 bg-white flex items-center justify-between px-8 py-6 border-b-2 border-black">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="text-2xl">⛶</span>
          <span className="text-xl font-bold">WEBLUR</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('tjanster')} className="text-gray-700 hover:text-black transition relative group">
            Tjänster
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button onClick={() => scrollToSection('portfolio')} className="text-gray-700 hover:text-black transition relative group">
            Portfolio
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button onClick={() => scrollToSection('process')} className="text-gray-700 hover:text-black transition relative group">
            Process
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button onClick={() => scrollToSection('priser')} className="text-gray-700 hover:text-black transition relative group">
            Priser
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button onClick={() => scrollToSection('kontakt')} className="bg-black text-white px-6 py-2 rounded hover:bg-white hover:text-black border-2 border-black transition-all duration-300 hover:-translate-y-0.5">
            Kontakta Oss
          </button>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-8 py-32 md:py-40 lg:py-48 text-center min-h-screen flex flex-col justify-center">
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight">
          WEBBPLATSER<br />
          SOM<br />
          <span className="italic font-bold">FUNGERAR</span>
        </h1>
        
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          Professionella, lättanterliga webbplatser för restauranger och bokningstjänster. Kom online på veckor, inte månader.
        </p>

        <div className="flex flex-row items-center justify-center gap-4 mb-16">
          <button onClick={() => scrollToSection('kontakt')} className="bg-black text-white px-8 py-3 rounded hover:bg-white hover:text-black border-2 border-black transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2">
            Boka Nu
            <span>→</span>
          </button>
          <button onClick={() => scrollToSection('portfolio')} className="border-2 border-black text-black px-8 py-3 rounded hover:bg-black hover:text-white transition-all duration-300 hover:-translate-y-0.5">
            Se Våra Arbeten
          </button>
        </div>

        <div className="border-t-2 border-black pt-12 mt-8 mx-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-gray-600">Lanserade Webbplatser</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-gray-600">Nöjda Kunder</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1 Vecka</div>
              <div className="text-gray-600">Genomsnittlig Leverans</div>
            </div>
          </div>
        </div>
      </main>

      <section id="tjanster" className="max-w-7xl mx-auto px-8 py-24 scroll-mt-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Våra Tjänster</h2>
          <p className="text-lg text-gray-600">Specialiserade webblösningar för företag som behöver vara online</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="border-2 border-black p-8 hover:bg-black hover:text-white transition-all duration-300 group cursor-pointer">
            <div className="text-5xl mb-6 grayscale">🍴</div>
            <h3 className="text-2xl font-bold mb-4">Restaurang-webbplatser</h3>
            <p className="text-gray-600 group-hover:text-white">Vackra, lätthanterliga webbplatser för pizzerior, kaféer och restauranger med onlinebeställning.</p>
          </div>

          <div className="border-2 border-black p-8 hover:bg-black hover:text-white transition-all duration-300 group cursor-pointer">
            <div className="text-5xl mb-6 grayscale">📅</div>
            <h3 className="text-2xl font-bold mb-4">Boknings-plattformar</h3>
            <p className="text-gray-600 group-hover:text-white">Sömlösa bokningssystem för nagelstudios, hårsalonger och skönhetstjänster.</p>
          </div>

          <div className="border-2 border-black p-8 hover:bg-black hover:text-white transition-all duration-300 group cursor-pointer">
            <div className="text-5xl mb-6 grayscale">🛒</div>
            <h3 className="text-2xl font-bold mb-4">E-handelslösningar</h3>
            <p className="text-gray-600 group-hover:text-white">Kompletta webbutiker med betalningshantering, lagerhantering och kundspårning.</p>
          </div>

          <div className="border-2 border-black p-8 hover:bg-black hover:text-white transition-all duration-300 group cursor-pointer">
            <div className="text-5xl mb-6 grayscale">⚡</div>
            <h3 className="text-2xl font-bold mb-4">Anpassad Utveckling</h3>
            <p className="text-gray-600 group-hover:text-white">Skräddarsydda webblösningar utformade specifikt för dina affärsbehov och mål.</p>
          </div>
        </div>
      </section>

      <section id="portfolio" className="bg-black text-white py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Våra Arbeten</h2>
            <p className="text-lg text-gray-400">Riktiga webbplatser vi har byggt för riktiga företag</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-2 border-white overflow-hidden group cursor-pointer">
              <div className="overflow-hidden">
                <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=600&fit=crop" alt="Pizza" className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-8 bg-white text-black">
                <p className="text-sm text-gray-600 mb-2">Restaurang</p>
                <h3 className="text-3xl font-bold mb-3">Bella's Pizzeria</h3>
                <p className="text-gray-700">Onlinebeställningsplattform med realtidshantering av meny</p>
              </div>
            </div>

            <div className="border-2 border-white overflow-hidden group cursor-pointer">
              <div className="overflow-hidden">
                <img src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&h=600&fit=crop" alt="Nails" className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-8 bg-white text-black">
                <p className="text-sm text-gray-600 mb-2">Bokning</p>
                <h3 className="text-3xl font-bold mb-3">Luxe Nails Studio</h3>
                <p className="text-gray-700">Bokningssystem med kundhantering</p>
              </div>
            </div>

            <div className="border-2 border-white overflow-hidden group cursor-pointer">
              <div className="overflow-hidden">
                <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop" alt="Fitness" className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-8 bg-white text-black">
                <p className="text-sm text-gray-600 mb-2">Bokning</p>
                <h3 className="text-3xl font-bold mb-3">Urban Fitness</h3>
                <p className="text-gray-700">Medlemskapsplattform med klassbokning</p>
              </div>
            </div>

            <div className="border-2 border-white overflow-hidden group cursor-pointer">
              <div className="overflow-hidden">
                <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop" alt="Café" className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-8 bg-white text-black">
                <p className="text-sm text-gray-600 mb-2">Restaurang</p>
                <h3 className="text-3xl font-bold mb-3">Green Leaf Café</h3>
                <p className="text-gray-700">Modern webbplats med online beställning</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="bg-white py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Hur Vi Arbetar</h2>
            <p className="text-lg text-gray-600">Vår strömlinjeformade process får dig online snabbt</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-7xl font-bold text-gray-200 mb-4">01</div>
              <h3 className="text-2xl font-bold mb-3">Upptäcktsamtal</h3>
              <p className="text-gray-600">Vi börjar med att förstå ditt företag, dina mål och din vision för din onlinenärvaro.</p>
            </div>

            <div className="text-center">
              <div className="text-7xl font-bold text-gray-200 mb-4">02</div>
              <h3 className="text-2xl font-bold mb-3">Design & Planering</h3>
              <p className="text-gray-600">Vårt team skapar en anpassad design skräddarsydd för ditt varumärke och målgrupp.</p>
            </div>

            <div className="text-center">
              <div className="text-7xl font-bold text-gray-200 mb-4">03</div>
              <h3 className="text-2xl font-bold mb-3">Utveckling</h3>
              <p className="text-gray-600">Vi bygger din webbplats med ren kod, snabb prestanda och enkel hantering.</p>
            </div>

            <div className="text-center">
              <div className="text-7xl font-bold text-gray-200 mb-4">04</div>
              <h3 className="text-2xl font-bold mb-3">Lansering & Support</h3>
              <p className="text-gray-600">Vi lanserar din webbplats och tillhandahåller kontinuerlig support för att säkerställa att allt fungerar smidigt.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="priser" className="bg-black text-white py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Priser</h2>
            <p className="text-lg text-gray-400">Transparenta priser utan dolda avgifter. Startavgift + månatlig hosting & underhåll.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-2 border-white p-8 hover:bg-white hover:text-black transition-all duration-300 group cursor-pointer flex flex-col">
              <h3 className="text-3xl font-bold mb-2">Starter</h3>
              <div className="text-5xl font-bold mb-2">3 990 kr</div>
              <p className="text-sm mb-6 text-gray-400 group-hover:text-gray-600">Startavgift</p>
              <div className="text-3xl font-bold mb-2">750 kr/mån</div>
              <p className="text-sm mb-6 text-gray-400 group-hover:text-gray-600">Hosting & underhåll</p>
              <p className="mb-8 text-gray-300 group-hover:text-gray-700">Perfekt för små företag som vill komma igång online</p>
              
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start gap-2"><span className="mt-1 group-hover:text-black">✓</span><span>5-sidors anpassad webbplats</span></li>
                <li className="flex items-start gap-2"><span className="mt-1 group-hover:text-black">✓</span><span>Mobilanpassad design</span></li>
                <li className="flex items-start gap-2"><span className="mt-1 group-hover:text-black">✓</span><span>Kontaktformulär</span></li>
                <li className="flex items-start gap-2"><span className="mt-1 group-hover:text-black">✓</span><span>Grundläggande SEO-optimering</span></li>
                <li className="flex items-start gap-2"><span className="mt-1 group-hover:text-black">✓</span><span>Hosting & säkerhetskopiering</span></li>
                <li className="flex items-start gap-2"><span className="mt-1 group-hover:text-black">✓</span><span>Månatlig underhåll & uppdateringar</span></li>
              </ul>
              
              <button onClick={() => scrollToSection('kontakt')} className="w-full bg-white text-black py-3 font-bold hover:bg-black hover:text-white border-2 border-white transition-all duration-300 group-hover:bg-black group-hover:text-white mt-auto">Kom Igång</button>
            </div>

            <div className="bg-white text-black p-8 border-2 border-white hover:scale-105 transition-all duration-300 cursor-pointer relative flex flex-col">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-1 text-sm font-bold border-2 border-white">MEST POPULÄR</div>
              <h3 className="text-3xl font-bold mb-2 mt-4">Professional</h3>
              <div className="text-5xl font-bold mb-2">7 990 kr</div>
              <p className="text-sm mb-6 text-gray-600">Startavgift</p>
              <div className="text-3xl font-bold mb-2">1 290 kr/mån</div>
              <p className="text-sm mb-6 text-gray-600">Hosting & underhåll</p>
              <p className="mb-8 text-gray-700">Idealisk för restauranger och bokningstjänster</p>
              
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start gap-2"><span className="text-black mt-1">✓</span><span>10-sidors anpassad webbplats</span></li>
                <li className="flex items-start gap-2"><span className="text-black mt-1">✓</span><span>Onlinebeställning eller bokningssystem</span></li>
                <li className="flex items-start gap-2"><span className="text-black mt-1">✓</span><span>Mobilanpassad design</span></li>
                <li className="flex items-start gap-2"><span className="text-black mt-1">✓</span><span>Avancerad SEO-optimering</span></li>
                <li className="flex items-start gap-2"><span className="text-black mt-1">✓</span><span>Innehållshanteringssystem</span></li>
                <li className="flex items-start gap-2"><span className="text-black mt-1">✓</span><span>Hosting & säkerhetskopiering</span></li>
                <li className="flex items-start gap-2"><span className="text-black mt-1">✓</span><span>Prioriterad support</span></li>
                <li className="flex items-start gap-2"><span className="text-black mt-1">✓</span><span>Månatliga prestationsrapporter</span></li>
              </ul>
              
              <button onClick={() => scrollToSection('kontakt')} className="w-full bg-black text-white py-3 font-bold border-2 border-black transition-all duration-300 mt-auto">Kom Igång</button>
            </div>

            <div className="border-2 border-white p-8 hover:bg-white hover:text-black transition-all duration-300 group cursor-pointer flex flex-col">
              <h3 className="text-3xl font-bold mb-2">Enterprise</h3>
              <div className="text-5xl font-bold mb-2">10 990 kr</div>
              <p className="text-sm mb-6 text-gray-400 group-hover:text-gray-600">Startavgift</p>
              <div className="text-3xl font-bold mb-2">2 490 kr/mån</div>
              <p className="text-sm mb-6 text-gray-400 group-hover:text-gray-600">Hosting & underhåll</p>
              <p className="mb-8 text-gray-300 group-hover:text-gray-700">Skräddarsydda lösningar för komplexa affärsbehov</p>
              
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start gap-2"><span className="mt-1 group-hover:text-black">✓</span><span>Obegränsat antal sidor</span></li>
                <li className="flex items-start gap-2"><span className="mt-1 group-hover:text-black">✓</span><span>Anpassade integrationer</span></li>
                <li className="flex items-start gap-2"><span className="mt-1 group-hover:text-black">✓</span><span>E-handelsplattform</span></li>
                <li className="flex items-start gap-2"><span className="mt-1 group-hover:text-black">✓</span><span>Avancerad analys</span></li>
                <li className="flex items-start gap-2"><span className="mt-1 group-hover:text-black">✓</span><span>Dedikerad support</span></li>
                <li className="flex items-start gap-2"><span className="mt-1 group-hover:text-black">✓</span><span>Premium hosting</span></li>
                <li className="flex items-start gap-2"><span className="mt-1 group-hover:text-black">✓</span><span>Månatlig optimering & support</span></li>
                <li className="flex items-start gap-2"><span className="mt-1 group-hover:text-black">✓</span><span>Anpassade funktioner</span></li>
              </ul>
              
              <button onClick={() => scrollToSection('kontakt')} className="w-full bg-white text-black py-3 font-bold hover:bg-black hover:text-white border-2 border-white transition-all duration-300 group-hover:bg-black group-hover:text-white mt-auto">Kom Igång</button>
            </div>
          </div>
        </div>
      </section>

      <section id="kontakt" className="bg-black text-white py-24 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">Låt Oss Prata</h2>
            <p className="text-lg text-gray-400">Redo att få ditt företag online? Fyll i formuläret nedan så återkommer vi inom 24 timmar.</p>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Fullständigt Namn *</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Johan Andersson" className="w-full px-4 py-3 bg-white text-black border-2 border-white focus:outline-none focus:ring-2 focus:ring-white" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">E-post *</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="johan@exempel.se" className="w-full px-4 py-3 bg-white text-black border-2 border-white focus:outline-none focus:ring-2 focus:ring-white" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Telefonnummer</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+46 70 123 45 67" className="w-full px-4 py-3 bg-white text-black border-2 border-white focus:outline-none focus:ring-2 focus:ring-white" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Företagstyp *</label>
                <input type="text" name="businessType" value={formData.businessType} onChange={handleChange} placeholder="Restaurang, Salong, etc." className="w-full px-4 py-3 bg-white text-black border-2 border-white focus:outline-none focus:ring-2 focus:ring-white" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Berätta om ditt projekt *</label>
              <textarea name="projectDetails" value={formData.projectDetails} onChange={handleChange} rows={6} placeholder="Vilken typ av webbplats behöver du? Specifika funktioner eller krav?" className="w-full px-4 py-3 bg-white text-black border-2 border-white focus:outline-none focus:ring-2 focus:ring-white"></textarea>
            </div>

            <button onClick={handleSubmit} className="w-full bg-white text-black py-4 font-bold text-lg hover:bg-black hover:text-white border-2 border-white transition-all duration-300">Skicka Meddelande</button>
          </div>
        </div>
      </section>

      <footer className="bg-white py-12 border-t-2 border-black">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <span className="text-2xl">⛶</span>
                <span className="text-xl font-bold">WEBLUR</span>
              </div>
              <p className="text-gray-600">Professionella webbplatser för restauranger och bokningstjänster. Vi gör det enkelt och prisvärt att komma online.</p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Snabblänkar</h3>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('tjanster')} className="text-gray-600 hover:text-black transition">Tjänster</button></li>
                <li><button onClick={() => scrollToSection('portfolio')} className="text-gray-600 hover:text-black transition">Portfolio</button></li>
                <li><button onClick={() => scrollToSection('priser')} className="text-gray-600 hover:text-black transition">Priser</button></li>
                <li><button onClick={() => scrollToSection('kontakt')} className="text-gray-600 hover:text-black transition">Kontakt</button></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Kontakt</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="tel:+46701234567" className="hover:text-black transition">+46 70 123 45 67</a></li>
                <li><a href="mailto:info@weblur.se" className="hover:text-black transition">info@weblur.se</a></li>
                <li>Linköping, Sverige</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 px-8">
          <div className="border-t-2 border-black pt-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-600">© 2026 Weblur. Alla rättigheter förbehållna.</p>
                <div className="flex gap-6 text-gray-600">
                  <button className="hover:text-black transition">Integritetspolicy</button>
                  <button className="hover:text-black transition">Användarvillkor</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}