// app/contact/page.tsx
"use client";

import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from "lucide-react";
import { Input } from "../../components/ui/input";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-pink-500/5" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="block text-foreground">Connect With Us</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">
                African Fashion Support
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Have questions about Venda Fashion? Our African support team is
              here to help you with anything you need.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-foreground">
                African Support Centers
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-primary to-pink-500">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-card-foreground">
                      Email Support
                    </h3>
                    <p className="text-muted-foreground">
                      support@venda-fashion.africa
                    </p>
                    <p className="text-sm text-muted-foreground">
                      We reply within 12 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-primary to-pink-500">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-card-foreground">
                      Phone Support
                    </h3>
                    <p className="text-muted-foreground">
                      +234 1 277 0000 (Lagos)
                    </p>
                    <p className="text-sm text-muted-foreground">
                      +254 20 277 0000 (Nairobi)
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Mon-Fri from 8am to 6pm WAT/EAT
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-primary to-pink-500">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-card-foreground">
                      Regional Offices
                    </h3>
                    <p className="text-muted-foreground">
                      Lagos, Nigeria - West Africa HQ
                    </p>
                    <p className="text-muted-foreground">
                      Nairobi, Kenya - East Africa HQ
                    </p>
                    <p className="text-muted-foreground">
                      Accra, Ghana - Francophone Africa
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-primary to-pink-500">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-card-foreground">
                      Live Chat
                    </h3>
                    <p className="text-muted-foreground">
                      Available 24/7 in app
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Get instant support in English, French & Swahili
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-2xl shadow-xl p-8 border border-border">
              <h2 className="text-3xl font-bold mb-6 text-card-foreground">
                Send us a message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-card-foreground">
                      Full Name
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-card-foreground">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-card-foreground">
                    Subject
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this regarding?"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-card-foreground">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:ring-2 focus:ring-primary focus:border-transparent resize-none text-card-foreground"
                    placeholder="Tell us how we can help you..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full gap-2 bg-gradient-to-r from-primary to-pink-500"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-pink-500/5">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card mb-6 border border-border">
            <MessageSquare className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-card-foreground">
              African Fashion FAQ
            </span>
          </div>
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Common Questions About African Fashion
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Can't find what you're looking for? Check our full FAQ section
            dedicated to African fashion.
          </p>
          <Button variant="outline" size="lg">
            Visit FAQ Page
          </Button>
        </div>
      </section>
    </div>
  );
}
