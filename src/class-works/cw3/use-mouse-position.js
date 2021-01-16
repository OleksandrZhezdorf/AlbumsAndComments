import React, { useState, useEffect } from 'react';

export function useMousePosition() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const trackMousePosition = e => {
        setMousePosition({
            x: e.pageX,
            y: e.pageY
        })
    }

    useEffect(() => {
        window.addEventListener('mousemove', trackMousePosition);
        return () => window.removeEventListener('mousemove', trackMousePosition);

    }, [])

    return mousePosition
}