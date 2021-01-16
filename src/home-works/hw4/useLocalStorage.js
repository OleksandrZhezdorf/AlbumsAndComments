import React, { useState, useEffect } from 'react';

function useLocalStorage(key, defaultValue) {
    const [state, setState] = useState(() => {
        let value;
        try {
            value = JSON.parse(
                window.localStorage.getItem(key) || String(defaultValue)
            );
        } catch (e) {
            value = defaultValue;
        }
        return value;
    });
    useEffect(() => {
        window.localStorage.setItem(key, state);
    }, [state]);
    return [state, setState]
}


function LocalStorage () {
    const [name, setName] = useLocalStorage("name", "Bob");
    console.log(name)
    return (
        <div>
            <input placeholder="Input name" type='text' value={name} onChange={(e) => setName(e.target.value)}></input>
            Name: {name}
        </div>
    );
}

export { LocalStorage }