export interface Service {
  id: string;
  name: string;
  duration: string;
  price: string;
  is_active: boolean;
}

export interface Category {
  name: string;
  services: Service[];
}

export interface Review {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  time: string;
  comment: string;
}

export interface ProviderData {
  id: string;
  name: string;
  address: string;
  priceRange: string;
  completedJobs: number;
  rating: number;
  reviewCount: number;
  homeService: boolean;
  walkIn: boolean;
  images: string[];
  owner: {
    name: string;
    title: string;
    avatar: string;
  };
  categories: Category[];
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  reviews: Review[];
}

export interface BusinessResponse {
  success: boolean;
  message: string;
  data: BusinessData;
}

export interface BusinessData {
  id: string;
  business_name: string;
  business_logo: string;
  profession: string;
  owner: string;
  service_cost: string;
  completed_jobs: number;
  reviews_rating: {
    average: number;
    count: number;
  };
  service_types: ServiceType[];
  location: Location;
  services_categories: ServiceCategory[];
  business_images: BusinessImage[];
  business_hours: BusinessHour[];
  ratings: Review[];
  owner_photo: string | null;
  is_favorite: boolean;
  share_link: string;
}

export interface BusinessImage {
  image_url: string;
  thumbnail_url: string;
}

export interface Location {
  id: number;
  gps_address: string;
  street_address: string;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
  country: string;
}

export interface ServiceCategory {
  name: string;
  description: string;
  services: Service[];
}


export type ServiceType = "home" | "shop" | "walkin" | "mobile";

export interface BusinessHour {
  id: string;
  day:
    | "MONDAY"
    | "TUESDAY"
    | "WEDNESDAY"
    | "THURSDAY"
    | "FRIDAY"
    | "SATURDAY"
    | "SUNDAY";
  open_time: string;
  close_time: string;
  is_available_for_booking: boolean;
}
