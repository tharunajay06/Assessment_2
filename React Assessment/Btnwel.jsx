import { useState } from 'react';

function Btnwel() {
    const [isHello, setIsHello] = useState(true);

    const handleClick = () => {
        setIsHello(prev => !prev);
    };

    return (
        <div className='Container1'>
            <h2>Question 2</h2>
            <button onClick={handleClick} style={{
            backgroundColor: isHello ? '#4CAF50' : '#f44336',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',   
        }}>
            {isHello ? 'Hello' : 'Welcome Back'}
        </button>
        </div>
    );
}

export default Btnwel;