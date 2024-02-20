import React from 'react'
import { useState } from 'react';

const User = () => {
    let name, setName;
    [name, setName] = useState("rizwan")
    return (
        <div>
            {name}
            <button onClick={() => name === "rizwan" ? setName("raiyan") : setName("rizwan")}>Change Name</button>
        </div>
    )
}

export default User
