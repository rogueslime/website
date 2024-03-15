import starLogo from '../images/kirbyStar.png'
import { useSpring, animated, useChain, useSpringRef } from 'react-spring'
import { useEffect } from 'react';

function TopBanner() {
    const starRef = useSpringRef();
    const textRef = useSpringRef();
    const moveUpRef = useSpringRef();

    const starProps = useSpring({
        ref: starRef,
        from: { transform: 'translateX(-100%)' },
        to: { transform: 'translateX(0%)' },
        config: { duration: 500 },
    })

    const textProps = useSpring({
        ref: starRef,
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 500 },
        delay: 500,
    })

    const moveUpProps = useSpring({
        ref: moveUpRef,
        from: { transform: 'translateY(100%)' },
        to: { transform: 'translateY(0%)' },
        config: { duration: 1000 },
    })

    useChain([starRef, textRef, moveUpRef], [0, 0.5, 1.5]);

    return (
        <animated.div style={moveUpProps}>
            <animated.img src={starLogo} style={starProps} alt="" width="100px" />
            <animated.p style={textProps}>TRAY!!!</animated.p>
            <p>wooofafasfasf</p>
        </animated.div>
    );
}

export default TopBanner;