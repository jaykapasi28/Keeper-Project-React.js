import React from "react";

function Footer() {
    const date = new Date();

    return(
        <footer>
            <p>
            &copy; All Rights Reserved {date.getFullYear()}
            </p> 
        </footer>
        )
} 

export default Footer;