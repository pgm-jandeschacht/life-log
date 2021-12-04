import { useEffect, useState } from 'react';

const useFetch = (url: string) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

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