import {useEffect, useState} from 'react';


const Timer  = ({start, complete, initialTime}) => {

    const [started, setStarted] = useState(start)
    const [seconds, setSeconds] = useState(initialTime)

    useEffect( () => {
        // if (s) {
        //     setSeconds(s)
        // }
        let startInterval = setInterval(() => {

            if (seconds > 0) {
                setSeconds(seconds-1)
            }
            else {
                setStarted(false)
                complete(true)
            }

        },1000)

        return ()=> {
            if (started === true) {
                clearInterval(startInterval)
            }
            
        }

    },[started, seconds])


    return (
        <div className="timer">
            00:{formatTimer(seconds)}
        </div>
    )

}

const formatTimer = (value) => {

    let newValue = Number(value)

    if (String(newValue).length < 2){
        newValue = `0${newValue}`
    }
    
    return String(newValue)

}

export default Timer;