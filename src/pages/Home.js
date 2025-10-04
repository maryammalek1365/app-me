import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const Home = (props) => {
    const { data: catdata, isLoading, error, isError, refetch } = useQuery({
        queryKey: ['cat'],
        queryFn: async () => {
            const res = await axios.get('https://catfact.ninja/fact')
            return res.data
        },
    })

    if (isLoading) return <p>Loading...</p>
    if (isError) return <p>Sorry there was an error:error:{error.message}!</p>

    return (
        <div>
            <h2>Home Page</h2>
            <p>User name is: {props.username}</p>
            <p>🐱 Cat fact: {catdata?.fact}</p>
            <button onClick={refetch}> up date</button>
        </div>
    )
}
