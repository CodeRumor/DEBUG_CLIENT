import React, { useEffect, useState } from "react"

const UsingFetch = () => {
    const [coppoLogs, setCoppoLogs] = useState([])

    const fetchData = () => {
        fetch("http://localhost:8070/coppoLogs?count=10", {
            method : 'GET',
            headers : new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        }).then(response => {
            return response.json()
        }).then(data => {
            setCoppoLogs(data)
        });
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="centered">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Message</th>
                        <th>Level</th>
                        <th>Time stamp</th>
                        <th>Expection</th>
                    </tr>
                </thead>
                { coppoLogs.length > 0 && (
                    <tbody>
                        {coppoLogs.map(coppoLogs => (
                            <tr key={coppoLogs.id}>
                                <td>{coppoLogs.id}</td>
                                <td>{coppoLogs.message}</td>
                                <td>{coppoLogs.level}</td>
                                <td>{coppoLogs.timeStamp}</td>
                                <td>{coppoLogs.exception}</td>
                            </tr>
                           
                        ))}
                    </tbody>
                )}
            </table>
        </div>
    )
}

export default UsingFetch
