import React from "react"
import "./style.scss"
import ioakWhite from "../../assets/ioak_white.svg"

interface Props {
  data: {
    title: string
    description: string
  }
}

export default function CompanyProfile(props: Props) {
  return (
    <div className="company-profile">
      <div>
        <img className="logo" src={ioakWhite} alt="IOAK logo" />
        <h4 className="heading--4">{props.data.title}</h4>
      </div>
      <p>{props.data.description}</p>
    </div>
  )
}
