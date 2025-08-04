import React, { useState, useEffect } from 'react';
import { MessageCircle, Instagram, Crown, User, Mail, ExternalLink, MapPin, Calendar, Clock, Globe, Star, Heart, Gamepad2, Eye, Zap } from 'lucide-react';
import { useDiscordAvatar } from './hooks/useUserData';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeSection, setActiveSection] = useState('welcome');
  const [showWelcome, setShowWelcome] = useState(true);
  const [avatarError, setAvatarError] = useState(false);
  
  // Fetch Discord avatar dynamically
  const { avatar, loading: avatarLoading } = useDiscordAvatar();
  const avatarUrl = avatar?.avatarUrl || "/e9c4e804b0c546262bd2bc03f593648d.jpg";

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Auto transition from welcome screen after 4 seconds
    const welcomeTimer = setTimeout(() => {
      setShowWelcome(false);
      setActiveSection('about');
    }, 4000);

    return () => {
      clearInterval(timer);
      clearTimeout(welcomeTimer);
    };
  }, []);

  const socialLinks = [
    { 
      name: 'Discord', 
      icon: MessageCircle, 
      url: 'https://discord.com/users/1c.2', 
      color: 'hover:text-[#007BFF]',
      description: 'Connect in the Digital Realm',
      username: '1c.2'
    },
    { 
      name: 'Instagram', 
      icon: Instagram, 
      url: 'https://www.instagram.com/lordx679', 
      color: 'hover:text-[#007BFF]',
      description: 'Witness the Journey',
      username: '@lordx679'
    },
    { 
      name: 'Roblox', 
      icon: Gamepad2, 
      url: 'https://www.roblox.com/users/profile?username=aoufabok', 
      color: 'hover:text-[#007BFF]',
      description: 'Enter My Domain',
      username: 'aoufabok'
    },
  ];

  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'Discord',
      value: '1c.2',
      description: 'Direct Communication Channel',
      color: 'from-[#007BFF] to-[#0056CC]',
      url: 'https://discord.com/users/1c.2'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      value: '@lordx679',
      description: 'Visual Chronicles',
      color: 'from-[#007BFF] to-[#0056CC]',
      url: 'https://www.instagram.com/lordx679'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'ibraff739@gmail.com',
      description: 'Formal Correspondence',
      color: 'from-[#007BFF] to-[#0056CC]',
      url: 'mailto:ibraff739@gmail.com'
    },
    {
      icon: Gamepad2,
      title: 'Roblox',
      value: 'aoufabok',
      description: 'Gaming Dimension',
      color: 'from-[#007BFF] to-[#0056CC]',
      url: 'https://www.roblox.com/users/profile?username=aoufabok'
    }
  ];

  const domains = [
    { 
      category: 'Digital Mastery', 
      items: ['Strategic Gaming', 'System Architecture', 'Network Orchestration', 'Virtual Dominion'], 
      icon: Zap, 
      color: 'from-[#1a1a1a] to-[#2a2a2a]',
      accent: '#007BFF'
    },
    { 
      category: 'Social Engineering', 
      items: ['Community Leadership', 'Content Manifestation', 'Influence Networks', 'Digital Presence'], 
      icon: Eye, 
      color: 'from-[#1a1a1a] to-[#2a2a2a]',
      accent: '#007BFF'
    },
    { 
      category: 'Cultural Intelligence', 
      items: ['Strategic Analysis', 'Pattern Recognition', 'Cross-Cultural Navigation', 'Future Anticipation'], 
      icon: Crown, 
      color: 'from-[#1a1a1a] to-[#2a2a2a]',
      accent: '#007BFF'
    },
  ];

  // Get current time in Italy
  const italyTime = new Date().toLocaleString('en-US', {
    timeZone: 'Europe/Rome',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });

  const isOnline = () => {
    const now = new Date();
    const italyHour = parseInt(new Date().toLocaleString('en-US', {
      timeZone: 'Europe/Rome',
      hour: '2-digit',
      hour12: false
    }));
    const day = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
    
    // More relaxed online hours for personal site
    if (day === 0) return italyHour >= 12 && italyHour < 23; // Sunday
    if (day === 6) return italyHour >= 10 && italyHour < 24; // Saturday
    return italyHour >= 8 && italyHour < 23; // Monday-Friday
  };

  // Welcome Screen - Aizen LORD Style
  if (showWelcome) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
        {/* Divine Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black"></div>
          
          {/* Divine Energy Particles */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#007BFF] rounded-full animate-ping opacity-70 shadow-[0_0_10px_#007BFF]"></div>
          <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-[#007BFF] rounded-full animate-pulse opacity-60 shadow-[0_0_8px_#007BFF]"></div>
          <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-[#007BFF] rounded-full animate-bounce opacity-50 shadow-[0_0_15px_#007BFF]"></div>
          <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-[#007BFF] rounded-full animate-ping opacity-80 shadow-[0_0_6px_#007BFF]"></div>
          
          {/* Divine Aura Effects */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#007BFF]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-[#007BFF]/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-[#007BFF]/10 rounded-full blur-xl animate-pulse delay-2000"></div>
        </div>

        {/* Divine Presence Content */}
        <div className="relative z-10 text-center">
          {/* Divine Crown Icon */}
          <div className="mb-8 relative">
            <div className="w-32 h-32 mx-auto mb-6 relative">
              <Crown className="w-full h-full text-[#007BFF] drop-shadow-2xl animate-pulse shadow-[0_0_30px_#007BFF]" />
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#007BFF] rounded-full animate-ping shadow-[0_0_20px_#007BFF]"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-[#007BFF] rounded-full animate-pulse delay-500 shadow-[0_0_15px_#007BFF]"></div>
              <div className="absolute inset-0 bg-[#007BFF]/20 rounded-full blur-xl animate-pulse"></div>
            </div>
          </div>

          {/* Divine Proclamation */}
          <div className="space-y-8">
            <h1 className="text-7xl lg:text-9xl font-black text-white drop-shadow-2xl animate-pulse" style={{textShadow: '0 0 20px #007BFF, 0 0 40px #007BFF, 0 0 60px #007BFF'}}>
              I AM
            </h1>
            <div className="flex items-center justify-center space-x-6 text-5xl lg:text-8xl font-black">
              <div className="relative">
                <span className="text-[#007BFF] animate-pulse delay-500" style={{textShadow: '0 0 30px #007BFF, 0 0 60px #007BFF'}}>
                  LORD
                </span>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#007BFF] rounded-full animate-ping shadow-[0_0_15px_#007BFF]"></div>
              </div>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-white/90 animate-pulse delay-700" style={{textShadow: '0 0 15px #007BFF'}}>
              Architect of the Future
            </h2>
          </div>

          {/* Divine Loading Animation */}
          <div className="mt-16">
            <div className="w-80 h-1 bg-gray-800 rounded-full mx-auto overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#007BFF] via-[#0099FF] to-[#007BFF] rounded-full animate-pulse transform origin-left scale-x-0 animate-[scaleX_4s_ease-in-out_forwards] shadow-[0_0_10px_#007BFF]"></div>
            </div>
            <p className="text-white/70 text-lg mt-6 animate-pulse delay-1000" style={{textShadow: '0 0 10px #007BFF'}}>
              Transcending the Conventional...
            </p>
          </div>
        </div>

        {/* Divine Border Effects */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#007BFF] to-transparent animate-pulse shadow-[0_0_10px_#007BFF]"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#007BFF] to-transparent animate-pulse delay-500 shadow-[0_0_10px_#007BFF]"></div>
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-[#007BFF] to-transparent animate-pulse delay-1000 shadow-[0_0_10px_#007BFF]"></div>
        <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-[#007BFF] to-transparent animate-pulse delay-1500 shadow-[0_0_10px_#007BFF]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Divine Realm Background */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#007BFF]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-[#007BFF]/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/4 left-1/2 w-32 h-32 bg-[#007BFF]/8 rounded-full blur-xl animate-pulse delay-2000"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#001122]/50 to-transparent"></div>
      </div>

      {/* Divine Command Interface */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-[#007BFF]/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#007BFF] to-[#0056CC] rounded-lg flex items-center justify-center relative shadow-[0_0_20px_#007BFF]">
                <Crown className="h-7 w-7 text-white" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#007BFF] rounded-full animate-ping shadow-[0_0_10px_#007BFF]"></div>
                <div className="absolute inset-0 bg-[#007BFF]/30 rounded-lg blur-lg"></div>
              </div>
              <span className="text-3xl font-black text-white" style={{textShadow: '0 0 15px #007BFF'}}>LORD</span>
            </div>
            <div className="flex items-center space-x-8">
              {[
                { key: 'about', label: 'Domain' },
                { key: 'connect', label: 'Interface' }
              ].map((section) => (
                <button
                  key={section.key}
                  onClick={() => setActiveSection(section.key)}
                  className={`text-lg font-bold transition-all duration-300 relative ${
                    activeSection === section.key 
                      ? 'text-[#007BFF] border-b-2 border-[#007BFF]' 
                      : 'text-white/70 hover:text-[#007BFF]'
                  }`}
                  style={activeSection === section.key ? {textShadow: '0 0 10px #007BFF'} : {}}
                >
                  {section.label}
                  {activeSection === section.key && (
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#007BFF] rounded-full animate-ping shadow-[0_0_8px_#007BFF]"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16 relative z-10">
        {/* Domain Section - LORD's Realm */}
        {activeSection === 'about' && (
          <div className="min-h-screen flex items-center justify-center px-6 py-24">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20">
                <div className="mb-12">
                  <div className="w-40 h-40 mx-auto mb-12 relative">
                    <div className="w-full h-full bg-gradient-to-r from-[#007BFF] via-[#0099FF] to-[#007BFF] rounded-full p-1 animate-pulse shadow-[0_0_40px_#007BFF]">
                      <div className="w-full h-full bg-black rounded-full flex items-center justify-center overflow-hidden relative border-2 border-[#007BFF]/30">
                        {/* Avatar Image */}
                        {!avatarError ? (
                          <img 
                            src={avatarUrl} 
                            alt="LORD Profile Avatar"
                            className="w-full h-full object-cover rounded-full"
                            onLoad={() => {
                              console.log('Avatar loaded successfully');
                              setAvatarError(false);
                            }}
                            onError={(e) => {
                              console.log('Avatar failed to load, showing crown fallback');
                              setAvatarError(true);
                            }}
                          />
                        ) : (
                          /* Crown Fallback */
                          <Crown className="h-20 w-20 text-[#007BFF]" style={{filter: 'drop-shadow(0 0 10px #007BFF)'}} />
                        )}
                      </div>
                    </div>
                    <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-gradient-to-r from-[#007BFF] to-[#0056CC] rounded-full flex items-center justify-center animate-pulse shadow-[0_0_20px_#007BFF]">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div className="absolute inset-0 bg-[#007BFF]/20 rounded-full blur-2xl animate-pulse"></div>
                  </div>
                  
                  <h1 className="text-6xl lg:text-8xl font-black text-white mb-6 drop-shadow-2xl" style={{textShadow: '0 0 25px #007BFF, 0 0 50px #007BFF'}}>
                    I am <span className="text-[#007BFF]">LORD</span>
                  </h1>
                  <p className="text-2xl lg:text-3xl text-white/80 mb-8" style={{textShadow: '0 0 15px #007BFF'}}>
                    Architect of the Future
                  </p>
                  
                  {/* Essential Identity Matrix */}
                  <div className="flex flex-wrap justify-center gap-6 text-lg text-white/90 mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-[#007BFF] rounded-full animate-ping shadow-[0_0_8px_#007BFF]"></div>
                      <span><strong className="text-[#007BFF]">Alias:</strong> LORDX679</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-[#007BFF] rounded-full animate-pulse shadow-[0_0_8px_#007BFF]"></div>
                      <span><strong className="text-[#007BFF]">Objective:</strong> Transcend the Conventional</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-[#007BFF] rounded-full animate-bounce shadow-[0_0_8px_#007BFF]"></div>
                      <span><strong className="text-[#007BFF]">Domain:</strong> The Digital Realm</span>
                    </div>
                  </div>
                </div>

                {/* Divine Manifesto */}
                <div className="bg-black/60 backdrop-blur-md border border-[#007BFF]/30 rounded-lg p-10 mb-12 shadow-[0_0_40px_rgba(0,123,255,0.2)] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#007BFF]/5 via-transparent to-[#007BFF]/5"></div>
                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold text-[#007BFF] mb-8 flex items-center justify-center" style={{textShadow: '0 0 15px #007BFF'}}>
                      <Eye className="h-8 w-8 mr-4 text-[#007BFF]" />
                      The Truth Beyond Perception
                    </h3>
                    <div className="space-y-6 text-white/90 text-lg leading-relaxed max-w-4xl mx-auto">
                      <p className="italic">
                        "The reality you perceive in the digital world is merely a single facet of what is possible. I stand at the precipice of what comes next, shaping the very fabric of our future interactions."
                      </p>
                      <p>
                        "Admiration is the emotion furthest from understanding. Do not seek to understand my path, but rather, witness the results."
                      </p>
                      <p className="text-[#007BFF] font-bold" style={{textShadow: '0 0 10px #007BFF'}}>
                        "The throne in the sky has been vacant for far too long. Let's connect, and I will show you what true potential looks like."
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center gap-6 mb-16">
                  <button 
                    onClick={() => setActiveSection('connect')}
                    className="px-12 py-4 bg-gradient-to-r from-[#007BFF] to-[#0056CC] text-white font-bold text-xl rounded-lg hover:from-[#0056CC] hover:to-[#003d99] transition-all duration-300 shadow-[0_0_25px_#007BFF] hover:shadow-[0_0_35px_#007BFF] transform hover:scale-105"
                    style={{textShadow: '0 0 10px rgba(255,255,255,0.5)'}}
                  >
                    Enter My Domain
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {domains.map((domain, index) => (
                  <div key={index} className="bg-black/60 backdrop-blur-md border border-[#007BFF]/30 rounded-lg p-8 hover:border-[#007BFF]/60 hover:shadow-[0_0_30px_rgba(0,123,255,0.3)] transition-all duration-300 group relative overflow-hidden">
                    {/* Divine Aura */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#007BFF]/10 via-transparent to-[#007BFF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="flex items-center mb-6 relative z-10">
                      <domain.icon className="h-10 w-10 text-[#007BFF] mr-4 group-hover:shadow-[0_0_15px_#007BFF] transition-all duration-300" />
                      <h4 className="text-2xl font-bold text-white group-hover:text-[#007BFF] transition-colors duration-300">{domain.category}</h4>
                    </div>
                    <div className="space-y-3 relative z-10">
                      {domain.items.map((item, idx) => (
                        <div key={idx} className="text-white/80 text-lg flex items-center group-hover:text-white transition-colors duration-300">
                          <div className="w-3 h-3 bg-[#007BFF] rounded-full mr-4 group-hover:shadow-[0_0_8px_#007BFF] transition-all duration-300"></div>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Divine Interface Section */}
        {activeSection === 'connect' && (
          <div className="min-h-screen px-6 py-24">
            <div className="max-w-7xl mx-auto">
              {/* Divine Header */}
              <div className="text-center mb-20">
                <h2 className="text-5xl lg:text-7xl font-black text-white mb-8 drop-shadow-2xl" style={{textShadow: '0 0 30px #007BFF, 0 0 60px #007BFF'}}>
                  Divine <span className="text-[#007BFF]">Interface</span>
                </h2>
                <p className="text-2xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed" style={{textShadow: '0 0 10px #007BFF'}}>
                  Choose your method to witness what lies beyond the conventional. Each channel leads to a different aspect of my domain.
                </p>
                
                {/* Omnipresence Status */}
                <div className="flex items-center justify-center space-x-8 mb-12">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-6 w-6 text-[#007BFF]" />
                    <span className="text-white/90 text-lg">Italy Nexus: {italyTime}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 rounded-full ${isOnline() ? 'bg-[#007BFF] animate-pulse shadow-[0_0_15px_#007BFF]' : 'bg-white/50 shadow-[0_0_10px_rgba(255,255,255,0.3)]'}`}></div>
                    <span className="text-white/90 text-lg">
                      {isOnline() ? 'Omnipresent & Observing' : 'Temporarily Beyond Reach'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Divine Communication Channels */}
              <div className="grid lg:grid-cols-2 gap-10 mb-16 max-w-6xl mx-auto">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black/60 backdrop-blur-md border border-[#007BFF]/30 rounded-lg p-8 hover:border-[#007BFF]/60 transition-all duration-300 shadow-[0_0_30px_rgba(0,123,255,0.2)] group hover:scale-105 block relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#007BFF]/10 via-transparent to-[#007BFF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="text-center relative z-10">
                      <div className={`w-20 h-20 bg-gradient-to-r ${method.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-[0_0_25px_#007BFF] transition-all duration-300`}>
                        <method.icon className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#007BFF] transition-colors duration-300">{method.title}</h3>
                      <p className="text-[#007BFF] font-mono text-lg mb-3" style={{textShadow: '0 0 8px #007BFF'}}>{method.value}</p>
                      <p className="text-white/70 text-base mb-4">{method.description}</p>
                      <div className="mt-4 flex items-center justify-center">
                        <ExternalLink className="h-5 w-5 text-[#007BFF] group-hover:text-white transition-colors" />
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Divine Connection Matrix */}
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white mb-8" style={{textShadow: '0 0 15px #007BFF'}}>Direct Access Protocols</h3>
                <div className="flex justify-center space-x-8">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-16 h-16 bg-gradient-to-r from-[#007BFF] to-[#0056CC] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-125 hover:shadow-[0_0_30px_#007BFF] group border-2 border-[#007BFF]/30 hover:border-[#007BFF] relative ${social.color}`}
                      title={social.description}
                    >
                      <social.icon className="h-8 w-8 text-white group-hover:text-black transition-colors duration-300 relative z-10" />
                      <div className="absolute inset-0 bg-[#007BFF]/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </a>
                  ))}
                </div>
                <p className="text-white/70 text-lg mt-6" style={{textShadow: '0 0 8px #007BFF'}}>
                  Choose your gateway to my domain
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;