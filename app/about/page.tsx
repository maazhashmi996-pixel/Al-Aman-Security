import ClientScroller from '@/Components/Sections/ClientScroller'
import EliteTacticalFooter from '@/Components/Sections/EliteTractical'
import ExpertiseSection from '@/Components/Sections/ExpertiseSection'
import AlAmanHero from '@/Components/Sections/hero'
import React from 'react'

function page() {
    return (
        <div>
            <AlAmanHero />
            <ExpertiseSection />
            <ClientScroller />
            <EliteTacticalFooter />
        </div>
    )
}

export default page
