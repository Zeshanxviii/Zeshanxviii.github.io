import FadeIn from "./FadeIn";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Contact() {
    return (
        <section id="contact" className="py-32 px-4 max-w-4xl mx-auto text-center">
            <FadeIn>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Let's Work Together</h2>
                <p className="text-xl text-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed">
                    I'm currently available for new opportunities. Whether you have a question, a project in mind, 
                    or just want to say hi, my inbox is always open!
                </p>
            </FadeIn>
            
            <FadeIn delay={0.2}>
                <a href="mailto:hello@example.com" className="inline-flex items-center justify-center gap-3 bg-foreground text-background px-10 py-5 rounded-full font-semibold text-lg hover:opacity-90 hover:scale-105 transition-all mb-20 shadow-lg">
                    <FaEnvelope size={22} />
                    Say Hello
                </a>
            </FadeIn>

            <FadeIn delay={0.4}>
                <div className="flex justify-center gap-8 border-t border-foreground/10 pt-12">
                    <a href="#" className="text-foreground/50 hover:text-foreground hover:-translate-y-1 transition-all">
                        <FaGithub size={28} />
                        <span className="sr-only">GitHub</span>
                    </a>
                    <a href="#" className="text-foreground/50 hover:text-foreground hover:-translate-y-1 transition-all">
                        <FaLinkedin size={28} />
                        <span className="sr-only">LinkedIn</span>
                    </a>
                    <a href="#" className="text-foreground/50 hover:text-foreground hover:-translate-y-1 transition-all">
                        <FaTwitter size={28} />
                        <span className="sr-only">Twitter</span>
                    </a>
                </div>
            </FadeIn>
        </section>
    );
}
