import FadeIn from "./FadeIn";

function Hero() {
    return (
        <section id="home" className="hero pt-12 pb-24 md:pt-32 md:pb-48 flex flex-col items-center text-center px-4">
            <FadeIn>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                    Hi, I'm <span className="text-blue-500">Zeeshan</span>
                </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
                <p className="text-xl md:text-2xl text-foreground/60 mb-10 max-w-2xl mx-auto">
                    I build professional, dynamic, and beautiful web applications.
                </p>
            </FadeIn>
            <FadeIn delay={0.4}>
                <div className="flex gap-4">
                    <a href="#projects" className="bg-foreground text-background px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
                        View Projects
                    </a>
                    <a href="#contact" className="border border-foreground/20 px-6 py-3 rounded-lg font-medium hover:bg-foreground/5 transition-colors">
                        Contact Me
                    </a>
                </div>
            </FadeIn>
        </section>
    );
}

export default Hero;