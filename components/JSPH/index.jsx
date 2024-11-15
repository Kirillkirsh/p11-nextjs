import { RedirectType } from "next/navigation";
import { useEffect, useState } from "react";
import classes from './User.module.css';

export default function JSPHDemo() {
    const
        [value, setValue] = useState(3);
    return <>
        <input type="number" value={value} onInput={event => setValue(+event.target.value)}/>
        <GetUser id={value}/>
    </>
}

function GetUser({ id }) {
    const
        [user, setUser] = useState(null),
        [error, setError] = useState(null);

    useEffect(() => {
        async function start() {
            console.log('effect', id)
            setUser(null);
            try {
                const
                    response = await fetch('https://jsonplaceholder.typicode.com/users/' + id+ '?' + Math.random());
                if (!response.ok) throw new Error(response.status);
                const
                    data = await response.json();
                setUser(data);
                setError(null);
            } catch (err) {
                setError(err);
            }
        }
        start();
        return ()=>console.log('cleanup', id)
    }, [id])

    if (error)
        return <ErrorInfo error={error} />
    if (user)
        return <User user={user}/>;
    return <Spinner />
}

function User({ user }) {
    return <div>{user.name}</div>;
}

function Spinner() {
    return <div><progress></progress><br /></div>
}


function ErrorInfo({ error }) {
    return <div style={{ color: 'red' }}>
        {error.toString()}
    </div>
}
