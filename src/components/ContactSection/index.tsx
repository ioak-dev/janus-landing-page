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
              <h2 className="heading--2">{content.title}</h2>
              <p>{content.description}</p>
            </div>
            {!showForm && (
              <OakButton
                variant="secondary"
                label="Send inquiry"
                faIcon="fas fa-paper-plane"
                action={() => setShowForm(true)}
              />
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
