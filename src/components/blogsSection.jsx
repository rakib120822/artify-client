import React from "react";
const blogs = [
  {
    title: "Top 10 Digital Art Trends in 2026",
    excerpt:
      "Discover the latest trends in digital art that are shaping creativity worldwide.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "How to Promote Your Artwork Online",
    excerpt:
      "Learn practical tips to showcase your art and reach a global audience.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "The Benefits of Art Communities",
    excerpt:
      "Connect with like-minded artists and grow your skills and network.",
    image:
      "https://images.unsplash.com/photo-1507525428070-2c2c9f999a43?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Mastering Color Theory for Digital Art",
    excerpt:
      "Understand color theory fundamentals to make your digital artwork pop.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
  },
];

const BlogsSection = () => {
  return (
    <section className="py-16 ">
      <div className=" text-center w-full">
        <h2 className="text-4xl text-center font-bold mb-10">
          Latest <span className="text-primary">Blogs</span>
        </h2>
        <div className="grid gap-5 md:grid-cols-4">
          {blogs.map((blog, idx) => (
            <div
              key={idx}
              className="bg-base-100 rounded-lg shadow hover:shadow-lg "
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                <p className="text-base-content/70">{blog.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
