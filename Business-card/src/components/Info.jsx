import React from "react";
import photo from "../assets/AntonioPhoto.png"
import email from "../assets/Mail.png"
import linkedin from "../assets/linkedin.png"
import '../index.css'

export default function Info() {
    return (
        <div className="Info">
            <img id="photo" src={photo} alt="photo"></img>
            <div id="textInfo">
                <h2>António Maria</h2>
                <h5>Frontend Developer</h5>
                <h6>antoniomaria.website</h6>
            </div>
            <a id="btn-email" href="https://www.github.com/bibolcm">
                <img src={email} alt=""></img>
                <span>Email</span>
            </a>

            <a id="btn-linkedin" href="https://www.github.com/bibolcm">
                <img src={linkedin} alt=""></img>
                <span>Linkedin</span>
            </a>
            
        </div>


    )
}

