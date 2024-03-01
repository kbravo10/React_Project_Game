import MolePic from "../images/mole.jpg"
import gsap from 'https://cdn.skypack.dev/gsap'
import { useEffect, useRef } from "react";

function Moles({moleHit}){

    const btnRef = useRef(null)
    useEffect(() => {
        gsap.set(btnRef.current, { yPercent:100, display: 'block'})
        gsap.to(btnRef.current, {
            yPercent: 0,
            duration: gsap.utils.random(0.5, 1),
            yoyo: true,
            repeat: -1,
            delay: gsap.utils.random(1, 4),
            repeatDelay: gsap.utils.random(1, 4)
            
    })}, [])
    function heloo(){
        console.log("cat")
        moleHit()
    }

    return(
        <div className="moleHole">
            <button className="molebtn" ref={btnRef} onClick={heloo}>
                <img className="moleImage" alt="oops" src={MolePic}/>
            </button>
        </div>
    )
}

export default Moles;
