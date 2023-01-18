import { useLocation} from 'react-router-dom'
import { useState, useEffect } from 'react';

const Test = () => {

const location = useLocation();

var [groupName, setgroupName] = useState("")

useEffect(() => {
  setgroupName(location.state.group)
}, [])

    return (
      <div>
        <h1>{groupName}</h1>
        <h1>This page is only for testing branching and merging so it shall be sentenced for removal after implemented!</h1>
      </div>
    )
}

export default Test;