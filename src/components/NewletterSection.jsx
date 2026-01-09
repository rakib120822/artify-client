import React from "react";

const NewsletterSection = () => {
  return (
    <div>
      {/* Newsletter Section */}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-base-content/70 mb-6">
            Get the latest updates, news, and tips directly in your inbox.
          </p>
          <div className="flex justify-center flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full sm:w-auto flex-1"
            />
            <button className="btn btn-primary w-full sm:w-auto">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsletterSection;
