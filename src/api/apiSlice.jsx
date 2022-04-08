import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
    endpoints: builder => ({
        getPosts: builder.query({
            query: () => '/posts',
            providesTags: ['Posts']
        }),
        createPost: builder.mutation({
            query: post => ({
                url: '/posts',
                method: "POST",
                body: post
            }),
            invalidatesTags: ['Posts']
        }),
        deletePost: builder.mutation({
            query: id => ({
                url: `/posts/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Posts']
        }),
        updatePostTrue: builder.mutation({
            query: (id,completed) => ({
                url: `/posts/${id}`,
                method: 'PATCH',
                body: {
                    completed: completed ? true : false
                }
            }),
            invalidatesTags: ['Posts']
        }),
        updatePostFalse: builder.mutation({
            query: (id,completed) => ({
                url: `/posts/${id}`,
                method: 'PATCH',
                body: {
                    completed: !completed ? true : false
                }
            }),
            invalidatesTags: ['Posts']
        })
    })
});

export const { 
    useGetPostsQuery, 
    useCreatePostMutation, 
    useDeletePostMutation, 
    useUpdatePostTrueMutation,
    useUpdatePostFalseMutation
} = apiSlice;