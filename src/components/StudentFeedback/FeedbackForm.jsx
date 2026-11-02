import { useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeLeft, fadeUp, stagger, viewport } from '@/_lib/motion';

const COURSES = ['MBA / PGPM', 'BBA', 'BCA', 'B.Com'];

/* ---------- Animations ---------- */
const ease = 'easeOut';
const sectionStagger = stagger(0.15);
const leftStagger = stagger(0.12);

const formIn = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease, when: 'beforeChildren', staggerChildren: 0.08 },
  },
};
const shapeIn = {
  hidden: { opacity: 0, x: -60, y: 30 },
  visible: { opacity: 1, x: 0, y: 0, transition: { duration: 1, ease } },
};
const squarePop = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease, delay: 0.4 } },
};

/* ---------- Form bits ---------- */
const fieldBase =
  'h-11 w-full border border-black/15 bg-white px-4 text-sm text-black outline-none transition placeholder:text-black/40 focus:border-[#43358F] focus:ring-2 focus:ring-[#43358F]/15 lg:h-[56px] lg:text-[15px]';
const labelCls = 'mb-2 block text-xs font-semibold text-black lg:text-[14px]';

function Field({ label, htmlFor, className = '', children }) {
  return (
    <motion.div variants={fadeUp} className={className}>
      <label htmlFor={htmlFor} className={labelCls}>
        {label} <span className="text-red-500">*</span>
      </label>
      {children}
    </motion.div>
  );
}

export default function FeedbackForm() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('sending');

    const data = Object.fromEntries(new FormData(form));
    // TODO: send `data` to your API / email service here
    console.log(data);

    setStatus('sent');
    form.reset();
  };

  return (
    <motion.section
      variants={sectionStagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className="relative overflow-hidden bg-[#43358F] py-14 lg:py-[100px]"
    >
      {/* Bottom-left shape (add form-bg-shape.webp) */}
      <motion.div
        aria-hidden="true"
        variants={shapeIn}
        className="pointer-events-none absolute bottom-[2%] left-[-6%] z-0 h-[200px] w-[250px] bg-[url('/images/about-us/transprent-cube-feedback.svg')] bg-contain bg-left-bottom bg-no-repeat md:h-[300px] md:w-[400px] lg:h-[421px] lg:w-[489px]"
      />
      {/* Bottom-left pink square */}
      <motion.span
        aria-hidden="true"
        variants={squarePop}
        className="absolute bottom-0 left-0 z-10 size-8 origin-bottom-left bg-[#F0668F] lg:size-[45px]"
      />

      <div className="custom-container relative z-10">
        <div className="grid items-start gap-8 lg:grid-cols-[481fr_800fr] lg:gap-0">
          {/* Left: heading */}
          <motion.div variants={leftStagger} className="lg:pr-10">
            <motion.h2
              variants={fadeLeft}
              className="text-3xl leading-tight text-white sm:text-4xl lg:text-[40px] lg:leading-[1.2]"
            >
              <span className="block font-light">Feedback Submission</span>
              <span className="block font-semibold italic">Form</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-[400px] text-sm leading-relaxed text-white/80 lg:mt-6 lg:text-[18px]"
            >
              Your thoughts help us improve and grow together.
            </motion.p>
          </motion.div>

          {/* Right: form card */}
          <motion.form
            variants={formIn}
            onSubmit={handleSubmit}
            className="grid gap-5 bg-white p-6 shadow-[0_30px_60px_rgba(0,0,0,0.25)] sm:grid-cols-2 sm:p-8 lg:gap-x-8 lg:gap-y-5 lg:p-[55px]"
          >
            <Field label="Student Name" htmlFor="studentName">
              <input
                id="studentName"
                name="studentName"
                type="text"
                required
                placeholder="Enter student name"
                className={fieldBase}
              />
            </Field>

            <Field label="Parent Name" htmlFor="parentName">
              <input
                id="parentName"
                name="parentName"
                type="text"
                required
                placeholder="Enter parent name"
                className={fieldBase}
              />
            </Field>

            <Field label="Email ID" htmlFor="email">
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Enter email address"
                className={fieldBase}
              />
            </Field>

            <Field label="Contact No." htmlFor="phone">
              <div className="flex h-11 border border-black/15 bg-white transition focus-within:border-[#43358F] focus-within:ring-2 focus-within:ring-[#43358F]/15 lg:h-[55px]">
                <span className="flex items-center border-r border-black/15 px-4 text-sm font-medium text-black lg:text-[15px]">
                  +91
                </span>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]{10}"
                  maxLength={10}
                  required
                  placeholder="Enter contact number"
                  className="min-w-0 flex-1 bg-transparent px-4 text-sm text-black outline-none placeholder:text-black/40 lg:text-[15px]"
                />
              </div>
            </Field>

            <Field label="Course and batch." htmlFor="course" className="sm:col-span-2">
              <div className="relative">
                <select
                  id="course"
                  name="course"
                  required
                  defaultValue=""
                  className={`${fieldBase} appearance-none pr-12 invalid:text-black/40`}
                >
                  <option value="" disabled>
                    Select course and batch
                  </option>
                  {COURSES.map((c) => (
                    <option key={c} value={c} className="text-black">
                      {c}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-black/70" />
              </div>
            </Field>

            <Field label="Remarks." htmlFor="remarks" className="sm:col-span-2">
              <textarea
                id="remarks"
                name="remarks"
                required
                placeholder="Write your feedback here"
                className="h-28 w-full resize-none border border-black/15 bg-white px-4 py-3 text-sm text-black outline-none transition placeholder:text-black/40 focus:border-[#43358F] focus:ring-2 focus:ring-[#43358F]/15 lg:h-[138px] lg:text-[15px]"
              />
            </Field>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 sm:col-span-2">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="group inline-flex items-center gap-3 bg-brand-orange px-6 py-3.5 text-xs font-medium uppercase tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d63f14] hover:shadow-[0_10px_24px_rgba(240,75,29,0.4)] disabled:opacity-60 lg:text-sm"
              >
                {status === 'sending' ? 'Sending…' : 'Send Feedback'}
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              {status === 'sent' && (
                <p role="status" className="text-sm font-medium text-[#43358F]">
                  Thank you! Your feedback has been submitted.
                </p>
              )}
            </motion.div>
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
}
