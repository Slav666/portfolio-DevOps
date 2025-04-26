"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", message: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Simple validation
    if (!formData.name.trim() || !formData.message.trim()) {
      setError("Please enter both your name and message.");
      setSuccess("");
      return;
    }

    setError("");
    try {
      const res = await fetch(
        "https://8st9dqb574.execute-api.eu-west-2.amazonaws.com/prod/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (res.ok) {
        setSuccess(data.message || "Message sent successfully!");
        setFormData({ name: "", message: "" }); // Clear form
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to send message. Please try again later.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-200 rounded-2xl shadow-md my-8 flex-1">
      <h1 className="text-2xl font-bold mb-4 text-center">-CONTACT FORM-</h1>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      {success && <p className="text-green-600 mb-2">{success}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1 font-medium">
            Name:
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1 font-medium">
            Message:
          </label>
          <textarea
            id="message"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows={4}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
        >
          SEND
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
