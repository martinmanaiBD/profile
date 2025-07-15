export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-muted-foreground mb-6">
              I&apos;m a passionate full-stack developer with over 4 years of experience creating digital solutions that make
              a difference. I specialize in React, Next.js, and modern web technologies.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects, or
              sharing knowledge with the developer community.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Frontend</h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>React / Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Backend</h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>Node.js</li>
                  <li>PostgreSQL</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-1">
              <div className="w-full h-full bg-background rounded-xl flex items-center justify-center">
                <div className="text-6xl">👨‍💻</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
