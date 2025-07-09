import { useState, useEffect } from "react";

export function Titleupdate() {
    const [value, setValue] = useState("");

    useEffect(() => {
        document.title = value === "" ? "hello" : value;
    }, [value]);

    return (
        <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Type to set document title"
        />
    );
}
