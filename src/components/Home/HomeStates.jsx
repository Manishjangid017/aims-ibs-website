import { Fragment } from 'react';

const STATS = [
  { label: 'Overall Recruiters', value: '4300+', dot: 'bg-[#3F2E8F]' },
  { label: 'Recruiters - Top MNCs', value: '50%', dot: 'bg-[#4CC3F0]' },
  { label: 'Faculty Team', value: '225+', dot: 'bg-[#F0668F]' },
  { label: 'Industry Experts', value: '90+', dot: '' },
];

export default function HomeStates() {
  return (
    <section
      className="relative bg-white py-10.5
        before:pointer-events-none before:absolute before:left-0 before:bottom-0 before:size-20 before:bg-[url('/images/home/shap-left.webp')] before:bg-contain before:bg-left before:bg-no-repeat md:before:size-20 lg:before:bottom-0 lg:before:size-25
        after:pointer-events-none after:absolute after:right-0 after:top-0 after:size-20 after:bg-[url('/images/home/shap-right.webp')] after:bg-contain after:bg-right after:bg-no-repeat md:after:size-20 lg:after:size-25"
    >
      <div className="custom-container relative z-10">
        <div className="grid grid-cols-2 gap-y-6 border border-[#C5D5F3] bg-white px-4 py-5 shadow-[4.591px_10.712px_26.014px_0_rgba(28,41,26,0.03),15.302px_44.377px_47.438px_0_rgba(28,41,26,0.03),35.196px_100.996px_64.27px_0_rgba(28,41,26,0.03),61.21px_179.038px_76.512px_0_rgba(28,41,26,0.03)] lg:flex lg:items-center lg:justify-between lg:px-12 lg:py-6">
          {STATS.map((stat, i) => (
            <Fragment key={stat.label}>
              <div className="text-center lg:flex-1">
                <p className="text-xs text-black/70 sm:text-sm lg:text-[20px]">{stat.label}</p>
                <p className="mt-1 text-xl font-medium sm:text-2xl lg:text-[30px]">{stat.value}</p>
              </div>
              {i < STATS.length - 1 && <span className={`hidden size-2.5 shrink-0 lg:block ${stat.dot}`} />}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
