import { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, Phone, Facebook, Instagram, ChevronRight, Star, CheckCircle2, MessageCircle, Info, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  tag?: string;
}

interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

// --- Data ---
const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Choco Fudge Flavor',
    description: 'Ang aming Best Seller! Rich, thick, and premium chocolate fudge experience in a jar.',
    price: 155,
    image: '/choco-fudge.png',
    tag: 'Best Seller'
  },
  {
    id: '2',
    name: 'Yema Original',
    description: 'Ang paboritong matamis! Thick, creamy, at sakto ang tamis. Perfect sa mainit na pandesal.',
    price: 150,
    image: '/yema.jpg',
    tag: 'Classic'
  },
  {
    id: '3',
    name: 'Chocolate Flavor',
    description: 'Classic chocolate goodness na swak sa budget at panlasa ng buong pamilya.',
    price: 150,
    image: '/choco.jpg'
  },
  {
    id: '4',
    name: 'Milk Chocolate',
    description: 'Creamy milk chocolate blend. Sakto ang tamis, paborito ng mga kids!',
    price: 150,
    image: '/milk-choco.jpg'
  },
  {
    id: '5',
    name: 'Strawberry Flavor',
    description: 'Sweet and fruity strawberry yema spread. Perfect for a refreshing snack!',
    price: 150,
    image: '/strawberry.png'
  }
];

const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Teacher Maria',
    role: 'High School Teacher',
    content: 'Sobrang sulit! Ito na ang baon ko araw-araw sa school. Hindi tinipid sa ingredients, lasang homemade talaga.',
    rating: 5
  },
  {
    id: '2',
    name: 'Kevin D.',
    role: 'BPO Employee',
    content: 'The Spicy Tuna is a game changer! Perfect pang-midnight snack habang nasa shift. Order ulit ako next week!',
    rating: 5
  },
  {
    id: '3',
    name: 'Aling Nena',
    role: 'Sari-sari Store Owner',
    content: 'Mabilis maubos sa tindahan ko! Gustong-gusto ng mga bata yung Yema spread. Affordable pa.',
    rating: 5
  }
];

const FAQS = [
  {
    question: 'Gaano katagal ang shelf life?',
    answer: 'Ang aming palaman ay tumatagal ng 3-6 months kapag naka-refrigerate. Dahil wala itong preservatives, mas mainam na ubusin agad!'
  },
  {
    question: 'May minimum order ba?',
    answer: 'Minimum order is 5 jars outside Cebu, and 3 jars inside Cebu. Mas makakatipid kayo sa aming Bundle Packs!'
  },
  {
    question: 'Saan kayo nag-dedeliver?',
    answer: 'We offer same-day delivery within Cebu City. We also deliver nationwide via Lalamove, Grab, or J&T Express.'
  }
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="fixed w-full z-50 bg-brand-bg/80 backdrop-blur-md border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold text-xl">J</div>
            <span className="text-2xl font-display font-bold text-brand-accent">Joanna's <span className="text-brand-primary">Palaman</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#products" className="font-medium hover:text-brand-primary transition-colors">Products</a>
            <a href="#about" className="font-medium hover:text-brand-primary transition-colors">About Us</a>
            <a href="#testimonials" className="font-medium hover:text-brand-primary transition-colors">Reviews</a>
            <a href="#faq" className="font-medium hover:text-brand-primary transition-colors">FAQ</a>
            <button className="btn-primary !py-2 !px-6 !text-base">Order Now</button>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-brand-accent p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-orange-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              <a href="#products" onClick={() => setIsOpen(false)} className="block text-lg font-medium py-2 border-b border-gray-50">Products</a>
              <a href="#about" onClick={() => setIsOpen(false)} className="block text-lg font-medium py-2 border-b border-gray-50">About Us</a>
              <a href="#testimonials" onClick={() => setIsOpen(false)} className="block text-lg font-medium py-2 border-b border-gray-50">Reviews</a>
              <a href="#faq" onClick={() => setIsOpen(false)} className="block text-lg font-medium py-2 border-b border-gray-50">FAQ</a>
              <button className="w-full btn-primary mt-4">Order Now</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-brand-secondary/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 left-[-5%] w-[300px] h-[300px] bg-brand-primary/10 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-brand-primary font-bold text-sm mb-6">
              <Star size={16} fill="currentColor" />
              <span>#1 Homemade Palaman in Town</span>
            </div>
            <h1 className="text-5xl lg:text-7xl leading-tight mb-6">
              Ang Paboritong <span className="text-brand-primary">Palaman</span> ng Bayan!
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl">
              Gawing espesyal ang bawat kagat. Homemade, affordable, at punong-puno ng flavor! Tikman ang palamang hindi tinipid.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex items-center justify-center gap-2">
                Order via Messenger <MessageCircle size={20} />
              </button>
              <button className="btn-secondary">View Menu</button>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-12 h-12 rounded-full border-4 border-brand-bg object-cover" alt="User" />
                ))}
              </div>
              <div>
                <div className="flex text-yellow-500">
                  {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-sm font-medium text-gray-500">1,000+ Happy Customers</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 animate-float">
              <img 
                src="/group.jpg" 
                alt="Delicious Palaman" 
                className="rounded-3xl shadow-2xl border-8 border-white w-full object-cover aspect-square"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-2xl max-w-[200px]">
                <p className="text-brand-primary font-bold text-2xl">₱150</p>
                <p className="text-sm text-gray-500">Starting price per jar. Sulit na sulit!</p>
              </div>
              <div className="absolute -top-6 -right-6 bg-brand-secondary p-6 rounded-full shadow-lg rotate-12">
                <p className="text-brand-accent font-black text-xl text-center leading-none">FRESHLY<br/>MADE</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ProductSection = () => {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-4">Our Best Sellers</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Pili na ng paborito mong flavor! Perfect pang-almusal, meryenda, o kahit midnight snack.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group bg-brand-bg rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-orange-50"
            >
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                {product.tag && (
                  <div className="absolute top-4 left-4 bg-brand-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {product.tag}
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-2">{product.name}</h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-brand-primary">₱{product.price}</span>
                  <button className="p-3 bg-white text-brand-primary rounded-full shadow-md hover:bg-brand-primary hover:text-white transition-colors">
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Bundle Offer */}
        <div className="mt-20 bg-brand-accent text-white rounded-[40px] p-8 lg:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20" />
          <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="bg-brand-secondary text-brand-accent px-4 py-1 rounded-full font-bold text-sm uppercase tracking-widest mb-4 inline-block">Special Bundle</span>
              <h2 className="text-4xl mb-4">Try Them All & Save!</h2>
              <p className="text-gray-300 text-lg mb-8">
                Kunin ang aming "Palaman Sampler Pack" (5 Jars) for only <span className="text-brand-secondary font-bold text-2xl">₱560</span>. 
                Save ₱195 and get a FREE wooden spreader!
              </p>
              <button className="btn-primary !bg-brand-secondary !text-brand-accent">Claim Bundle Offer</button>
            </div>
            <div className="hidden lg:block">
              <img src="/group.jpg" alt="Bundle Offer" className="rounded-2xl shadow-2xl rotate-2 object-cover h-64 w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-secondary/30 rounded-full blur-2xl" />
            <img 
              src="/group.jpg" 
              alt="Joanna's Palaman" 
              className="rounded-[60px] shadow-2xl relative z-10 object-cover aspect-[3/4]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -right-10 glass-card p-8 rounded-3xl z-20 max-w-[280px]">
              <p className="italic text-lg mb-4">"Gusto ko lang na bawat pamilyang Pilipino, makatikim ng masarap at de-kalidad na palaman nang hindi nabubutas ang bulsa."</p>
              <p className="font-bold text-brand-primary">— Joanna, Founder</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-4xl lg:text-5xl mb-8">Ang Kwento ni <span className="text-brand-primary">Joanna</span></h2>
            <div className="space-y-6 text-lg text-gray-600">
              <p>
                Nagsimula ang lahat sa isang maliit na kusina sa aming bahay. Bilang isang mahilig sa sandwich, laging bitin si Joanna sa mga palamang nabibili sa grocery—alinman sa sobrang mahal o kulang sa lasa.
              </p>
              <p>
                Doon nagsimula ang pag-eeksperimento. Gamit ang mga sariwang sangkap at pagmamahal, nabuo ang unang batch ng aming **Classic Yema Spread**.
              </p>
              <p>
                Ngayon, ang **Joanna's Palaman** ay naghahatid na ng saya sa libu-libong hapag-kainan. Nanatili kaming tapat sa aming pangako: **Lasang Bahay, Presyong Kaibigan.**
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-brand-primary flex-shrink-0" />
                <div>
                  <p className="font-bold">No Preservatives</p>
                  <p className="text-sm text-gray-500">Freshly made every batch.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-brand-primary flex-shrink-0" />
                <div>
                  <p className="font-bold">Premium Ingredients</p>
                  <p className="text-sm text-gray-500">Hindi tinipid sa lasa.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-brand-primary flex-shrink-0" />
                <div>
                  <p className="font-bold">Affordable</p>
                  <p className="text-sm text-gray-500">Budget-friendly prices.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-brand-primary flex-shrink-0" />
                <div>
                  <p className="font-bold">Fast Delivery</p>
                  <p className="text-sm text-gray-500">Same day for Metro Manila.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-brand-accent text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-4">What Our Suki Says</h2>
          <p className="text-xl text-gray-400">Hindi lang kami ang nagsasabi, pati na rin sila!</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
              <div className="flex text-brand-secondary mb-6">
                {[...Array(t.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <p className="text-lg mb-8 italic">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center font-bold text-xl">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-bold">{t.name}</p>
                  <p className="text-sm text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-500">May katanungan ba kayo? Baka nandito na ang sagot!</p>
        </div>
        
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="border border-gray-100 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left font-bold text-lg hover:bg-brand-bg transition-colors"
              >
                {faq.question}
                <ChevronRight className={`transition-transform ${openIdx === idx ? 'rotate-90' : ''}`} />
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-primary rounded-[60px] p-12 lg:p-24 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/food.png')] opacity-10" />
          <div className="relative z-10">
            <h2 className="text-5xl lg:text-7xl mb-8">Ready to level up your breakfast?</h2>
            <p className="text-2xl mb-12 opacity-90 max-w-2xl mx-auto">
              Huwag nang mag-pahuli! Order na at damhin ang sarap ng Joanna's Palaman.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="btn-secondary !border-white !text-brand-primary !px-12 !py-5 !text-xl">
                Order via Messenger
              </button>
            </div>
            <p className="mt-8 text-sm opacity-75">✓ Fast Shipping ✓ Secure Payment ✓ 100% Satisfaction Guarantee</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-bg pt-20 pb-10 border-t border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold">J</div>
              <span className="text-xl font-display font-bold text-brand-accent">Joanna's <span className="text-brand-primary">Palaman</span></span>
            </div>
            <p className="text-gray-500 mb-6">Ang paboritong palaman ng bawat pamilyang Pilipino. Homemade with love.</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-all"><Facebook size={20} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-all"><Instagram size={20} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-all"><Phone size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#products" className="hover:text-brand-primary transition-colors">Products</a></li>
              <li><a href="#about" className="hover:text-brand-primary transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="hover:text-brand-primary transition-colors">Reviews</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Support</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#faq" className="hover:text-brand-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Refund Policy</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-gray-500 mb-4 text-sm">Get 10% OFF on your first order when you join our mailing list!</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email mo dito" className="bg-white border border-orange-100 rounded-full px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-brand-primary/20" />
              <button className="bg-brand-primary text-white p-2 rounded-full hover:bg-orange-600 transition-colors"><ChevronRight /></button>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-orange-100 text-center text-gray-400 text-sm">
          <p>© 2026 Joanna's Palaman. All rights reserved. Proudly Pinoy Made. 🇵🇭</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <ProductSection />
        <AboutSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
