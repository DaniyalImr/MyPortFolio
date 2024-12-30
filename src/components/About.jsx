import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          Hello, I'm Daniyal Malik, a proficient Full-Stack Developer with a
          passion for crafting dynamic, responsive, and user-friendly web
          applications. With expertise in both front-end and back-end
          technologies, I specialize in creating impactful solutions using the
          MERN stack and other modern technologies.
        </p>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <span>
          Proficient in: React.js, Node.js, Express.js, MongoDB, HTML, CSS,
          JavaScript, Expertise in: Authentication JWT, WebSocket
          (Socket.IO), and UI Design Strong problem-solving skills and a
          collaborative approach
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Professional Experience
        </h1>
        <span>
          Full-Stack Developer, Freelance Projects, [Dates]
          <ul>
            <li>
              Developed a dynamic Book Store, Blog Application, and Chat
              Application using the MERN stack.
            </li>
            <li>
              Implemented secure authentication systems with JWT and Socket.IO.
            </li>
            <li>
              Designed polished and professional UI forms using React Hook Form.
            </li>
          </ul>
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Achievements & Awards
        </h1>
        <span>
          Successfully completed multiple full-stack projects, including MERN
          Recall CRUD application Recognized for delivering high-quality
          solutions that exceed client expectations
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
          My mission is to harness my technical skills and creativity to deliver
          cutting-edge solutions that enhance the digital landscape. I am
          dedicated to continuous learning, embracing new challenges, and
          driving impactful innovation.
        </p>
      </div>
    </div>
  );
}

export default About;
