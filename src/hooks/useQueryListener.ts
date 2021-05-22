import { useEffect, useState } from "react";
import { useIsFetching, useQueryClient } from "react-query";
import { QueryFilters } from 'react-query/types/core/utils'
import _isEqual from 'lodash/isEqual'


const useQueryListener = <T>(queryKey: string, filters?: QueryFilters) => {
    const [data, setData] = useState<T>()
    const queryClient = useQueryClient()
    const numberOfFetching = useIsFetching(queryKey, filters)
    useEffect(() => {
        if (!numberOfFetching) {
            const newData = queryClient.getQueryData<T>(queryKey)
            if (!_isEqual(data, newData)) setData(newData)
        }
    }, [numberOfFetching, queryClient, data, queryKey])

    return data
}

export default useQueryListener