import FadeIn from "./FadeIn";
import { FaCalendarAlt, FaClock, FaArrowRight } from "react-icons/fa";

const blogs = [
    {
        title: "Building Scalable Architecture in Next.js",
        excerpt: "Learn how to structure your Next.js application for maximum performance, maintainability, and scalability across large teams.",
        date: "Apr 4, 2026",
        time: "10:30 AM",
        link: "#",
    },
    {
        title: "The Ultimate Guide to Tailwind CSS v4",
        excerpt: "An in-depth look into the new features of Tailwind CSS v4, including the CSS-only configuration approach and performance improvements.",
        date: "Mar 28, 2026",
        time: "2:15 PM",
        link: "#",
    },
    {
        title: "Why React Server Components Change Everything",
        excerpt: "Exploring the mental model shift required for React Server Components and how they dramatically reduce client-side bundle sizes.",
        date: "Mar 15, 2026",
        time: "9:00 AM",
        link: "#",
    }
];

export default function Blog() {
    return (
        <section id="blog" className="py-24 px-4 bg-foreground/[0.02]">
            <div className="max-w-4xl mx-auto">
                <FadeIn>
                    <div className="flex justify-between items-end mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold">Latest Writing</h2>
                        <a href="#" className="hidden sm:flex flex-wrap items-center gap-2 text-sm font-semibold text-blue-500 hover:text-blue-600 transition-colors">
                            View all posts <FaArrowRight size={14} />
                        </a>
                    </div>
                </FadeIn>
                
                <div className="flex flex-col gap-8">
                    {blogs.map((blog, index) => (
                        <FadeIn key={blog.title} delay={0.1 * index} className="group border-b border-foreground/10 pb-8 last:border-0 last:pb-0">
                            <a href={blog.link} className="block">
                                <h3 className="text-2xl font-semibold mb-3 group-hover:text-blue-500 transition-colors">{blog.title}</h3>
                                <p className="text-foreground/70 mb-4 leading-relaxed">{blog.excerpt}</p>
                                <div className="flex items-center gap-6 text-sm text-foreground/50 font-medium">
                                    <span className="flex items-center gap-2">
                                        <FaCalendarAlt size={14} />
                                        {blog.date}
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <FaClock size={14} />
                                        {blog.time}
                                    </span>
                                </div>
                            </a>
                        </FadeIn>
                    ))}
                </div>

                <FadeIn delay={0.3} className="mt-8 sm:hidden">
                    <a href="#" className="flex justify-center items-center gap-2 text-sm font-semibold bg-background border border-foreground/10 py-3 rounded-xl hover:bg-foreground/5 transition-colors">
                        View all posts <FaArrowRight size={14} />
                    </a>
                </FadeIn>
            </div>
        </section>
    );
}
