import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { metadataBase: new URL("https://hillcountrychauffeur.com"), title: { default: "Hill Country Chauffeur | Private Transportation in Texas", template: "%s | Hill Country Chauffeur" }, description: "Private luxury transportation and bespoke Hill Country experiences in Wimberley, Driftwood, Dripping Springs, and Fredericksburg.", openGraph: { type: "website", locale: "en_US", siteName: "Hill Country Chauffeur", images: [{ url: "/images/wimberley-kia-carnival-lane.png", width: 1672, height: 941, alt: "Black Kia Carnival on a winding Wimberley, Texas Hill Country lane at golden hour" }] }, robots: { index: true, follow: true } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
