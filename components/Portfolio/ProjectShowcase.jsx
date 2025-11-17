export default function ProjectShowcase() {
  return (
    <section className="w-full py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            PROJECT SHOWCASE
          </h2>
          <p className="mt-2 text-muted-foreground text-base max-w-2xl mx-auto">
            A curated collection of my latest creative work and innovative projects
          </p>
        </div>

        {/* Project Grid */}
        <div className="min-h-screen flex items-center justify-center bg-background pt-4 px-8">
          <div className="w-full max-w-6xl h-[700px] flex gap-8 p-8 bg-background rounded-3xl">
            {/* Left div */}
            <div className="flex-1 flex flex-col gap-6 p-6 rounded-2xl bg-muted/50">
              {/* Top Left div (1) */}
              <div className="flex-1 flex gap-6">
                {/* Div 1.1 */}
                <div className="flex-1 flex items-center justify-center overflow-hidden rounded-xl p-4 bg-card">
                  <img
                    src="https://picsum.photos/450/300?random=1"
                    alt="Project 1"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 rounded-lg"
                  />
                </div>
                {/* Div 1.2 */}
                <div className="flex-1 flex flex-col gap-4 rounded-xl p-4 bg-card">
                  {/* Div 1.2.1 */}
                  <div className="flex-1 flex items-center justify-center overflow-hidden rounded-lg mb-2 bg-muted">
                    <img
                      src="https://picsum.photos/450/180?random=2"
                      alt="Project 2"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 rounded"
                    />
                  </div>
                  {/* Div 1.2.2 */}
                  <div className="flex-1 flex items-center justify-center overflow-hidden rounded-lg bg-muted">
                    <img
                      src="https://picsum.photos/450/180?random=3"
                      alt="Project 3"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 rounded"
                    />
                  </div>
                </div>
              </div>
              {/* Bottom Left div (2) */}
              <div className="flex-1 flex items-center justify-center overflow-hidden rounded-xl p-4 bg-card">
                <img
                  src="https://picsum.photos/525/225?random=4"
                  alt="Featured Project"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 rounded-lg"
                />
              </div>
            </div>
            
            {/* Right div */}
            <div className="flex-1 flex flex-col gap-6 p-6 rounded-2xl bg-muted/50">
              {/* Top Right div (3) */}
              <div className="flex-1 flex items-center justify-center overflow-hidden rounded-xl p-4 mb-4 bg-card">
                <img
                  src="https://picsum.photos/525/270?random=5"
                  alt="Web Design"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 rounded-lg"
                />
              </div>
              {/* Bottom Right div (4) */}
              <div className="flex-1 flex items-center justify-center overflow-hidden rounded-xl p-4 bg-card">
                <img
                  src="https://picsum.photos/525/270?random=6"
                  alt="Mobile App"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-sm font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg">
            VIEW ALL PROJECTS
          </button>
        </div>
      </div>
    </section>
  );
}