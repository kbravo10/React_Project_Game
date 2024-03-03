import MolePic from "../images/mole.jpg";
import gsap from "https://cdn.skypack.dev/gsap";
import { useEffect, useRef, useState } from "react";

function Moles({ moleHit }) {
  const btnRef = useRef(null);
  const bobRef = useRef(null);
  const [wacked, setWacked] = useState(false);
  useEffect(() => {
    gsap.set(btnRef.current, {
      yPercent: 100,
      display: "block",
    });

    bobRef.current = gsap.to(btnRef.current, {
      yPercent: 0,
      duration: gsap.utils.random(0.5, 1),
      yoyo: true,
      repeat: -1,
      delay: gsap.utils.random(1, 2),
      repeatDelay: gsap.utils.random(1, 2),
    });
  }, []);

  useEffect(() => {
    if (wacked) {
      bobRef.current.pause();
      gsap.to(btnRef.current, {
        yPercent: 100,
        duration: 0.2,
        onComplete: () => {
          gsap.delayedCall(gsap.utils.random(1, 3), () => {
            setWacked(false);
            bobRef.current.restart();
          });
        },
      });
    }
  }, [wacked]);

  function moleWack() {
    setWacked(true);
    moleHit();
  }

  return (
    <div className="moleHole">
      <button className="molebtn" ref={btnRef} onClick={moleWack}>
        <img className="moleImage" alt="oops" src={MolePic} />
      </button>
    </div>
  );
}

export default Moles;
