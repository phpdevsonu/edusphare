import React, { useEffect, useState } from 'react';

function useDeviceType() {
    const [deviceType, setDeviceType] = useState(
        window.innerWidth > 992
    );

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            const newType = width <= 992 ? 'mobile' : 'desktop';
            setDeviceType(newType);
        };

        window.addEventListener('resize', handleResize);

        // Run once on mount
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return deviceType;
}

export default useDeviceType;
