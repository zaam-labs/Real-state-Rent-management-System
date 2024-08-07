import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import BASE_URL from "./BASE_URL";
import Cookies from "js-cookie";

const getToken = () => {
  return Cookies.get("token");
};

export const itemsSlice = createApi({
  reducerPath: "itemApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      const token = getToken();
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ["item"],

  endpoints: (builder) => ({

    // Get properties
    getItem: builder.query({
      query: () => ({
        url: "/api/properties",
        method: "GET",
      }),
      providesTags: ["item"],
    }),

    // Add property
    addItem: builder.mutation({
      query: (newItem) => ({
        url: "/api/properties",
        method: "POST",
        body: newItem,
      }),
      invalidatesTags: ["item"],
    }),

    // Update property
    editItem: builder.mutation({
      query: ({ id, update }) => ({
        url: `/api/properties/${id}`,
        method: "PUT",
        body: update,
      }),
      invalidatesTags: ["item"],
    }),

    // Delete property
    delateItem: builder.mutation({
      query: (property_id) => ({
        url: `/api/properties/${property_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["item"],
    }),

    // Send Request
    SendRequests: builder.mutation({
      query: (property_id) => ({
        url: `/api/properties/${property_id}/request`,
        method: "POST",
      }),
      invalidatesTags: ["item"],
    }),

    // Approve requests
    ApproveRequest: builder.mutation({
        query: (data) => ({
          url: `/api/properties/${data.property_id}/approve`,
          method: "POST",
          body: {tenant_id: data.tenant_id}
        }),
        invalidatesTags: ["item"],
    }),

    // Get requests
    getRequests: builder.query({
        query: () => {
          return  {
            url: '/api/landlords/requests_to_approve',
            method: "GET"
          }
        },
        providesTags: ["item"],
    }),

    // Get Approved Requests
    getTenants: builder.query({
        query: () => {
          return {
            url: "/api/landlords/approved_requests",
            method: 'GET'
          }
        },
        providesTags: ["item"],
    }),

    // Get Approved Requests
    getAprrovedRequest: builder.query({
      query: () => {
        return {
          url: "/api/tenants/approved_properties",
          method: 'GET'
        }
      },
      providesTags: ["item"],
    })


  }),
});

export const {
  useGetItemQuery,
  useAddItemMutation,
  useEditItemMutation,
  useDelateItemMutation,
  useSendRequestsMutation,
  useGetRequestsQuery,
  useApproveRequestMutation,
  useGetTenantsQuery,
  useGetAprrovedRequestQuery
} = itemsSlice;
export default itemsSlice.reducer;
