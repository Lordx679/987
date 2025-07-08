import React, { useState, useEffect } from 'react';
import { Github, MessageCircle, Instagram, Crown, User, Mail, ExternalLink, Code, Database, Cpu, MapPin, Calendar, Clock, Phone, Globe, Star, Heart, Zap } from 'lucide-react';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeSection, setActiveSection] = useState('welcome');
  const [showWelcome, setShowWelcome] = useState(true);
  const [avatarError, setAvatarError] = useState(false);
  
  // Using the uploaded avatar image
  const avatarUrl = "/e9c4e804b0c546262bd2bc03f593648d.jpg";

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
      url: '#', 
      color: 'hover:text-[#D3D3D3]',
      description: 'Connect with me on Discord',
      followers: 'LORDX679#0000'
    },
    { 
      name: 'Instagram', 
      icon: Instagram, 
      url: 'https://www.instagram.com/lordx679', 
      color: 'hover:text-[#D3D3D3]',
      description: 'Follow my creative journey',
      followers: '850+'
    },
  ];

  const contactMethods = [
    {
      icon: Instagram,
      title: 'Instagram',
      value: '@lordx679',
      description: 'Follow my creative journey',
      color: 'from-[#A9A9A9] to-[#F0F0F0]',
      url: 'https://www.instagram.com/lordx679'
    }
  ];

  const skills = [
    { 
      category: 'Frontend Development', 
      items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript'], 
      icon: Code, 
      color: 'from-[#505050] to-[#A9A9A9]' 
    },
    { 
      category: 'Backend Development', 
      items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Express.js'], 
      icon: Database, 
      color: 'from-[#A9A9A9] to-[#D3D3D3]' 
    },
    { 
      category: 'Tools & Technologies', 
      items: ['Git', 'Docker', 'AWS', 'Figma', 'VS Code'], 
      icon: Cpu, 
      color: 'from-[#D3D3D3] to-[#F0F0F0]' 
    },
  ];

  // Get current time in Italy
  const italyTime = new Date().toLocaleString('en-US', {
    timeZone: 'Europe/Rome',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });

  const isWorkingHours = () => {
    const now = new Date();
    const italyHour = parseInt(new Date().toLocaleString('en-US', {
      timeZone: 'Europe/Rome',
      hour: '2-digit',
      hour12: false
    }));
    const day = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
    
    if (day === 0) return false; // Sunday
    if (day === 6) return italyHour >= 10 && italyHour < 16; // Saturday
    return italyHour >= 9 && italyHour < 18; // Monday-Friday
  };

  // Welcome Screen
  if (showWelcome) {
    return (
      <div className="min-h-screen bg-[#000000] flex items-center justify-center relative overflow-hidden">
        {/* Epic Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#000000] via-[#505050] to-[#000000]"></div>
          
          {/* Floating Particles */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#A9A9A9] rounded-full animate-ping opacity-70"></div>
          <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-[#505050] rounded-full animate-pulse opacity-60"></div>
          <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-[#D3D3D3] rounded-full animate-bounce opacity-50"></div>
          <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-[#A9A9A9] rounded-full animate-ping opacity-80"></div>
          
          {/* Epic Glow Effects */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#505050]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-[#A9A9A9]/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-[#D3D3D3]/10 rounded-full blur-xl animate-pulse delay-2000"></div>
        </div>

        {/* Welcome Content */}
        <div className="relative z-10 text-center">
          {/* Legendary Crown Icon */}
          <div className="mb-8 relative">
            <div className="w-24 h-24 mx-auto mb-6 relative animate-bounce">
              <Crown className="w-full h-full text-[#A9A9A9] drop-shadow-2xl animate-pulse" />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-[#505050] to-[#A9A9A9] rounded-full animate-ping"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-[#A9A9A9] to-[#D3D3D3] rounded-full animate-pulse delay-500"></div>
            </div>
          </div>

          {/* Epic Welcome Text */}
          <div className="space-y-6">
            <h1 className="text-6xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#A9A9A9] via-[#D3D3D3] to-[#A9A9A9] animate-pulse drop-shadow-2xl">
              WELCOME
            </h1>
            <div className="flex items-center justify-center space-x-4 text-4xl lg:text-6xl font-bold">
              <span className="text-[#505050] animate-pulse delay-300">TO</span>
              <div className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A9A9A9] via-[#D3D3D3] to-[#A9A9A9] animate-pulse delay-500">
                  LORD
                </span>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#505050] rounded-full animate-ping"></div>
              </div>
            </div>
            <h2 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#505050] via-[#A9A9A9] to-[#D3D3D3] animate-pulse delay-700 drop-shadow-xl">
              WORLD
            </h2>
          </div>

          {/* Loading Animation */}
          <div className="mt-12">
            <div className="w-64 h-1 bg-[#505050] rounded-full mx-auto overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#505050] to-[#A9A9A9] rounded-full animate-pulse transform origin-left scale-x-0 animate-[scaleX_4s_ease-in-out_forwards]"></div>
            </div>
            <p className="text-[#505050] text-sm mt-4 animate-pulse delay-1000">Entering the legendary realm...</p>
          </div>
        </div>

        {/* Epic Border Effects */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#505050] to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#A9A9A9] to-transparent animate-pulse delay-500"></div>
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-[#D3D3D3] to-transparent animate-pulse delay-1000"></div>
        <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-[#505050] to-transparent animate-pulse delay-1500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#000000] text-[#F0F0F0] relative overflow-hidden">
      {/* Epic Background */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#000000] via-[#505050] to-[#000000]"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#505050]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-[#A9A9A9]/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/4 left-1/2 w-32 h-32 bg-[#D3D3D3]/20 rounded-full blur-xl animate-bounce"></div>
      </div>

      {/* Legendary Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#000000]/90 backdrop-blur-md border-b border-[#505050]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-[#505050] to-[#A9A9A9] rounded-lg flex items-center justify-center relative">
                <Crown className="h-6 w-6 text-[#000000]" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#A9A9A9] rounded-full animate-ping"></div>
              </div>
              <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#A9A9A9] to-[#D3D3D3]">LORDX679</span>
            </div>
            <div className="flex items-center space-x-8">
              {['about', 'connect'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`text-sm font-bold transition-all duration-300 capitalize relative ${
                    activeSection === section 
                      ? 'text-[#A9A9A9] border-b-2 border-[#505050]' 
                      : 'text-[#505050] hover:text-[#A9A9A9]'
                  }`}
                >
                  {section}
                  {activeSection === section && (
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#505050] rounded-full animate-ping"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16 relative z-10">
        {/* About Section */}
        {activeSection === 'about' && (
          <div className="min-h-screen flex items-center justify-center px-6 py-20">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="mb-8">
                  <div className="w-32 h-32 mx-auto mb-8 relative">
                    <div className="w-full h-full bg-gradient-to-r from-[#505050] via-[#A9A9A9] to-[#D3D3D3] rounded-full p-1 animate-pulse">
                      <div className="w-full h-full bg-[#000000] rounded-full flex items-center justify-center overflow-hidden relative">
                        {/* Avatar Image */}
                        {!avatarError ? (
                          <img 
                            src={avatarUrl} 
                            alt="LORDX679 Profile Avatar"
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
                          <Crown className="h-16 w-16 text-[#A9A9A9]" />
                        )}
                      </div>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-[#505050] to-[#A9A9A9] rounded-full flex items-center justify-center animate-pulse">
                      <div className="w-3 h-3 bg-[#000000] rounded-full"></div>
                    </div>
                  </div>
                  
                  <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#A9A9A9] via-[#D3D3D3] to-[#A9A9A9] mb-4 drop-shadow-2xl">
                    I'm <span className="text-[#D3D3D3]">LORD</span>
                  </h1>
                  <p className="text-xl lg:text-2xl text-[#A9A9A9] mb-6">
                    Full-Stack Developer & Digital Creator
                  </p>
                  
                  {/* Discord Info */}
                  <div className="text-sm text-[#D3D3D3] mb-4 flex items-center justify-center space-x-2">
                    <MessageCircle className="h-4 w-4" />
                    <span>Discord: LORDX679#0000</span>
                  </div>
                </div>

                {/* Personal Info */}
                <div className="bg-gradient-to-br from-[#505050]/30 to-[#000000]/50 border border-[#505050] rounded-lg p-8 mb-8 shadow-2xl">
                  <div className="grid md:grid-cols-2 gap-8 text-left">
                    <div>
                      <h3 className="text-2xl font-bold text-[#D3D3D3] mb-4 flex items-center">
                        <User className="h-6 w-6 mr-3" />
                        About Me
                      </h3>
                      <div className="space-y-3 text-[#F0F0F0]">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-[#A9A9A9] rounded-full mr-3"></div>
                          <span><strong>Name:</strong> LORDX679</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 text-[#A9A9A9] mr-3" />
                          <span><strong>Age:</strong> 18 years old</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 text-[#A9A9A9] mr-3" />
                          <span><strong>Location:</strong> Italy</span>
                        </div>
                        <div className="flex items-center">
                          <Globe className="h-4 w-4 text-[#A9A9A9] mr-3" />
                          <span><strong>Origin:</strong> Morocco</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#D3D3D3] mb-4">My Story</h3>
                      <p className="text-[#F0F0F0] leading-relaxed text-sm">
                        I'm LORD — an 18-year-old Moroccan developer living in Italy, building digital experiences with precision, depth, and purpose. I don't just write code — I design presence. Every project I build is grounded in vision, driven by a quiet obsession with detail, motion, and feel. My work isn't noise or flash — it's clarity, flow, and control. I draw inspiration from the logic of code, the elegance of minimal design, and the hidden weight of anime stories — I don't aim to impress, I aim to leave a mark. A sharp one. A real one. Technology is my weapon. The web is my battlefield. Whether it's a fluid UI, an animated portfolio, or a system built from the ground up — I move in silence, but my work speaks loud. You won't find everything about me in the code — but read between the lines, and you'll know exactly who I am.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                  <button 
                    onClick={() => setActiveSection('connect')}
                    className="px-8 py-3 border border-[#A9A9A9] text-[#D3D3D3] font-bold rounded-lg hover:bg-[#A9A9A9] hover:text-[#000000] transition-all duration-300 shadow-xl"
                  >
                    Get In Touch
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {skills.map((skill, index) => (
                  <div key={index} className="bg-gradient-to-br from-[#505050]/30 to-[#000000]/50 border border-[#505050] rounded-lg p-6 hover:border-[#A9A9A9] transition-all duration-300 shadow-2xl group">
                    <div className="flex items-center mb-4">
                      <skill.icon className="h-8 w-8 text-[#A9A9A9] mr-3 group-hover:text-[#D3D3D3] transition-colors" />
                      <h4 className="text-lg font-bold text-[#D3D3D3]">{skill.category}</h4>
                    </div>
                    <div className="space-y-2">
                      {skill.items.map((item, idx) => (
                        <div key={idx} className="text-[#F0F0F0] text-sm flex items-center">
                          <div className="w-2 h-2 bg-[#A9A9A9] rounded-full mr-3"></div>
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

        {/* Enhanced Connect Section */}
        {activeSection === 'connect' && (
          <div className="min-h-screen px-6 py-20">
            <div className="max-w-7xl mx-auto">
              {/* Header */}
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#A9A9A9] to-[#D3D3D3] mb-6 drop-shadow-xl">
                  Let's Connect & Create
                </h2>
                <p className="text-xl text-[#A9A9A9] max-w-3xl mx-auto mb-8">
                  Ready to bring your ideas to life? I'm here to help you build something extraordinary. 
                  Choose your preferred way to reach out and let's start the conversation.
                </p>
                
                {/* Current Time & Status */}
                <div className="flex items-center justify-center space-x-6 mb-8">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-[#A9A9A9]" />
                    <span className="text-[#D3D3D3]">Italy Time: {italyTime}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${isWorkingHours() ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
                    <span className="text-[#D3D3D3]">
                      {isWorkingHours() ? 'Available Now' : 'Outside Working Hours'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact Methods Grid */}
              <div className="grid lg:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-br from-[#505050]/30 to-[#000000]/50 border border-[#505050] rounded-lg p-6 hover:border-[#A9A9A9] transition-all duration-300 shadow-2xl group hover:scale-105 block"
                  >
                    <div className="text-center">
                      <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <method.icon className="h-8 w-8 text-[#000000]" />
                      </div>
                      <h3 className="text-xl font-bold text-[#D3D3D3] mb-2">{method.title}</h3>
                      <p className="text-[#D3D3D3] font-mono text-sm mb-2">{method.value}</p>
                      <p className="text-[#A9A9A9] text-xs">{method.description}</p>
                      <div className="mt-3 flex items-center justify-center">
                        <ExternalLink className="h-4 w-4 text-[#A9A9A9] group-hover:text-[#D3D3D3] transition-colors" />
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Main Content Grid */}
              <div className="max-w-4xl mx-auto">

                {/* Social Media Links */}
                <div className="bg-gradient-to-br from-[#505050]/30 to-[#000000]/50 border border-[#505050] rounded-lg p-6 shadow-2xl">
                  <div className="flex items-center mb-4">
                    <Globe className="h-6 w-6 text-[#A9A9A9] mr-3" />
                    <h3 className="text-xl font-bold text-[#D3D3D3]">Follow My Journey</h3>
                  </div>
                  <div className="space-y-4">
                    {socialLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 bg-[#000000]/50 rounded-lg hover:bg-[#505050]/30 transition-all duration-300 group"
                      >
                        <div className="flex items-center space-x-3">
                          <link.icon className="h-5 w-5 text-[#A9A9A9] group-hover:text-[#D3D3D3] transition-colors" />
                          <div>
                            <span className="text-[#D3D3D3] font-medium">{link.name}</span>
                            <p className="text-[#A9A9A9] text-xs">{link.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-[#D3D3D3] text-sm font-bold">{link.followers}</span>
                          <ExternalLink className="h-4 w-4 text-[#A9A9A9] group-hover:text-[#D3D3D3] transition-colors" />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;