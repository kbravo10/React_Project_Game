import MolePic from "../images/mole.jpg"
import gsap from 'https://cdn.skypack.dev/gsap'
import { useEffect, useRef } from "react";

function Moles(){

    const btnRef = useRef(null)
    useEffect(() => {
        gsap.set(btnRef.current, { yPercent:100})
        gsap.to(btnRef.current, {
            yPercent: 0,
            yoyo: true,
            repeat: -1,
    })}, [])
    return(
        <button className="molebtn" ref={btnRef}>
            <img className="moleImage" alt="oops" src={MolePic}/>
        </button>
    )
}

export default Moles;
