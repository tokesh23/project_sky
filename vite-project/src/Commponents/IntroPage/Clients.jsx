import React from 'react'
import "./Clients.css"
import img1 from "../../assets/image/Clinets/download (1).jpg"
import img2 from "../../assets/image/Clinets/download (2).jpg"
import img3 from "../../assets/image/Clinets/download (3).jpg"
import img4 from "../../assets/image/Clinets/download (4).jpg"
import img5 from "../../assets/image/Clinets/download (5).jpg"

const Clients = () => {
  return (
     <div className="slider-container border mb-4">
      <div className="slider-track">
        <img src={img1} alt="1" className='' />
           <img src={img2} alt="2" />
 <img src={img3} alt="3" />
 <img src={img4} alt="3" />
 <img src={img5} alt="3" />
      </div>
    </div>
  )
}

export default Clients
