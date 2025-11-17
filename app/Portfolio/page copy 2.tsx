import { Montserrat, Dancing_Script } from "next/font/google";

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
  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex justify-center ${montserrat.className}`}>
      <div className="w-[1400px] flex justify-between items-start">

        {/* LEFT SECTION */}
        <div className="w-1/3 flex flex-col items-center pt-20">
          <h1 className="text-3xl text-gray-800 font-light text-center">
            Welcome to
          </h1>
          <h2 className="text-5xl mt-4 leading-tight font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            MARKETING <br /> EXCELLENCE
          </h2>
          <p className={`${signature.className} mt-6 text-gray-600 text-xl italic text-center`}>
            Crafting Digital Success Stories
          </p>
          <div className="mt-12 flex gap-10 justify-center">
            <div className="text-center">
              <p className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">150+</p>
              <p className="text-gray-600 text-sm mt-2">Campaigns Delivered</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">87%</p>
              <p className="text-gray-600 text-sm mt-2">ROI Increase</p>
            </div>
          </div>
        </div>

        {/* CENTER PHONE SECTION - Touching Top */}
        <div className="w-1/3 flex flex-col items-center">
          {/* Phone div touching top */}
          <div className="w-[400px] h-[650px] bg-white rounded-b-[55px] shadow-2xl border border-gray-100 overflow-hidden mt-0">
            {/* Phone notch */}
            <div className="w-32 h-6 bg-black rounded-b-2xl absolute top-0 left-1/2 -translate-x-1/2 z-10"></div>
            <img
              src="/1.jpg"
              alt="Marketing Campaign"
              className="w-full h-full object-cover mt-6"
            />
          </div>
          {/* Button touching the phone div */}
          <button className="w-[250px] bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 text-sm font-semibold rounded-full shadow-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 -mt-2">
            VIEW OUR PORTFOLIO
          </button>
        </div>

        {/* RIGHT SECTION */}
        <div className="w-1/3 flex flex-col items-center pt-20">
          <h2 className="text-4xl font-bold leading-none text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            OUR SERVICES
          </h2>
          <div className="mt-10 space-y-6 w-full max-w-sm">
            <div className="text-center group hover:transform hover:scale-105 transition duration-300">
              <p className="font-semibold text-gray-800 text-lg">Social Media Marketing</p>
              <p className="text-gray-600 text-sm mt-1">Engaging Content & Campaigns</p>
            </div>
            <div className="text-center group hover:transform hover:scale-105 transition duration-300">
              <p className="font-semibold text-gray-800 text-lg">Video Content Strategy</p>
              <p className="text-gray-600 text-sm mt-1">Reels, Shorts & Vertical Video</p>
            </div>
            <div className="text-center group hover:transform hover:scale-105 transition duration-300">
              <p className="font-semibold text-gray-800 text-lg">Brand Storytelling</p>
              <p className="text-gray-600 text-sm mt-1">Compelling Narrative Development</p>
            </div>
            <div className="text-center group hover:transform hover:scale-105 transition duration-300">
              <p className="font-semibold text-gray-800 text-lg">Performance Analytics</p>
              <p className="text-gray-600 text-sm mt-1">Data-Driven Optimization</p>
            </div>
          </div>
          <button className="mt-8 bg-gray-800 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-900 transition duration-300">
            GET STRATEGY CALL
          </button>
        </div>
      </div>
    </div>
  );
}