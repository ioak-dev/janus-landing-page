import React from "react"
import "./style.scss"
import content from "../../assets/content/FaqSection.json"
import { Link } from "gatsby"

export default function CopyrightSection() {
  return (
    <div className="copyright-section">
      <div className="copyright-section--copyright">
        Copyright © 2020 ioak.org
      </div>
      <i className="fa fa-circle desktop-only" aria-hidden="true" />
      <Link to="/terms" title="Terms and conditions">
        Terms and conditions
      </Link>
      <i className="fa fa-circle desktop-only" aria-hidden="true" />
      <Link to="/privacy" title="Privacy policy">
        Privacy policy
      </Link>
    </div>
  )
}
