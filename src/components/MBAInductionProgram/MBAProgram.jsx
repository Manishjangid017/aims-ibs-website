"use client";

import Image from "next/image";
import { motion, MotionConfig } from "framer-motion";

const BATCHES = [
    {
        title: "UNZONE - Spreading one's wings",
        description:
            "Every great journey begins with a spark ",
        img: "images/mba-induction-program/Container.webp"
    },
    {
        title: "Tricksteria & Uniquely You",
        description:
            "Students took a deep dive into self-discovery",
        img: "images/mba-induction-program/Container-1.webp"
    },
    {
        title: "Buddy Bonding & Bucket List",
        description:
            "Strengthening our foundation",
        img: "images/mba-induction-program/Container-14.webp"
    },
    {
        title: "ALCHEMIST: Director’s Dialogue",
        description:
            "When experience meets ambition",
        img: "images/mba-induction-program/Container-2.webp"
    },
    {
        title: "Deliver Under Pressure",
        description:
            "Case Study Analysis",
        img: "images/mba-induction-program/Container-3.webp"
    },
    {
        title: "Expert Session on Digital Dive ",
        description:
            "Discover. Digitize. Dominate.",
        img: "images/mba-induction-program/Container-4.webp"
    },
    {
        title: "SWOT & Self-Awareness Session",
        description:
            "Growth starts with knowing yourself",
        img: "images/mba-induction-program/Container-13.webp"
    },
    {
        title: "Outdoor Adventure Day",
        description:
            "Defy the Limits",
        img: "images/mba-induction-program/Container-5.webp"
    },
    {
        title: "Biz Eyes",
        description:
            "Real-Time Learning Experience",
        img: "images/mba-induction-program/Container-6.webp"
    },
    {
        title: "Dandiya Night 2025",
        description:
            "A night that celebrated culture",
        img: "images/mba-induction-program/Container-7.webp"
    },
    {
        title: "Master LinkedIn",
        description:
            "Build Your Professional Identity",
        img: "images/mba-induction-program/Container-8.webp"
    },
    {
        title: "Thrive, Learn and Lead",
        description:
            "A powerful day of learning",
        img: "images/mba-induction-program/Container-11.webp"
    },
    {
        title: "Roots to Fruits",
        description:
            "Empowering Minds for Excellence",
        img: "images/mba-induction-program/Container-9.webp"
    },
    {
        title: "Focus on Goal Setting",
        description:
            "Dreams turn into achievements",
        img: "images/mba-induction-program/Container-10.webp"
    },
    {
        title: "Adventure Learning Program",
        description:
            "A day packed with energy",
        img: "images/mba-induction-program/Container-12.webp"
    },
];

const CARD_BGS = [
    "images/batches/Container.webp",
    "images/batches/Container-1.webp",
];

/* Desktop column count — used only for the left→right stagger inside a row */
const COLS = 3;

/* ─────────────────────────────────────────────
   Motion
───────────────────────────────────────────── */
const ease = [0.22, 1, 0.36, 1];

/* Each card reveals on its own as it enters the viewport */
const CARD_VIEWPORT = { once: true, amount: 0.2 };

/* Heading block */
const gridVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

/* Card (parent) — controls the stagger of everything inside it */
const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: (col = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease,
            delay: col * 0.1, // left → right inside a row
            delayChildren: col * 0.1 + 0.2,
            staggerChildren: 0.12, // bg → photo → year → title → description
        },
    }),
};

const cardHover = {
    y: -8,
    transition: { duration: 0.35, ease },
};

/* Card background settles in (zoom-out) */
const bgVariants = {
    hidden: { scale: 1.15 },
    visible: { scale: 1, transition: { duration: 1.2, ease } },
};

/* Photo is revealed top → bottom */
const photoRevealVariants = {
    hidden: { clipPath: "inset(0 0 100% 0)" },
    visible: {
        clipPath: "inset(0 0 0% 0)",
        transition: { duration: 0.8, ease },
    },
};

/* Text lines inside card */
const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

/* Decorative corner squares */
const squareVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.45, ease: "backOut", delay: 0.3 },
    },
};

/* ─────────────────────────────────────────────
   Batch Card
───────────────────────────────────────────── */
function BatchCard({ batch, index }) {
    const { year, title, description, img } = batch;
    const bg = CARD_BGS[index % CARD_BGS.length];

    return (
        <motion.article
            variants={cardVariants}
            custom={index % COLS}
            initial="hidden"
            whileInView="visible"
            viewport={CARD_VIEWPORT}
            whileHover={cardHover}
            className="group relative flex h-full flex-col overflow-hidden shadow-[0_4px_6px_-2px_rgba(66,77,87,0.10),0_12px_16px_-4px_rgba(66,77,87,0.15)]"
        >
            {/* Card background image */}
            <motion.div variants={bgVariants} className="absolute inset-0">
                <Image
                    src={process.env.IMG_PATH + bg}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-center"
                    unoptimized
                    aria-hidden="true"
                />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 flex flex-1 flex-col gap-[20px] md:gap-[30px] p-8 lg:p-[40px]">
                {/* Batch photo */}
                <motion.div
                    variants={photoRevealVariants}
                    className="relative aspect-[159/91] w-full overflow-hidden bg-white"
                >
                    <motion.div
                        className="absolute inset-0"
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.6, ease }}
                    >
                        <Image
                            src={process.env.IMG_PATH + img}
                            alt={`${title} - Batch of ${year}`}
                            fill
                            sizes="(min-width: 1024px) 20vw, (min-width: 640px) 40vw, 90vw"
                            className="object-cover object-center"
                            unoptimized
                        />
                    </motion.div>
                </motion.div>
                <div>
                    <motion.h3
                        variants={textVariants}
                        className="mt-2 text-[20px] font-medium leading-snug text-white md:text-[24px]"
                    >
                        {title}
                    </motion.h3>
                    <motion.p
                        variants={textVariants}
                        className="mt-1 text-[14px] text-white md:text-[16px] font-light"
                    >
                        {description}
                    </motion.p>
                </div>
            </div>
        </motion.article>
    );
}

/* ─────────────────────────────────────────────
   Main Component
───────────────────────────────────────────── */
export default function MBAProgram() {
    return (
        // reducedMotion="user" → animations are skipped for users who prefer reduced motion
        <MotionConfig reducedMotion="user">
            <section className="relative w-full overflow-hidden bg-white">
                <span className="absolute bottom-0 right-0 h-6 w-6 bg-[#F26BB5] sm:h-8 sm:w-8" />
                <div className="custom-container py-12 lg:py-16 xl:py-20">
                    {/* Heading + intro */}
                    <motion.div
                        variants={gridVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="mb-8 lg:mb-10"
                    >
                        <motion.h2
                            variants={fadeUp}
                            className="text-[30px] leading-tight text-black lg:text-[34px] xl:text-[48px]"
                        >
                            MBA Induction  <span className="font-bold italic">Program</span>
                        </motion.h2>
                    </motion.div>

                    {/* Cards grid — plain div, every card animates on its own scroll trigger */}
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {BATCHES.map((batch, i) => (
                            <BatchCard key={i} batch={batch} index={i} />
                        ))}
                    </div>
                </div>
            </section>
        </MotionConfig>
    );
}
