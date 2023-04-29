import React, { useState } from "react";
import Data from "./Data";
const API = () => {
    const [users, setusers] = useState([])
    const getusers = async () => {
        const response = await fetch('https://reqres.in/api/users?page=1');
        const data = await response.json()
        setusers(data.data);

    }
    const Event = () => {
        getusers();
    }
    return (<>
        <div className="grandparent">
            <div className="navbar">
                <h1 className="heading">TECHNOBYTE</h1>
                <button onClick={Event}>Get Users</button>
            </div>
            <div className="parents">
                {
                    users.map((currele) => {
                        return (<div>
                            <Data value={currele} />
                        </div>)
                    })
                }
            </div>
        </div>
    </>)
}
export default API