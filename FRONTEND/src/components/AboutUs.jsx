import { pageTitleClass, bodyText } from "../styles/common";

function AboutUs() {
  return (
    <div className="relative isolate py-20 px-4">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-sm font-bold tracking-wide mb-6 uppercase">
          Our Story
        </span>
        <h1 className={pageTitleClass + " mb-8 drop-shadow-sm"}>
          Empowering Voices Everywhere
        </h1>
        <p className={bodyText + " mx-auto max-w-2xl text-gray-500"}>
          We built BlogApp with a simple mission: to create a platform where ideas can flourish without distractions. Our community is made up of thinkers, creators, and readers who value quality content and meaningful discussions.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
        <div className="bg-gradient-to-tr from-indigo-100 to-pink-100 rounded-[3rem] p-8 h-96 flex items-center justify-center">
           {/* Placeholder for an image or illustration */}
           <div className="text-indigo-300 font-black text-6xl">Our Journey</div>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-black text-gray-900">From a simple idea to a thriving community.</h2>
          <p className="text-gray-600 leading-relaxed">
            What started as a small weekend project has grown into a vibrant space for writers of all backgrounds. We believe that everyone has a story worth telling, and we're here to provide the canvas.
          </p>
          <ul className="flex flex-col gap-4 mt-4">
             <li className="flex items-center gap-3 text-gray-700 font-medium">
               <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center">✓</span>
               Over 10,000 active readers
             </li>
             <li className="flex items-center gap-3 text-gray-700 font-medium">
               <span className="w-8 h-8 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center">✓</span>
               Thousands of published articles
             </li>
             <li className="flex items-center gap-3 text-gray-700 font-medium">
               <span className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center">✓</span>
               A growing community of top-tier authors
             </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
