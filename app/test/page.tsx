export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 p-8">
      <div className="w-full max-w-6xl h-[700px] flex gap-8 p-8 bg-white rounded-3xl shadow-2xl">
        {/* Left div */}
        <div className="flex-1 flex flex-col gap-6 p-6 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600">
          {/* Top Left div (1) */}
          <div className="flex-1 flex gap-6">
            {/* Div 1.1 */}
            <div className="flex-1 flex items-center justify-center overflow-hidden rounded-xl p-4 bg-white/10 backdrop-blur-sm">
              <img
                src="https://picsum.photos/450/300?random=1"
                alt="Project 1"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 rounded-lg shadow-lg"
              />
            </div>
            {/* Div 1.2 */}
            <div className="flex-1 flex flex-col gap-4 rounded-xl p-4 bg-white/5 backdrop-blur-sm">
              {/* Div 1.2.1 */}
              <div className="flex-1 flex items-center justify-center overflow-hidden rounded-lg mb-2 bg-white/10">
                <img
                  src="https://picsum.photos/450/180?random=2"
                  alt="Project 2"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 rounded shadow-md"
                />
              </div>
              {/* Div 1.2.2 */}
              <div className="flex-1 flex items-center justify-center overflow-hidden rounded-lg bg-white/10">
                <img
                  src="https://picsum.photos/450/180?random=3"
                  alt="Project 3"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 rounded shadow-md"
                />
              </div>
            </div>
          </div>
          {/* Bottom Left div (2) */}
          <div className="flex-1 flex items-center justify-center overflow-hidden rounded-xl p-4 bg-white/10 backdrop-blur-sm">
            <img
              src="https://picsum.photos/525/225?random=4"
              alt="Featured Project"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 rounded-lg shadow-lg"
            />
          </div>
        </div>
        
        {/* Right div */}
        <div className="flex-1 flex flex-col gap-6 p-6 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600">
          {/* Top Right div (3) */}
          <div className="flex-1 flex items-center justify-center overflow-hidden rounded-xl p-4 mb-4 bg-white/10 backdrop-blur-sm">
            <img
              src="https://picsum.photos/525/270?random=5"
              alt="Web Design"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 rounded-lg shadow-lg"
            />
          </div>
          {/* Bottom Right div (4) */}
          <div className="flex-1 flex items-center justify-center overflow-hidden rounded-xl p-4 bg-white/10 backdrop-blur-sm">
            <img
              src="https://picsum.photos/525/270?random=6"
              alt="Mobile App"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}