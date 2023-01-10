import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const destinationApi = createApi({
    reducerPath: "apidestination",
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5001/'}),
    endpoints: (builder)=>({
        getAllDestination: builder.query({
            query: ()=>({
                url:"destination",
                method:"get",
                params:{}
            }),
            transformResponse:(res)=>res.sort((a,b)=>b.id-a.id),
            providesTags:["Destination"]
        }),
        addDestination: builder.mutation({
            query: (destination)=>({
                url:"destination",
                method:"post",
                body:destination,
            }),
            invalidatesTags:["Destination"]
        }),
        updateDestination: builder.mutation({
            query: (destination)=>({
                url:`destination/${destination.id}`,
                method:"put",
                body:destination,
            }),
            invalidatesTags:["Destination"]
        }),
        deleteDestination: builder.mutation({
            query: (id)=>({
                url:`destination/${id}`,
                method:"delete",
                body:id,
            }),
            invalidatesTags:["Destination"]
        }),
    }),
});

export const {useGetAllDestinationQuery,useAddDestinationMutation,useDeleteDestinationMutation,useUpdateDestinationMutation} = destinationApi;