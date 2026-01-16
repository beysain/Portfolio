"use client";

import type React from "react";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-12 bg-background">
      <div className="max-w-2xl mx-auto">
        <h3 className="text-4xl font-bold text-foreground mb-4 animate-fade-in-up">
          Let&apos;s Connect
        </h3>
        <p className="text-muted-foreground mb-12 text-lg animate-fade-in-up stagger-1">
          I&apos;m always interested in hearing about new projects and
          opportunities. Feel free to reach out directly using the contact
          details below or send me a message.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12 animate-fade-in-up stagger-2">
          <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-3">
              Email
            </p>
            <a
              href="mailto:syedbilals143@gmail.com"
              className="text-lg font-medium text-foreground hover:text-primary transition-colors"
            >
              syedbilals143@gmail.com
            </a>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-3">
              WhatsApp
            </p>
            <a
              href="https://wa.me/923419579038"
              className="text-lg font-medium text-foreground hover:text-primary transition-colors"
            >
              +92 341 957 9038
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 animate-fade-in-up stagger-3"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
              placeholder="Your name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
              placeholder="Your message..."
            />
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 active:translate-y-0"
          >
            {submitted ? "Message Sent!" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
