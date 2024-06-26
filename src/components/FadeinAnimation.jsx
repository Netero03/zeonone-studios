import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const FadeinAnimation = ({ children }) => {
    const [ref, inView] = useInView({ triggerOnce: false });
    const animation = useSpring({
        opacity: inView ? 1 : 0.1,
        transform: inView ? 'translateY(0)' : 'translateY(0px)',
        config: { duration: 1500 },
    });

    return (
        <animated.div ref={ref} style={animation}>
            {children}
        </animated.div>
    );
};

export default FadeinAnimation