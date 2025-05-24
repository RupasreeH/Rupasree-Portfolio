import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import DB from "../../assets/DB.jpeg";
import default_user from "../../assets/default_user.webp";
import RM from "../../assets/RM.jpeg";
import MV from "../../assets/MV.jpeg";
import PJ from "../../assets/PJ.jpeg";
import VK from "../../assets/VK.jpeg";
import LinkedInCarousel from "../LinkedInCarousel";

export const Recommendations = () => {
  const recommendations = [
    {
      name: "Daniel Berleant",
      title: "Professor at University of Arkansas at Little Rock",
      recommendation:
        "Rupasree was an outstanding teaching assistant for my graduate course on systems analysis. She demonstrated an excellent understanding of systems analysis concepts and techniques, and applied this understanding to assist and evaluate the graduate students in the course. Just as important as her technical skills, she is a self-starter whose work ethic, self-motivation, and intelligence are among the best I have seen. Rupasree is also friendly and reliable as a solid team player. Because of all these qualities and more, I recommend Ms. Holegoudru strongly and without reservation to any team that could benefit from her considerable skills.",
      image: DB,
      linkedin: "https://www.linkedin.com/in/daniel-berleant-4938451/",
    },
    {
      name: "Dr. Ningning Wu",
      title: "Professor at University of Arkansas at Little Rock",
      recommendation:
        "Rupa is responsible for the front-end design in my research project, and I am highly impressed by her work ethic and technical expertise. She possesses strong UI/UX design skills and has a deep understanding of React, Python, and database technologies, including both relational databases and MongoDB. Rupa is mature, reliable, and always eager to take on new challenges. She consistently delivers high-quality results, making her an invaluable member of the team.",
      image: default_user,
      linkedin: "https://www.linkedin.com/in/dr-ningning-wu-53892a35/",
    },
    {
      name: "Ramkumar Manickam",
      title: "Global Warranty & Digital Quality Manager at Tenneco",
      recommendation:
        "I had the pleasure of working with Rupa on several projects, from her time at Unniva to our Tenneco projects. Rupa consistently demonstrated exceptional dedication, responsiveness, and reliability. Her commitment to implementing customer-specific requirements for portal development, including various access-related logins, was highly commendable.Additionally, Rupa's contributions to developing web crawlers for extracting warranty portal data for various customers were invaluable. Her professionalism and active engagement in her role were evident throughout our collaboration. Rupa is a true asset to any team, and I highly recommend her for any future endeavors.",
      image: RM,
      linkedin: "https://www.linkedin.com/in/ramkumar-manickam/",
    },
    {
      name: "Manohar V",
      title: "Supervisor, Enterprise warranty and Data Analytics",
      recommendation:
        "I wanted to take a moment to recognize Rupasree for her exceptional contributions. She is a dynamic and passionate professional with deep expertise in UI/UX design and project leadership. Her ability to acquire data from various customer portals has been invaluable to our success. Beyond her technical skills, Rupasree’s leadership and interpersonal abilities set her apart. She consistently goes the extra mile, applying SMART effort to ensure project success. Her visionary mindset, empathy, and integrity make her a true asset to any team. Wishing her continued success in all her future endeavors. Cheers to a true champion!",
      image: MV,
      linkedin: "https://www.linkedin.com/in/manohar-v-9a84b81b/",
    },
    {
      name: "Pavan Joshi",
      title: "Product Manager at Univva Business Solutions Pvt Ltd",
      recommendation:
        "Rupasree is a highly competent full-stack developer with a deep understanding of Angular and other web technologies, as well as backend development using .NET Core and database technologies. Throughout our time working together, she consistently demonstrated her dedication and expertise across both front-end and back-end. She was a strong problem-solver, always ready to take on new challenges and deliver high-quality results. Her willingness to take on additional work and deliver it with excellence showcased her commitment to the team's success. She was a valuable asset, and I am confident she will excel in all her future endeavors. All the best, Rupasree!",
      image: PJ,
      linkedin: "https://www.linkedin.com/in/pavan-joshi-b1015661/",
    },
    {
      name: "Sunil Shet",
      title: "Product Manager at Univva Business Solutions Pvt Ltd",
      recommendation:
        "Rupasree has been a cornerstone of our team for 9 years. Her contributions have been consistently outstanding. She is talented, hardworking, and highly motivated. Her proficiency in UI / UX framework design and development is exceptional, and she consistently brings fresh ideas to improve our software. Over this long period, she has proven to be a reliable support system during critical times, taking ownership of deliverables and ensuring their successful completion. Rupasree is a self-learner, always staying up-to-date with the latest technologies and applying them effectively, particularly in Angular, .NET Core, and MongoDB database. Her long-term commitment and continuous growth make her an exceptional talent. I wish her all the best!",
      image: default_user,
      linkedin: "https://www.linkedin.com/in/sunil-shet/",
    },
    {
      name: "Vyshnavi K",
      title: "Software developer at Univva Business Solutions Pvt Ltd",
      recommendation:
        "Rupasree is very knowledgeable in Angular, UI/UX framework design and development, and also has very good experience in backend development using .NET Core and SQL and MongoDB databases. She is very hardworking, responsible and makes sure to deliver the work on time. She is ready to take the challenges and is good at problem-solving. Her contribution to the project was always outstanding and consistent. Apart from technical skills, she has good leadership qualities and managing skills. Her visionary mindset, empathy, and integrity make her a true asset to any team. Wishing you all the best Rupa!",
      image: VK,
      linkedin: "https://www.linkedin.com/in/vyshnavi-k-0324b959/",
    },
  ];

  return (
    <section
      id="recommendations"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-500 mb-8">
            What People Say About Me ?
          </h2>

          <LinkedInCarousel recommendations={recommendations} />
        </div>
      </RevealOnScroll>
    </section>
  );
};
