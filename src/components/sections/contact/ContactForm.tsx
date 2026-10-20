"use client";

import React, { useState } from "react";
import { WhatsAppIcon } from "@/components/icons/Icons";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const recipientNumber = "919029999979";

    // Format neat WhatsApp message
    const formattedMessage =
      `*New Contact Enquiry - Shiva Road Lines*\n\n` +
      `👤 *Name:* ${formData.name.trim()}\n` +
      `📞 *Phone:* ${formData.phone.trim()}\n` +
      (formData.email.trim() ? `✉️ *Email:* ${formData.email.trim()}\n` : "") +
      (formData.location ? `📍 *Nearest Office / Location:* ${formData.location}\n` : "") +
      (formData.service ? `🚛 *Service Required:* ${formData.service}\n` : "") +
      `\n💬 *Message:*\n${formData.message.trim()}`;

    const whatsappUrl = `https://wa.me/${recipientNumber}?text=${encodeURIComponent(
      formattedMessage
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-white p-6 sm:p-8 formdivs shadow-md text-gray-900 h-full">
      <div className="border-b border-gray-100 pb-4 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          Send Us a Message
        </h2>
        <p className="text-sm text-gray-600 mt-1">
          Fill out the details below to connect directly with our logistics team
          on WhatsApp.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="name"
              className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1"
            >
              Full Name <span className="text-[#b22234]">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Rahul Sharma"
              className="w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-300 rounded-md focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#134063] focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1"
            >
              Phone / Mobile <span className="text-[#b22234]">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className="w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-300 rounded-md focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#134063] focus:border-transparent transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@company.com"
              className="w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-300 rounded-md focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#134063] focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label
              htmlFor="location"
              className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1"
            >
              Office / Location
            </label>
            <select
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-300 rounded-md focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#134063] focus:border-transparent transition-all"
            >
              <option value="">Select Nearest Office (Optional)</option>
              <option value="Head Office – Navi Mumbai (Vashi)">
                Head Office – Navi Mumbai (Vashi)
              </option>
              <option value="Mumbai (Thane - Kalwa West)">
                Mumbai (Thane - Kalwa West)
              </option>
              <option value="Kolkata (Haldia - Purba Medinipur)">
                Kolkata (Haldia - Purba Medinipur)
              </option>
              <option value="Vishakhapatnam (Vizag - Malkapuram)">
                Vishakhapatnam (Vizag - Malkapuram)
              </option>
              <option value="Mathura (Refinery Gate)">
                Mathura (Refinery Gate)
              </option>
              <option value="International – Kathmandu, Nepal">
                International – Kathmandu, Nepal
              </option>
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="service"
            className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1"
          >
            Service Needed
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-300 rounded-md focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#134063] focus:border-transparent transition-all"
          >
            <option value="">Select a service (Optional)</option>
            <option value="Lube Oil Transportation">
              Lube Oil Transportation
            </option>
            <option value="Transformer Oil Transportation">
              Transformer Oil Transportation
            </option>
            <option value="Base Oil Tanker Logistics">
              Base Oil Tanker Logistics
            </option>
            <option value="SS Tanker Transport Services">
              SS Tanker Transport Services
            </option>
            <option value="Industrial Water Tanker Supply">
              Industrial Water Tanker Supply
            </option>
            <option value="Other Logistics Enquiry">
              Other Logistics Enquiry
            </option>
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1"
          >
            Your Message / Load Details <span className="text-[#b22234]">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Please mention origin, destination, quantity/capacity needed, or any specific requirements..."
            className="w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-300 rounded-md focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#134063] focus:border-transparent transition-all resize-y"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold rounded-md shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
        >
          <WhatsAppIcon className="w-5 h-5" />
          <span>Send via WhatsApp</span>
        </button>
      </form>
    </div>
  );
}
