import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, ChevronDown, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  year: string;
  role: string;
  tech: string[];
  github?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'ParkOS',
    description:
      'A smart parking management platform with real-time slot tracking, entry/exit automation, and an admin dashboard. Designed for scalability across multi-level parking facilities.',
    year: '2025',
    role: 'Backend · System Design',
    tech: ['Spring Boot', 'Java', 'MySQL'],
    github: 'https://github.com/IT25103969',
  },
  {
    id: 2,
    title: 'Home Automation System',
    description:
      'An IoT-driven home control system using ESP32-S3 microcontrollers to manage lighting, appliances, and environmental sensors — synced to Firebase for real-time remote control.',
    year: '2025',
    role: 'IoT · Embedded · Firmware',
    tech: ['ESP32-S3', 'Firebase', 'C++', 'Arduino'],
    github: 'https://github.com/IT25103969',
  },
  {
    id: 3,
    title: 'Hostel Management System',
    description:
      'A full-featured hostel administration platform handling room allocation, resident records, fee management, and complaint tracking with role-based access control.',
    year: '2024',
    role: 'Full Stack · Backend',
    tech: ['Spring Boot', 'Java', 'React'],
    github: 'https://github.com/IT25103969',
  },
  {
    id: 4,
    title: 'BloodHound AI',
    description:
      'An AI-powered diagnostic assistant that analyses symptoms and patient data to assist in early-stage disease detection — built with a focus on accuracy and clinical usability.',
    year: '2025',
    role: 'AI · Research · Engineering',
    tech: ['Python', 'TensorFlow', 'Flask', 'React'],
    github: 'https://github.com/IT25103969',
  },
  {
    id: 5,
    title: 'ESP32 Face Tracker',
    description:
      'An AI-controlled ESP32 system with a servo-mounted camera that detects and tracks human faces in real time using computer vision, running inference at the edge.',
    year: '2024',
    role: 'Embedded · Computer Vision',
    tech: ['ESP32', 'OpenCV', 'Python', 'C++'],
    github: 'https://github.com/IT25103969',
  },
];

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div className="border-b border-neutral-200">
      <button className="w-full text-left" onClick={() => setOpen(!open)}>
        <div className="flex justify-between py-6">
          <div>
            <p className="text-sm text-neutral-500">{project.year}</p>
            <h3 className="text-xl">{project.title}</h3>
            <p className="text-xs text-neutral-500">{project.role}</p>
          </div>
          <ChevronDown className={`w-5 h-5 transition ${open ? 'rotate-180' : ''}`} />
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden pb-6"
          >
            <p className="text-sm text-neutral-600 mb-3">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-3">
              {project.tech.map((t) => (
                <span key={t} className="text-xs border px-2 py-1">
                  {t}
                </span>
              ))}
            </div>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                className="flex items-center gap-2 text-xs uppercase"
              >
                <Github className="w-4 h-4" />
                View GitHub
                <ArrowUpRight className="w-3 h-3" />
              </a>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-white py-24 md:py-48 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-7xl mb-10">A few things I've made.</h2>

        <div className="border-t border-neutral-200">
          {projects.map((p, i) => (
            <ProjectRow key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
