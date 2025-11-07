import { useIdleTimer } from "react-idle-timer";
import { toast } from "react-toastify";

export default function IdleTimerComponent() {
    const onIdle = () => toast.warning("You have been inactive for more than 10 seconds!");

    useIdleTimer({
        timeout: 10000,
        onIdle,
        throttle: 500,
    });

    return null;
}
