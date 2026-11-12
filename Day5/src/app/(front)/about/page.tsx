import type { Metadata } from "next"
import AboutPage from "./About"

export const metadata: Metadata = {
  title: "About",
  description: "About page of the Next.js application",
}

export default function About() {
  return <AboutPage />
}