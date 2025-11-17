"use client"

import { Montserrat, Dancing_Script } from "next/font/google";
import Image from "next/image";
import { Play, Pause, Volume2, Maximize, Settings, SkipBack, SkipForward } from "lucide-react";
import { useState, useRef } from "react";

// Page-only fonts
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const signature = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function PortfolioPage() {
  const [videoStates, setVideoStates] = useState<{[key: number]: {isPlaying: boolean, currentTime: number, duration: number}}>({});
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const togglePlay = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      if (video.paused) {
        video.play();
        setVideoStates(prev => ({
          ...prev,
          [index]: {...prev[index], isPlaying: true}
        }));
      } else {
        video.pause();
        setVideoStates(prev => ({
          ...prev,
          [index]: {...prev[index], isPlaying: false}
        }));
      }
    }
  };

  const handleTimeUpdate = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      setVideoStates(prev => ({
        ...prev,
        [index]: {
          ...prev[index],
          currentTime: video.currentTime,
          duration: video.duration || 100
        }
      }));
    }
  };

  const handleProgressClick = (index: number, e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRefs.current[index];
    if (video && videoStates[index]) {
      const rect = e.currentTarget.getBoundingClientRect();
      const percent = (e.clientX - rect.left) / rect.width;
      video.currentTime = percent * videoStates[index].duration;
    }
  };

  const getVideoState = (index: number) => {
    return videoStates[index] || { isPlaying: true, currentTime: 0, duration: 100 };
  };

  return (
    <div className={`min-h-screen ${montserrat.className}`}>
      {/* HERO HEADER */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/team/1.jpg"
            alt="Our Portfolio - MBI Digital Agency"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white drop-shadow-lg">
                Our{" "}
                <span className="inline-block px-2 py-1 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                  Portfolio
                </span>
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl drop-shadow">
                Web, branding, and marketing excellence — crafted for growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3-COLUMN MARKETING SECTION - REDUCED SPACING */}
      <div className="h-120 bg-muted/50 flex justify-center">
        <div className="w-[1400px] flex justify-between items-start">

          {/* LEFT SECTION - REDUCED SPACING */}
          <div className="w-1/3 flex flex-col items-center pt-12">
            <h1 className="text-2xl font-light text-center">
              Welcome to
            </h1>
            <h2 className="text-4xl mt-2 leading-tight font-bold text-center bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              MARKETING <br /> EXCELLENCE
            </h2>
            <p className={`${signature.className} mt-3 text-muted-foreground text-lg italic text-center`}>
              Crafting Digital Success Stories
            </p>
            <div className="mt-6 flex gap-6 justify-center">
              <div className="text-center">
                <p className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">150+</p>
                <p className="text-muted-foreground text-xs mt-1">Campaigns Delivered</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">87%</p>
                <p className="text-muted-foreground text-xs mt-1">ROI Increase</p>
              </div>
            </div>
          </div>

          {/* CENTER PHONE SECTION - REDUCED SPACING */}
          <div className="w-1/3 flex flex-col items-center">
            <div className="w-[350px] h-[580px] bg-background rounded-b-[55px] shadow-2xl border overflow-hidden -mt-8">
              <div className="w-28 h-5 bg-black rounded-b-2xl absolute top-0 left-1/2 -translate-x-1/2 z-10"></div>
              <img
                src="/1.jpg"
                alt="Marketing Campaign"
                className="w-full h-full object-cover mt-5"
              />
            </div>
            <button className="w-[220px] bg-primary text-primary-foreground px-6 py-3 text-xs font-semibold rounded-full shadow-xl hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 -mt-2">
              VIEW OUR PORTFOLIO
            </button>
          </div>

          {/* RIGHT SECTION - REDUCED SPACING */}
          <div className="w-1/3 flex flex-col items-center pt-12">
            <h2 className="text-3xl font-bold leading-none text-center bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              OUR SERVICES
            </h2>
            <div className="mt-6 space-y-3 w-full max-w-sm">
              <div className="text-center group hover:transform hover:scale-105 transition duration-300">
                <p className="font-semibold text-base">Social Media Marketing</p>
                <p className="text-muted-foreground text-xs mt-0.5">Engaging Content & Campaigns</p>
              </div>
              <div className="text-center group hover:transform hover:scale-105 transition duration-300">
                <p className="font-semibold text-base">Video Content Strategy</p>
                <p className="text-muted-foreground text-xs mt-0.5">Reels, Shorts & Vertical Video</p>
              </div>
              <div className="text-center group hover:transform hover:scale-105 transition duration-300">
                <p className="font-semibold text-base">Brand Storytelling</p>
                <p className="text-muted-foreground text-xs mt-0.5">Compelling Narrative Development</p>
              </div>
              <div className="text-center group hover:transform hover:scale-105 transition duration-300">
                <p className="font-semibold text-base">Performance Analytics</p>
                <p className="text-muted-foreground text-xs mt-0.5">Data-Driven Optimization</p>
              </div>
            </div>
            <button className="mt-6 bg-primary text-primary-foreground px-5 py-1.5 rounded-full text-xs font-medium hover:bg-primary/90 transition duration-300">
              GET STRATEGY CALL
            </button>
          </div>
        </div>
      </div>

      {/* SHORTS/VERTICAL/REELS VIDEOS SECTION */}
      <section className="w-full py-16 bg-background">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              SHORTS / VERTICAL / REELS VIDEOS
            </h2>
            <p className="mt-2 text-muted-foreground text-base max-w-2xl mx-auto">
              Engaging vertical content crafted for maximum impact on social platforms
            </p>
          </div>

          {/* 2 Rows of 4 Phones */}
          <div className="space-y-8">
            {/* First Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, index) => {
                const videoState = getVideoState(index);
                return (
                  <div key={index} className="flex justify-center">
                    <div className="relative w-[160px] h-[320px] rounded-[25px] border-[10px] border-[#000] overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.3)] bg-black">
                      {/* Phone Notch */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-b-xl z-20"></div>
                      
                      {/* Video Inside Phone */}
                      <video
                        ref={el => videoRefs.current[index] = el}
                        src="/videos/Morgan Wallen - Cowgirls (Lyric Video) ft. ERNEST copy.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                        onTimeUpdate={() => handleTimeUpdate(index)}
                        onPlay={() => setVideoStates(prev => ({...prev, [index]: {...prev[index], isPlaying: true}}))}
                        onPause={() => setVideoStates(prev => ({...prev, [index]: {...prev[index], isPlaying: false}}))}
                      ></video>
                      
                      {/* Video Controls Overlay - ALWAYS VISIBLE */}
                      <div className="absolute bottom-2 left-2 right-2 bg-black/80 backdrop-blur-sm rounded-lg p-2 opacity-100 transition-opacity duration-300">
                        {/* Progress Bar */}
                        <div 
                          className="w-full h-1 bg-gray-600 rounded-full mb-2 cursor-pointer"
                          onClick={(e) => handleProgressClick(index, e)}
                        >
                          <div 
                            className="h-full bg-primary rounded-full"
                            style={{ width: `${(videoState.currentTime / videoState.duration) * 100}%` }}
                          ></div>
                        </div>
                        
                        {/* Control Buttons */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <button 
                              onClick={() => togglePlay(index)}
                              className="text-white hover:text-primary transition-colors"
                            >
                              {videoState.isPlaying ? <Pause size={14} /> : <Play size={14} />}
                            </button>
                            <SkipBack size={14} className="text-white hover:text-primary transition-colors cursor-pointer" />
                            <SkipForward size={14} className="text-white hover:text-primary transition-colors cursor-pointer" />
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <Volume2 size={14} className="text-white hover:text-primary transition-colors cursor-pointer" />
                            <Settings size={14} className="text-white hover:text-primary transition-colors cursor-pointer" />
                            <Maximize size={14} className="text-white hover:text-primary transition-colors cursor-pointer" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Glossy Reflection */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent pointer-events-none"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* LONG FORM VIDEOS SECTION */}
      <section className="w-full py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              LONG FORM VIDEOS
            </h2>
            <p className="mt-2 text-muted-foreground text-base max-w-2xl mx-auto">
              Professional desktop video content for YouTube, corporate presentations, and detailed storytelling
            </p>
          </div>

          {/* Desktop Video Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Large Desktop Screen - Left */}
            <div className="lg:col-span-3">
              <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-800">
                {/* Desktop Frame */}
                <div className="relative w-full h-0 pb-[56.25%]">
                  <video
                    ref={el => videoRefs.current[4] = el}
                    src="/videos/long-form-video-1.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    onTimeUpdate={() => handleTimeUpdate(4)}
                    onPlay={() => setVideoStates(prev => ({...prev, [4]: {...prev[4], isPlaying: true}}))}
                    onPause={() => setVideoStates(prev => ({...prev, [4]: {...prev[4], isPlaying: false}}))}
                  ></video>
                  
                  {/* Video Controls Overlay - ALWAYS VISIBLE */}
                  <div className="absolute bottom-4 left-4 right-4 bg-black/90 backdrop-blur-sm rounded-xl p-4 opacity-100 transition-opacity duration-300">
                    {/* Progress Bar */}
                    <div 
                      className="w-full h-2 bg-gray-600 rounded-full mb-3 cursor-pointer"
                      onClick={(e) => handleProgressClick(4, e)}
                    >
                      <div 
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${(getVideoState(4).currentTime / getVideoState(4).duration) * 100}%` }}
                      ></div>
                    </div>
                    
                    {/* Control Buttons */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <button 
                          onClick={() => togglePlay(4)}
                          className="text-white hover:text-primary transition-colors"
                        >
                          {getVideoState(4).isPlaying ? <Pause size={20} /> : <Play size={20} />}
                        </button>
                        <SkipBack size={20} className="text-white hover:text-primary transition-colors cursor-pointer" />
                        <SkipForward size={20} className="text-white hover:text-primary transition-colors cursor-pointer" />
                        <Volume2 size={20} className="text-white hover:text-primary transition-colors cursor-pointer" />
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <Settings size={20} className="text-white hover:text-primary transition-colors cursor-pointer" />
                        <Maximize size={20} className="text-white hover:text-primary transition-colors cursor-pointer" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Desktop Screen Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/5 pointer-events-none"></div>
                  
                  {/* Desktop Stand */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-4 bg-gray-800 rounded-b-lg"></div>
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-20 h-4 bg-gray-700 rounded-b-lg"></div>
                </div>
              </div>
            </div>

            {/* 3 Vertical Desktop Screens - Right */}
            <div className="lg:col-span-1 space-y-6">
              {[...Array(3)].map((_, index) => {
                const videoIndex = 5 + index;
                return (
                  <div key={index} className="relative bg-black rounded-xl overflow-hidden shadow-lg border border-gray-700">
                    {/* Small Desktop Frame */}
                    <div className="relative w-full h-0 pb-[75%]">
                      <video
                        ref={el => videoRefs.current[videoIndex] = el}
                        src="/videos/long-form-video-2.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                        onTimeUpdate={() => handleTimeUpdate(videoIndex)}
                        onPlay={() => setVideoStates(prev => ({...prev, [videoIndex]: {...prev[videoIndex], isPlaying: true}}))}
                        onPause={() => setVideoStates(prev => ({...prev, [videoIndex]: {...prev[videoIndex], isPlaying: false}}))}
                      ></video>
                      
                      {/* Video Controls Overlay - ALWAYS VISIBLE */}
                      <div className="absolute bottom-2 left-2 right-2 bg-black/80 backdrop-blur-sm rounded-lg p-2 opacity-100 transition-opacity duration-300">
                        {/* Progress Bar */}
                        <div 
                          className="w-full h-1 bg-gray-600 rounded-full mb-1 cursor-pointer"
                          onClick={(e) => handleProgressClick(videoIndex, e)}
                        >
                          <div 
                            className="h-full bg-primary rounded-full"
                            style={{ width: `${(getVideoState(videoIndex).currentTime / getVideoState(videoIndex).duration) * 100}%` }}
                          ></div>
                        </div>
                        
                        {/* Control Buttons */}
                        <div className="flex items-center justify-between">
                          <button 
                            onClick={() => togglePlay(videoIndex)}
                            className="text-white hover:text-primary transition-colors"
                          >
                            {getVideoState(videoIndex).isPlaying ? <Pause size={12} /> : <Play size={12} />}
                          </button>
                          <div className="flex items-center gap-1">
                            <Volume2 size={12} className="text-white hover:text-primary transition-colors cursor-pointer" />
                            <Maximize size={12} className="text-white hover:text-primary transition-colors cursor-pointer" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Screen Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/5 pointer-events-none"></div>
                      
                      {/* Small Desktop Stand */}
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-2 bg-gray-700 rounded-b"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}