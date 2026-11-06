"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { usePortfolio } from "@/context/PortfolioContext";
import { portfolioData } from "@/data/portfolioData";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { SkillCard } from "@/components/shared/SkillCard";
import { CareerCard } from "@/components/shared/CareerCard";
import { EducationCard } from "@/components/shared/EducationCard";
import { ContactSection } from "@/components/shared/ContactSection";
import { TestimonialCard } from "@/components/shared/TestimonialCard";

export const FullPageSections: React.FC = () => {
  const { locale, setSelectedProject } = usePortfolio();
  const {
    personalInfo,
    projects,
    skillCategories,
    career,
    education,
    testimonials,
    about,
  } = portfolioData;

  const [activeCategoryFilter, setActiveCategoryFilter] = useState("ALL");

  const categoryFilters = useMemo(() => {
    const cats = new Set<string>();
    projects.forEach((p) => {
      const raw = p.category.fr.toUpperCase();
      const keyword = raw.split(/\s*&\s*/)[0].trim();
      cats.add(keyword);
    });
    return ["ALL", ...Array.from(cats)];
  }, [projects]);

  const filteredProjects =
    activeCategoryFilter === "ALL"
      ? projects
      : projects.filter(
          (p) =>
            p.category.fr.toUpperCase().includes(activeCategoryFilter) ||
            p.category.en.toUpperCase().includes(activeCategoryFilter)
        );

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-16 space-y-24 border-t border-[var(--border-primary)] mt-12">
      {/* ABOUT */}
      <section id="about" className="scroll-mt-24">
        <SectionHeader
          label={locale === "fr" ? "À PROPOS" : "ABOUT"}
          title={about.title[locale]}
          description={
            locale === "fr"
              ? "Qui je suis, mon approche et ce qui me motive."
              : "Who I am, my approach and what drives me."
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: avatar + paragraphs */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-16 h-16 rounded-2xl overflow-hidden border border-[var(--border-primary)] shadow-sm relative bg-[var(--bg-tag)] shrink-0">
                <Image
                  src={personalInfo.avatarUrl}
                  alt={personalInfo.fullName}
                  fill
                  sizes="64px"
                  className="object-cover object-top"
                />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-[var(--text-primary)]">
                  {personalInfo.fullName}
                </h3>
                <p className="font-mono text-xs text-[var(--accent-blue)] font-semibold">
                  {personalInfo.title[locale]}
                </p>
              </div>
            </div>

            {about.paragraphs[locale].map((paragraph, idx) => (
              <p
                key={idx}
                className="text-sm text-[var(--text-secondary)] leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Right: highlights grid */}
          <div className="grid grid-cols-2 gap-3 h-fit">
            {about.highlights.map((h, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-primary)] shadow-2xs text-center"
              >
                <span className="font-display text-2xl font-bold text-[var(--accent-blue)]">
                  {h.value}
                </span>
                <span className="block font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-wider mt-1">
                  {h.label[locale]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projets" className="scroll-mt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <SectionHeader
            label={locale === "fr" ? "RÉALISATIONS" : "PORTFOLIO"}
            title={
              locale === "fr"
                ? "Projets Phares & Systèmes"
                : "Featured Engineering Systems"
            }
            description={
              locale === "fr"
                ? "Conception et déploiement de solutions distribuées, plateformes d'écoute temps réel et ERP hospitaliers."
                : "Architected and delivered distributed platforms, live media DSP pipelines, and healthcare ERPs."
            }
          />

          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-mono shrink-0">
            {categoryFilters.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategoryFilter(cat)}
                className={`px-3.5 py-1.5 rounded-full border transition-all cursor-pointer whitespace-nowrap ${
                  activeCategoryFilter === cat
                    ? "bg-[var(--bg-pill-active)] text-[var(--text-inverted)] border-[var(--bg-pill-active)] shadow-xs"
                    : "bg-[var(--bg-card)] text-[var(--text-secondary)] border-[var(--border-primary)] hover:border-[var(--border-hover)]"
                }`}
              >
                {cat === "ALL"
                  ? locale === "fr"
                    ? `Tous (${projects.length})`
                    : `All (${projects.length})`
                  : cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              locale={locale}
              onExplore={setSelectedProject}
            />
          ))}
        </div>
      </section>

      {/* STACK */}
      <section id="stack" className="scroll-mt-24">
        <SectionHeader
          label={locale === "fr" ? "COMPÉTENCES" : "CORE CAPACITIES"}
          title={
            locale === "fr"
              ? "Stack & Maîtrise Technique"
              : "Engineering Stack & Methodologies"
          }
          description={
            locale === "fr"
              ? "Pratiques d'ingénierie modernes, architectures résilientes et patterns de conception industriels."
              : "Modern engineering standards, resilient architecture, and industrial design patterns."
          }
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat) => (
            <SkillCard key={cat.id} category={cat} locale={locale} />
          ))}
        </div>
      </section>

      {/* CAREER */}
      <section id="parcours" className="scroll-mt-24">
        <SectionHeader
          label={locale === "fr" ? "CHRONOLOGIE" : "EXPERIENCE"}
          title={
            locale === "fr"
              ? "Parcours Professionnel"
              : "Professional Journey"
          }
          description={
            locale === "fr"
              ? "Plus de 8 années d'impact continu : de l'infrastructure réseau au lead development et à l'architecture logicielle."
              : "Over 8 years of continuous technical impact: from infrastructure and operations to lead development and solutions architecture."
          }
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {career.map((c) => (
            <CareerCard key={c.id} career={c} locale={locale} />
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      {testimonials && testimonials.length > 0 && (
        <section id="testimonials" className="scroll-mt-24">
          <SectionHeader
            label={locale === "fr" ? "TÉMOIGNAGES" : "TESTIMONIALS"}
            title={
              locale === "fr"
                ? "Ce qu'ils disent de moi"
                : "What They Say About Me"
            }
            description={
              locale === "fr"
                ? "Retours de collaborateurs, clients et partenaires sur notre travail commun."
                : "Feedback from collaborators, clients and partners on our work together."
            }
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} locale={locale} />
            ))}
          </div>
        </section>
      )}

      {/* EDUCATION */}
      <section id="formation" className="scroll-mt-24">
        <SectionHeader
          label={locale === "fr" ? "ACADÉMIQUE" : "ACADEMIC BACKGROUND"}
          title={
            locale === "fr"
              ? "Formation & Diplômes"
              : "Education & Credentials"
          }
          description={
            locale === "fr"
              ? "Double socle : rigueur scientifique universitaire et immersion d'élite en développement logiciel."
              : "Dual foundation: university academic computer science rigor paired with elite engineering bootcamps."
          }
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((edu) => (
            <EducationCard key={edu.id} education={edu} locale={locale} />
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="p-8 sm:p-12 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-primary)] shadow-sm scroll-mt-24 max-w-4xl mx-auto"
      >
        <ContactSection locale={locale} personalInfo={personalInfo} />
      </section>
    </div>
  );
};
