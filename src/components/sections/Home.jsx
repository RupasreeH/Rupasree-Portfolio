import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <div className="flex justify-center mt-20">
            <img
              src="/src/assets/profile.jpeg"
              alt="Rupasree Holegoudru"
              className="w-full max-w-sm h-auto mx-auto p-1 rounded-full object-contain ring-2 ring-gray-300 dark:ring-gray-500"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Rupasree Holegoudru
          </h1>

          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I’m a front-end developer with decade of experience crafting clean,
            scalable, and user-friendly web applications. I’m passionate about
            building interfaces that are both visually appealing and highly
            performant, with a focus on creating seamless user experiences.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/resume/RUPASREE_HOLEGOUDRU.pdf"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
              download
            >
              Resume
            </a>

            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
