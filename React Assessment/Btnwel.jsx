import { useState } from "react";

const Button = () => {
    const [count, setCount] = useState(0);

    const buttonStyle = {
        backgroundColor: "#ffc107",
        color: "#212529",
        border: "none",
        padding: "10px 24px",
        borderRadius: "4px",
        fontSize: "16px",
        cursor: "pointer",
        marginTop: "20px"
    };


    return (
        <div>
            <div style={{ marginTop: "16px", fontSize: "25px" }}>
                Count: {count}
            </div>
            <button
                style={buttonStyle}
                onClick={() => setCount(count + 1)}
            >
                Increase Count
            </button>
        
            
        </div>
    );
};

export default Button;
