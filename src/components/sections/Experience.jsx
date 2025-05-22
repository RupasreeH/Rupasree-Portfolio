import { RevealOnScroll } from "../RevealOnScroll";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Graduate Assistant</h3>
              <h6 className="text-gray-300 text-sm mb-2">
                University of Arkansas at Little Rock - USA
              </h6>
              <h6 className="text-gray-300 text-sm mb-2">
                (Aug 2024 - May 2025)
              </h6>
              <p className="text-gray-500 mb-4">
                Developed a React web application for risk assessment based on
                exposed PII (Personally Identifiable Information) found online.
                Designed and implemented key modules such as User
                authentication, Dashboard and User recommendation, focusing on
                responsive UI and intuitive UX.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "React",
                  "Python",
                  "Docker",
                  "HTML5",
                  "CSS3",
                  "Jest",
                  "Postman",
                  "MySQL",
                  "GIT",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Product Manager</h3>
              <h6 className="text-gray-300 text-sm mb-2">
                Univva Business Solutions PVT. LTD. - India
              </h6>
              <h6 className="text-gray-300 text-sm mb-2">
                (Mar 2022 – May 2023)
              </h6>
              <p className="text-gray-500 mb-4">
                Led end-to-end delivery of front end of a product, acting as
                both Project Manager and Lead Angular Developer, balancing
                technical execution with stakeholder alignment. • Designed and
                architected the entire UI structure using Angular ensuring
                scalability, performance, and maintainability of front-end code.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "Angular",
                  "JavaScript",
                  "Bootstrap",
                  "PrimeNG",
                  "HTML5",
                  "CSS3",
                  "JIRA",
                  "Postman",
                  "TypeScript",
                  "Jasmine",
                  "NgRx",
                  "MongoDB",
                  ".Net Core",
                  "GIT",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Technical Lead </h3>
              <h6 className="text-gray-300 text-sm mb-2">
                Univva Business Solutions PVT. LTD. - India
              </h6>
              <h6 className="text-gray-300 text-sm mb-2">
                (Mar 2019 – Feb 2022)
              </h6>
              <p className="text-gray-500 mb-4">
                Provided technical leadership for front-end architecture,
                establishing coding standards, folder structure, and component
                reusability strategies in Angular applications. • Introduced and
                enforced code quality metrics, linting rules, and unit testing
                practices using Karma and Jasmine, reducing production bugs by
                30%.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "Angular",
                  "JavaScript",
                  "Bootstrap",
                  "PrimeNG",
                  "HTML5",
                  "CSS3",
                  "JIRA",
                  "Postman",
                  "TypeScript",
                  "Jasmine",
                  "NgRx",
                  "MongoDB",
                  ".Net Core",
                  "GIT",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                {" "}
                Senior Software Engineer{" "}
              </h3>
              <h6 className="text-gray-300 text-sm mb-2">
                Univva Business Solutions PVT. LTD. - India
              </h6>
              <h6 className="text-gray-300 text-sm mb-2">
                (Mar 2017 – Feb 2019)
              </h6>
              <p className="text-gray-500 mb-4">
                Developed and maintained large-scale front-end features for U.
                SCAN, an enterprise- level web application, using Angular and
                TypeScript. • Created complex, reusable UI components and forms
                with Reactive Forms and RxJS, enhancing performance and user
                interactivity.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "Angular",
                  "JavaScript",
                  "Bootstrap",
                  "PrimeNG",
                  "HTML5",
                  "CSS3",
                  "JIRA",
                  "Postman",
                  "TypeScript",
                  "Jasmine",
                  "NgRx",
                  "MongoDB",
                  ".Net Core",
                  "GIT",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Software Developer </h3>
              <h6 className="text-gray-300 text-sm mb-2">
                Univva Business Solutions PVT. LTD. - India
              </h6>
              <h6 className="text-gray-300 text-sm mb-2">
                (Feb 2014 – Feb 2017)
              </h6>
              <p className="text-gray-500 mb-4">
                Contributed to the development and maintenance of EDI service
                projects, ensuring smooth data interchange and integration for
                enterprise systems. • Provided technical support for automotive
                domains such as Motor Parts and Power Train, diagnosing and
                resolving integration issues to ensure minimal downtime.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "Angular",
                  "JavaScript",
                  "Bootstrap",
                  "PrimeNG",
                  "HTML5",
                  "CSS3",
                  "JIRA",
                  "Postman",
                  "TypeScript",
                  "Jasmine",
                  "NgRx",
                  "MongoDB",
                  ".Net Core",
                  "GIT",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
