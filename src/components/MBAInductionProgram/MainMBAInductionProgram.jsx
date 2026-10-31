'use client'

import CommonBanner from "../Common/CommonBanner"
import CtaBanner from "./CtaBanner"
import MBAProgram from "./MBAProgram"
import WhyRoots from "./WhyRoots"

export default function MainMBAInductionProgram() {
    return (
        <div>
            <CommonBanner
                image="/images/mba-induction-program/Hero_Section.webp"
                position="left"
                lineOne="Roots to Fruits – "
                lineTwo="<b>MBA Induction Program</b>"
                description="At AIMS IBS, our MBA journey starts with “Roots to Fruits”, an intensive, multi-dimensional induction experience. This program is not just about starting a course — it’s about beginning a transformation"
                actions={[
                    { label: 'Join Today', href: '/apply-now', variant: 'primary', icon: 'arrow' },
                    { label: 'Download Handbook', href: '/handbook.pdf', variant: 'outline', icon: 'download', download: true },
                ]}
            />
            <MBAProgram />
            <WhyRoots />
            <CtaBanner />
        </div>
    )
}