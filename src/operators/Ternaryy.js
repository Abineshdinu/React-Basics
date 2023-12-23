import React, { useState } from 'react';


const Ternaryy = () => {
    const [isHighlighted, setIsHighlighted] = useState(false);
    const styles = {
        background: isHighlighted ? 'yellow' : 'transparent',
        padding: '10px',
        cursor: 'pointer',
    };

    return (
        <div
            style={styles}
            onClick={() => setIsHighlighted(!isHighlighted)}
        >
            <p>Click me to toggle highlight</p>
        </div>
  )
}

export default Ternaryy
