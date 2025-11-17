// components/SoftwareExpertiseSection.jsx
export default function SoftwareExpertiseSection() {
  const softwareTools = [
    {
      id: 1,
      name: "Adobe After Effects",
      experience: "4+ Years",
      level: "Advanced",
      description: "Motion graphics, visual effects, and animation. Creating dynamic video content with complex animations and compositing.",
      image: "/software/after-effects.jpg",
      features: ["Motion Graphics", "VFX", "Animation", "Compositing"],
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 2,
      name: "Adobe Premiere Pro",
      experience: "5+ Years",
      level: "Expert",
      description: "Professional video editing and post-production. Seamless workflow integration with other Adobe Creative Cloud apps.",
      image: "/software/premiere.jpg",
      features: ["Video Editing", "Color Grading", "Audio Mixing", "Export Optimization"],
      color: "from-blue-500 to-cyan-600"
    },
    {
      id: 3,
      name: "DaVinci Resolve",
      experience: "3+ Years",
      level: "Advanced",
      description: "Hollywood-grade color correction and professional editing suite. Mastering the art of cinematic color grading.",
      image: "/software/davinci.jpg",
      features: ["Color Grading", "Professional Editing", "Fairlight Audio", "Fusion VFX"],
      color: "from-red-500 to-orange-600"
    },
    {
      id: 4,
      name: "Adobe Photoshop",
      experience: "6+ Years",
      level: "Expert",
      description: "Digital image manipulation, graphic design, and photo editing. Creating stunning visual assets and compositions.",
      image: "/software/photoshop.jpg",
      features: ["Photo Editing", "Digital Art", "Graphic Design", "Compositing"],
      color: "from-cyan-500 to-blue-600"
    }
  ];

  return (
    <section className="w-full py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            SOFTWARE EXPERTISE
          </h2>
          <p className="mt-2 text-muted-foreground text-base max-w-2xl mx-auto">
            Mastering the tools that bring creative visions to life with precision and artistry
          </p>
        </div>

        {/* Software Tools Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {softwareTools.map((tool, index) => (
            <div key={tool.id} className="group">
              <div className="flex flex-col md:flex-row bg-card rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-border hover:border-primary/20 h-full">
                {/* Image Section */}
                <div className="md:w-2/5 relative overflow-hidden">
                  <div className={`w-full h-48 md:h-full bg-gradient-to-br ${tool.color}`}>
                    {/* Placeholder for software interface */}
                    <div className="w-full h-full flex items-center justify-center p-6">
                      <div className="text-white text-center">
                        <div className="w-16 h-16 bg-white/20 rounded-xl backdrop-blur-sm flex items-center justify-center mx-auto mb-3">
                          <div className="w-8 h-8 bg-white rounded-lg"></div>
                        </div>
                        <h3 className="font-bold text-lg">{tool.name.split(' ')[0]}</h3>
                        <p className="text-white/80 text-sm">{tool.name.split(' ').slice(1).join(' ')}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Experience Badge */}
                  <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-foreground">{tool.experience}</span>
                  </div>
                  
                  {/* Level Badge */}
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold">{tool.level}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="md:w-3/5 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {tool.name}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {tool.description}
                    </p>
                    
                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {tool.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-4">
                    <div className="flex justify-between text-sm text-muted-foreground mb-2">
                      <span>Proficiency</span>
                      <span>{tool.level}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r ${tool.color} transition-all duration-1000 ease-out`}
                        style={{
                          width: tool.level === 'Expert' ? '95%' : 
                                 tool.level === 'Advanced' ? '85%' : '75%'
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-muted/50 rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-center mb-8">Additional Creative Tools</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { name: "Illustrator", level: "Advanced" },
                { name: "Lightroom", level: "Expert" },
                { name: "Audition", level: "Intermediate" },
                { name: "Figma", level: "Advanced" }
              ].map((tool, index) => (
                <div key={index} className="bg-card rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <div className="w-6 h-6 bg-white/80 rounded"></div>
                  </div>
                  <h4 className="font-semibold text-foreground">{tool.name}</h4>
                  <span className="text-sm text-muted-foreground">{tool.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}