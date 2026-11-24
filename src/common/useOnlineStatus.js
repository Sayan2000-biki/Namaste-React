import { useEffect, useState } from "react";

const useOnlineStatus = () => {

    //initialise state
    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(() => {
        window.addEventListener('online', () => {
            console.log("Switching to Online mode.");
            // Update your UI or resume syncing data

            setOnlineStatus(true);
        });

        window.addEventListener('offline', () => {
            console.log("Switching to Offline mode.");
            // Notify the user or save state locally

            setOnlineStatus(false);

        });
    }, [])



    return onlineStatus;
}

export default useOnlineStatus;