import Image from "next/image";
import NavBar from "../../component/navbar";
import {
  buildingPrinciples,
  focusAreas,
  profile,
  projects,
  stackGroups,
} from "../../component/portfolio-data";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <NavBar />

      <section className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-24 lg:pt-20">
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-teal-700">
            Computer Engineering Portfolio
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Building practical systems across software, data, and hardware.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            {profile.role}
          </p>
          <p className="mt-4 max-w-2xl leading-7 text-slate-600">{profile.summary}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a className="primary-action" href="#work">
              View projects
            </a>
            <a className="secondary-action" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="secondary-action" href={profile.kaggle} target="_blank" rel="noreferrer">
              Kaggle
            </a>
          </div>
        </div>

        <aside className="hero-panel">
          <div className="profile-photo-frame">
            <Image
              src={profile.photo}
              alt="Adisorn Parama portfolio photo"
              fill
              priority
              sizes="(min-width: 1024px) 460px, 100vw"
              className="profile-photo"
            />
            <div className="photo-caption">
              <strong>{profile.name}</strong>
            </div>
          </div>

          <div className="mt-5 grid gap-3">
            {[
              "Embedded systems",
              "FPGA / HDL",
              "Applied machine learning",
              "Geospatial dashboards",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm ring-1 ring-slate-200">
                <span className="h-2.5 w-2.5 rounded-full bg-teal-600" />
                <span className="text-sm font-medium text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section id="about" className="section-band bg-white">
        <div className="section-shell">
          <div className="section-heading">
            <p className="eyebrow">Focus</p>
            <h2>Engineering interests with a practical center.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {focusAreas.map((area) => (
              <article key={area.title} className="info-card">
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="section-band">
        <div className="section-shell">
          <div className="section-heading">
            <p className="eyebrow">Selected Work</p>
            <h2>Projects that connect fundamentals with real data and users.</h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {projects.map((project) => (
              <a key={project.name} href={project.href} target="_blank" rel="noreferrer" className="project-card">
                <div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="stack" className="section-band bg-white">
        <div className="section-shell">
          <div className="section-heading">
            <p className="eyebrow">Stack</p>
            <h2>Tools and technologies I use to build across layers.</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {stackGroups.map((group) => (
              <article key={group.title} className="stack-block">
                <h3>{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="tag tag-quiet">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="section-shell">
          <div className="section-heading">
            <p className="eyebrow">What I Like Building</p>
            <h2>Work that makes technical systems easier to trust and use.</h2>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {buildingPrinciples.map((principle) => (
              <div key={principle} className="principle-row">
                <span className="mt-2 h-2 w-2 rounded-full bg-teal-600" />
                <p>{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-950 px-5 py-16 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-300">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold">Let&apos;s build something useful.</h2>
            <p className="mt-3 max-w-2xl text-slate-300">
              Open to engineering work around applied ML, dashboards, embedded systems, and practical software tools.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a className="contact-action" href={`mailto:${profile.email}`}>
              Email
            </a>
            <a className="contact-action" href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="contact-action" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
