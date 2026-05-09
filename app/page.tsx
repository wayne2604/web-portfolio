'use client';

import { PortfolioPage, PortfolioPageProps } from "@/components/ui/starfall-portfolio-landing";

const portfolioData: PortfolioPageProps = {
  logo: {
    initials: 'RWM',
    name: 'Rhett Wayne Manubag',
  },
  navLinks: [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'About', href: '#about' },
  ],
  resume: {
    label: 'Curriculum Vitae',
    onClick: () => {
        // Handle PDF view or download
        window.open('CV/CV - RHETT WAYNE MANUBAG.pdf', '_blank');
    },
  },
  hero: {
    titleLine1: 'Rhett Wayne',
    titleLine2Gradient: 'Manubag',
    subtitle: 'Computer Engineering Student specializing in Embedded Systems, AI integration, and full-stack development. Bridging the gap between hardware and intelligence.',
  },
  ctaButtons: {
    primary: {
      label: 'View Projects',
      onClick: () => { document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); },
    },
    secondary: {
      label: "Let's Connect",
      onClick: () => { window.location.href = 'mailto:rmanubag308@gmail.com'; },
    },
  },
  projects: [
    { 
      title: 'Capstone: ZNNHS Faculty Scheduling System', 
      description: 'A full-stack web application that streamlines academic timetabling with role-based access control.',
      tags: ['PHP', 'SQL', 'Capstone'],
      imageContent: <img src="Projects/znnhs_scheduler.jpg" alt="ZNNHS" className="w-full h-full object-cover" />
    },
    { 
      title: 'Viewvie App', 
      description: 'Movie streaming application with an integrated AI chatbot for personalized film recommendations.',
      tags: ['Kotlin', 'Android Studio', 'AI'],
      imageContent: <img src="Projects/Viewvie.jpg" alt="Viewvie" className="w-full h-full object-cover" />
    },
    { 
      title: 'Water Level Indicator & Gate Motor', 
      description: 'Automated Dam Control System for safety-focused regulation of water levels.',
      tags: ['Electronics', 'Sensors', 'Embedded'],
      imageContent: <img src="Projects/Water_Level_Gate.jpg" alt="Water Level" className="w-full h-full object-cover" />
    },
    { 
        title: 'LABAI Startup', 
        description: 'Smart waste management solution with intelligent sensor-equipped trash bins.',
        tags: ['WADHWANI', 'Startup', 'IoT'],
        imageContent: <img src="Projects/labai.jpg" alt="LABAI" className="w-full h-full object-cover" />
    },
    { 
        title: 'College of Engineering Site', 
        description: 'Professional website showcasing academic programs and admissions info.',
        tags: ['HTML', 'CSS', 'Javascript'],
        imageContent: <img src="Projects/College_of_Engineering_Website.jpg" alt="COE Site" className="w-full h-full object-cover" />
    },
    { 
        title: 'Electronic Bingo Machine', 
        description: 'Digital recreation of the classic game with random number generation from 00 to 99.',
        tags: ['PIC', '7-Segment', 'Embedded'],
        imageContent: <img src="Projects/Bingo.jpg" alt="Bingo" className="w-full h-full object-cover" />
    },
    { 
        title: 'Arduino Christmas Tree', 
        description: 'Interactive display with synchronized lights and servo mechanics.',
        tags: ['Arduino', 'Servo', 'Embedded'],
        imageContent: <img src="Projects/Christmas Tree Arduino.jpg" alt="Christmas Tree" className="w-full h-full object-cover" />
    },
    { 
        title: 'Arduino Matrix', 
        description: 'Versatile 8x8 LED grid display with dynamic patterns and animations.',
        tags: ['Arduino', 'Matrix', 'Embedded'],
        imageContent: <img src="Projects/Matrix.jpg" alt="Matrix" className="w-full h-full object-cover" />
    },
    { 
        title: 'Electric Mobile Chair', 
        description: 'Mobility solution powered by PIC16F84A and high-torque DC motors.',
        tags: ['PIC', 'Servo', 'Embedded'],
        imageContent: <img src="Projects/Electric_Mobile_Chair.jpg" alt="Mobile Chair" className="w-full h-full object-cover" />
    },
    { 
        title: 'Rental Monitoring Board 3D', 
        description: 'SketchUp visual prototype for streamlining cellphone rental operations.',
        tags: ['Sketchup', '3D', 'Embedded'],
        imageContent: <img src="Projects/Phone_Rental.jpg" alt="Rental Board" className="w-full h-full object-cover" />
    },
    { 
        title: 'Multiple Alarm Kitchen Timer', 
        description: 'Digital timer with buzzer, pause, and reset controls for culinary efficiency.',
        tags: ['PIC', 'LCD', 'Embedded'],
        imageContent: <img src="Projects/Kitchen_Timer.jpg" alt="Kitchen Timer" className="w-full h-full object-cover" />
    },
    { 
        title: 'Automated Rice Dispenser', 
        description: 'Touchless dispensing system utilizing IR proximity sensors and servos.',
        tags: ['PIC', 'Servo', 'Embedded'],
        imageContent: <img src="Projects/Rice_Dispenser.jpg" alt="Rice Dispenser" className="w-full h-full object-cover" />
    },
    { 
        title: 'Car Rental Hub Website', 
        description: 'Dynamic web platform for vehicle reservation with real-time booking.',
        tags: ['PHP', 'SQL', 'Web'],
        imageContent: <img src="Projects/car_rental.jpg" alt="Car Rental" className="w-full h-full object-cover" />
    },
  ],
  stats: [
    { value: '18+', label: 'Projects Completed' },
    { value: '3+', label: 'Years of Experience' },
    { value: '10+', label: 'Certifications' },
  ],
  showAnimatedBackground: true,
};

export default function Home() {
  return <PortfolioPage {...portfolioData} />;
}
