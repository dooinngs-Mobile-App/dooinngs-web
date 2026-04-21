import React from "react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="p-8 md:p-12">
          {/* Header */}
          <div className="text-left mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-gray-600">
              Last Updated: 30th September, 2025
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {/* Section 1 */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Introduction
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Welcome to Dooinngs! (&ldquo;Platform&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the Dooinngs mobile application, web and related services (collectively, the &ldquo;Platform&rdquo;). By creating an account, booking a service, or otherwise using the Platform, you agree to comply with these Terms. If you do not agree, please refrain from using the Platform.
              </p>
            </section>

            {/* Section 2 */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Definitions
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex">
                  <span className="font-medium mr-2">&ldquo;User&rdquo;</span>
                  <span>refers to any individual using the Dooinngs Platform</span>
                </li>
                <li className="flex">
                  <span className="font-medium mr-2">&ldquo;Artisan&rdquo;</span>
                  <span>means a skilled professional or business offering services through our Platform</span>
                </li>
                <li className="flex">
                  <span className="font-medium mr-2">&ldquo;Customer&rdquo;</span>
                  <span>means an individual seeking services from an Artisan</span>
                </li>
                <li className="flex">
                  <span className="font-medium mr-2">&ldquo;Content&rdquo;</span>
                  <span>includes all text, images, profiles, and other materials uploaded to the Platform</span>
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. User & Artisan Responsibilities
              </h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  3.1 Account Creation
                </h3>
                <ul className="space-y-2 text-gray-700 ml-4">
                  <li>• Users must provide accurate, current, and complete information during registration</li>
                  <li>• Each user is responsible for maintaining the confidentiality of their account credentials</li>
                  <li>• Users are liable for all activities conducted under their account</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  3.2 Eligibility
                </h3>
                <ul className="space-y-2 text-gray-700 ml-4">
                  <li>• Users must be at least 18 years old to use our Platform</li>
                  <li>• Artisans must provide valid professional credentials</li>
                  <li>• We reserve the right to verify and reject any registration</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  3.3 Governing Law
                </h3>
                <p className="text-gray-700 leading-relaxed ml-4">
                  These Terms are governed by the laws of Ghana. Any dispute arising from or related to these Terms will fall under the exclusive jurisdiction of the courts in Ghana.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Bookings and Services
              </h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  4.1 Customer Booking
                </h3>
                <p className="text-gray-700 leading-relaxed ml-4">
                  Users may search, book, and pay Artisans through the Platform.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  4.2 Artisan Service Delivery
                </h3>
                <p className="text-gray-700 leading-relaxed ml-4">
                  Artisans are responsible for the quality, safety, and fulfilment of their services.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  4.3 Dooinngs Platform
                </h3>
                <p className="text-gray-700 leading-relaxed ml-4">
                  Dooinngs does not guarantee the availability, pricing, or reliability of any Artisan. Also Dooinngs may introduce new features, change how bookings work, or remove certain services at its discretion.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Intellectual Property
              </h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  5.1 Platform Content
                </h3>
                <p className="text-gray-700 leading-relaxed ml-4">
                  All content on this Platform is the property of Dooinngs or its licensors. Do not copy, change, share, or use any of it without our explicit written consent.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  5.2 User Content
                </h3>
                <p className="text-gray-700 leading-relaxed ml-4">
                  Uploading content grants Dooinngs the permission to use, reproduce, modify and display it globally and for free. This permission is necessary for us to effectively run and promote the Platform.
                </p>
              </div>
            </section>

            {/* Closing Statement */}
            <section className="mb-10 p-6 bg-gray-50 rounded-lg border-l-4 border-[#E41C4C]">
              <p className="text-gray-700 leading-relaxed font-medium">
                By using Dooinngs, you acknowledge that you have read, understood, and agree to these Terms of Service.
              </p>
            </section>

            {/* Contact Information */}
            <section className="text-center">
              <p className="text-gray-600">
                For questions or concerns regarding these Terms, email us at{" "}
                <a 
                  href="mailto:dooinngs@gmail.com" 
                  className="text-[#E41C4C] hover:text-[#c1174a] font-medium transition-colors"
                >
                  dooinngs@gmail.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;