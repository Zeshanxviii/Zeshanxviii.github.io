import FadeIn from "./FadeIn";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
    {
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce solution with dynamic routing, seamless checkout, and admin dashboard.",
        tech: ["Next.js", "Tailwind CSS", "Stripe", "PostgreSQL"],
        link: "#",
        github: "#"
    },
    {
        title: "Analytics Dashboard",
        description: "An analytics dashboard featuring real-time data visualization, interactive charts, and user management.",
        tech: ["React", "Framer Motion", "Recharts", "Node.js"],
        link: "#",
        github: "#"
    },
    {
        title: "Social Network",
        description: "A community platform for developers to share code snippets, collaborate on projects, and build teams.",
        tech: ["Next.js", "Prisma", "TypeScript", "Tailwind"],
        link: "#",
        github: "#"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-4 bg-foreground/[0.02] border-y border-foreground/5">
            <div className="max-w-6xl mx-auto">
                <FadeIn>
                    <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Featured Projects</h2>
                </FadeIn>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <FadeIn key={project.title} delay={0.1 * index} className="group bg-background border border-foreground/10 p-8 rounded-3xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                            <h3 className="text-2xl font-semibold mb-4 group-hover:text-blue-500 transition-colors">{project.title}</h3>
                            <p className="text-foreground/70 mb-8 flex-grow leading-relaxed">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tech.map(t => (
                                    <span key={t} className="text-xs font-medium px-3 py-1 bg-foreground/5 text-foreground/80 rounded-full">
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-6 mt-auto">
                                <a href={project.link} className="flex items-center gap-2 text-sm font-semibold hover:text-blue-500 transition-colors">
                                    <FaExternalLinkAlt size={16} /> Live Demo
                                </a>
                                <a href={project.github} className="flex items-center gap-2 text-sm font-semibold hover:text-blue-500 transition-colors">
                                    <FaGithub size={18} /> Code
                                </a>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
