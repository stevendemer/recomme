import {useQuery} from '@tanstack/react-query'
import {api} from "@/lib/axios";
import {ROUTES} from "@/constants/routes";


export const useGetProfiling = () => {
    return useQuery({
        queryKey: ['profiling'],
        queryFn: async () => {
            return await api.get(ROUTES.profiling);
        },
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        retry: 2
    });
}


