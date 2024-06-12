import { Scrollbar } from 'smooth-scrollbar-react';
import { Children, useEffect } from 'react';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';

const overscrollOptions = {
    enable: true,
    effect: 'bounce',
    damping: 0.15,
    maxOverscroll: 150,
    glowColor: '#fff',
};

const options = {
    damping: 0.01,
    plugins: {
        overscroll: { ...overscrollOptions },
    },

}

const SmoothScrollbar = ({children}) => {

    return (
        <Scrollbar
            damping={20}
            thumbMinSize={20}
            renderByPixels={true}
            alwaysShowTracks={false}
            continuousScrolling={true}
            
            >
            {children}
        </Scrollbar>
    );
}

export default SmoothScrollbar;