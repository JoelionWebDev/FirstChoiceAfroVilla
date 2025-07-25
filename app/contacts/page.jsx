// pages/contact.js (for Pages Router)
// OR app/contact/page.js (for App Router)

import ContactForm from "../Component/contactform";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900">
            Get in Touch
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            We'd love to hear from you. Send us a message and we'll respond as
            soon as possible.
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
