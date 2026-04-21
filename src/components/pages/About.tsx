import React from "react";

const About = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="p-8 md:p-12">
          {/* Header */}
          <div className="text-left mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Dooinngs
            </h1>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <section className="mb-10">
              <p className="text-gray-700 leading-relaxed mb-4">
                Dooinngs connects you to trusted professionals for everyday services. Fast, simple, and reliable.
              </p>
            </section>

            {/* Section 1 */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                What Dooinngs Does
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We help you find and book skilled artisans from hairstylists to technicians without the usual stress. No endless calls, no uncertainty. Just book, confirm, and get it done.
              </p>
            </section>

            {/* Section 2 */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                How We Use Your Data
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use your information to create and manage your account, connect customers with artisans and service providers, process bookings and payments, verify identities, improve safety, prevent fraud and send updates, confirmations or customer support messages.
              </p>
            </section>

            {/* Section 3 */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Why We Exist
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Finding reliable service providers can be frustrating. We built Dooinngs to remove the guesswork so you always know who you&rsquo;re booking, what you&rsquo;re paying, and when they&rsquo;ll show up.
              </p>
            </section>

            {/* Section 4 */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                How It Works
              </h2>
              <ul className="space-y-2 text-gray-700 ml-4">
                <li>&bull; Find a service</li>
                <li>&bull; Book instantly</li>
                <li>&bull; Get it done</li>
              </ul>
            </section>

            {/* Closing Statement */}
            <section className="mb-10 p-6 bg-gray-50 rounded-lg border-l-4 border-[#E41C4C]">
              <p className="text-gray-700 leading-relaxed font-medium">
                Dooinngs is built for <strong>convenience</strong>, <strong>trust</strong>, and <strong>getting things done properly</strong> because <strong>you matter</strong>!
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
