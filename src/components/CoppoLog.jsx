import React, { useEffect, useState } from "react"

const UsingFetch = () => {
    const [coppologs, setCoppologs] = useState([])

    const fetchData = () => {
        fetch("http://localhost:8070/CoppoLogs?count=5000")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setCoppologs(data)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div class="centered">
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
                { coppologs.length > 0 && (
                    <tbody>
                        {coppologs.map(coppologs => (
                            <tr>
                                <td>{coppologs.id}</td>
                                <td>{coppologs.message}</td>
                                <td>{coppologs.level}</td>
                                <td>{coppologs.timeStamp}</td>
                                <td>{coppologs.exception}</td>
                            </tr>
                           
                        ))}
                    </tbody>
                )}
            </table>
        </div>
    )
}

export default UsingFetch
