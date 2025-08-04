import React, { useState, useEffect } from 'react';
import { MessageCircle, Instagram, Crown, User, Mail, ExternalLink, MapPin, Calendar, Clock, Globe, Star, Heart, Gamepad2, Code, Briefcase, GraduationCap, Award, Github, Linkedin, Download, Eye, ChevronRight, Zap, Target, Lightbulb } from 'lucide-react';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeSection, setActiveSection] = useState('home');
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
      setActiveSection('home');
    }, 4000);

    return () => {
      clearInterval(timer);
      clearTimeout(welcomeTimer);
    };
  }, []);

  const skills = [
    { name: 'React', level: 90, category: 'Frontend' },
    { name: 'TypeScript', level: 85, category: 'Frontend' },
    { name: 'Node.js', level: 80, category: 'Backend' },
    { name: 'Python', level: 75, category: 'Backend' },
    { name: 'MongoDB', level: 70, category: 'Database' },
    { name: 'UI/UX Design', level: 85, category: 'Design' },
    { name: 'Game Development', level: 80, category: 'Gaming' },
    { name: 'Content Creation', level: 90, category: 'Creative' }
  ];

  const projects = [
    {
      title: 'Personal Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and TypeScript featuring smooth animations and elegant design.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Gaming Community Platform',
      description: 'A social platform for gamers to connect, share experiences, and organize gaming sessions with real-time chat.',
      tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Content Management System',
      description: 'A flexible CMS for content creators with drag-and-drop interface and real-time collaboration features.',
      tech: ['Next.js', 'PostgreSQL', 'Prisma', 'TailwindCSS'],
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Mobile Game Analytics',
      description: 'Analytics dashboard for mobile game developers to track player behavior and optimize game performance.',
      tech: ['Python', 'Django', 'Chart.js', 'Redis'],
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ];

  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Freelance',
      period: '2023 - Present',
      description: 'Developing modern web applications and gaming platforms for international clients.',
      skills: ['React', 'Node.js', 'MongoDB', 'TypeScript']
    },
    {
      title: 'Content Creator',
      company: 'Social Media Platforms',
      period: '2022 - Present',
      description: 'Creating engaging content about technology, gaming, and development for a growing audience.',
      skills: ['Content Strategy', 'Video Editing', 'Community Management']
    },
    {
      title: 'Game Developer',
      company: 'Roblox Platform',
      period: '2021 - Present',
      description: 'Developing and maintaining games on Roblox platform with focus on user experience.',
      skills: ['Lua', 'Game Design', 'User Experience', 'Monetization']
    }
  ];

  const socialLinks = [
    { 
      name: 'Discord', 
      icon: MessageCircle, 
      url: 'https://discord.com/users/1c.2', 
      color: 'hover:text-[#8B7355]',
      description: 'Chat with me on Discord',
      username: '1c.2'
    },
    { 
      name: 'Instagram', 
      icon: Instagram, 
      url: 'https://www.instagram.com/lordx679', 
      color: 'hover:text-[#A0956B]',
      description: 'Follow my daily life',
      username: '@lordx679'
    },
    { 
      name: 'GitHub', 
      icon: Github, 
      url: 'https://github.com/lordx679', 
      color: 'hover:text-[#C4B896]',
      description: 'Check out my code',
      username: 'lordx679'
    },
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      url: 'https://linkedin.com/in/lordx679', 
      color: 'hover:text-[#8B7355]',
      description: 'Professional network',
      username: 'lordx679'
    }
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
    const day = now.getDay();
    
    if (day === 0) return italyHour >= 12 && italyHour < 23;
    if (day === 6) return italyHour >= 10 && italyHour < 24;
    return italyHour >= 8 && italyHour < 23;
  };

  // Welcome Screen
  if (showWelcome) {
    return (
      <div className="min-h-screen bg-[#D4C5A9] flex items-center justify-center relative overflow-hidden">
        {/* Epic Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#D4C5A9] via-[#F5F5F5] to-[#D4C5A9]"></div>
          
          {/* Floating Particles */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#8B7355] rounded-full animate-ping opacity-70"></div>
          <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-[#A0956B] rounded-full animate-pulse opacity-60"></div>
          <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-[#C4B896] rounded-full animate-bounce opacity-50"></div>
          <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-[#8B7355] rounded-full animate-ping opacity-80"></div>
          
          {/* Epic Glow Effects */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#8B7355]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-[#A0956B]/8 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-[#C4B896]/5 rounded-full blur-xl animate-pulse delay-2000"></div>
        </div>

        {/* Welcome Content */}
        <div className="relative z-10 text-center">
          {/* Legendary Crown Icon */}
          <div className="mb-8 relative">
            <div className="w-24 h-24 mx-auto mb-6 relative animate-bounce">
              <Crown className="w-full h-full text-[#8B7355] drop-shadow-2xl animate-pulse" />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-[#A0956B] to-[#8B7355] rounded-full animate-ping"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-[#C4B896] to-[#A0956B] rounded-full animate-pulse delay-500"></div>
            </div>
          </div>

          {/* Epic Welcome Text */}
          <div className="space-y-6">
            <h1 className="text-6xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#8B7355] via-[#A0956B] to-[#8B7355] animate-pulse drop-shadow-2xl">
              WELCOME
            </h1>
            <div className="flex items-center justify-center space-x-4 text-4xl lg:text-6xl font-bold">
              <span className="text-[#C4B896] animate-pulse delay-300">TO MY</span>
              <div className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A0956B] via-[#8B7355] to-[#A0956B] animate-pulse delay-500">
                  PORTFOLIO
                </span>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#8B7355] rounded-full animate-ping"></div>
              </div>
            </div>
          </div>

          {/* Loading Animation */}
          <div className="mt-12">
            <div className="w-64 h-1 bg-[#C4B896] rounded-full mx-auto overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#8B7355] via-[#A0956B] to-[#C4B896] rounded-full animate-pulse transform origin-left scale-x-0 animate-[scaleX_4s_ease-in-out_forwards]"></div>
            </div>
            <p className="text-[#8B7355] text-sm mt-4 animate-pulse delay-1000">Loading my digital world...</p>
          </div>
        </div>

        {/* Epic Border Effects */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#8B7355] to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#A0956B] to-transparent animate-pulse delay-500"></div>
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-[#C4B896] to-transparent animate-pulse delay-1000"></div>
        <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-[#8B7355] to-transparent animate-pulse delay-1500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#8B7355] relative overflow-hidden">
      {/* Epic Background */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5F5F5] via-[#D4C5A9] to-[#F5F5F5]"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#8B7355]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-[#A0956B]/8 rounded-full blur-2xl"></div>
        <div className="absolute top-1/4 left-1/2 w-32 h-32 bg-[#C4B896]/5 rounded-full blur-xl animate-bounce"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F5F5F5]/95 backdrop-blur-md border-b border-[#D4C5A9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-[#8B7355] to-[#A0956B] rounded-lg flex items-center justify-center relative">
                <Crown className="h-6 w-6 text-[#F5F5F5]" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#C4B896] rounded-full animate-ping"></div>
              </div>
              <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#8B7355] to-[#A0956B]">LORDX679</span>
            </div>
            <div className="flex items-center space-x-8">
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`text-sm font-bold transition-all duration-300 capitalize relative ${
                    activeSection === section 
                      ? 'text-[#8B7355] border-b-2 border-[#A0956B]' 
                      : 'text-[#C4B896] hover:text-[#8B7355]'
                  }`}
                >
                  {section}
                  {activeSection === section && (
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#A0956B] rounded-full animate-ping"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16 relative z-10">
        {/* Home Section */}
        {activeSection === 'home' && (
          <div className="min-h-screen flex items-center justify-center px-6 py-20">
            <div className="max-w-6xl mx-auto text-center">
              <div className="mb-8">
                <div className="w-32 h-32 mx-auto mb-8 relative">
                  <div className="w-full h-full bg-gradient-to-r from-[#8B7355] via-[#A0956B] to-[#C4B896] rounded-full p-1 animate-pulse">
                    <div className="w-full h-full bg-[#F5F5F5] rounded-full flex items-center justify-center overflow-hidden relative">
                      {!avatarError ? (
                        <img 
                          src={avatarUrl} 
                          alt="LORDX679 Profile Avatar"
                          className="w-full h-full object-cover rounded-full"
                          onLoad={() => setAvatarError(false)}
                          onError={() => setAvatarError(true)}
                        />
                      ) : (
                        <Crown className="h-16 w-16 text-[#8B7355]" />
                      )}
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-[#A0956B] to-[#8B7355] rounded-full flex items-center justify-center animate-pulse">
                    <div className="w-3 h-3 bg-[#F5F5F5] rounded-full"></div>
                  </div>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#8B7355] via-[#A0956B] to-[#8B7355] mb-4 drop-shadow-2xl">
                  Hi, I'm <span className="text-[#C4B896]">LORDX679</span>
                </h1>
                <p className="text-2xl lg:text-3xl text-[#A0956B] mb-6 font-bold">
                  Full Stack Developer & Content Creator
                </p>
                <p className="text-lg text-[#8B7355] max-w-3xl mx-auto mb-8 leading-relaxed">
                  I'm an 18-year-old developer from Morocco, living in Italy. I create modern web applications, 
                  engaging content, and innovative gaming experiences. Passionate about technology and always 
                  eager to learn and build something amazing.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  <button 
                    onClick={() => setActiveSection('projects')}
                    className="px-8 py-3 bg-gradient-to-r from-[#8B7355] to-[#A0956B] text-[#FFFFFF] font-bold rounded-lg hover:from-[#A0956B] hover:to-[#C4B896] transition-all duration-300 shadow-xl flex items-center space-x-2"
                  >
                    <Eye className="h-5 w-5" />
                    <span>View My Work</span>
                  </button>
                  <button 
                    onClick={() => setActiveSection('contact')}
                    className="px-8 py-3 border border-[#A0956B] text-[#8B7355] font-bold rounded-lg hover:bg-gradient-to-r hover:from-[#A0956B] hover:to-[#C4B896] hover:text-[#FFFFFF] hover:border-transparent transition-all duration-300 shadow-xl flex items-center space-x-2"
                  >
                    <Mail className="h-5 w-5" />
                    <span>Get In Touch</span>
                  </button>
                  <a 
                    href="#"
                    className="px-8 py-3 border border-[#C4B896] text-[#8B7355] font-bold rounded-lg hover:bg-[#C4B896] hover:text-[#FFFFFF] transition-all duration-300 shadow-xl flex items-center space-x-2"
                  >
                    <Download className="h-5 w-5" />
                    <span>Download CV</span>
                  </a>
                </div>

                <div className="flex justify-center space-x-6">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-to-r from-[#D4C5A9] to-[#C4B896] rounded-full flex items-center justify-center hover:from-[#A0956B] hover:to-[#8B7355] transition-all duration-300 shadow-lg hover:scale-110"
                    >
                      <link.icon className="h-6 w-6 text-[#8B7355] hover:text-[#FFFFFF]" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* About Section */}
        {activeSection === 'about' && (
          <div className="min-h-screen px-6 py-20">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#8B7355] to-[#A0956B] mb-6 drop-shadow-xl">
                  About Me
                </h2>
                <p className="text-xl text-[#8B7355] max-w-3xl mx-auto">
                  Passionate developer with a love for creating digital experiences that matter
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-[#FFFFFF]/80 to-[#D4C5A9]/60 border border-[#C4B896]/50 rounded-lg p-8 shadow-2xl">
                    <h3 className="text-2xl font-bold text-[#8B7355] mb-4 flex items-center">
                      <User className="h-6 w-6 mr-3 text-[#A0956B]" />
                      Personal Info
                    </h3>
                    <div className="space-y-3 text-[#8B7355]">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 text-[#A0956B] mr-3" />
                        <span><strong>Age:</strong> 18 years old</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 text-[#A0956B] mr-3" />
                        <span><strong>Location:</strong> Italy</span>
                      </div>
                      <div className="flex items-center">
                        <Globe className="h-4 w-4 text-[#A0956B] mr-3" />
                        <span><strong>Origin:</strong> Morocco</span>
                      </div>
                      <div className="flex items-center">
                        <Code className="h-4 w-4 text-[#A0956B] mr-3" />
                        <span><strong>Focus:</strong> Full Stack Development</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#FFFFFF]/80 to-[#D4C5A9]/60 border border-[#C4B896]/50 rounded-lg p-8 shadow-2xl">
                    <h3 className="text-2xl font-bold text-[#8B7355] mb-4 flex items-center">
                      <Target className="h-6 w-6 mr-3 text-[#A0956B]" />
                      What I Do
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <Zap className="h-5 w-5 text-[#A0956B] mt-1" />
                        <div>
                          <h4 className="font-bold text-[#8B7355]">Web Development</h4>
                          <p className="text-sm text-[#8B7355]">Building modern, responsive web applications</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Gamepad2 className="h-5 w-5 text-[#A0956B] mt-1" />
                        <div>
                          <h4 className="font-bold text-[#8B7355]">Game Development</h4>
                          <p className="text-sm text-[#8B7355]">Creating engaging gaming experiences</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Heart className="h-5 w-5 text-[#A0956B] mt-1" />
                        <div>
                          <h4 className="font-bold text-[#8B7355]">Content Creation</h4>
                          <p className="text-sm text-[#8B7355]">Sharing knowledge and experiences online</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-[#FFFFFF]/80 to-[#D4C5A9]/60 border border-[#C4B896]/50 rounded-lg p-8 shadow-2xl">
                    <h3 className="text-2xl font-bold text-[#8B7355] mb-4">My Journey</h3>
                    <p className="text-[#8B7355] leading-relaxed mb-4">
                      Born in Morocco and now living in Italy, I've always been fascinated by technology and its power to connect people across cultures. At 18, I've already built a strong foundation in web development and content creation.
                    </p>
                    <p className="text-[#8B7355] leading-relaxed mb-4">
                      My passion lies in creating digital experiences that not only look great but also solve real problems. Whether it's building a web application, developing a game, or creating content that inspires others, I approach every project with enthusiasm and attention to detail.
                    </p>
                    <p className="text-[#8B7355] leading-relaxed">
                      When I'm not coding, you'll find me gaming on Roblox, creating content for social media, or exploring new technologies. I believe in continuous learning and always strive to improve my skills.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-[#FFFFFF]/80 to-[#D4C5A9]/60 border border-[#C4B896]/50 rounded-lg p-8 shadow-2xl">
                    <h3 className="text-2xl font-bold text-[#8B7355] mb-4 flex items-center">
                      <Lightbulb className="h-6 w-6 mr-3 text-[#A0956B]" />
                      My Values
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-[#A0956B] to-[#C4B896] rounded-full flex items-center justify-center mx-auto mb-2">
                          <Star className="h-6 w-6 text-[#FFFFFF]" />
                        </div>
                        <h4 className="font-bold text-[#8B7355] text-sm">Quality</h4>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-[#C4B896] to-[#8B7355] rounded-full flex items-center justify-center mx-auto mb-2">
                          <Heart className="h-6 w-6 text-[#FFFFFF]" />
                        </div>
                        <h4 className="font-bold text-[#8B7355] text-sm">Passion</h4>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-[#8B7355] to-[#A0956B] rounded-full flex items-center justify-center mx-auto mb-2">
                          <Zap className="h-6 w-6 text-[#FFFFFF]" />
                        </div>
                        <h4 className="font-bold text-[#8B7355] text-sm">Innovation</h4>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-[#A0956B] to-[#8B7355] rounded-full flex items-center justify-center mx-auto mb-2">
                          <Globe className="h-6 w-6 text-[#FFFFFF]" />
                        </div>
                        <h4 className="font-bold text-[#8B7355] text-sm">Global</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Skills Section */}
        {activeSection === 'skills' && (
          <div className="min-h-screen px-6 py-20">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#8B7355] to-[#A0956B] mb-6 drop-shadow-xl">
                  Skills & Expertise
                </h2>
                <p className="text-xl text-[#8B7355] max-w-3xl mx-auto">
                  Technologies and tools I use to bring ideas to life
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {['Frontend', 'Backend', 'Database', 'Design', 'Gaming', 'Creative'].map((category) => (
                  <div key={category} className="bg-gradient-to-br from-[#FFFFFF]/80 to-[#D4C5A9]/60 border border-[#C4B896]/50 rounded-lg p-6 shadow-2xl hover:shadow-[0_0_30px_rgba(139,115,85,0.2)] transition-all duration-300">
                    <h3 className="text-lg font-bold text-[#8B7355] mb-4 text-center">{category}</h3>
                    <div className="space-y-3">
                      {skills.filter(skill => skill.category === category).map((skill, index) => (
                        <div key={index}>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-medium text-[#8B7355]">{skill.name}</span>
                            <span className="text-xs text-[#A0956B]">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-[#D4C5A9] rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-[#8B7355] to-[#A0956B] h-2 rounded-full transition-all duration-1000 ease-out"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-[#FFFFFF]/80 to-[#D4C5A9]/60 border border-[#C4B896]/50 rounded-lg p-8 shadow-2xl inline-block">
                  <h3 className="text-2xl font-bold text-[#8B7355] mb-4">Always Learning</h3>
                  <p className="text-[#8B7355] mb-4">Currently exploring:</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {['Next.js', 'GraphQL', 'Docker', 'AWS', 'Machine Learning', 'Blockchain'].map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-gradient-to-r from-[#A0956B] to-[#C4B896] text-[#FFFFFF] text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <div className="min-h-screen px-6 py-20">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#8B7355] to-[#A0956B] mb-6 drop-shadow-xl">
                  Featured Projects
                </h2>
                <p className="text-xl text-[#8B7355] max-w-3xl mx-auto">
                  A showcase of my recent work and creative projects
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <div key={index} className={`bg-gradient-to-br from-[#FFFFFF]/80 to-[#D4C5A9]/60 border border-[#C4B896]/50 rounded-lg overflow-hidden shadow-2xl hover:shadow-[0_0_30px_rgba(139,115,85,0.2)] transition-all duration-300 group ${project.featured ? 'lg:col-span-2' : ''}`}>
                    <div className={`${project.featured ? 'lg:flex' : ''}`}>
                      <div className={`${project.featured ? 'lg:w-1/2' : ''} relative overflow-hidden`}>
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#8B7355]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className={`p-6 ${project.featured ? 'lg:w-1/2 lg:flex lg:flex-col lg:justify-center' : ''}`}>
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-xl font-bold text-[#8B7355]">{project.title}</h3>
                          {project.featured && (
                            <span className="px-2 py-1 bg-gradient-to-r from-[#A0956B] to-[#C4B896] text-[#FFFFFF] text-xs rounded-full">
                              Featured
                            </span>
                          )}
                        </div>
                        <p className="text-[#8B7355] mb-4 text-sm leading-relaxed">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map((tech, techIndex) => (
                            <span key={techIndex} className="px-2 py-1 bg-[#D4C5A9] text-[#8B7355] text-xs rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex space-x-3">
                          <a 
                            href={project.liveUrl}
                            className="flex items-center space-x-1 px-3 py-2 bg-gradient-to-r from-[#8B7355] to-[#A0956B] text-[#FFFFFF] text-sm rounded hover:from-[#A0956B] hover:to-[#C4B896] transition-all duration-300"
                          >
                            <ExternalLink className="h-4 w-4" />
                            <span>Live Demo</span>
                          </a>
                          <a 
                            href={project.githubUrl}
                            className="flex items-center space-x-1 px-3 py-2 border border-[#A0956B] text-[#8B7355] text-sm rounded hover:bg-[#A0956B] hover:text-[#FFFFFF] transition-all duration-300"
                          >
                            <Github className="h-4 w-4" />
                            <span>Code</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <a 
                  href="https://github.com/lordx679"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-8 py-3 border border-[#A0956B] text-[#8B7355] font-bold rounded-lg hover:bg-gradient-to-r hover:from-[#A0956B] hover:to-[#C4B896] hover:text-[#FFFFFF] hover:border-transparent transition-all duration-300 shadow-xl"
                >
                  <Github className="h-5 w-5" />
                  <span>View All Projects</span>
                  <ChevronRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Experience Section */}
        {activeSection === 'experience' && (
          <div className="min-h-screen px-6 py-20">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#8B7355] to-[#A0956B] mb-6 drop-shadow-xl">
                  Experience & Journey
                </h2>
                <p className="text-xl text-[#8B7355] max-w-3xl mx-auto">
                  My professional journey and key milestones
                </p>
              </div>

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="bg-gradient-to-br from-[#FFFFFF]/80 to-[#D4C5A9]/60 border border-[#C4B896]/50 rounded-lg p-8 shadow-2xl hover:shadow-[0_0_30px_rgba(139,115,85,0.2)] transition-all duration-300 group">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-[#8B7355] mb-1">{exp.title}</h3>
                        <p className="text-[#A0956B] font-medium">{exp.company}</p>
                      </div>
                      <div className="flex items-center space-x-2 text-[#8B7355] mt-2 lg:mt-0">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm font-medium">{exp.period}</span>
                      </div>
                    </div>
                    <p className="text-[#8B7355] mb-4 leading-relaxed">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-3 py-1 bg-gradient-to-r from-[#A0956B] to-[#C4B896] text-[#FFFFFF] text-sm rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <div className="bg-gradient-to-br from-[#FFFFFF]/80 to-[#D4C5A9]/60 border border-[#C4B896]/50 rounded-lg p-8 shadow-2xl inline-block">
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <Award className="h-8 w-8 text-[#A0956B]" />
                    <h3 className="text-2xl font-bold text-[#8B7355]">Looking Forward</h3>
                  </div>
                  <p className="text-[#8B7355] mb-4">
                    Always open to new opportunities and exciting projects. Let's build something amazing together!
                  </p>
                  <button 
                    onClick={() => setActiveSection('contact')}
                    className="px-6 py-3 bg-gradient-to-r from-[#8B7355] to-[#A0956B] text-[#FFFFFF] font-bold rounded-lg hover:from-[#A0956B] hover:to-[#C4B896] transition-all duration-300 shadow-xl"
                  >
                    Let's Talk
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <div className="min-h-screen px-6 py-20">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#8B7355] to-[#A0956B] mb-6 drop-shadow-xl">
                  Let's Connect!
                </h2>
                <p className="text-xl text-[#8B7355] max-w-3xl mx-auto mb-8">
                  Ready to collaborate or just want to say hi? I'd love to hear from you!
                </p>
                
                {/* Current Time & Status */}
                <div className="flex items-center justify-center space-x-6 mb-8">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-[#A0956B]" />
                    <span className="text-[#8B7355]">Italy Time: {italyTime}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${isOnline() ? 'bg-[#A0956B] animate-pulse shadow-[0_0_10px_rgba(160,149,107,0.5)]' : 'bg-[#C4B896] shadow-[0_0_10px_rgba(196,184,150,0.3)]'}`}></div>
                    <span className="text-[#8B7355]">
                      {isOnline() ? 'Available for Projects!' : 'Currently Offline'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact Methods Grid */}
              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                <a
                  href="mailto:ibraff739@gmail.com"
                  className="bg-gradient-to-br from-[#FFFFFF]/80 to-[#D4C5A9]/60 border border-[#C4B896]/50 rounded-lg p-8 hover:border-[#A0956B] transition-all duration-300 shadow-2xl group hover:scale-105 block"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#8B7355] to-[#A0956B] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(139,115,85,0.3)] transition-all duration-300">
                      <Mail className="h-8 w-8 text-[#FFFFFF]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#8B7355] mb-2">Email Me</h3>
                    <p className="text-[#8B7355] font-mono text-sm mb-2">ibraff739@gmail.com</p>
                    <p className="text-[#A0956B] text-xs">For business inquiries and collaborations</p>
                  </div>
                </a>

                <a
                  href="https://discord.com/users/1c.2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-br from-[#FFFFFF]/80 to-[#D4C5A9]/60 border border-[#C4B896]/50 rounded-lg p-8 hover:border-[#A0956B] transition-all duration-300 shadow-2xl group hover:scale-105 block"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#A0956B] to-[#C4B896] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(139,115,85,0.3)] transition-all duration-300">
                      <MessageCircle className="h-8 w-8 text-[#FFFFFF]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#8B7355] mb-2">Discord</h3>
                    <p className="text-[#8B7355] font-mono text-sm mb-2">1c.2</p>
                    <p className="text-[#A0956B] text-xs">Quick chats and casual conversations</p>
                  </div>
                </a>
              </div>

              {/* Social Links */}
              <div className="bg-gradient-to-br from-[#FFFFFF]/80 to-[#D4C5A9]/60 border border-[#C4B896]/50 rounded-lg p-8 shadow-2xl">
                <div className="flex items-center mb-6">
                  <Globe className="h-6 w-6 text-[#A0956B] mr-3" />
                  <h3 className="text-xl font-bold text-[#8B7355]">Find Me Online</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 bg-[#F5F5F5]/70 rounded-lg hover:bg-[#D4C5A9]/50 transition-all duration-300 group"
                    >
                      <div className="flex items-center space-x-3">
                        <link.icon className="h-5 w-5 text-[#A0956B] group-hover:text-[#8B7355] transition-colors" />
                        <div>
                          <span className="text-[#8B7355] font-medium">{link.name}</span>
                          <p className="text-[#A0956B] text-xs">{link.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-[#8B7355] text-sm font-bold">{link.username}</span>
                        <ExternalLink className="h-4 w-4 text-[#A0956B] group-hover:text-[#8B7355] transition-colors" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center mt-12">
                <div className="bg-gradient-to-br from-[#FFFFFF]/80 to-[#D4C5A9]/60 border border-[#C4B896]/50 rounded-lg p-8 shadow-2xl inline-block">
                  <h3 className="text-2xl font-bold text-[#8B7355] mb-4">Ready to Work Together?</h3>
                  <p className="text-[#8B7355] mb-6 max-w-md">
                    Whether you have a project in mind, need a developer, or just want to connect, 
                    I'm always excited to meet new people and explore new opportunities.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <a 
                      href="mailto:ibraff739@gmail.com"
                      className="px-6 py-3 bg-gradient-to-r from-[#8B7355] to-[#A0956B] text-[#FFFFFF] font-bold rounded-lg hover:from-[#A0956B] hover:to-[#C4B896] transition-all duration-300 shadow-xl flex items-center space-x-2"
                    >
                      <Mail className="h-5 w-5" />
                      <span>Start a Project</span>
                    </a>
                    <a 
                      href="#"
                      className="px-6 py-3 border border-[#A0956B] text-[#8B7355] font-bold rounded-lg hover:bg-[#A0956B] hover:text-[#FFFFFF] transition-all duration-300 shadow-xl flex items-center space-x-2"
                    >
                      <Download className="h-5 w-5" />
                      <span>Download Resume</span>
                    </a>
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