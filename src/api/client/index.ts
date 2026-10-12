import axios from "axios";

// Base URL from environment variables
export const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// ============ INTERCEPTORS ============

import { toast } from "sonner";

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => {
    // Return successful responses as-is
    return response;
  },
  (error) => {
    // Handle errors globally
    if (error.response) {
      // Server responded with an error status
      const { status, data } = error.response;

      switch (status) {
        case 400:
          toast.error("Bad Request", {
            description:
              data?.message || "Invalid request. Please check your input.",
          });
          break;
        case 401:
          toast.error("Unauthorized", {
            description: "Please log in again to continue.",
          });
          // You can add redirect to login here if needed
          break;
        case 403:
          toast.error("Access Denied", {
            description: "You don't have permission to perform this action.",
          });
          break;
        case 404:
          toast.error("Not Found", {
            description:
              data?.message || "The requested resource was not found.",
          });
          break;
        case 500:
          toast.error("Server Error", {
            description: "Something went wrong. Please try again later.",
          });
          break;
        default:
          toast.error(`Error ${status}`, {
            description: data?.message || "An unexpected error occurred.",
          });
      }
    } else if (error.request) {
      // Request was made but no response received (network error)
      toast.error("Network Error", {
        description:
          "Unable to reach the server. Please check your connection.",
      });
    } else {
      // Something else went wrong
      toast.error("Error", {
        description: error.message || "An unexpected error occurred.",
      });
    }

    // Always reject the promise so components can handle errors too
    return Promise.reject(error);
  },
);

// ============ PUBLIC BUSINESS API ============

export const getPublicBusiness = {
  key: (slug: string) => ["publicBusiness", slug],
  fn: async (slug: string) => {
    const { data } = await axios.get(`/api/business/${slug}`);
    return data;
  },
};

export interface MarketplaceBusiness {
  id: string;
  business_name: string;
  profession: string;
  service_cost: string;
  reviews_rating: { average: number; count: number };
  location: { street_address: string; city: string };
  business_images: { image_url: string; thumbnail_url: string }[];
  share_link: string;
}

export interface BusinessSearchResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: MarketplaceBusiness[];
}

export interface Coords {
  latitude: number;
  longitude: number;
}

export const BUSINESS_SEARCH_PAGE_SIZE = 12;

export const searchBusinesses = {
  key: (search: string, profession: string, coords: Coords | null, page: number) => [
    "businessSearch",
    search,
    profession,
    coords,
    page,
  ],
  // coords → API orders results by distance, closest first
  fn: async (search: string, profession: string, coords: Coords | null, page: number) => {
    const { data } = await axios.get<BusinessSearchResponse>(
      "/api/business/search",
      {
        params: {
          search: search || undefined,
          profession: profession || undefined,
          latitude: coords?.latitude,
          longitude: coords?.longitude,
          page,
          page_size: BUSINESS_SEARCH_PAGE_SIZE,
        },
      },
    );
    return data;
  },
};

export default apiClient;
