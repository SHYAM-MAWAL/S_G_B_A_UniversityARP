"use client";

import { GradientBackground } from "@/components/gradient-background";
import { Navbar } from "@/components/navbar";
import { motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";

const highlights = [
  {
    icon: "🤖",
    title: "AI Agents for Automation",
    description:
      "Autonomous agents that orchestrate workflows, trigger actions, and learn from every iteration.",
  },
  {
    icon: "📊",
    title: "Intelligent Analytics",
    description:
      "Real-time insights layer that monitors trends, predicts outcomes, and surfaces decisive intelligence.",
  },
  {
    icon: "🧠",
    title: "Custom Model Training",
    description:
      "Train domain-specific AI models optimised for your data, compliance standards, and growth goals.",
  },
  {
    icon: "⚙️",
    title: "System Integration",
    description:
      "Plug SHYAM_AI into your existing stack with seamless APIs, secure connectors, and zero downtime.",
  },
];

const products = [
  {
    title: "AI Voice Assistant — SHYAM",
    description:
      "A conversational co-pilot powered by Gemini and Llama models, engineered for fluent reasoning and action.",
    tag: "Voice AI",
  },
  {
    title: "URL Monitor Dashboard",
    description:
      "Ambient website monitoring with AI-based uptime tracking, performance scoring, and anomaly detection.",
    tag: "Observability",
  },
  {
    title: "PDF QA System",
    description:
      "Upload any document and interrogate it with local LLMs for secure, instant answers and summaries.",
    tag: "Knowledge",
  },
  {
    title: "AI Automation Bot",
    description:
      "Adaptive automations that watch servers, close the loop on incidents, and keep operations self-healing.",
    tag: "Ops AI",
  },
];

const demoActions = [
  {
    title: "Try SHYAM Voice",
    cta: "Launch Voice Demo",
    description: "Experience natural dialogue, contextual recall, and proactive assistance in real time.",
  },
  {
    title: "View URL Monitor Dashboard Demo",
    cta: "Open Dashboard",
    description: "Inspect live uptime intelligence, predictive alerts, and automation triggers in one pane.",
  },
  {
    title: "Explore PDF QA Demo",
    cta: "Start Exploring",
    description: "Ask complex questions, generate summaries, and trace citations instantly.",
  },
  {
    title: "Connect with AI Agent",
    cta: "Engage Agent",
    description: "Test the orchestration engine that coordinates bots, APIs, and human hand-offs.",
  },
];

const techStack = [
  "FastAPI / Flask",
  "Ollama / Gemini",
  "OracleDB / SingleStore",
  "React / Next.js",
  "Prometheus + Grafana",
  "LangChain + HuggingFace",
];

const architectureFlow = [
  { title: "Signal Ingestion", description: "Sensors, APIs, and data streams feed the orchestration fabric." },
  { title: "AI Reasoning Core", description: "Multi-model intelligence brokers context, memory, and decisioning." },
  { title: "Automation Mesh", description: "Agents dispatch actions, trigger integrations, and monitor feedback loops." },
  { title: "Insight Layer", description: "Dashboards, alerts, and analytics close the loop with humans in the flow." },
];

const testimonials = [
  {
    name: "Aarav Mehta",
    role: "CTO, QuantumScale Labs",
    quote:
      "SHYAM_AI turned our stagnant processes into a symphony of autonomous agents. Efficiency jumped 40% in weeks.",
  },
  {
    name: "Leila Santana",
    role: "Head of Innovation, NovaBank",
    quote:
      "The analytics layer is mind-blowing — predictive, explainable, and plugged into every mission-critical system we run.",
  },
  {
    name: "Oliver Chen",
    role: "Founder, Horizon Robotics",
    quote:
      "From voice AI to infrastructure automation, SHYAM_AI delivers futuristic capability with enterprise-grade polish.",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden text-[var(--foreground)]">
      <GradientBackground />
      <Navbar />

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-32 px-5 pb-24 pt-40 sm:px-8 lg:px-12">
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <DemosSection />
        <FeaturesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

const HeroSection = () => (
  <section id="home" className="relative grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="space-y-10"
    >
      <div className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/70 px-4 py-1 text-xs font-semibold tracking-[0.3em] uppercase text-slate-900 shadow-[0_12px_40px_rgba(0,174,239,0.25)] dark:border-white/10 dark:bg-white/10 dark:text-white">
        <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#00AEEF] to-[#9C27B0]" />
        Welcome to SHYAM_AI
      </div>

      <div className="space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          className="font-display text-4xl leading-tight text-slate-900 drop-shadow-[0_0_35px_rgba(156,39,176,0.25)] dark:text-white sm:text-5xl lg:text-6xl"
        >
          Welcome to SHYAM_AI — Your Intelligent Future Starts Here.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="max-w-2xl text-lg text-slate-700/90 dark:text-slate-200"
        >
          AI-driven automation, insights, and innovation — helping businesses and individuals harness the true power of
          artificial intelligence.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
        className="flex flex-wrap gap-4"
      >
        <Link
          href="#contact"
          className="rounded-full bg-gradient-to-r from-[#00AEEF] via-[#9C27B0] to-[#673AB7] px-7 py-3 text-sm font-semibold text-white shadow-[0_20px_60px_rgba(0,174,239,0.4)] transition hover:shadow-[0_30px_80px_rgba(156,39,176,0.45)]"
        >
          🚀 Get Started
        </Link>
        <Link
          href="#demos"
          className="flex items-center gap-3 rounded-full border border-white/50 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-900 backdrop-blur-xl transition hover:border-transparent hover:bg-white hover:shadow-[0_20px_70px_rgba(0,174,239,0.25)] dark:border-white/10 dark:bg-white/5 dark:text-white"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#00AEEF] to-[#9C27B0] text-base text-white">▶</span>
          Watch Demo
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
        className="grid gap-5 rounded-3xl border border-white/40 bg-white/70 p-6 shadow-[0_25px_60px_rgba(0,174,239,0.18)] backdrop-blur-3xl dark:border-white/10 dark:bg-white/5 lg:grid-cols-3"
      >
        <Stat label="Automation Efficiency" value="+42%" subtext="Accelerate manual workflows with AI agents." />
        <Stat label="Insight Velocity" value="12x" subtext="Faster decisions with predictive analytics." />
        <Stat label="Deployment Speed" value="< 10 days" subtext="From prototype to production launch." />
      </motion.div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      className="relative mx-auto flex h-[360px] w-full max-w-[420px] items-center justify-center"
    >
      <motion.div
        className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(0,174,239,0.6),transparent_55%),radial-gradient(circle_at_70%_70%,rgba(156,39,176,0.6),transparent_50%)] shadow-[0_40px_120px_rgba(0,174,239,0.28)]"
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative h-[90%] w-[90%] rounded-full border border-white/40 bg-white/20 backdrop-blur-3xl dark:border-white/10 dark:bg-white/5">
        <div className="absolute inset-6 rounded-full border border-white/50 bg-gradient-to-br from-white/80 via-transparent to-white/20 dark:border-white/10 dark:from-white/5 dark:to-white/0" />
        <div className="absolute inset-12 overflow-hidden rounded-full border border-white/20 bg-[radial-gradient(circle_at_50%_50%,rgba(0,174,239,0.25),rgba(8,12,26,0.9))] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(0,174,239,0.3),rgba(2,1,12,0.95))]">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\\'300\\' height=\\'300\\' viewBox=\\'0 0 300 300\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cdefs%3E%3CradialGradient id=\\'g\\' cx=\\'50%25\\' cy=\\'50%25\\' r=\\'50%25\\'%3E%3Cstop offset=\\'0%25\\' stop-color=\\'%2300AEEF\\'/%3E%3Cstop offset=\\'100%25\\' stop-color=\\'transparent\\'/%3E%3C/defs%3E%3Cg fill=\\'none\\' stroke=\\'rgba(255,255,255,0.2)\\' stroke-width=\\'0.5\\'%3E%3Cpath d=\\'M0 40h300M0 90h300M0 140h300M0 190h300M0 240h300\\'/%3E%3Cpath d=\\'M40 0v300M90 0v300M140 0v300M190 0v300M240 0v300\\'/%3E%3Ccircle cx=\\'150\\' cy=\\'150\\' r=\\'80\\' stroke=\\'rgba(156,39,176,0.45)\\' /%3E%3C/g%3E%3Ccircle cx=\\'150\\' cy=\\'150\\' r=\\'35\\' fill=\\'url(%23g)\\' opacity=\\'0.45\\'/%3E%3C/svg%3E')] opacity-60" />
          <motion.div
            className="absolute inset-16 rounded-full border border-[#00AEEF]/40"
            animate={{ boxShadow: [
              "0 0 30px rgba(0, 174, 239, 0.3)",
              "0 0 60px rgba(156, 39, 176, 0.35)",
              "0 0 30px rgba(0, 174, 239, 0.3)",
            ] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute left-1/2 top-10 h-24 w-24 -translate-x-1/2 rounded-full bg-gradient-to-br from-[#00AEEF] to-[#9C27B0] opacity-80 shadow-[0_0_80px_rgba(0,174,239,0.5)]"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-14 left-1/4 h-16 w-16 rounded-full bg-[#9C27B0]/50 shadow-[0_0_60px_rgba(156,39,176,0.5)]"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute right-10 top-14 h-14 w-14 rounded-full bg-[#00AEEF]/60 shadow-[0_0_50px_rgba(0,174,239,0.5)]"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </motion.div>
  </section>
);

const AboutSection = () => (
  <motion.section
    id="about"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={fadeIn}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="relative"
  >
    <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <div className="space-y-6">
        <SectionLabel>About SHYAM_AI</SectionLabel>
        <h2 className="font-display text-3xl text-slate-900 dark:text-white sm:text-4xl">
          Born from a pursuit of intelligent automation, SHYAM_AI crafts ecosystems where humans and AI co-create value.
        </h2>
        <p className="text-base text-slate-700/90 dark:text-slate-200">
          We architect AI-native products that connect to your live data, orchestrate smarter workflows, and make insight
          a living, breathing asset. From automation agents to data fabric, SHYAM_AI is the nucleus of your intelligent
          enterprise.
        </p>

        <div className="grid gap-5 sm:grid-cols-2">
          {highlights.map((item) => (
            <motion.div
              key={item.title}
              className="group rounded-3xl border border-white/40 bg-white/70 p-5 shadow-[0_15px_40px_rgba(0,174,239,0.15)] transition hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(156,39,176,0.22)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/5"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3 text-lg font-semibold text-slate-800 dark:text-white">
                <span className="text-xl">{item.icon}</span>
                {item.title}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="relative overflow-hidden rounded-[32px] border border-white/40 bg-white/60 p-8 shadow-[0_20px_70px_rgba(0,174,239,0.22)] backdrop-blur-3xl dark:border-white/10 dark:bg-white/5"
        whileHover={{ scale: 1.01 }}
      >
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/60 via-transparent to-transparent dark:from-white/10" />
        <div className="relative space-y-6">
          <h3 className="font-display text-2xl text-slate-900 dark:text-white">Futuristic workspace</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Command centers with holographic dashboards, realtime system feedback, and collaborative AI assistants
            amplify every team’s impact.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/30 bg-white/70 p-4 text-sm text-slate-700 shadow-[0_10px_35px_rgba(0,174,239,0.18)] dark:border-white/10 dark:bg-white/10 dark:text-slate-200">
              <p className="font-semibold">Holographic dashboards</p>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">Visualise KPIs with volumetric data layers.</p>
            </div>
            <div className="rounded-2xl border border-white/30 bg-white/70 p-4 text-sm text-slate-700 shadow-[0_10px_35px_rgba(156,39,176,0.18)] dark:border-white/10 dark:bg-white/10 dark:text-slate-200">
              <p className="font-semibold">Adaptive command hubs</p>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">Dynamic workflows orchestrated by AI copilots.</p>
            </div>
          </div>
          <div className="relative rounded-2xl border border-white/20 bg-gradient-to-r from-[#00AEEF]/20 via-[#9C27B0]/20 to-transparent p-5 text-sm text-slate-800 dark:border-white/10 dark:text-slate-200">
            <p className="font-semibold uppercase tracking-[0.2em] text-[#00AEEF]">Innovation Pulse</p>
            <p className="mt-2 text-xs text-slate-700 dark:text-slate-300">
              Intelligent automations run 24/7, projecting future states and preparing your teams for what comes next.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </motion.section>
);

const ProductsSection = () => (
  <motion.section
    id="products"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={fadeIn}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="space-y-6"
  >
    <SectionHeader
      label="Products"
      title="What We Build"
      subtitle="A suite of intelligent products engineered to automate, predict, and augment every layer of your organisation."
    />

    <div className="grid gap-6 md:grid-cols-2">
      {products.map((product, index) => (
        <motion.div
          key={product.title}
          whileHover={{ y: -8 }}
          className="relative overflow-hidden rounded-[28px] border border-white/40 bg-white/75 p-7 shadow-[0_25px_65px_rgba(0,174,239,0.2)] backdrop-blur-3xl dark:border-white/10 dark:bg-white/5"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,174,239,0.12),_transparent_60%)]" />
          <div className="relative space-y-4">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-gradient-to-r from-[#00AEEF]/90 to-[#9C27B0]/90 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                {product.tag}
              </span>
              <div className="text-sm font-semibold text-slate-500/80 dark:text-slate-400">{`0${index + 1}`}</div>
            </div>
            <h3 className="font-display text-2xl text-slate-900 dark:text-white">{product.title}</h3>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{product.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

const DemosSection = () => (
  <motion.section
    id="demos"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={fadeIn}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="space-y-6"
  >
    <SectionHeader
      label="Showcase"
      title="Experience SHYAM_AI in Action"
      subtitle="Step inside live demos and see how our AI orchestrates conversations, insight, and automation."
    />

    <div className="grid gap-6 md:grid-cols-2">
      {demoActions.map((demo) => (
        <motion.div
          key={demo.title}
          whileHover={{ scale: 1.02 }}
          className="flex h-full flex-col justify-between rounded-[28px] border border-white/40 bg-white/70 p-7 shadow-[0_25px_65px_rgba(0,174,239,0.18)] backdrop-blur-3xl dark:border-white/10 dark:bg-white/5"
        >
          <div className="space-y-4">
            <h3 className="font-display text-xl text-slate-900 dark:text-white">{demo.title}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">{demo.description}</p>
            <div className="relative h-40 overflow-hidden rounded-2xl border border-dashed border-[#00AEEF]/50 bg-gradient-to-br from-[#00AEEF]/10 via-transparent to-[#9C27B0]/10 dark:border-white/10 dark:from-[#00AEEF]/20">
              <div className="flex h-full items-center justify-center text-xs font-semibold uppercase tracking-[0.3em] text-[#00AEEF]">
                Demo Placeholder
              </div>
            </div>
          </div>
          <button className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#00AEEF] to-[#9C27B0] px-5 py-2 text-sm font-semibold text-white shadow-[0_15px_45px_rgba(0,174,239,0.35)] transition hover:shadow-[0_20px_60px_rgba(156,39,176,0.4)]">
            {demo.cta}
          </button>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

const FeaturesSection = () => (
  <motion.section
    id="features"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={fadeIn}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="space-y-6"
  >
    <SectionHeader
      label="Technologies"
      title="Power Behind SHYAM_AI"
      subtitle="Cutting-edge models, resilient infrastructure, and a modular architecture designed for scale."
    />

    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="grid gap-4 sm:grid-cols-2">
        {techStack.map((item) => (
          <motion.div
            key={item}
            whileHover={{ y: -6 }}
            className="rounded-3xl border border-white/40 bg-white/75 p-5 text-lg font-semibold text-slate-800 shadow-[0_20px_50px_rgba(0,174,239,0.18)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/5 dark:text-white"
          >
            <span className="text-sm uppercase tracking-[0.35em] text-[#00AEEF]/80">Stack</span>
            <p className="mt-4 text-base font-medium text-slate-600 dark:text-slate-300">{item}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        whileHover={{ scale: 1.01 }}
        className="relative overflow-hidden rounded-[30px] border border-white/40 bg-white/70 p-8 shadow-[0_25px_70px_rgba(156,39,176,0.2)] backdrop-blur-3xl dark:border-white/10 dark:bg-white/5"
      >
        <h3 className="font-display text-2xl text-slate-900 dark:text-white">Architecture Flow</h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
          Data, intelligence, automation, and insight form a continuous feedback loop enhanced by SHYAM_AI.
        </p>
        <div className="mt-6 grid gap-4">
          {architectureFlow.map((step, index) => (
            <div
              key={step.title}
              className="relative overflow-hidden rounded-2xl border border-white/30 bg-gradient-to-r from-white/80 to-white/50 p-4 shadow-[0_12px_45px_rgba(0,174,239,0.18)] dark:border-white/10 dark:from-white/10 dark:to-white/5"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9C27B0]/80">Stage {index + 1}</span>
              <p className="mt-2 font-semibold text-slate-800 dark:text-white">{step.title}</p>
              <p className="text-xs text-slate-600 dark:text-slate-300">{step.description}</p>
              {index < architectureFlow.length - 1 && (
                <div className="absolute right-6 top-[50%] hidden h-12 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-[#00AEEF]/60 to-transparent lg:block" />
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </motion.section>
);

const TestimonialsSection = () => (
  <motion.section
    id="testimonials"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={fadeIn}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="space-y-6"
  >
    <SectionHeader
      label="Community"
      title="What Our Users Say"
      subtitle="Trusted by innovators, operators, and builders shaping the intelligent frontier."
    />

    <div className="grid gap-6 md:grid-cols-3">
      {testimonials.map((testimonial) => (
        <motion.div
          key={testimonial.name}
          whileHover={{ y: -6 }}
          className="flex h-full flex-col justify-between rounded-[28px] border border-white/40 bg-white/75 p-6 shadow-[0_25px_65px_rgba(0,174,239,0.18)] backdrop-blur-3xl dark:border-white/10 dark:bg-white/5"
        >
          <div>
            <div className="flex items-center gap-3">
              <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-[#00AEEF]/50 bg-white/60 text-lg font-semibold text-[#00AEEF] shadow-[0_0_35px_rgba(0,174,239,0.45)] dark:border-[#9C27B0]/50 dark:bg-white/10 dark:text-[#9C27B0]">
                <span className="absolute inset-0 rounded-full border border-white/60 dark:border-white/20" />
                {testimonial.name
                  .split(" ")
                  .map((part) => part.charAt(0))
                  .join("")}
              </div>
              <div>
                <p className="text-base font-semibold text-slate-900 dark:text-white">{testimonial.name}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{testimonial.role}</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">“{testimonial.quote}”</p>
          </div>
          <motion.div
            className="mt-6 flex items-center gap-1 text-[#FFB400]"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          >
            {Array.from({ length: 5 }).map((_, index) => (
              <span key={index}>⭐</span>
            ))}
            <span className="ml-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              5.0 Rating
            </span>
          </motion.div>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

const ContactSection = () => (
  <motion.section
    id="contact"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={fadeIn}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="overflow-hidden rounded-[32px] border border-white/40 bg-gradient-to-br from-[#00AEEF]/15 via-[#9C27B0]/15 to-[#673AB7]/20 p-8 shadow-[0_25px_70px_rgba(0,174,239,0.25)] backdrop-blur-3xl dark:border-white/10 dark:from-[#00AEEF]/25 dark:via-[#9C27B0]/20 dark:to-[#050b1f]"
  >
    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <div className="space-y-5 text-white">
        <SectionLabel className="bg-white/10 text-white">Join the Movement</SectionLabel>
        <h2 className="font-display text-3xl text-white sm:text-4xl">Let&apos;s Build the Future Together.</h2>
        <p className="text-sm text-white/80">
          Ready to deploy autonomous agents, intelligent dashboards, or tailored AI copilots? Tell us about your next
          moonshot and we’ll co-create it with you.
        </p>
        <div className="space-y-3 text-sm font-medium">
          <p>📧 info@shyamai.com</p>
          <div className="flex flex-wrap gap-3 text-white/80">
            <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              LinkedIn
            </Link>
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              GitHub
            </Link>
            <Link href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              X (Twitter)
            </Link>
          </div>
        </div>
      </div>

      <form className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <FormField label="Name" placeholder="Enter your name" type="text" />
          <FormField label="Email" placeholder="Enter your email" type="email" />
        </div>
        <FormField label="Message" placeholder="Tell us about your vision" type="textarea" />
        <button
          type="submit"
          className="w-full rounded-full bg-white/90 px-6 py-3 text-sm font-semibold text-[#02010a] shadow-[0_20px_60px_rgba(255,255,255,0.25)] transition hover:bg-white"
        >
          Submit Inquiry
        </button>
      </form>
    </div>
  </motion.section>
);

const Footer = () => (
  <footer className="relative z-10 border-t border-white/40 bg-white/60 py-8 text-center text-sm text-slate-700 backdrop-blur-2xl dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
    <p className="font-semibold text-slate-900 dark:text-slate-100">SHYAM_AI — Innovating the Future of AI Automation.</p>
    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">© 2025 SHYAM_AI | All Rights Reserved</p>
  </footer>
);

const SectionLabel = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <span
    className={`inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-slate-900 shadow-[0_12px_40px_rgba(0,174,239,0.22)] dark:border-white/10 dark:bg-white/10 dark:text-white ${className}`}
  >
    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#00AEEF] to-[#9C27B0]" />
    {children}
  </span>
);

const SectionHeader = ({ title, subtitle, label = "SHYAM_AI" }: { title: string; subtitle: string; label?: string }) => (
  <div className="space-y-4">
    <SectionLabel>{label}</SectionLabel>
    <h2 className="font-display text-3xl text-slate-900 dark:text-white sm:text-4xl">{title}</h2>
    <p className="max-w-3xl text-base text-slate-600 dark:text-slate-300">{subtitle}</p>
  </div>
);

const Stat = ({ label, value, subtext }: { label: string; value: string; subtext: string }) => (
  <div>
    <p className="text-xs uppercase tracking-[0.25em] text-[#00AEEF]">{label}</p>
    <p className="mt-2 text-3xl font-semibold text-slate-900 dark:text-white">{value}</p>
    <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">{subtext}</p>
  </div>
);

const FormField = ({ label, placeholder, type }: { label: string; placeholder: string; type: "text" | "email" | "textarea" }) => (
  <label className="block text-sm font-medium text-white/90">
    {label}
    {type === "textarea" ? (
      <textarea
        placeholder={placeholder}
        rows={4}
        className="mt-2 w-full rounded-2xl border border-white/40 bg-white/15 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/50"
      />
    ) : (
      <input
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-white/40 bg-white/15 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/50"
      />
    )}
  </label>
);
