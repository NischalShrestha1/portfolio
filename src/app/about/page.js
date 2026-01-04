export default function about() {
    return (
      <section>
        <h1 className="text-4xl font-bold mb-6 text-center">About Me</h1>
        <div className="mt-4">
          <div className="flex">
            <img src="/1751001706914.jpeg" alt="Nischal Shrestha" className="w-20 h-20 rounded-full object-cover "/>
            <p className="mt-6 ml-2">I’m Nischal Shrestha, a motivated Frontend Developer with a strong interest in building modern, responsive, and user-focused web applications.</p>
        </div><br />
        <p>I work primarily with React, Next.js, TypeScript, and Tailwind CSS, and I enjoy creating clean UI components, optimizing performance, and translating designs into functional interfaces. I focus on writing maintainable code and following best practices to deliver smooth and accessible user experiences.</p><br/>
        <p>As an aspiring developer, I actively build projects to sharpen my skills, learn new technologies, and gain real-world development experience. I’m eager to contribute to a team environment, learn from experienced developers, and grow through hands-on challenges.</p><br/> 
        <p>I’m currently seeking internship or entry-level opportunities where I can apply my skills, learn continuously, and add value to meaningful projects.</p><br/>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">Other Interests</h2>
          <ul type="disc" className="list-disc list-inside">
            <li>Reading Books</li>
            <li>Traveling</li>
            <li>Playing Games</li>
            <li>Listening to Music</li>
          </ul>
        </div>
        </section>
    );  
}

