'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Minus, Plus } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeLeft, fadeUp, stagger } from '@/_lib/motion';

/* ---------- JSON data ---------- */
// Topics 3 and 4 have placeholder questions: add your real ones, the counts update automatically.
const FAQS = [
  {
    id: 'about',
    title: 'About AIMS IBS',
    items: [
      {
        q: 'When was AIMS IBS Established?',
        a: 'AIMS IBS Bangalore is the passionate child of IBMR Group of Institutions, which was established in 1999 and now admits students for the 21st Batch. AIMS IBS offers unique Industry Integrated Management Education, emphasizing Practical learning.',
      },
      {
        q: 'What about ranking and reputation?',
        intro: 'Ranked among the Top 20 B Schools in South India by Times of India B School Survey',
        award: {
          tag: 'Award',
          text: 'Awarded as Asia’s Best Emerging Business School by World Education Cong.. & CMO Asia',
        },
        stats: [
          { value: '26th', label: 'Ranked by Business Baron Survey' },
          { value: '1st', label: 'India’s school to offer Industry Integrated MBA' },
          { value: '17th', label: 'Best for return on investment in India' },
          { value: '23 / 13', label: 'Alumni working in 23 cities & 13 countries' },
          { value: '4th', label: 'Best for highest salary in South India' },
          { value: '18th', label: 'Best for highest average salaries' },
          { value: '90+', label: 'Working industry experts on board' },
          { value: '8000+', label: 'Alumni' },
          { value: '4th', label: 'Best for highest overall salary' },
          { value: '7', label: 'Partner institutions in 3 countries' },
          { value: '225', label: 'Strong faculty & trainers' },
        ],
      },
      { q: 'How Many Campuses are in India?', a: '4 Campuses (Bangalore, Hubli, Ahmedabad, Gurgaon)' },
      {
        q: 'What about program approvals and university associations?',
        a: 'MBA program offered is approved by Bangalore University, AICTE, UGC, Ministry of HRD, and Govt. of India. AIMS IBS is also associated with the University of Mysore & Bharathiar University, Coimbatore. These universities are reputed state/public universities.',
      },
      {
        q: 'Tell me about Campus and Infrastructure',
        a: 'It’s a beautiful Campus located in one of the most happening and prime areas of Bangalore amidst Electronic city and Bommasandra Industrial estate. Its proximity to several thousand renowned MNCs including Infosys, Wipro, Biocon, HCL and many more makes it the most sought after B School in Bangalore. Connected well with BMTC Bus Service, Metro station coming up and Elevated Highway, it is well equipped with State-of-the-Infrastructure facility. High tech class rooms, a lively Cafeteria, garden n lounge and playground nearby makes the vicinity more vibrant and joyous thus enhances learning creating tranquil environment and life changing experience',
      },
    ],
  },
  {
    id: 'programs',
    title: 'Programs & Faculty',
    items: [
      {
        q: 'What about the International Association?',
        cards: [
          { tag: 'UK', name: 'University of Stirling' },
          { tag: 'France', name: 'IAE Business Graduate, Grenoble' },
          { tag: 'France', name: 'IAE Bordeaux University' },
          { tag: 'UK', name: 'Staffordshire University' },
          { tag: 'Singapore', name: 'Singapore Human Resource Institute' },
          { tag: 'Singapore', name: 'Singapore Institute of Management' },
          { tag: 'Singapore', name: 'James Cook University' },
        ],
      },
      {
        q: 'Tell me more about the faculty?',
        paragraphs: [
          'AIMS IBS believes in bringing Industry legends to train students, and more than 80% of our faculty members are from Industry with specialised experiences. AIMS IBS is the only B School to have an Industry/Corporate Council to mentor our students on to one basis. We also invite reputed international professors who visit and deliver a course or part of a course, and also senior resource persons from IIMs/ IITs and reputed Industry bodies.',
          'AIMS IBS takes initiation for Faculty Exchange Programs, where in some of our faculty who have rich experience in diverse areas from industry and academia visit foreign universities to teach courses in Entrepreneurship, Project Management, Global Service Industry etc. These faculty bring backa wealth of knowledge and experience and share the same with students. AIMS IBS also invites leading professors from reputed foreign B Schools to deliver the modular courses.',
        ],
        link: { label: 'For more details, Click Here', href: '/faculty' },
      },
      {
        q: 'What is the Industry Integrated Program?',
        paragraphs: [
          'The MBA, along with value-added Industry Integrated training, is planned in a unique way, which includes the prescribed curriculum of the University and additional value-added modules, which are designed by AIMS IBS and based on industry needs.',
          'This makes the subject of study comprehensive, current, and industry-relevant. Industry Integrated program is the right blend of Profile Mapping, Skill Gap Analysis, Expectations Management, Industry Capstone Projects, Internship, SWOT analysis, and specialized mentoring and training by industry mentors. The program offers a Live project for each subject taught.',
        ],
        link: { label: 'For more details, Click Here', href: '/programs' },
      },
      {
        q: 'What about the International Exchange program?',
        a: 'As part of global exposure, AIMS IBS offers unique opportunities for students where students can opt to be a part of certification and exchange programs with our partner universities in the US, UK & Singapore. These certifications offered during an exchange program carry the required relevance for employability and career. Till date, many students have taken the best advantage of these programs to enhance their profile and career.',
      },
      {
        q: 'What is the advantage of doing additional certification courses through PGPM?',
        a: 'PGPM degree endorsed by corporate panel helps students to get an extra mileage interns of Industry acceptance for employability. It also opens gateway to multiple opportunities with specific skillsets. Companies will be happy to recruit our students as they find greater value in hiring Trained and skilled Manpower not just MBAs. Most important advantage is that, since U r trained with additional certification, your profile will be unique helping you to grow faster.',
      },
    ],
  },
  {
    id: 'admissions',
    title: 'Admissions & Fees',
    items: [
      {
        q: 'What are the intakes in a year, and when is the batch commencement?',
        a: 'Intake: Total intake is 120 (2 batches of 60 each). Batch will commence in July/August..',
      },
      {
        q: 'How to apply for the program?',
        a: 'We accept applications online, and you are advised to apply online.',
        link: { label: 'Click here to Apply Online', href: '/apply-now' },
      },
      {
        q: 'Do I need to pay any fees for applying?',
        a: 'For the application and admission process, there are no charges.',
      },
      {
        q: 'What is the selection process?',
        a: 'Selection is based on Application, Written Test Score, and Performance in GD / Interview.',
        link: { label: 'Click here for the detailed admission process.', href: '/admissions' },
      },
      {
        q: 'What are the course fees & what it include?',
        a: 'For details on the fee structure, please contact +91-7847843111 / 7795852804 or click the link below to drop your details so that our team will get in touch with you',
        link: { label: 'Click here to Apply Online', href: '/apply-now' },
      },
      {
        q: 'Tell me about the instalment options?',
        a: 'Students can contact the respective admission officer for details on payment options',
      },
      {
        q: 'What about hostel facility and hostel fees?',
        a: 'The institute provides Hostel (Accommodation ONLY) facility for the eligible Scholarship students. The college is located in a prime area with plenty of options for student accommodation as Paying Guest / Hostels etc. The institute is also associated with a few very good hostels for additional student support.',
      },
      {
        q: 'What about Fee refund?',
        a: 'As per the policy of the Institute, Admission fees once paid is Non-adjustable and Non-refundable. Students seeking a refund of fees are advised to meet the Director of Admission in person with their Application and valid documents. However decision on refund depends solely on the Management decision. Institute pledges to work towards student development plans and bonds itself with creating life-changing opportunities for them.',
      },
    ],
  },
  {
    id: 'placements',
    title: 'Placements & Internships',
    items: [
      {
        q: 'What about Placements & Internships ?',
        paragraphs: [
          'AIMS IBS group has a history of strong relation with leading business organizations, and we continue to reinforce these affiliations and expand our corporate partnerships.AIMS IBS students are placed in the best of Indian and Global corporates and are scripting their own success stories.AIMS IBS students have done the institution proud by reaching new heights of success in their careers in companies across the country.',
          'More than 90 plus leading companies participate in the placement process, both On Campus and Off campus. Students from AIMS IBS have been chosen by Companies for various roles starting from Management Trainee to Middle Management positions. The most of these companies offered to AIMS IBS students were from various sectors like Finance, Consulting, IT, Sales & Marketing, Education, KPO’s, Healthcare, Infrastructure, Real Estate, Media, Travel, and Energy.',
          'AIMS IBS is India’s 1st and Only B school to offer Industry Integrated MBA and has a record of the average salary of 5.5 lakh P.A and highest of 10.5 Lakh P.A. More than 7000 alumni are currently working in 13 countries and 22 cities across 3900 plus top companies. Since inception AIMS IBS has unmatched placement records, satisfied and successful students.',
        ],
        links: [
          { label: 'Click Here for more details on placements', href: '/placements' },
          { label: 'Click Here for more details on internships', href: '/internships' },
        ],
      },
      {
        q: 'What about International internships and industry visits?',
        a: 'Foreign internships are exclusive opportunities for AIMS IBS students, wherein selected students will have a chance to do their internship in MNC’s. The opportunity offers a chance to understand and work with MNC’s in respective countries. International industrial/exposure visits are exclusive trips arranged by AIMS IBS which takes care of offering exposure to international destinations, an industrial perspective, and educational systems.',
      },
    ],
  },
];

const pad = (n) => String(n).padStart(2, '0');
const countLabel = (n) => `${n} ${n === 1 ? 'Question' : 'Questions'}`;

/* ---------- Animations ---------- */
const topicStagger = stagger(0.1);
const listStagger = stagger(0.08);
const topicViewport = { once: true, amount: 0.12 };

const lineDraw = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.8, ease: 'easeInOut' } },
};

/* ---------- "Still have questions?" card ---------- */
function AskCard() {
  return (
    <div className="bg-gradient-to-br from-[#43378C] to-[#2F2570] p-6 text-white lg:p-[31px]">
      <h3 className="text-xl font-semibold lg:text-2xl">Still have questions?</h3>
      <p className="mt-3 text-sm leading-relaxed text-white/80">
        Drop your details and our team will get in touch with you.
      </p>
      <p className="mt-4 text-sm font-semibold">
        <a href="tel:+917847843111" className="transition-colors hover:text-brand-orange">
          +91-7847843111
        </a>{' '}
        /{' '}
        <a href="tel:+917795852804" className="transition-colors hover:text-brand-orange">
          7795852804
        </a>
      </p>
      <Link
        href="/apply-now"
        className="group mt-5 inline-flex items-center gap-2 bg-brand-orange px-5 py-3 text-xs font-medium uppercase tracking-wide text-white transition-colors hover:bg-[#d63f14]"
      >
        Apply Now
        <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </div>
  );
}

/* ---------- One accordion item ---------- */
/* ---------- One accordion item ---------- */
function FaqItem({ item, isOpen, onToggle, panelId }) {
  const textCls = 'text-sm leading-relaxed text-[#4a4a4a] lg:text-[17px] lg:leading-[1.7]';

  // Content pieces rise in one after another when the item opens
  const reveal = (i) => ({
    className: `transition-all duration-500 ease-out ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`,
    style: { transitionDelay: isOpen ? `${150 + i * 40}ms` : '0ms' },
  });

  const paraCount = item.paragraphs?.length ?? 0;

  return (
    <div
      className={`border bg-white transition-colors duration-300 ${
        isOpen
          ? 'border-[#43378C] shadow-[0_12px_32px_0_rgba(67,55,140,0.16)]'
          : 'border-[#43378C]/40 hover:border-[#43378C]'
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="group flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-6 lg:px-[34px] lg:py-[28px]"
      >
        <span
          className={`text-base font-medium transition-colors duration-300 sm:text-lg lg:text-[22px] lg:leading-[1.3] ${
            isOpen ? 'text-[#43378C]' : 'text-black'
          }`}
        >
          {item.q}
        </span>
        <span
          className={`grid size-8 shrink-0 place-items-center transition-colors duration-300 lg:size-10 ${
            isOpen ? 'bg-[#43378C] text-white' : 'bg-[#EDEBFA] text-black group-hover:bg-[#DCD7F7]'
          }`}
        >
          {isOpen ? <Minus className="size-4 lg:size-5" /> : <Plus className="size-4 lg:size-5" />}
        </span>
      </button>

      <div
        id={panelId}
        role="region"
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <div className="mx-4 border-t border-black/10 sm:mx-6 lg:mx-[34px]" />

          <div className="px-4 pb-5 pt-4 sm:px-6 lg:px-[34px] lg:pb-[34px] lg:pt-6">
            {/* Plain text */}
            {item.intro && (
              <p {...reveal(0)} className={`${textCls} ${reveal(0).className}`}>
                {item.intro}
              </p>
            )}
            {item.a && (
              <p {...reveal(0)} className={`${textCls} ${reveal(0).className}`}>
                {item.a}
              </p>
            )}

            {/* NEW: several paragraphs */}
            {item.paragraphs?.map((text, i) => (
              <p
                key={i}
                style={reveal(i).style}
                className={`${textCls} ${i > 0 ? 'mt-3 lg:mt-4' : ''} ${reveal(i).className}`}
              >
                {text}
              </p>
            ))}

            {/* NEW: "For more details, Click Here" link */}
            {item.link && (
              <div style={reveal(paraCount).style} className={`mt-4 ${reveal(paraCount).className}`}>
                <Link
                  href={item.link.href}
                  className="group inline-flex items-center gap-1 text-xs font-semibold text-brand-orange underline underline-offset-4 transition-colors hover:text-[#d63f14] lg:text-sm"
                >
                  {item.link.label}
                  <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            )}

            {/* Award banner */}
            {item.award && (
              <div
                style={reveal(1).style}
                className={`mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 bg-[#FFF1E6] px-4 py-3 lg:mt-5 lg:px-6 lg:py-[18px] ${reveal(1).className}`}
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-brand-orange lg:text-xs">
                  {item.award.tag}
                </span>
                <span className="text-sm font-medium text-black lg:text-base">{item.award.text}</span>
              </div>
            )}

            {/* Stats grid */}
            {item.stats && (
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:mt-5 lg:grid-cols-4 lg:gap-[15px]">
                {item.stats.map((s, i) => (
                  <div key={`${s.value}-${s.label}`} style={reveal(i + 2).style} className={reveal(i + 2).className}>
                    <div className="h-full bg-[#F3F3F8] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#EDEBFA] hover:shadow-[0_8px_20px_rgba(67,55,140,0.12)] lg:p-6">
                      <p className="text-2xl font-semibold text-[#43378C] lg:text-[34px] lg:leading-none">{s.value}</p>
                      <p className="mt-2 text-xs leading-snug text-[#4a4a4a] lg:text-sm">{s.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Cards (international association) */}
            {item.cards && (
              <div className="grid gap-3 sm:grid-cols-2 lg:gap-[14px]">
                {item.cards.map((card) => (
                  <div key={card.name} className="bg-[#F3F3F8] px-4 py-3 lg:px-5 lg:py-4">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-brand-orange lg:text-xs">
                      {card.tag}
                    </p>
                    <p className="mt-1 text-sm font-medium text-black lg:text-base">{card.name}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FaqsSection() {
  const [activeId, setActiveId] = useState(FAQS[0].id);
  // First item of every topic is open by default
  const [open, setOpen] = useState(() => Object.fromEntries(FAQS.map((t) => [t.id, 0])));

  // Refs for mobile nav bar and individual chips
  const navRef = useRef(null);
  const chipRefs = useRef({});

  const toggle = (topicId, index) => setOpen((prev) => ({ ...prev, [topicId]: prev[topicId] === index ? -1 : index }));

  // Click a topic link: smooth scroll to that topic
  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveId(id);
  };

  // Scroll ONLY the nav strip so the active chip is centered — never touches the page scroll
  useEffect(() => {
    const nav = navRef.current;
    const chip = chipRefs.current[activeId];
    if (!nav || !chip) return;

    // chip's left edge relative to the nav's scrollable area
    const chipLeft = chip.offsetLeft;
    const chipWidth = chip.offsetWidth;
    const navWidth = nav.offsetWidth;

    // target scroll position: chip center aligned with nav center
    const target = chipLeft - navWidth / 2 + chipWidth / 2;

    nav.scrollTo({ left: target, behavior: 'smooth' });
  }, [activeId]);

  // Active link follows the scroll position
  useEffect(() => {
    const onScroll = () => {
      const line = window.innerHeight * 0.3;
      let current = FAQS[0].id;
      for (const topic of FAQS) {
        const el = document.getElementById(topic.id);
        if (el && el.getBoundingClientRect().top <= line) current = topic.id;
      }
      setActiveId(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section className="relative bg-white py-12 lg:pb-[100px] lg:pt-[114px]">
      {/* Top-right shape image (add faq-shap.webp) */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="pointer-events-none absolute right-0 top-0 h-[70px] w-12 bg-[url('/images/about-us/bg-shap-5.webp')] bg-contain bg-right-top bg-no-repeat md:h-[100px] md:w-[60px] lg:h-[138px] lg:w-[82px]"
      />

      <div className="custom-container">
        {/* Mobile / tablet: sticky topic chips */}
        <nav
          ref={navRef}
          aria-label="FAQ topics"
          className="sticky top-[58px] z-30 mb-8 flex gap-2 overflow-x-auto border-b bg-white py-3 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden lg:hidden"
        >
          {FAQS.map((topic) => (
            <a
              key={topic.id}
              ref={(el) => {
                chipRefs.current[topic.id] = el;
              }}
              href={`#${topic.id}`}
              onClick={(e) => {
                e.preventDefault();
                goTo(topic.id);
              }}
              className={`shrink-0 rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
                activeId === topic.id ? 'border-[#43378C] bg-[#43378C] text-white' : 'border-[#43378C]/30 text-black'
              }`}
            >
              {topic.title}
            </a>
          ))}
        </nav>

        <div className="grid gap-12 lg:grid-cols-[315px_1fr] lg:gap-20">
          {/* Left: sticky topic links (desktop) */}
          <motion.aside
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="hidden lg:sticky lg:top-[60px] lg:block lg:self-start"
          >
            <nav aria-label="FAQ topics">
              <p className="mb-[42px] text-[13px] font-semibold uppercase tracking-[0.2em] text-brand-orange">
                Browse by topic
              </p>
              <ul className="border-t border-t-2 border-[#43378C]">
                {FAQS.map((topic, i) => {
                  const active = activeId === topic.id;
                  return (
                    <li key={topic.id} className="border-b border-black/10">
                      <a
                        href={`#${topic.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          goTo(topic.id);
                        }}
                        className="group relative flex items-center gap-4 py-[23px] text-lg"
                      >
                        {/* Active marker */}
                        {/* <span
                          aria-hidden="true"
                          className={`absolute inset-y-0 left-0 w-0.5 origin-top bg-brand-orange transition-transform duration-300 ${
                            active ? 'scale-y-100' : 'scale-y-0'
                          }`}
                        /> */}
                        <span className="text-[13px] font-medium text-brand-orange">{pad(i + 1)}</span>
                        <span
                          className={`flex-1 font-medium transition-colors duration-300 text-[17px] ${
                            active ? 'text-[#43378C]' : 'text-black group-hover:text-[#43378C]'
                          }`}
                        >
                          {topic.title}
                        </span>
                        <span
                          className={`text-sm transition-colors duration-300 ${
                            active ? 'text-[#43378C]' : 'text-black/50'
                          }`}
                        >
                          {topic.items.length}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="mt-7">
              <AskCard />
            </div>
          </motion.aside>

          {/* Right: topics + accordions */}
          <div className="flex min-w-0 flex-col gap-14 lg:gap-[74px]">
            {FAQS.map((topic, ti) => (
              <motion.section
                key={topic.id}
                id={topic.id}
                variants={topicStagger}
                initial="hidden"
                whileInView="visible"
                viewport={topicViewport}
                className="scroll-mt-32 lg:scroll-mt-28"
              >
                <motion.span variants={lineDraw} className="block h-px origin-left bg-[#43378C]" />

                <motion.p
                  variants={fadeUp}
                  className="mt-[28px] text-[13px] font-semibold tracking-[0.2em] text-brand-orange"
                >
                  {pad(ti + 1)}
                </motion.p>

                <div className="mt-2 flex items-end justify-between gap-4">
                  <motion.h2
                    variants={fadeUp}
                    className="text-[2xl] font-semibold text-[#43378C] sm:text-3xl lg:text-[34px]"
                  >
                    {topic.title}
                  </motion.h2>
                  <motion.span variants={fadeUp} className="shrink-0 pb-1 text-xs text-black/50 lg:text-[14px]">
                    {countLabel(topic.items.length)}
                  </motion.span>
                </div>

                <motion.div variants={listStagger} className="mt-[28px] flex flex-col gap-3 lg:mt-6 lg:gap-[14px]">
                  {topic.items.map((item, i) => (
                    <motion.div key={item.q} variants={fadeUp}>
                      <FaqItem
                        item={item}
                        isOpen={open[topic.id] === i}
                        onToggle={() => toggle(topic.id, i)}
                        panelId={`${topic.id}-panel-${i}`}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.section>
            ))}

            {/* Mobile / tablet: contact card goes after the FAQs */}
            <div className="lg:hidden">
              <AskCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
