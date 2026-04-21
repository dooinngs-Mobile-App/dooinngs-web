import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="p-8 md:p-12">
          {/* Header */}
          <div className="text-left mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600">
              Last Updated: 30th September, 2025
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <section className="mb-10">
              <p className="text-gray-700 leading-relaxed mb-4">
                Dooinngs (&ldquo;Dooinngs,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) values your trust. This Privacy Policy explains how we collect, use, disclose, and protect your information when you use the Dooinngs mobile application, web, and related services (the &ldquo;Platform&rdquo;).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing or using Dooinngs, you agree to the terms of this Privacy Policy. If you do not agree, please discontinue the use of the Platform.
              </p>
            </section>

            {/* Section 1 */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. What We Collect
              </h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  1.1 Personal Details:
                </h3>
                <p className="text-gray-700 leading-relaxed ml-4">
                  When you sign up, we may collect your name, phone number, email, profile photo and other details.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  1.2 Service Details:
                </h3>
                <p className="text-gray-700 leading-relaxed ml-4">
                  For artisans, we may ask for information like skills, pricing, and portfolio. Usage & device info: Such as location (if enabled), device type, IP address, and app activity.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. How We Use Your Data
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use your information to:
              </p>
              <ul className="space-y-2 text-gray-700 ml-4">
                <li>• Create and manage your account.</li>
                <li>• Connect customers with artisans.</li>
                <li>• Process bookings and payments.</li>
                <li>• Verify identities, improve safety, and prevent fraud.</li>
                <li>• Send updates, confirmations, or customer support messages.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Data Security
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We apply standard security practices to protect your data. While no system is 100% secure, we work to keep your information safe.
              </p>
            </section>

            {/* Section 4 */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Sharing Your Data
              </h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  4.1 With service providers:
                </h3>
                <p className="text-gray-700 leading-relaxed ml-4">
                  Payment processors, hosting, and analytics partners who help us run the platform.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  4.2 With authorities:
                </h3>
                <p className="text-gray-700 leading-relaxed ml-4">
                  If required by law or legal process. We never sell your personal data.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Your Rights
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li>• You can update or delete your account anytime.</li>
                <li>• Certain records may be kept for legal or accounting purposes.</li>
                <li>• You can opt out of marketing messages at any time.</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Children&rsquo;s Privacy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Dooinngs is only for users who are 18 years and above. We do not knowingly collect data from children.
              </p>
            </section>

            {/* Section 7 */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. Account Deletion
              </h2>
              <p className="text-gray-700 leading-relaxed">
                A Dooinngs user account can be deleted by going to <strong>Home → Settings → Delete Account</strong> in the app.
              </p>
            </section>

            {/* Section 8 */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. Updates
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy. Any changes will be posted here with a new effective date.
              </p>
            </section>

            {/* Closing Statement */}
            <section className="mb-10 p-6 bg-gray-50 rounded-lg border-l-4 border-[#E41C4C]">
              <p className="text-gray-700 leading-relaxed font-medium">
                By using Dooinngs, you acknowledge that you have read, understood, and agree to this Privacy Policy.
              </p>
            </section>

            {/* Contact Information */}
            <section className="text-center">
              <p className="text-gray-600">
                If you have questions about your data or this policy, contact us at{" "}
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

export default PrivacyPolicy;