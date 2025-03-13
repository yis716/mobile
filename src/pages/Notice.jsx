import React from 'react';
import IMAGES from "../assets/images/images.js";

function Notice() {
    return (
        <div>
            <img src={IMAGES.room4} alt="" style={{ width: '100%' }} />
            <h2>Notice</h2>
        </div>

    );
}

export default Notice;