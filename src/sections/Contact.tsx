"use client";

import Card from "@/components/Card";
import SectionTitle from "@/components/SectionTitle";
import React from "react";

const Contact = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Basic validation before sending the data
    if (!data.name || !data.email || !data.subject || !data.message) {
      alert("All fields are required!");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email as string)) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Message sent successfully!");
      } else {
        alert(`Error: ${result.error}`);
      }
    } catch (error) {
      alert("An error occurred while sending your message.");
    }

    form.reset();
  };

  return (
    <div className="py-16 lg:py-24" id="contact">
      <div className="container">
        <SectionTitle
          title="Contact Me"
          subtitle="Get in touch"
          description="I would love to hear from you! Whether you have a project in mind or just want to say hello, feel free to reach out."
        />
        <div className="mt-20">
          <Card className="p-6 md:p-8">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <label htmlFor="name">Your Name</label>
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="p-3 rounded-lg bg-gray-900 w-full mt-2 focus:outline outline-2 outline-white/40"
                />
              </div>
              <div>
                <label htmlFor="email">Your Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="DjgVt@example.com"
                  className="p-3 rounded-lg bg-gray-900 w-full mt-2 focus:outline outline-2 outline-white/40"
                />
              </div>
              <div>
                <label htmlFor="subject">Subject</label>
                <input
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  className="p-3 rounded-lg bg-gray-900 w-full mt-2 focus:outline outline-2 outline-white/40"
                />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  placeholder="Message"
                  className="p-3 rounded-lg bg-gray-900 w-full mt-2 focus:outline outline-2 outline-white/40 resize-none h-32"
                />
              </div>
              <button
                type="submit"
                className="mt-4 bg-gradient-to-r from-emerald-300 to-sky-400 w-full text-gray-900 h-12 rounded-xl font-semibold md:w-auto px-6 hover:bg-gray-100 focus:ring-2 focus:ring-emerald-300 focus:outline-none"
              >
                Send Message
              </button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
