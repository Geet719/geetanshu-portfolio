import { skills } from '../data/portfolioData'

const skillCategories = [
  { title: 'Languages', items: skills.languages, icon: '💻' },
  { title: 'Frontend', items: skills.frontend, icon: '🎨' },
  { title: 'Backend & Databases', items: skills.backend, icon: '⚙️' },
  { title: 'Tools & Core', items: skills.tools, icon: '🛠️' },
]

function Skills() {
  return (
    <section id="skills" className="bg-slate-900/30 py-20 sm:py-28">
      <div className="section-container">
        <div className="mb-12 text-center sm:mb-16">
          <h2 className="mb-3 text-3xl font-bold text-white sm:text-4xl">
            Tech Stack & <span className="gradient-text">Skills</span>
          </h2>
          <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500" />
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="glass-card group p-6 transition-all duration-300 hover:border-emerald-500/30 sm:p-8"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="text-2xl" role="img" aria-hidden="true">
                  {category.icon}
                </span>
                <h3 className="text-lg font-semibold text-white">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-slate-700/80 bg-slate-800/50 px-3 py-1.5 text-sm font-medium text-slate-300 transition-colors group-hover:border-emerald-500/20 group-hover:text-emerald-400/90"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
