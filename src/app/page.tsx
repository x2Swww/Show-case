'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  const projects = [
    {
      title: 'Project 1',
      desc: 'เพราะเราช่วยกัน: https://x2swww.github.io/ งานกลุ่มที่ทำร่วมกับเพื่อนๆเพื่อส่งอาจารย์ วิชาชุมนุม ซึ่งเป็นงานเว็บงานแรก.',
    },
    {
      title: 'Project 2',
      desc: 'Web: https://x2swww.github.io/About-me/ เว็บนี้คิดเองออกแบบเอง และทำขึ้นด้วยตัวเองใช้เวลาเกือบ1เดือนซึ่งนานมากๆ.',
    },
    {
      title: 'Project 3',
      desc: 'Web: https://my-bio-site-vzdi.onrender.com/ทำร่วมกับchat gpt เนื่องจากในตอนที่ทำยังไม่ถนัดการใช้css และjavascripts.',
    },
  ];

  return (
    <main className="bg-[#F4F7FF] text-[#4C5380] scroll-smooth font-sans">

      {/* MAIN */}
      <section id="donate" className="relative min-h-screen flex items-center justify-center px-4 py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-br from-[#ffffff] via-[#e7ecff] to-[#c2d4ff] opacity-60" />
          <div className="absolute w-72 h-72 bg-[#a0bfff] rounded-full opacity-30 blur-3xl top-10 left-1/4 animate-pulse" />
          <div className="absolute w-64 h-64 bg-[#ffd6f9] rounded-full opacity-30 blur-3xl bottom-10 right-1/4 animate-pulse" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center relative z-10"
        >
          <h1 className="text-5xl font-extrabold text-[#2F3367] drop-shadow-md mb-4">
            รวมผลงานของผม ในปี2025
          </h1>
          <p className="text-lg text-[#4C5380] mb-6">
            ขอขอบคุณเพื่อนๆทุกคนที่คอยติดตามผลงานของผมครับ 💖
          </p>

          <div className="mt-6">
            <a
              href="#about"
              className="text-[#4C9C9B] hover:underline text-sm"
            >
              โปรดเลื่อนลงข้างล่าง ↓
            </a>
          </div>
        </motion.div>
      </section>

      {/* ABOUT PROJECTS */}
      <section
        id="about"
        className="relative py-32 px-6 bg-gradient-to-br from-[#F4F7FF] to-[#E5E9FA] overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-br from-[#e2e9ff] via-[#f0f3ff] to-[#f9faff] opacity-60" />
          <div className="absolute w-96 h-96 bg-[#b4e9f9] rounded-full opacity-20 blur-3xl top-0 left-1/2 animate-pulse" />
          <div className="absolute w-72 h-72 bg-[#ffd6f9] rounded-full opacity-20 blur-3xl bottom-0 right-1/3 animate-pulse" />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-6xl mx-auto text-center"
        >
          <h2 className="text-5xl font-extrabold text-[#2F3367] mb-16 tracking-wide">
            My Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#F4F7FF] text-center text-sm text-[#7A809F] py-6">
        © 2025 Warintorn Thepsenglee, All rights reserved.
      </footer>
    </main>
  );
}

function ProjectCard({ project, index }: { project: { title: string; desc: string }, index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="rounded-3xl bg-white/70 backdrop-blur-md border border-white/30 p-8 shadow-xl transition-all duration-300 hover:shadow-2xl"
    >
      <h3 className="text-2xl font-semibold text-[#2F3367] mb-4">
        {project.title}
      </h3>
      <p className="text-sm text-[#4C5380] leading-relaxed">
        {project.desc}
      </p>
    </motion.div>
  );
}
