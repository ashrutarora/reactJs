import React, { useEffect, useState } from 'react'

function Github() {

    const [data, setData] = useState({})

    useEffect(() => {
        fetch('https://api.github.com/users/ashrut1011')
            .then(res => res.json())
            .then(
                data => {
                    console.log(data);
                    setData(data)
                }
            )
    }, [])

    return (
        <div className="max-w-md mx-auto bg-gray-800 text-white p-6 rounded-lg shadow-md">
            {data.name ? (
                <>
                    <div className="flex items-center space-x-4">
                        <img className="w-24 h-24 rounded-full" src={data.avatar_url} alt="GitHub Profile" />
                        <div>
                            <h2 className="text-2xl font-semibold">{data.name}</h2>
                            <p className="text-sm text-gray-400">@{data.login}</p>
                        </div>
                    </div>
                    <div className="mt-6">
                        <p className="mb-2"><span className="font-semibold">Bio:</span> {data.bio}</p>
                        <p className="mb-2"><span className="font-semibold">Company:</span> {data.company}</p>
                        <p className="mb-2"><span className="font-semibold">Location:</span> {data.location ? data.location : 'Not available'}</p>
                        <p className="mb-2"><span className="font-semibold">Public Repos:</span> {data.public_repos}</p>
                        <p className="mb-2"><span className="font-semibold">Followers:</span> {data.followers}</p>
                        <p className="mb-2"><span className="font-semibold">Following:</span> {data.following}</p>
                        <a href={data.html_url} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Visit GitHub Profile</a>
                    </div>
                </>
            ) : (
                <div className="text-center">Loading...</div>
            )}
        </div>
    );
}

export default Github
