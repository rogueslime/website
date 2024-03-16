import starLogo from '../images/kirbyStar.png'
import { useSpring, animated, useChain, useSpringRef } from 'react-spring'
import './styles/TopBanner.css'

function TopBanner() {
    const starRef = useSpringRef();
    const textRef = useSpringRef();
    const moveUpRef = useSpringRef();

    // use top, left, right, bottom, etc. as translate refers particularly to the element's own dimensions
    const starProps = useSpring({
        ref: starRef,
        from: { top: '50%', left: '-50%' },
        to: { top: '50%', left: '50%' },
        config: { duration: 500 },
    })

    const textProps = useSpring({
        ref: textRef,
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 500 },
        delay: 500,
    })

    const moveUpProps = useSpring({
        ref: moveUpRef,
        from: { transform: 'translateY(100%)' },
        to: { transform: 'translateY(50%)' },
        config: { duration: 1000 },
        delay:1000,
    })

    useChain([starRef, textRef, moveUpRef], [0, 0.5, 1.5]);

    // Adding position: relative to the div and position: absolute to inside elements causes the absolute elements
    // to reference to the most nearby relative element in terms of positioning
    return (
        <animated.div class='logoProps' style={{...moveUpProps, height:"100vh", width:"100vw", position: "relative"}}>
            <animated.img src={starLogo} style={{...starProps, position:"absolute"}} alt="" width="100px" height="100px'" />
            <animated.p style={{...textProps, position:"absolute"}}>TRAY!!!</animated.p>
        </animated.div>
    );
}

export default TopBanner;