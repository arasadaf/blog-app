import { pageTitleClass, bodyText, primaryBtn, secondaryBtn, tagClass } from "../styles/common";
import { Link } from "react-router";

function Home() {
  const features = [
    { title: "Diverse Voices", desc: "Read stories from creators across all walks of life and expertise.", icon: "🌟" },
    { title: "Interactive Community", desc: "Engage with authors through comments and meaningful discussions.", icon: "💬" },
    { title: "Modern Experience", desc: "A sleek, distraction-free interface designed for the best reading experience.", icon: "⚡" }
  ];

  const categories = ["Technology", "Programming", "Artificial Intelligence", "Design", "Writing"];

  return (
    <div className="relative isolate">
      {/* Hero Section */}
      <div className="py-20 md:py-32 lg:pb-40 text-center">
        <div className="mx-auto max-w-4xl px-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-sm font-bold tracking-wide mb-6 uppercase">
            The Future of Blogging is Here
          </span>
          <h1 className={pageTitleClass + " mb-8 drop-shadow-sm leading-[1.1]"}>
            Discover Brilliant Ideas and Inspiring Stories
          </h1>
          <p className={bodyText + " mx-auto max-w-2xl mb-12 text-gray-500"}>
            Join our vibrant community of writers and thinkers. Read the latest perspectives, share your voice, and engage with content that matters.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/register" className={primaryBtn + " w-full sm:w-auto"}>
              Start Reading Today
            </Link>
            <Link to="/login" className={secondaryBtn + " w-full sm:w-auto"}>
              Sign In to Your Account
            </Link>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-20 border-t border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {features.map((f, idx) => (
            <div key={idx} className="bg-white/40 p-8 rounded-3xl border border-white/60 shadow-xl shadow-indigo-500/5 hover:-translate-y-1 transition-all">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Explore Categories */}
      <div className="py-20 bg-gradient-to-b from-transparent to-white/50 rounded-[4rem]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-10">Popular Categories</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat, idx) => (
              <span key={idx} className={tagClass + " text-sm py-2 px-6 hover:scale-105 transition cursor-pointer"}>
                {cat}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 px-4">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-indigo-600 to-purple-700 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Ready to share your voice?</h2>
            <p className="text-indigo-100 mb-10 text-lg md:text-xl max-w-2xl mx-auto font-medium">
              Join thousands of creators who share their stories on BlogApp.
            </p>
            <Link to="/register" className="inline-block bg-white text-indigo-600 font-black px-10 py-4 rounded-full hover:bg-indigo-50 transition shadow-xl">
              Get Started for Free
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;