export default function DesignPortfolioSection() {
  const designImages = [
    { id: 1, src: "/design/1.jpg", title: "Brand Identity Design", category: "Branding" },
    { id: 2, src: "/design/2.jpg", title: "Mobile App UI", category: "UI/UX" },
    { id: 3, src: "/design/3.jpg", title: "Website Design", category: "Web Design" },
    { id: 4, src: "/design/4.jpg", title: "Social Media Graphics", category: "Marketing" },
    { id: 5, src: "/design/5.jpg", title: "Logo Design", category: "Branding" },
    { id: 6, src: "/design/6.jpg", title: "Dashboard Design", category: "UI/UX" },
    { id: 7, src: "/design/7.jpg", title: "E-commerce Design", category: "Web Design" },
    { id: 8, src: "/design/8.jpg", title: "Advertisement Design", category: "Marketing" },
    { id: 9, src: "/design/9.jpg", title: "Packaging Design", category: "Branding" },
    { id: 10, src: "/design/10.jpg", title: "Mobile Interface", category: "UI/UX" },
    { id: 11, src: "/design/11.jpg", title: "Landing Page", category: "Web Design" },
    { id: 12, src: "/design/12.jpg", title: "Campaign Visuals", category: "Marketing" },
    { id: 13, src: "/design/13.jpg", title: "Corporate Identity", category: "Branding" },
    { id: 14, src: "/design/14.jpg", title: "App Screens", category: "UI/UX" },
    { id: 15, src: "/design/15.jpg", title: "Portfolio Site", category: "Web Design" },
    { id: 16, src: "/design/16.jpg", title: "Social Media Kit", category: "Marketing" },
  ];

  return (
    <section className="w-full py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            DESIGN PORTFOLIO
          </h2>
          <p className="mt-2 text-muted-foreground text-base max-w-2xl mx-auto">
            Stunning visual designs crafted for brands, apps, and digital experiences
          </p>
        </div>

        {/* 2 Rows of 8 Design Frames */}
        <div className="space-y-8">
          {/* First Row - 8 Design Frames */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {designImages.slice(0, 8).map((design) => (
              <div key={design.id} className="flex justify-center">
                <div className="relative w-[120px] h-[180px] overflow-hidden shadow-lg bg-white group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl border-4 border-gray-300 rounded-2xl">
                  {/* Design Image */}
                  <img
                    src={design.src}
                    alt={design.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-3">
                    <div className="text-center text-white">
                      <h3 className="font-semibold text-xs mb-2 leading-tight">{design.title}</h3>
                      <span className="text-xs bg-primary px-2 py-1 rounded-full">{design.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row - 8 Design Frames */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {designImages.slice(8, 16).map((design) => (
              <div key={design.id} className="flex justify-center">
                <div className="relative w-[120px] h-[180px] overflow-hidden shadow-lg bg-white group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl border-4 border-gray-300 rounded-2xl">
                  {/* Design Image */}
                  <img
                    src={design.src}
                    alt={design.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-3">
                    <div className="text-center text-white">
                      <h3 className="font-semibold text-xs mb-2 leading-tight">{design.title}</h3>
                      <span className="text-xs bg-primary px-2 py-1 rounded-full">{design.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-sm font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg">
            VIEW ALL DESIGNS
          </button>
        </div>
      </div>
    </section>
  );
}