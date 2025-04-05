import { useQuery } from '@tanstack/react-query';
import { Skip, FetchError } from '../utils/types';

const fetchData = async (): Promise<Skip[]> => {
    const baseUrl = import.meta.env.VITE_API_BASE_URL; 
    const response = await fetch(
        `${baseUrl}/skips/by-location?postcode=NR32&area=Lowestoft`
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