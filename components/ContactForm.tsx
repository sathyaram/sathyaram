"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => null);
        throw new Error(body?.error || "Something went wrong sending that.");
      }

      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong sending that.");
    }
  }

  if (status === "sent") {
    return (
      <p className="mt-10 rounded-2xl border border-border p-6 text-muted">
        Thanks for reaching out — your message is on its way, and I&apos;ll get
        back to you soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 space-y-6">
      <div>
        <label htmlFor="name" className="text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-base outline-none transition-colors focus:border-accent"
        />
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-base outline-none transition-colors focus:border-accent"
        />
      </div>

      <div>
        <label htmlFor="subject" className="text-sm font-medium">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-base outline-none transition-colors focus:border-accent"
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-base outline-none transition-colors focus:border-accent"
        />
      </div>

      {/* Honeypot: real visitors never see or reach this field (off-screen,
          not display:none — some bots skip hidden inputs entirely but still
          fill in ones that are merely positioned off-canvas), so anything
          filling it in is a bot. relative + h-0 + overflow-hidden on this
          wrapper keeps the absolute child from depending on some distant
          ancestor's positioning context. tabIndex -1 and aria-hidden keep
          it out of keyboard/screen-reader flow. Checked server-side in the
          API route — this field is never trusted to just not exist. */}
      <div className="relative h-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="company" className="absolute -left-[9999px]">
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          className="absolute -left-[9999px]"
        />
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-red-400">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
