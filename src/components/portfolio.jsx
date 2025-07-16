import React from "react";
import { Mail, Github, Linkedin, FileText, Facebook } from "lucide-react";

const projects = [
  {
    title: "Web Layout",
    description:
      "Built with HTML/CSS using Flexbox and Grid for a clean, adaptive layout.",
    link: "https://github.com/Omar-Nazir/web-Layout",
    Live:"https://omar-nazir.github.io/web-Layout/"
  },
  {
    title: "Portfolio Page",
    description:
      "Built with HTML/CSS using Flexbox and Grid for a clean, adaptive layout.",
    link: "https://github.com/Omar-Nazir/Portfolio-page",
    Live:"https://omar-nazir.github.io/Portfolio-page/"
  },
  {
    title: "Js Intro",
    description:
      "Created a static, responsive form using HTML, CSS, and JavaScript with Flexbox, Grid, and basic form validation.",
    link: "https://github.com/Omar-Nazir/Js-Intro",
    Live:"https://omar-nazir.github.io/Js-Intro/"
  },
  {
    title: "Responsive Page",
    description:
      "Developed a fully responsive layout using HTML, CSS, Flexbox, and Grid for seamless adaptation across devices.",
    link: "https://github.com/Omar-Nazir/Responsive-Webpage",
    Live:"https://omar-nazir.github.io/Responsive-Webpage/"
  },
  {
    title: "To-Do App",
    description:
      "Built a JavaScript-based to-do app with dynamic task management, featuring add, delete, and complete functionality using DOM manipulation.",
    link: "https://github.com/Omar-Nazir/To-Do-app",
    Live: "https://omar-nazir.github.io/To-Do-app/"
  },
 
  // {
  //   title: "Responsive Layout with Flexbox/Grid",
  //   description:
  //     "HTML/CSS-based responsive page using Flexbox and Grid layout principles.",
  //   link: "https://github.com/Oomar-Nazir/responsive-layout",
  // },
  {
    title: "Calculator App",
    description:
      "Developed a functional calculator using React, featuring real-time calculations, state management, and a clean UI.",
    link: "https://github.com/Omar-Nazir/Calculator-app",
    Live: "https://calculator-app-chi-three.vercel.app/"
  },
  {
    title: "Tic-Tac-Toe Game",
    description:
      "Built an interactive Tic-Tac-Toe game in React with state handling, win detection, and a responsive UI.",
    link: "https://github.com/Omar-Nazir/tic-tac-toe",
    Live: "https://tic-tac-toe-alpha-two-23.vercel.app/"
  },
];

export default function Portfolio() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10 font-sans bg-gradient-to-b from-gray-50 to-white text-gray-800">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold italic mb-2 tracking-tight text-gray-900">Umar Nazir</h1>
        <p className="text-xl text-gray-600">
          Frontend Reactjs Developer | MERN Stack | Clean, Responsive, Interactive UIs
        </p>
        <div className="flex justify-center gap-6 mt-4 text-2xl text-blue-600">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=backupun2941@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition"><Mail /></a>
          <a href="https://github.com/Omar-Nazir" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition"><Github /></a>
          <a href="https://www.linkedin.com/in/m-umar-nazir/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition"><Linkedin /></a>
          <a href="Umar Resume.pdf " target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition"><FileText /></a>
          <a href="https://web.facebook.com/profile.php?id=61563342442854&_rdc=1&_rdr#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition"><Facebook /></a>
        </div>
      </header>

      <section>
        <h2 className="text-3xl font-bold mb-6 border-b pb-2 border-blue-200">🚀 Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {[...projects].reverse().map((proj, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg p-6 border hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">{proj.title}</h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">{proj.description}</p>
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              >
                View on GitHub
              </a>
              <a
                href={proj.Live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-600 text-white ml-2 px-4 py-2 rounded-md hover:bg-red-700 transition"
              >
                Live
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-4 border-b pb-2 border-blue-200">🎓 Certifications</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 text-base">
          <li > Web Development <a className="text-blue-600 hover:text-blue-800" target="_blank" href="\Web Development.jpeg">Certificate</a> - JDC Institute, Lahore</li>
          <li > Python <a className="text-blue-600 hover:text-blue-800" href="UMARNAZIR-VU-ITU-DTC-PCAP - certificate_page-0001.jpg" target="_blank" rel="noopener noreferrer">Certificate </a>, <a className="text-blue-600 hover:text-blue-800" href="NetAcad Learning Transcript_page-0001.jpg" target="_blank" rel="noopener noreferrer">Transcript</a>  - Cisco</li>
          <li >Wordpress <a className="text-blue-600 hover:text-blue-800" href="DSTP_Certificate_ 83G64VYMK_page-0001.jpg" target="_blank" rel="noopener noreferrer">Certificate</a> - Digiskills</li>
        </ul>
      </section>

      <footer className="mt-20 text-center text-sm text-gray-500">
        © 2025 Umar Nazir. Built with React & Tailwind CSS.
      </footer>
    </div>
  );
}
