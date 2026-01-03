export default function Home() {
  return (
    <section className="max-w-3xl mx-auto mt-16">
      
      {/* Image + Name */}
      <div className="flex items-center justify-center gap-6 mb-8">
        <img
          src="/1751001706914.jpeg"
          alt="Nischal Shrestha"
          className="w-32 h-32 rounded-full object-cover"
        />

        <h1 className="text-4xl font-bold">
          Hi! I'm Nischal Shrestha
        </h1>
      </div>

      {/* Content */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">
          Welcome to My Portfolio
        </h2>

        <p className="text-lg text-gray-600">
          A web developer specializing in creating beautiful and functional
          websites. Explore my projects and skills to learn more about what I can do.
        </p>
      </div>

    </section>
  );
}

