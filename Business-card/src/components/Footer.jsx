import React from "react";

import twit from "../assets/Twitter-icon.png"
import face from "../assets/Facebook-icon.png"
import insta from "../assets/Instagram-icon.png"
import gitIcon from "../assets/Github-icon.png"


export default function Footer(){
    return(
        <div className="Footer">
           <a className="icon-twitter" href="https://twitter.com">
            <img src={twit} alt="" />
           </a>
           <a className="icon-facebook" href="https://facebook.com">
           <img src={face} alt="" />
           </a>
           <a className="icon-instagram" href="https://instagram.com">
           <img src={insta} alt="" />
           </a>
           <a className="icon-github" href="https://www.github.com/bibolcm">
           <img src={gitIcon} alt="" /> 
           </a>
        </div>
    )
}