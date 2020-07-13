import React from "react"

import SEO from "../components/seo"
import HeaderSection from "../components/HeaderSection"
import TermsSection from "../components/TermsPage/TermsSection"
import FooterSection from "../components/FooterSection"

const TermsPage = () => (
  <div className="page-terms">
    <SEO title="Terms and conditions" />
    <HeaderSection black />
    <TermsSection />
    <FooterSection />
  </div>
)

export default TermsPage
