import type { Metadata } from "next"
import ContactPag from "./Contact"

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact page of the Next.js application",
}

export default function Contact() {
  return <ContactPag />
}
