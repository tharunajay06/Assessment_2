import { useState } from "react";

function Checkbox() {
    const [checked, setChecked] = useState(false);

    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={e => setChecked(e.target.checked)}
                />
                Check me
            </label>
            {checked && <div>You checked the box!</div>}
        </div>
    );
}

export default Checkbox;