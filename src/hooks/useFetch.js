import { useState, useEffect } from "react"

const localCache = {}

export const useFetch = (url) => {

    const [data, setData] = useState({
        data: null,
        loading: true,
        hasError: false,
        error: null,
        status: null,
    })

    useEffect(() => {
        
        setData({loading: true})
        fetchData()
    }, [url])
    

    const fetchData = async () => {

        if(localCache[url]){
            setData({
                data: localCache[url],
                loading: false,
                hasError: false,
                error: null,
                ok: true,
            })
            return
        }

        // await new Promise(resolve => setTimeout(resolve, 1500))

        const resp = await fetch(url)
        const data = await resp.json()

        if(!resp.ok){

            setData({
                data: null,
                loading: false,
                hasError: true,
                error: data.message,
                ok: JSON.stringify(resp.ok),
            })

            return
        }

        setData({
            data,
            loading: false,
            hasError: false,
            error: null,
            ok: JSON.stringify(resp.ok),
        })

        localCache[url] = data

    }

    return {
        ...data
    }
}