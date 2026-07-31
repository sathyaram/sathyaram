import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Sathya Ram about a website build, redesign, or design project.",
};

export default function Contact() {
  return (
    <div className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-xl">
        <Reveal
          as="h1"
          className="block text-center font-display font-bold leading-[1.05] tracking-[-0.035em] text-logo-blue text-[clamp(2.5rem,7.4vw,5.75rem)]"
          text="Contact"
        />
        <p className="mt-4 text-center text-muted">
          Have a project in mind? Send a message and I&apos;ll get back to you.
        </p>

        <ContactForm />
      </div>
    </div>
  );
}
