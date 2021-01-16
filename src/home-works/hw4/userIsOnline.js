import React, { useState, useEffect } from 'react';

function getOnlineStatus() {
    return typeof navigator !== "undefined" &&
        typeof navigator.onLine === "boolean"
        ? navigator.onLine
        : true;
}

function useOnlineStatus() {
    const [onlineStatus, setOnlineStatus] = useState(getOnlineStatus());

    const goOnline = () => setOnlineStatus(true);

    const goOffline = () => setOnlineStatus(false);

    useEffect(() => {
        window.addEventListener("online", goOnline);
        window.addEventListener("offline", goOffline);

        return () => {
            window.removeEventListener("online", goOnline);
            window.removeEventListener("offline", goOffline);
        };
    }, []);

    return onlineStatus;
}

function OnlineStatus() {
    let online = useOnlineStatus();
    console.log(`user is online: ${online}`)
    return (
        <div>
            <h1>You are {online ? "Online" : "Offline"}</h1>
        </div>
    );
}

export { OnlineStatus }