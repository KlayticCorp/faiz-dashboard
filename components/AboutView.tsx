import React, { useState, useEffect } from 'react';
import { 
  Sparkles, Rocket, Award, Zap, DollarSign, 
  Globe, Users, ArrowRight, 
  Mail, Send, MessageCircle, Monitor, Palette, Video, Heart, 
  ChevronLeft, ChevronRight, Atom, Microscope, ArrowUp, Instagram,
  Copy, Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import WordReveal from './WordReveal';
import { LegalType } from './LegalModal';

interface AboutViewProps {
  onOpenLegal: (type: LegalType) => void;
}

const AboutView: React.FC<AboutViewProps> = ({ onOpenLegal }) => {
  return (
    <div className="max-w-[1400px] mx-auto px-6 py-24 md:px-12 md:py-32 font-sans relative">
      
      {/* Scroll To Top Button */}
      <ScrollToTopButton />

      {/* Hero Section */}
      <header className="mb-32 md:mb-48 relative">
        <WordReveal 
          as="h1"
          text="I am Faiz Ehsan."
          className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter text-white mb-10 leading-[0.9] -ml-1 font-sans"
          delay={0}
        />

        <div className="space-y-8 max-w-5xl">
            <WordReveal 
              as="p"
              text="Obsessed with creating better apps and digital experiences for the next generation."
              className="text-3xl md:text-5xl text-white font-medium leading-tight tracking-tight"
              delay={0.2}
            />
            <WordReveal 
              as="p"
              text="I don't just write code; I craft narratives. From the courtroom to the code editor, my journey is about bridging human intent with artificial intelligence."
              className="text-xl md:text-2xl text-gray-400 font-normal leading-relaxed max-w-3xl"
              delay={0.4}
            />
        </div>
      </header>

      {/* Instagram Section */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1 }}
        className="mb-40"
      >
        <div className="flex flex-col md:flex-row items-end justify-between mb-8 gap-4">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white font-sans">
                On Instagram.
            </h2>
            <div className="flex items-center gap-2 text-gray-500 font-medium">
                <span>Follow the journey</span>
                <ArrowRight size={18} />
            </div>
        </div>
        
        <a 
            href="https://www.instagram.com/midjourney_legend?igsh=c3Z3b3I3ZHd1Z29s" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full aspect-video rounded-[2rem] overflow-hidden shadow-2xl relative group cursor-pointer bg-black border border-white/10"
        >
            {/* Background Image */}
            <img 
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
              alt="Abstract Texture" 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-700 transform group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/40 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] flex flex-col items-center gap-4 group-hover:scale-105 transition-transform duration-500 shadow-2xl">
                     <div className="bg-gradient-to-tr from-purple-500 via-pink-500 to-orange-500 p-4 rounded-2xl text-white shadow-lg">
                        <Instagram size={40} />
                     </div>
                     <div className="text-center">
                        <span className="block text-white font-semibold text-2xl tracking-tight">@faizehsan</span>
                        <span className="text-white/60 text-sm font-medium">12.4k Followers</span>
                     </div>
                     <span className="text-black text-sm font-bold bg-white px-6 py-2 rounded-full hover:bg-gray-200 transition-colors">
                        Follow
                     </span>
                </div>
            </div>
        </a>
      </motion.section>
      
      {/* Philosophy Grid (10 Items) */}
      <motion.section className="mb-40">
        <WordReveal 
            as="h2" 
            text="The DNA." 
            className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-12 font-sans" 
        />
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <PhilosophyItem icon={<Sparkles />} label="Simplicity" delay={0} />
            <PhilosophyItem icon={<Rocket />} label="Utility" delay={0.05} />
            <PhilosophyItem icon={<Award />} label="Beauty" delay={0.1} />
            <PhilosophyItem icon={<DollarSign />} label="Fair Pricing" delay={0.15} />
            <PhilosophyItem icon={<Users />} label="Community" delay={0.2} />
            
            <PhilosophyItem icon={<Zap />} label="Speed" delay={0.25} />
            <PhilosophyItem icon={<Atom />} label="Futuristic" delay={0.3} />
            <PhilosophyItem icon={<Microscope />} label="Proven Researched" delay={0.35} />
            <PhilosophyItem icon={<Globe />} label="Impact" delay={0.4} />
            <PhilosophyItem icon={<Monitor />} label="Pure Tech" delay={0.45} />
        </div>
      </motion.section>

      {/* Unified Domain Expertise Card */}
      <motion.section className="mb-40">
        <WordReveal 
            as="h2" 
            text="What I Do." 
            className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-12 font-sans" 
        />
        <AnimatedExpertiseCard />
      </motion.section>

      {/* Interactive Timeline - Redesigned */}
      <motion.section className="max-w-4xl mx-auto mb-40">
        <div className="text-center mb-24">
            <WordReveal 
                as="h2" 
                text="The Journey." 
                className="text-4xl md:text-5xl font-semibold tracking-tighter text-white font-sans justify-center" 
            />
        </div>
        
        <div className="relative pl-4 md:pl-0">
            {/* The Thread */}
            <div className="absolute left-[3.5rem] md:left-1/2 top-4 bottom-4 w-[1px] bg-gradient-to-b from-transparent via-gray-800 to-transparent md:-ml-[0.5px]" />
            
            <div className="space-y-24">
                <TimelineEvent year="2018" title="The Beginning" desc="Entered law school while making quest games on the side. The logic of law met the logic of code." side="left" />
                <TimelineEvent year="2019" title="Discovery" desc="Started designing graphics. Discovered I loved visual storytelling more than legal briefs." side="right" />
                <TimelineEvent year="2020" title="The Metaverse" desc="Built in the metaverse space while still in law school. Provided consultations on digital storytelling." side="left" />
                <TimelineEvent year="2021" title="Client Work" desc="Started creating high-end ads & video content for international clients." side="right" />
                <TimelineEvent year="2022" title="The Pivot" desc="Midjourney dropped. Everything changed. I saw the future and went all-in on AI art generation." side="left" />
                <TimelineEvent year="2023" title="The Law" desc="Graduated as a lawyer. Proved I could finish hard things, then returned to my true passion: Tech." side="right" />
                <TimelineEvent year="2024" title="Expansion" desc="AI filmmaking, AI commercials, AI songs. Working with top brands to define the new aesthetic." side="left" />
                <TimelineEvent year="2025" title="Cinema" desc="Building the future of AI cinema. Polished video editing skills to Hollywood standards." side="right" />
                <TimelineEvent year="2026" title="The Dream" desc="I always wanted to be a Youtuber! Now educating the next generation of builders." side="center" highlight />
            </div>
        </div>
      </motion.section>

      {/* Contact Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="pt-20 border-t border-white/10 flex flex-col items-center"
      >
        <WordReveal 
            as="h2" 
            text="Let's build together." 
            className="text-5xl md:text-8xl font-semibold tracking-tighter text-white mb-12 text-center font-sans justify-center" 
        />
        
        <ContactButton />

        <div className="mt-24 pb-32 md:pb-8 flex flex-wrap justify-center gap-8 text-sm text-gray-500 font-medium tracking-wide">
           <button onClick={() => onOpenLegal('privacy')} className="hover:text-white transition-colors">Privacy Policy</button>
           <button onClick={() => onOpenLegal('refund')} className="hover:text-white transition-colors">Refund Policy</button>
           <button onClick={() => onOpenLegal('terms')} className="hover:text-white transition-colors">Terms & Conditions</button>
        </div>
      </motion.footer>
    </div>
  );
};

// --- Sub Components ---

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      // The scrollable container is the 'main' element in App.tsx
      const mainElement = document.querySelector('main');
      if (!mainElement) return;

      const toggleVisibility = () => {
        if (mainElement.scrollTop > 500) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
      
      mainElement.addEventListener("scroll", toggleVisibility);
      return () => mainElement.removeEventListener("scroll", toggleVisibility);
    }, []);
  
    const scrollToTop = () => {
      const mainElement = document.querySelector('main');
      if (mainElement) {
        mainElement.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };
  
    return (
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-28 md:bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-[#1C1C1E]/80 backdrop-blur-xl border border-white/10 shadow-2xl text-white hover:bg-[#2C2C2E] transition-all flex items-center justify-center cursor-pointer"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    );
};

const PhilosophyItem = ({ icon, label, delay }: { icon: React.ReactNode, label: string, delay: number }) => (
    <motion.div 
        initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        viewport={{ margin: "-50px" }}
        whileHover={{ y: -5, backgroundColor: "#1D1D1F" }}
        transition={{ duration: 0.6, delay: delay }}
        className="bg-[#1C1C1E] border border-white/10 p-6 rounded-3xl flex flex-col items-center justify-center gap-4 h-40 shadow-sm hover:shadow-xl transition-all cursor-default group"
    >
        <div className="text-gray-500 group-hover:text-white transition-colors scale-125">
            {icon}
        </div>
        <span className="font-semibold text-sm text-white text-center">{label}</span>
    </motion.div>
);

const AnimatedExpertiseCard = () => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slides = [
        {
            title: "I build Websites.",
            desc: "Modern, responsive, and highly performant applications using React and AI integration.",
            icon: <Monitor size={48} />,
            bg: "bg-blue-600"
        },
        {
            title: "I make AI Art.",
            desc: "Pushing the boundaries of generative imagery to create award-winning visuals.",
            icon: <Palette size={48} />,
            bg: "bg-purple-600"
        },
        {
            title: "I create Ads.",
            desc: "High-conversion motion graphics and video content for global brands.",
            icon: <Video size={48} />,
            bg: "bg-orange-500"
        },
        {
            title: "I help Youth.",
            desc: "Sharing knowledge on YouTube to inspire the next generation of creators.",
            icon: <Heart size={48} />,
            bg: "bg-red-500"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 6000);
        return () => clearInterval(timer);
    }, [index]);

    const nextSlide = () => {
        setDirection(1);
        setIndex((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="w-full h-[550px] bg-[#1C1C1E] rounded-[3rem] overflow-hidden relative flex items-center justify-center p-6 md:p-12 shadow-2xl group border border-white/10">
            <AnimatePresence mode="wait">
                <motion.div 
                    key={`bg-${index}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.15 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className={`absolute inset-0 ${slides[index].bg} blur-[120px]`}
                />
            </AnimatePresence>

            <button 
                onClick={prevSlide}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-md flex items-center justify-center text-white z-20 transition-all opacity-0 group-hover:opacity-100"
            >
                <ChevronLeft size={24} />
            </button>
            <button 
                onClick={nextSlide}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-md flex items-center justify-center text-white z-20 transition-all opacity-0 group-hover:opacity-100"
            >
                <ChevronRight size={24} />
            </button>

            <AnimatePresence mode="wait" custom={direction}>
                <motion.div 
                    key={index}
                    custom={direction}
                    initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative z-10 text-center flex flex-col items-center max-w-2xl"
                >
                    <div className="mb-8 p-6 bg-white/5 backdrop-blur-md rounded-3xl text-white border border-white/10 shadow-lg">
                        {slides[index].icon}
                    </div>
                    <h3 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight font-sans">
                        {slides[index].title}
                    </h3>
                    <p className="text-xl md:text-2xl text-gray-400 font-medium leading-relaxed">
                        {slides[index].desc}
                    </p>
                </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-8 flex gap-3">
                {slides.map((_, i) => (
                    <button 
                        key={i} 
                        onClick={() => setIndex(i)}
                        className={`h-1.5 rounded-full transition-all duration-500 ${i === index ? 'w-8 bg-white' : 'w-2 bg-white/20'}`} 
                    />
                ))}
            </div>
        </div>
    );
};

const TimelineEvent = ({ year, title, desc, side, highlight }: { year: string, title: string, desc: string, side: 'left' | 'right' | 'center', highlight?: boolean }) => {
    // Standardize side logic: 'left' = visual left, 'right' = visual right
    const isLeft = side === 'left';
    const isRight = side === 'right';
    const isCenter = side === 'center';
    
    return (
        <motion.div 
            initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
            whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            viewport={{ margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className={`relative flex flex-col md:flex-row items-center w-full ${
                isLeft ? 'md:flex-row-reverse' : ''
            } ${isCenter ? 'justify-center' : ''}`}
        >
            <div className={`absolute left-[3.5rem] md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10 ${isCenter ? 'relative md:static mb-8 md:mb-0 translate-x-0 left-auto' : ''}`}>
                 <div className={`px-4 py-2 rounded-full overflow-hidden relative ${highlight ? 'bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl' : 'bg-[#1C1C1E]'}`}>
                    
                    {/* Highlight Shine Effect */}
                    {highlight && (
                        <motion.div 
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 z-20"
                            initial={{ x: '-200%' }}
                            animate={{ x: '200%' }}
                            transition={{ repeat: Infinity, duration: 3, repeatDelay: 1, ease: "easeInOut" }}
                        />
                    )}

                    <span className={`text-4xl md:text-5xl font-bold tracking-tighter relative z-10 ${
                        highlight 
                        ? 'text-white' 
                        : 'text-gray-500'
                    }`}>
                        {year}
                    </span>
                 </div>
            </div>

            <div className="hidden md:block md:w-1/2" />
            
            <div className={`w-full md:w-1/2 pl-40 md:pl-0 ${
                isLeft ? 'md:text-right md:pr-28 md:pl-12' : 
                isRight ? 'md:text-left md:pl-28 md:pr-12' : 
                'md:text-center mt-4 !pl-0'
            }`}>
                <div className={`py-4 rounded-3xl`}>
                    <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
                    <p className="text-lg text-gray-400 leading-relaxed font-medium">{desc}</p>
                </div>
            </div>

        </motion.div>
    );
};

const ContactButton = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        navigator.clipboard.writeText("Faizehsan1234@gmail.com");
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    return (
        <motion.div 
            className="relative h-20 flex justify-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                setIsHovered(false);
                setIsCopied(false);
            }}
        >
             <motion.button 
                layout
                className={`bg-white text-black h-16 rounded-full flex items-center justify-center overflow-hidden transition-all duration-500 ease-[0.23,1,0.32,1] shadow-xl ${
                    isHovered ? 'w-[420px] px-8' : 'w-[200px]'
                }`}
            >
                <AnimatePresence mode="wait">
                    {!isHovered ? (
                        <motion.div 
                            key="text"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                            className="flex items-center gap-3 text-lg font-medium"
                        >
                            Get in touch <ArrowRight size={20} />
                        </motion.div>
                    ) : (
                        <motion.div 
                            key="icons"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ delay: 0.1, duration: 0.3 }}
                            className="flex items-center justify-between w-full"
                        >
                            <SocialLink 
                                icon={<Send size={20} />} 
                                label="Telegram" 
                                href="https://t.me/Faiz_Ehsan"
                            />
                            
                            <div className="w-[1px] h-6 bg-black/20 mx-6" />
                            
                            <button
                                onClick={handleCopy}
                                className="flex items-center gap-3 group/email hover:opacity-70 transition-opacity"
                                title="Copy Email"
                            >
                                <span className="font-medium text-base tracking-wide text-gray-800 group-hover/email:text-black">
                                    Faizehsan1234@gmail.com
                                </span>
                                <div className="bg-black/10 p-2 rounded-full group-hover/email:bg-black/20 transition-colors relative w-8 h-8 flex items-center justify-center">
                                    <AnimatePresence mode="wait">
                                        {isCopied ? (
                                            <motion.div
                                                key="check"
                                                initial={{ scale: 0, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                exit={{ scale: 0, opacity: 0 }}
                                                className="absolute"
                                            >
                                                <Check size={14} className="text-green-600" />
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                key="copy"
                                                initial={{ scale: 0, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                exit={{ scale: 0, opacity: 0 }}
                                                className="absolute"
                                            >
                                                <Copy size={14} />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>
        </motion.div>
    );
};

const SocialLink = ({ icon, label, href }: { icon: React.ReactNode, label: string, href: string }) => (
    <motion.a 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className="flex flex-col items-center gap-1 text-black/80 hover:text-black"
        title={label}
    >
        {icon}
    </motion.a>
);

export default AboutView;