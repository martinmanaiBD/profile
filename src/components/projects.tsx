import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

interface Project {
  title: string
  description: string
  tech: string[]
  live: string
  image: string
  github?: string
}

const projects: Project[] = [
  {
    title: "Go Digital Platform",
    description:
      "Go Digital Sarawak is a government program under BKSS 5.0 aimed at helping MSMEs in Sarawak digitalise their businesses. It offers up to RM10,000 in grants for purchasing digital tools like hardware and software to support digital entrepreneurship.",
    tech: ["React.js", "Node.js", "TypeScript", "PostgreSQL"],
    live: "https://go.sarawak.digital/",
    image: "/g0odigi.png",
  },
  {
    title: "Go Digital Dashboard",
    description: "Admin and Vendor dashboard for Go Digital Sarawak",
    tech: ["Next.js", "Node.js", "TypeScript", "PostgreSQL"],
    live: "",
    image: "/gooodsh.png",
  },
  {
    title: "Hackwknd",
    description: "HackWknd is a 48-hours hackathon challenge that brings together participants from diverse backgrounds to tackle real-world community challenges through collaborative problem-solving and rapid prototyping.",
    tech: ["Next.js", "Node.js", "TypeScript", "PostgreSQL"],
    live: "https://hackwknd.sarawak.digital/",
    image: "/hckwknd.png",
  },
  {
    title: "MHTC Website",
    description: "MHTC connects international patients with Malaysia’s top medical facilities, ensuring seamless access to affordable, expert care in one of the world’s leading healthcare destinations.",
    tech: ["Wordpress", "PHP", "CSS", "JavaScript"],
    live: "https://www.mhtc.org.my/",
    image: "/emhachteesee.png",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={`${project.title} preview`}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Overlay buttons */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.github && (
                    <Button variant="secondary" size="icon" asChild className="h-8 w-8">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {project.live && (
                    <Button variant="secondary" size="icon" asChild className="h-8 w-8">
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              <CardHeader>
                <CardTitle className="flex items-center justify-between">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
