import React from 'react';
import IMAGES from "../assets/images/images.js";

function Media() {
    return (
        <div>
            <img src={IMAGES.room2} alt="" style={{ width: '100%' }} />
            <h2>Media</h2>
        </div>

    );
}

export default Media;