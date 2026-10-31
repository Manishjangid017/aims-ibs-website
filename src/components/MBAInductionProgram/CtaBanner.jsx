"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const wrapper = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const pop = {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease, delay: 0.5 } },
};

const personVariant = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease, delay: 0.25 } },
};

export default function CtaBanner() {
    return (
        <motion.section
            variants={wrapper}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="relative mx-auto custom-container md:py-16 lg:py-20 bg-[#41338A] md:bg-white"
        >
            <div className="relative">
                {/* pink square (top-left) */}
                <motion.span
                    variants={pop}
                    className="hidden md:block absolute left-0 top-0 z-20 h-8 w-8 bg-[#F8769A] sm:h-[56px] sm:w-[50px]"
                />

                {/* orange square (bottom-right) */}
                <motion.span
                    variants={pop}
                    className="hidden md:block absolute -right-4 bottom-0 z-20 h-8 w-8 bg-[#F04B1D] sm:h-[56px] sm:w-[50px]"
                />

                <div className="relative mx-[0] flex flex-col bg-[#41338A] md:mx-[30px] md:flex-row md:items-stretch">
                    {/* faint diamond behind the text (clipped inside its own box) */}
                    <div className="pointer-events-none absolute inset-0 rounded-[4px]">
                        <span className="absolute -bottom-10 -left-10 h-[220px] w-[220px] rotate-45 rounded-[4px] bg-white/[0.06] md:h-[260px] md:w-[260px]" />
                    </div>

                    {/* left content */}
                    <div className="relative z-10 flex flex-1 flex-col justify-center gap-[20px] p-[32px] text-center sm:p-[40px] md:gap-[24px] md:p-[50px] md:pe-[20px] md:text-left lg:p-[70px] lg:pe-[0]">
                        <motion.h2
                            variants={fadeUp}
                            className="text-[30px] leading-tight text-white sm:text-3xl lg:text-[34px] xl:text-[40px]"
                        >
                            Ready to Grow, Lead,
                            <span className="block font-bold italic">and Inspire?</span>
                        </motion.h2>

                        <motion.p
                            variants={fadeUp}
                            className="mx-auto max-w-[420px] text-[15px] leading-relaxed text-white/80 sm:text-[16px] md:mx-0 lg:text-[18px]"
                        >
                            You don&apos;t just start your MBA at AIMS IBS. You awaken your
                            potential.
                        </motion.p>

                        <motion.div variants={fadeUp}>
                            <Link
                                href="/apply-now"
                                className="group inline-flex items-center gap-2 bg-[#f2511f] px-6 py-3 text-xs uppercase tracking-wide text-white transition-colors hover:bg-[#d9430f] sm:text-sm"
                            >
                                Join Today
                                <svg
                                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M5 12h14M13 6l6 6-6 6" />
                                </svg>
                            </Link>
                        </motion.div>
                    </div>

                    {/* right visual: image sits at the bottom, overflows the top on md+ */}
                    <motion.div
                        variants={personVariant}
                        className="flex shrink-0 items-center justify-center md:-mt-10 md:w-[42%] lg:w-[45%] min-h-[200px] md:min-h-[300px] lg:min-h-[400px] pe-[30px] lg:pe-[40px] "
                    >
                        <img
                            src="/images/mba-induction-program/Group_144.webp"
                            alt="Smiling support agent with headset"
                            className="aspect-[88/81]"
                        />
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}