import React from 'react'
import Home from '../page'
import ServicesSection from '@/Components/Sections/ServiceSection'
import EliteTacticalFooter from '@/Components/Sections/EliteTractical'
import AlAmanHero from '@/Components/Sections/hero'
import ServicesDetail from '@/Components/Sections/ServiceDetail'

function page() {
    return (
        <div>
            <AlAmanHero />
            <ServicesSection />
            <ServicesDetail />
            <EliteTacticalFooter />
        </div>
    )
}

export default page
