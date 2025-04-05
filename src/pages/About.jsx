import React from "react";
import { skills } from "../constants";
import CTA from "../components/CTA";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello! I'm{" "}
        <span className="pink-gradient_text font-semibold drop-shadow">
          Abeer..
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          A second-year Computer Science Co-op student at Toronto Metropolitan
          University, passionate about solving real-world problems that push my
          limits and challenge me to think critically and creatively. I have a
          strong foundation in software development, full-stack web development,
          and backend systems, and I am actively expanding my knowledge in
          mobile development, AI-driven applications, and UI/UX design. I am
          currently seeking Summer 2025 internships and am eager to apply my
          technical expertise, problem-solving mindset, and collaboration skills
          in a dynamic work environment!
        </p>
        <p>
          I really enjoy participating in hackathons and case competitions
          because they give me the chance to mix tech and innovation in exciting
          ways. These events allow me to apply my skills in fast-paced
          environments while also letting me show off my leadership,
          communication, and problem-solving abilities. Through these
          experiences, I've become more adaptable and creative, working well
          with others to tackle challenges as a team. I love collaborating with
          people who bring different skills to the table and am always excited
          to see what we can create together. Whether it's through hands-on
          projects, coursework, or mentorship, I'm always looking to try new
          things!
        </p>
        <p>
          I'd love to connect with like-minded individuals who share my interest
          in tech, collaboration, and building exciting projects! Feel free to
          reach out!
        </p>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div key={skill.name} className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default About;
