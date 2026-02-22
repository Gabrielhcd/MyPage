import React, {useRef, useEffect, useState, useLayoutEffect} from "react";

import './Cursor.css'

const useMousePosition = () => {
    const [position, setPosition] = useState({x: 0, y: 0});
    const body = document.querySelector('body');
    const root = document.querySelector('#root');

        useEffect(() => {
            const handleMouseMove = (e) => {

                const rect = body?.getBoundingClientRect();
                const rectR = root?.getBoundingClientRect();

                setPosition({
                    x: e.clientX - rect?.left - rectR?.left, 
                    y: e.clientY - 35
                })
            };

            document.addEventListener('mousemove', handleMouseMove);
    
            return () => {
                document.removeEventListener('mousemove', handleMouseMove);    
            };
        }, [])
    
        return position;
};

const Cursor = () => {
    const cursorRef = useRef(null)
    const {x, y} = useMousePosition();

    useEffect(() => {
        const updateCursorPosition = () => {
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
            }
            requestAnimationFrame(updateCursorPosition);
        };

        if (cursorRef.current) {
            cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        }

        const animationFrameId = requestAnimationFrame(updateCursorPosition);

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [x, y]);

    return (<div ref={cursorRef} className="custom-cursor"/>)
};

export default Cursor;