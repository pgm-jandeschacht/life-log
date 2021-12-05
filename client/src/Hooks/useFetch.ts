import { useEffect, useState } from 'react';

const useFetch = (url: string) => {
    const [data, setData] = useState(Object);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(undefined);

    useEffect(() => {
        const getData = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(url);
                const dataTemp = await response.json();
                setData(dataTemp);
            } catch(error: any) {
                setError(error.message)
            } finally {
                setIsLoading(false);
            }
        }

        getData();
    }, [url])

    return [data, isLoading, error];
}

export default useFetch;