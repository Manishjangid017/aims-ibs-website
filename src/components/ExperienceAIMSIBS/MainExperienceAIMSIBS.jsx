'use client'

import CommonBanner from "../Common/CommonBanner"
import ExperienceAimsIbs from "./ExperienceAimsIbs"

export default function MainExperienceAIMSIBS() {
    return (
        <div>
            <CommonBanner
                image="/images/experience-aims-ibs/Hero_Section.webp"
                position="left"
                lineOne="Experience <b>AIMS IBS</b> "
                description="Where Learning Becomes a Life Experience"
                actions={
                    [
                        { label: 'Join Today', href: '/apply-now', variant: 'primary', icon: 'arrow' },
                        { label: 'Download Handbook', href: '/handbook.pdf', variant: 'outline', icon: 'download', download: true },
                    ]}
            />
            <ExperienceAimsIbs />
        </div >
    )
}