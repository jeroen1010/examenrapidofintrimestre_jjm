import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RiegoInfo } from '../config/entities/riegoInfo'
import { RiegoResponse } from '../config/responses/riegoResponse';
import { riegoMapper } from '../config/mapper/riegoMapper';

export const riegoApi = createApi({
    reducerPath: 'riegoApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.1.39:8081/' }),
    endpoints: (builder) => ({
        getValvulaRiego: builder.query<RiegoInfo[], void>({
            query: () => 'items',
            transformResponse: (response: RiegoResponse[]) => response.map(riegoMapper),
        }),

        postValvulaRiego: builder.mutation<RiegoInfo, RiegoInfo>({
            query: (newItem) => ({
                url: 'items',
                method: 'POST',
                body: newItem,
            }),
        }),
    }),
})

export const { useGetValvulaRiegoQuery, usePostValvulaRiegoMutation } = riegoApi