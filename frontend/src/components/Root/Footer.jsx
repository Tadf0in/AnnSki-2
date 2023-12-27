import React from "react"

export default function Footer () {
    return <footer>
        <SocialNetwork link="https://www.instagram.com/annski_usmb/" pseudo="annski_usmb" img_src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1200px-Instagram_icon.png"} />
    </footer>
}

function SocialNetwork ({pseudo, img_src, link}) {
    return <div className="d-flex flex-column align-items-center">
        <a href={link} className="footer-link d-flex flex-column align-items-center">
            <img src={img_src} alt="logo instagram" width="40px" height="40px" />
            @{pseudo}
        </a>
    </div>
}