import gopalImg from "../assets/shivam.jpg"; // rename later to gopal.jpg
import archanaImg from "../assets/archana.jpg";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-700 via-pink-600 to-indigo-700 py-16 px-6 text-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-300">
          About Us
        </h2>
        <p className="mt-4 text-lg text-gray-200">
          A passionate duo of <span className="text-yellow-300">Software Developers</span> 🚀
        </p>
      </div>

      {/* Profiles */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Gopal Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center shadow-lg hover:shadow-2xl transition">
          <img
            src={gopalImg}
            alt="Gopal"
            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-yellow-400 shadow-md"
          />
          <h3 className="text-2xl font-semibold text-yellow-300">
            Gopal 💻
          </h3>
          <p className="mt-4 text-gray-200">
            A dedicated <span className="font-bold">Software Developer</span>{" "}
            who loves solving problems, building scalable applications, and
            constantly learning new technologies.
          </p>
          <p className="mt-4 text-gray-400">
            Passionate about clean code, backend systems, and exploring new
            trends in software engineering.
          </p>
        </div>

        {/* Archana Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center shadow-lg hover:shadow-2xl transition">
          <img
            src={archanaImg}
            alt="Archana"
            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-pink-400 shadow-md"
          />
          <h3 className="text-2xl font-semibold text-pink-300">Archana 💻</h3>
          <p className="mt-4 text-gray-200">
            A passionate <span className="font-bold">Software Developer</span>{" "}
            with a love for problem-solving and creating innovative software
            solutions.
          </p>
          <p className="mt-4 text-gray-400">
            Interested in building impactful applications and growing as a
            developer with modern tools & technologies.
          </p>
        </div>
      </div>

      {/* Mission */}
      <div className="max-w-4xl mx-auto mt-16 bg-gradient-to-r from-purple-500 to-pink-500 p-10 rounded-xl shadow-xl text-center">
        <h3 className="text-3xl font-bold mb-4">Our Mission 🚀</h3>
        <p className="text-lg leading-relaxed text-gray-100">
          Together, we are a team of{" "}
          <span className="font-semibold text-yellow-300">Software Developers</span>{" "}
          working to build innovative and reliable digital solutions. <br />
          Our goal is to grow together, take on challenges, and turn ideas into
          impactful applications that help people and businesses.
        </p>
      </div>
    </div>
  );
}
