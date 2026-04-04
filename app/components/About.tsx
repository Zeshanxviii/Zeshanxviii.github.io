import FadeIn from "./FadeIn";
import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="py-24 px-4 max-w-5xl mx-auto">
            <FadeIn>
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">About Me</h2>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <FadeIn delay={0.2}>
                    <div className="aspect-square bg-foreground/5 rounded-3xl flex items-center justify-center border border-foreground/10 overflow-hidden shadow-inner relative">
                        <Image
                            src="/profile.png"
                            alt="Developer Illustration"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                        />
                    </div>
                </FadeIn>
                <FadeIn delay={0.3}>
                    <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
                        <p>
                            I'm a passionate developer specializing in building modern, performant web applications.
                            With a strong eye for design and a focus on user experience, I create digital products that people love to use.
                        </p>
                        <p>
                            My core expertise includes React, Next.js, and Tailwind CSS. I enjoy tackling complex technical challenges
                            and translating them into simple, elegant, and maintainable code.
                        </p>
                        <p>
                            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                            or constantly learning something new.
                        </p>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
