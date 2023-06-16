import React from "react";  
import "./Heder.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Heder() { 
    return (
        <div className="header">
            <div className="header-link">
                <div className="link-app">
                    <span className="linkButton Donate">Donate</span>
                    <span className="linkButton">Contact Us</span>
                    <span className="linkButton">Diagnostician Directory</span>
                    <span className="linkButton">Blog</span>
                </div>
                <div className="link-social">
                    <FacebookIcon />
                    <YouTubeIcon />
                    <LinkedInIcon />
                </div>
            </div>
        </div>
    );
}
export default Heder;