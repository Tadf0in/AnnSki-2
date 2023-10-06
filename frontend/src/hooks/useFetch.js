import { useEffect } from "react"

export default function useFetch (method, url, setter) {
    useEffect(() => {
        const fetchAPI = async () => {
            await fetch('http://localhost:8000/' + url, {
                method: method
            })
            .then(res => res.json())
            .then(data => {
                setter(data)    
            })
            .catch(err => console.log(err))
        }
        fetchAPI()
    }, [])
}
