import { useEffect, useState } from "react";
import { useIdleTimer } from "react-idle-timer";

const IdleUser = () => {
  const [remaining, setRemaining] = useState<number>(0)

  const onIdle = () => {
    // eslint-disable-next-line no-restricted-globals
    location.replace("/");
  }

  const { getRemainingTime } = useIdleTimer({
    onIdle,
    events: [
      'mousemove',
      'keydown',
      'wheel',
      'DOMMouseScroll',
      'mousewheel',
      'mousedown',
      'touchstart',
      'touchmove',
      'MSPointerDown',
      'MSPointerMove',
      'visibilitychange',
      'focus'
    ],
    //timeout: 300_000, //5min idletime
    timeout: 600_000, //10min idletime
    throttle: 500
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining(Math.ceil(getRemainingTime() / 1000))
    }, 500)

    return () => {
      clearInterval(interval)
    }
  })
}

export default IdleUser;