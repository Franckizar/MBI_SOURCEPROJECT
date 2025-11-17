
import { Dancing_Script } from "next/font/google";

const signature = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function MarketingSection() {
  return (
    <div className="h-120 bg-muted/50 flex justify-center">
      <div className="w-[1400px] flex justify-between items-start">

        {/* LEFT SECTION */}
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

        {/* CENTER PHONE SECTION */}
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

        {/* RIGHT SECTION */}
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
  );
}