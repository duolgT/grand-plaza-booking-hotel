import React from "react";

const Newsletter = () => {
  return (
    <section className="bg-gray-100 py-12 px-6 text-center">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Subscribe to our Newsletter
      </h2>
      <p className="text-gray-600 mb-6">
        Get the latest deals and exclusive offers straight to your inbox.
      </p>
      <form className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-gray-700 transition-all"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default Newsletter;
