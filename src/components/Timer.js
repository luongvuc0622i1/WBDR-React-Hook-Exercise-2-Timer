import { useState, useEffect } from "react"

function Timer() {
    let [time, setTime] = useState(0);

    useEffect(() => {
        switch(time) {
            case 0:
                setTime(10);
                break;
            case 1:
                alert("Time's up");
                break;
            default:
                setInterval(function () {
                    const newValue = time - 1;
                    setTime(newValue);
                }, 1000);
        }
    });

    return (
        <div>Count down from {time}</div>
    );
}

export default Timer;