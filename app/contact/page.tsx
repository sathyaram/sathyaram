import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <div className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-xl">
        <h1 className="font-display text-4xl font-semibold sm:text-5xl">
          Contact
        </h1>
        <p className="mt-4 text-muted">
          Have a project in mind? Send a message and I&apos;ll get back to you.
        </p>

        <ContactForm />
      </div>
    </div>
  );
}
