import React, { useState } from "react"
import "./style.scss"
import SectionTile from "./SectionTile"
import content from "../../assets/content/ContactSection.json"
import OakButton from "../oakfly/OakButton"
import ContactForm from "./ContactForm"

export default function ContactSection() {
  const [showForm, setShowForm] = useState(false)
  const contact = () => {
    console.log("*** redirect to demo")
  }
  return (
    <div className="contact-section">
      <div className="column-layout">
        <div className="contact-section--container">
          <div className="contact-section--container--wrapper">
            <div className="contact-section--container--wrapper-content">
              <h3 className="heading--3">{content.title}</h3>
              <p>{content.description}</p>
            </div>
            {!showForm && (
              <OakButton
                theme="primary"
                variant="drama"
                faIcon="fas fa-paper-plane"
                action={() => setShowForm(true)}
              >
                Send inquiry
              </OakButton>
            )}
          </div>
          {showForm && (
            <div className="contact-section--container--form">
              <ContactForm closeForm={() => setShowForm(false)} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
