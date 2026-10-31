"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
};

const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const headingVariant = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

const dotVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (delay) => ({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.45, ease: "backOut", delay },
    }),
};
// Replace the image paths with your own files in /public/images/experience/
const cards = [
    {
        image: "/images/experience-aims-ibs/image.webp",
        title: "Academic Excellence & Infrastructure",
        subtitle: "An Ideal Learning Environment",
        points: [
            "Spread across 4 campuses with capacity for 1000+ students",
            "Over 90+ expert faculty with strong research & corporate backgrounds",
            "World-class classroom infrastructure and collaborative spaces",
            "Co-curricular initiatives integrated with business and trade partners",
        ],
    },
    {
        image: "/images/experience-aims-ibs/image-1.webp",
        title: "Distinguished Faculty",
        subtitle: "Mentored by Industry Legends",
        points: [
            "80% faculty from leading industries across sectors",
            "Corporate Council offers one-on-one mentoring",
            "Guest faculty from IIMs, IITs, and top global universities",
            "International faculty exchange & modular teaching programs",
        ],
    },
    {
        image: "/images/experience-aims-ibs/image-2.webp",
        title: "Diverse Student Community",
        subtitle: "A Multicultural & Merit-Based Cohort",
        points: [
            "Students from 18+ Indian states with varied academic & work backgrounds",
            "Merit-based admission ensures quality intake",
            "Collaborative and inclusive peer learning",
        ],
    },
    {
        image: "/images/experience-aims-ibs/image-3.webp",
        title: "Dual Degree Program: MBA + PGPM",
        subtitle: "Academics + Industry Integration",
        points: [
            "Core university curriculum + value-added industry modules",
            "Industry-Integrated Program: Hands-on exposure while studying",
            "Recognized MBA degree with industry-ready training",
            "Designed to make graduates employable from Day 1",
        ],
    },
    {
        image: "/images/experience-aims-ibs/image-4.webp",
        title: "Teaching & Learning Pedagogy",
        subtitle: "Interactive. Practical. Insightful.",
        points: [
            "Case studies, role plays, projects, and AV presentations",
            "Business news & emerging concept analysis sessions",
            "Real-world mentoring from managers & entrepreneurs",
            "Entrepreneurship Cell & start-up incubation support",
            "TEDx video analysis, cinema learning & research assignments",
        ],
    },
    {
        image: "/images/experience-aims-ibs/image-5.webp",
        title: "Continuous Assessment",
        subtitle: "Performance You Can Measure",
        points: [
            "Ongoing assessment through tests, assignments, and projects",
            "Final-year integrative capstone project",
            "Progress tracking aligned to industry skill gap expectations",
        ],
    },
    {
        image: "/images/experience-aims-ibs/image-6.webp",
        title: "Global Exposure & Foreign Industry Visits",
        subtitle: "Business Without Borders",
        points: [
            "International study tours to Singapore, Malaysia, China, Japan & Europe",
            "Global internships & exchange programs",
            "Direct exposure to international markets and practices",
        ],
    },
    {
        image: "/images/experience-aims-ibs/image-7.webp",
        title: "Career Support & Placement",
        subtitle: "Career-Ready. From Day One.",
        points: [
            "Dedicated placement team with strong corporate ties",
            "Campus-to-Corporate Training (C2C), mock interviews & aptitude coaching",
            "Regular corporate lectures, company visits & industry connects",
            "Profile mapping for skill-based certification & job alignment",
        ],
    },
    {
        image: "/images/experience-aims-ibs/image-8.webp",
        title: "Applied Learning",
        subtitle: "Build Practical Confidence",
        points: [
            "Projects (individual & team) on real-time business scenarios",
            "Weekly news analysis, industry updates & case discussions",
            "Corporate Case Series: Domain insights from top leaders",
            "Business Simulation Workshops & Entrepreneurship Bootcamps",
        ],
    },
];
const squareVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.45, ease: "backOut", delay: 0.3 },
    },
};
export default function ExperienceAimsIbs() {
    return (
        <section className="relative overflow-hidden bg-white py-14 lg:py-20 xl:py-24">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/images/experience-aims-ibs/Placement_No.webp')",
                }}
            />
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                aria-hidden="true"
                className="pointer-events-none absolute top-0 right-0 h-8 w-16 lg:h-[50px] lg:w-[148px]"
            >
                <motion.span
                    variants={squareVariants}
                    className="block h-full w-full origin-top-right bg-[#43358F]"
                />
            </motion.div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                aria-hidden="true"
                className="pointer-events-none absolute top-0 right-0 h-16 w-8 lg:h-[100px] lg:w-[50px]"
            >
                <motion.span
                    variants={squareVariants}
                    className="block h-full w-full origin-top-right bg-[#43358F]"
                />
            </motion.div>
            <motion.span
                custom={0.3}
                variants={dotVariants}
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 left-0 h-8 w-8 bg-[#F0C300] lg:h-[50px] lg:w-[50px] aspect-square"
            />

            <div className="custom-container relative z-10">
                {/* ── Dot / grid background ── */}

                <motion.h2
                    variants={headingVariant}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    className="text-[28px] lg:text-[34px] xl:text-[48px] mb-8 md:mb-10 lg:mb-12"
                >
                    Experience <span className="font-bold italic">AIMS IBS</span>
                </motion.h2>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-10"
                >
                    {cards.map((card) => (
                        <motion.article
                            key={card.title}
                            variants={cardVariant}
                            className="flex flex-col md:gap-3"
                        >
                            {/* image */}
                            <div className="group relative aspect-[216/130] w-full overflow-hidden">
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    fill
                                    sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* content box */}
                            <div className="flex-1 bg-[#E2DEFB] border border-1 border-[#43378c29] p-[16px] md:px-[20px]">
                                <h3 className="text-[20px] font-medium leading-snug text-[#212121] md:text-[24px]">
                                    {card.title}
                                </h3>
                                <p className="mt-2 text-[15px] md:text-[16px] font-medium text-[#604CD4]">
                                    {card.subtitle}
                                </p>

                                <ul className="mt-4 flex flex-col gap-2 md:gap-3">
                                    {card.points.map((point) => (
                                        <li
                                            key={point}
                                            className="flex items-start gap-2 text-[14px] md:text-[15px] leading-[1.45] text-[#424242]"
                                        >
                                            <span className="mt-[6px] h-[8px] w-[8px] shrink-0 bg-[#F04B1D]" />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}