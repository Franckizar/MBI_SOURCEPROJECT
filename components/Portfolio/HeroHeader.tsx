import Image from "next/image";

export default function HeroHeader() {
  return (
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
  );
}