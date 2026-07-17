function About() {
  const experience = [
    {
      role: 'Software Engineering Intern',
      company: 'QTIMINDS',
      period: 'PropTech — RUFRENT',
      description:
        'Worked on the PropTech product RUFRENT, handling UI/UX design, backend module development, and QA testing to deliver a polished user experience.',
    },
    {
      role: 'Graduate Engineer Trainee',
      company: 'J. Mitra & Co.',
      period: 'Technical Background',
      description:
        'Built a strong technical foundation in electronics engineering, developing analytical and problem-solving skills that complement my software development work.',
    },
  ]

  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="section-container">
        <div className="mb-12 text-center sm:mb-16">
          <h2 className="mb-3 text-3xl font-bold text-white sm:text-4xl">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500" />
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Bio */}
          <div className="glass-card p-6 sm:p-8">
            <h3 className="mb-4 text-xl font-semibold text-white">Background</h3>
            <p className="mb-4 leading-relaxed text-slate-400">
              I&apos;m a MERN Stack Developer with a B.Tech in Electronics &
              Communication Engineering (ECE) from{' '}
              <span className="font-medium text-emerald-400">
                MMMUT Gorakhpur
              </span>
              . My unique blend of hardware and software expertise allows me to
              approach problems from multiple angles — from low-level systems
              thinking to modern full-stack web development.
            </p>
            <p className="leading-relaxed text-slate-400">
              I&apos;m passionate about building secure, scalable applications
              with clean architecture. Whether it&apos;s integrating LLM APIs,
              implementing RBAC systems, or crafting responsive UIs, I focus on
              delivering production-ready solutions.
            </p>
          </div>

          {/* Experience timeline */}
          <div className="space-y-6">
            {experience.map((item, index) => (
              <div
                key={index}
                className="glass-card relative p-6 sm:p-8"
              >
                <div className="absolute -left-px top-8 hidden h-[calc(100%-4rem)] w-0.5 bg-gradient-to-b from-emerald-500 to-cyan-500 lg:block" />
                <span className="mb-2 inline-block rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                  {item.period}
                </span>
                <h3 className="mb-1 text-lg font-semibold text-white">
                  {item.role}
                </h3>
                <p className="mb-3 text-sm font-medium text-cyan-400">
                  {item.company}
                </p>
                <p className="text-sm leading-relaxed text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
