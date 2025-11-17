"use client"

import { Play, Pause, Volume2, Maximize, Settings, SkipBack, SkipForward } from "lucide-react";
import { useState, useRef } from "react";

export default function LongFormVideosSection() {
  const [videoStates, setVideoStates] = useState<{[key: number]: {isPlaying: boolean, currentTime: number, duration: number}}>({});
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const togglePlay = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      if (video.paused) {
        video.play();
        setVideoStates(prev => ({...prev, [index]: {...prev[index], isPlaying: true}}));
      } else {
        video.pause();
        setVideoStates(prev => ({...prev, [index]: {...prev[index], isPlaying: false}}));
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
                  ref={el => videoRefs.current[0] = el}
                  src="/videos/long-form-video-1.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                  onTimeUpdate={() => handleTimeUpdate(0)}
                  onPlay={() => setVideoStates(prev => ({...prev, [0]: {...prev[0], isPlaying: true}}))}
                  onPause={() => setVideoStates(prev => ({...prev, [0]: {...prev[0], isPlaying: false}}))}
                ></video>
                
                {/* Video Controls Overlay - ALWAYS VISIBLE */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/90 backdrop-blur-sm rounded-xl p-4 opacity-100">
                  {/* Progress Bar */}
                  <div 
                    className="w-full h-2 bg-gray-600 rounded-full mb-3 cursor-pointer"
                    onClick={(e) => handleProgressClick(0, e)}
                  >
                    <div 
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${(getVideoState(0).currentTime / getVideoState(0).duration) * 100}%` }}
                    ></div>
                  </div>
                  
                  {/* Control Buttons */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <button 
                        onClick={() => togglePlay(0)}
                        className="text-white hover:text-primary transition-colors"
                      >
                        {getVideoState(0).isPlaying ? <Pause size={20} /> : <Play size={20} />}
                      </button>
                      <SkipBack size={20} className="text-white hover:text-primary cursor-pointer" />
                      <SkipForward size={20} className="text-white hover:text-primary cursor-pointer" />
                      <Volume2 size={20} className="text-white hover:text-primary cursor-pointer" />
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <Settings size={20} className="text-white hover:text-primary cursor-pointer" />
                      <Maximize size={20} className="text-white hover:text-primary cursor-pointer" />
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
              const videoIndex = index + 1;
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
                    <div className="absolute bottom-2 left-2 right-2 bg-black/80 backdrop-blur-sm rounded-lg p-2 opacity-100">
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
                          <Volume2 size={12} className="text-white hover:text-primary cursor-pointer" />
                          <Maximize size={12} className="text-white hover:text-primary cursor-pointer" />
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
  );
}