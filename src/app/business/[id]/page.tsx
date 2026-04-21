import { Metadata } from "next";
import BusinessPageClient from "./BusinessPageClient";
import { BusinessResponse } from "@/types/bookings";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const CSRF_TOKEN = process.env.CSRF_TOKEN;

async function fetchBusiness(slug: string): Promise<BusinessResponse | null> {
  try {
    const res = await fetch(`${BASE_URL}/business/public/${slug}/`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-CSRFTOKEN": CSRF_TOKEN || "",
      },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const response = await fetchBusiness(id);

  if (!response?.data) {
    return {
      title: "Business not found | dooinngs",
    };
  }

  const { business_name, location, business_logo, business_images } = response.data;

  const image = business_logo || business_images[0]?.image_url || undefined;

  const description = `${location.street_address}${location.city ? `, ${location.city}` : ""}. Book on dooinngs.`;

  return {
    title: `${business_name} | dooinngs`,
    description,
    openGraph: {
      title: business_name,
      description,
      images: image ? [{ url: image, width: 800, height: 800, alt: business_name }] : [],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: business_name,
      description,
      images: image ? [image] : [],
    },
  };
}

export default async function BusinessPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <BusinessPageClient slug={id} />;
}
