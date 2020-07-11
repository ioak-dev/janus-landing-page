import React from "react"
import "./style.scss"
import imageBoardView from "../../assets/preview/boardview.png"
import imageBoardViewMobile from "../../assets/preview/boardview_mobile.png"
import imageTaskView from "../../assets/preview/taskview.png"

export default function SectionTwo() {
  return (
    <div className="sectiontwo">
      <div className="sectiontwo--container">
        <img
          className="preview-mobile desktop-only"
          src={imageTaskView}
          alt="Janus board view"
        />
        <img
          className="preview-desktop desktop-only"
          src={imageBoardView}
          alt="Janus board view"
        />
        <img
          className="preview-mobile mobile-only"
          src={imageBoardViewMobile}
          alt="Janus board view"
        />
      </div>
    </div>
  )
}