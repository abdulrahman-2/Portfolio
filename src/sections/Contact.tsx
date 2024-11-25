import Card from "@/components/Card";
import SectionTitle from "@/components/SectionTitle";
import React from "react";

const Contact = () => {
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
            <form action="" className="flex flex-col gap-6">
              <div>
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="p-3 rounded-lg bg-gray-700 w-full mt-2"
                />
              </div>
              <div>
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  placeholder="DjgVt@example.com"
                  className="p-3 rounded-lg bg-gray-700 w-full mt-2"
                />
              </div>
              <div>
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="p-3 rounded-lg bg-gray-700 w-full mt-2"
                />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  placeholder="Message"
                  className="p-3 rounded-lg bg-gray-700 w-full mt-2 resize-none h-32"
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
