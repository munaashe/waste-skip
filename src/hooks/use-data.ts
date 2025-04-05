import { useQuery } from '@tanstack/react-query';
import { Skip, FetchError } from '../utils/types';

const fetchData = async (): Promise<Skip[]> => {
    const response = await fetch(
        'https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft'
    );

    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }

    return response.json();
};

export const useData = () => {
    const { data, isLoading, isError, error } = useQuery<Skip[], FetchError>({
        queryKey: ['skipsByLocation'],
        queryFn: fetchData,
    });

    return {
        data,
        isLoading,
        isError,
        error,
    };
};