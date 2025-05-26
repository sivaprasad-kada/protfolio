import React from 'react'
import PropTypes from 'prop-types';

export default function Blurbob({ poistion, size }) {
    // defining prop types
    Blurbob.prototype = {
        poistion: PropTypes.shape({
            top: PropTypes.string,
            left: PropTypes.string,
        }),
        size: PropTypes.shape({
            width: PropTypes.string,
            height: PropTypes.string,
        })
    };
    // destructing here
    const { top, left } = poistion;
    const { width, height } = size;
    return (
        <div className='absolute' style={{
            top: top,
            left: left,
            width : width,
            height: height,
            transform: 'translate(-50%,-50%)',
        }}>
            <div className='w-full h-full bg-purple-800 rounded-full opacity-20 blur-3xl animate-blob'>

            </div>


        </div>
    )
}
