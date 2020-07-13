import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import HeroSection from "../components/HeroSection"
import KeySection from "../components/KeySection"
import DemoSection from "../components/DemoSection"
import OnboardSection from "../components/OnboardSection"
import ContactSection from "../components/ContactSection"
import FaqSection from "../components/FaqSection"
import FooterSection from "../components/FooterSection"

const IndexPage = () => (
  <div className="page-home">
    <SEO title="Features and getting started" />
    {/* <Link to="/page-2/">Go to page 2</Link> <br /> */}
    <HeroSection />
    <KeySection />
    <DemoSection />
    <OnboardSection />
    <ContactSection />
    <FaqSection />
    <FooterSection />
  </div>
)

export default IndexPage
