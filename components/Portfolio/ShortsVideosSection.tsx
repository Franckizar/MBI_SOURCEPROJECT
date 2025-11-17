
"use client"

import { Play, Pause, Volume2, Maximize, Settings, SkipBack, SkipForward } from "lucide-react";
import { useState, useRef } from "react";

export default function ShortsVideosSection() {
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
                    <div className="absolute bottom-2 left-2 right-2 bg-black/80 backdrop-blur-sm rounded-lg p-2 opacity-100">
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
                          <SkipBack size={14} className="text-white hover:text-primary cursor-pointer" />
                          <SkipForward size={14} className="text-white hover:text-primary cursor-pointer" />
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Volume2 size={14} className="text-white hover:text-primary cursor-pointer" />
                          <Settings size={14} className="text-white hover:text-primary cursor-pointer" />
                          <Maximize size={14} className="text-white hover:text-primary cursor-pointer" />
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
  );
}