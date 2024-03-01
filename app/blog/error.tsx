'use client'
import React from 'react';

function Error({error}: {error: Error}) {
    return (
        <div className='error'>
            Error is occurred: {error.message}
        </div>
    );
}

export default Error;