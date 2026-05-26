import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="bg-hero relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 pointer-events-none"
          style={{ backgroundImage: "url('/fundo-hero.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1B0F3F]/70 via-[#2A1B5E]/80 to-[#3D2B7A]/95 pointer-events-none" />
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(107,71,201,0.25),transparent_60%)]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 pt-10 pb-20 md:pt-16 md:pb-28">
          <Reveal direction="down" delay={0}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-[11px] font-medium uppercase tracking-wider text-white/90 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              Mesa Redonda · Vagas Limitadas
            </div>
          </Reveal>

          <Reveal direction="up" delay={120}>
            <h1 className="mt-8 text-3xl font-bold leading-tight text-white md:text-5xl lg:text-[3.25rem]">
              NR-01 no Setor da Saúde:
              <br />
              <span className="font-normal text-white/90">
                o que sua instituição precisa fazer agora
                <br />
                para não virar passivo jurídico,
                <br />
                operacional e humano.
              </span>
            </h1>
          </Reveal>

          <Reveal direction="up" delay={240}>
            <p className="mt-6 max-w-3xl text-sm leading-relaxed text-white/70 md:text-base">
              Um encontro técnico e executivo para diretores, RHs hospitalares e lideranças do SESMT
              entenderem, na prática, como cumprir a nova exigência da NR-01 sobre riscos
              psicossociais — e transformar saúde organizacional em vantagem operacional.
            </p>
          </Reveal>

          <Reveal direction="up" delay={320}>
            <p className="mt-6 text-white font-medium">
              Vitória/ES · 16 de Junho · 08h30–11h40
            </p>
          </Reveal>

          <Reveal direction="up" delay={400}>
            <div className="mt-6 flex flex-wrap gap-3">
              <div className="rounded-md border border-white/20 bg-white/5 px-4 py-2 text-xs text-white/85 backdrop-blur">
                Decisores do setor de saúde
              </div>
              <div className="rounded-md border border-white/20 bg-white/5 px-4 py-2 text-xs text-white/85 backdrop-blur">
                3 especialistas + mediação executiva
              </div>
            </div>
          </Reveal>

          <Reveal direction="up" delay={500}>
            <a
              href="https://elo-forms.lovable.app/f/evento-rh-saude-173ca-syue-nebj"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-md bg-white px-8 py-4 text-sm font-bold tracking-wide text-[#2A1B5E] shadow-lg transition hover:bg-white/95"
            >
              QUERO GARANTIR MINHA VAGA
            </a>
          </Reveal>
        </div>
      </section>

      {/* REALIDADE E URGÊNCIA */}
      <section className="bg-[#F4F2F8] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal direction="up">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500">
              Realidade e Urgência
            </p>
            <h2 className="mt-4 text-2xl font-bold text-[#1B0F3F] md:text-3xl">
              A fiscalização já começou.
              <br />
              Sua instituição está preparada?
            </h2>

            <p className="mt-6 max-w-4xl text-sm leading-relaxed text-gray-600">
              A saúde mental agora integra oficialmente os riscos ocupacionais. Hospitais, clínicas
              e seus diretores podem ser responsabilizados juridicamente por casos de burnout,
              afastamentos por exaustão e conflitos não tratados. A NR-01 exige diagnóstico, plano
              de ação e tratamento contínuo do risco.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: "⚙️",
                title: "Operacional",
                text: "Equipes esgotadas, escalas que não fecham, absenteísmo crescente e turnover.",
              },
              {
                icon: "✚",
                title: "Assistencial",
                text: "Conflitos entre lideranças e liderados impactando a segurança do paciente.",
              },
              {
                icon: "⚖",
                title: "Jurídico",
                text: "Ações trabalhistas por assédio e exaustão — risco de responsabilização institucional.",
              },
            ].map((card, i) => (
              <Reveal key={card.title} direction="up" delay={i * 120}>
                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-card h-full">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#F4F2F8] text-[#5B3FB8]">
                    <span className="text-lg">{card.icon}</span>
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-[#1B0F3F]">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{card.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal direction="up" delay={200}>
            <blockquote className="mt-10 border-l-4 border-[#5B3FB8] pl-5 text-sm italic text-gray-700 md:text-base">
              &ldquo;Risco psicossocial não tratado vira afastamento, conflito,
              <br className="hidden md:block" />
              perda assistencial e passivo institucional.&rdquo;
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* PROGRAMA */}
      <section className="bg-panel py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal direction="up">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">
              O Programa do Evento
            </p>
            <h2 className="mt-4 text-2xl font-bold text-white md:text-3xl">
              Um painel executivo. Três frentes técnicas
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                n: "01",
                title: "Diagnóstico Psicossocial e Plano de Ação na NR-01",
                speaker: "Luciana Roberty",
                text: "O que a norma exige, metodologias validadas (COPSOQ) e construção do plano de ação.",
              },
              {
                n: "02",
                title: "O Papel da Liderança nos Riscos Psicossociais",
                speaker: "Raphael Ruffo",
                text: "Por que o líder é o maior fator de risco — ou de proteção — das equipes assistenciais.",
              },
              {
                n: "03",
                title: "Saúde Laboral, Ergonomia e Prevenção",
                speaker: "Camila Salles",
                text: "Conexão entre desgaste físico, fadiga e esgotamento mental nas equipes hospitalares.",
              },
            ].map((card, i) => (
              <Reveal key={card.n} direction="up" delay={i * 140}>
                <div className="rounded-lg bg-white p-6 shadow-lg h-full">
                  <div className="text-6xl font-bold text-[#5B3FB8] leading-none md:text-7xl">{card.n}</div>
                  <h3 className="mt-3 text-base font-semibold leading-snug text-[#1B0F3F]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-xs font-semibold text-[#5B3FB8]">{card.speaker}</p>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{card.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal direction="up" delay={200}>
            <div className="mt-8 rounded-lg border border-white/20 bg-white/5 p-6 backdrop-blur">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
                Mesa-Redonda Integrada
              </p>
              <p className="mt-2 text-lg font-semibold text-white md:text-xl">
                &ldquo;O que os hospitais ainda não estão vendo sobre a NR-01&rdquo;
              </p>
              <p className="mt-2 text-sm text-white/70">
                Debate aberto com os três especialistas, mediado por Kleber Alves.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PÚBLICO-ALVO */}
      <section className="bg-[#F4F2F8] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal direction="up">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500">
              Público-Alvo
            </p>
            <h2 className="mt-4 text-2xl font-bold text-[#1B0F3F] md:text-3xl">
              Conteúdo voltado para líderes.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-3 md:grid-cols-2">
            {[
              "Diretores de Hospitais e Clínicas",
              "Gerentes e Coordenadores de RH Hospitalar",
              "Profissionais do SESMT",
              "Engenheiros e Técnicos de Segurança",
              "Coordenadores Assistenciais",
              "Áreas de Compliance e Jurídico Hospitalar",
            ].map((item, i) => (
              <Reveal key={item} direction={i % 2 === 0 ? "right" : "left"} delay={i * 70}>
                <div className="flex items-center gap-3 rounded-md border border-gray-200 bg-white px-4 py-3 shadow-sm">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#5B3FB8] text-[10px] font-bold text-white">
                    ✓
                  </span>
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* QUEM CONDUZ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal direction="up">
            <p className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500">
              Quem Conduz
            </p>
            <h2 className="mt-4 text-center text-2xl font-bold text-[#1B0F3F] md:text-3xl">
              Especialistas à frente do painel.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {[
              { name: "Kleber Alves", role: "Mediação", img: "/proporcionais/kleber.png", offset: "translate-y-6" },
              { name: "Luciana Roberty", role: "Comportamento Organizacional", img: "/proporcionais/luciana.png", offset: "" },
              { name: "Raphael Ruffo", role: "Liderança e Cultura", img: "/proporcionais/raphael.png", offset: "" },
              { name: "Camila Salles", role: "Saúde Ocupacional", img: "/fotocamila%20(1).png", offset: "" },
            ].map((person, i) => (
              <Reveal key={person.name} direction="up" delay={i * 130}>
                <div className="flex flex-col items-center justify-end text-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={person.img}
                    alt={person.name}
                    className={`h-72 w-auto md:h-80 ${person.offset}`}
                  />
                  <p className="mt-4 text-base font-semibold text-[#1B0F3F]">{person.name}</p>
                  <p className="mt-1 text-xs text-gray-500">{person.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AGENDA */}
      <section className="bg-[#F4F2F8] py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center pointer-events-none"
          style={{ backgroundImage: "url('/ajudadetalhada.png')" }}
        />
        <div className="absolute inset-0 bg-[#F4F2F8]/80 pointer-events-none" />
        <div className="relative mx-auto max-w-6xl px-6">
          <Reveal direction="up">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500">
              Agenda Detalhada
            </p>
            <h2 className="mt-4 text-2xl font-bold text-[#1B0F3F] md:text-3xl">
              16 de Junho — A programação completa.
            </h2>
          </Reveal>

          <div className="mt-10 space-y-4">
            {[
              { time: "08h30", text: "Recepção, credenciamento e welcome coffee" },
              { time: "09h15", text: "Abertura institucional — Kleber" },
              { time: "09h30", text: "Painel Técnico — Luciana, Raphael, Camila" },
              { time: "10h15", text: "Mesa-redonda e debate integrado" },
              { time: "10h45", text: "Apresentação de soluções práticas Elo People" },
              { time: "11h05", text: "Networking, ativação com QR Code" },
              { time: "11h40", text: "Fim oficial do evento" },
              { time: "12h00", text: "Criação da Comunidade NR-01 na Saúde" },
            ].map((item, i) => (
              <Reveal key={item.time} direction="right" delay={i * 60}>
                <div className="flex items-center gap-6 rounded-md border border-gray-200 bg-white px-6 py-4 shadow-sm">
                  <span className="text-xl font-bold text-[#1B0F3F] w-20">{item.time}</span>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#5B3FB8] text-xs font-bold text-white">
                    ›
                  </span>
                  <span className="text-sm text-gray-700">{item.text}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="inscricao" className="bg-[#F4F2F8] py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal direction="up">
            <h2 className="text-2xl font-bold text-[#1B0F3F] md:text-3xl">
              Garanta sua vaga agora.
            </h2>
          </Reveal>
          <Reveal direction="up" delay={150}>
            <a
              href="https://elo-forms.lovable.app/f/evento-rh-saude-173ca-syue-nebj"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full max-w-2xl items-center justify-center rounded-md bg-panel px-8 py-5 text-sm font-bold tracking-wide text-white shadow-lg transition hover:opacity-95"
            >
              FAÇA SUA INSCRIÇÃO
            </a>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-footer py-10 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal direction="up">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="h-10 overflow-visible">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/logo-elo-branca.png"
                    alt="Elo People"
                    className="h-10 w-auto origin-left scale-[2.2]"
                  />
                </div>
                <p className="mt-3 text-xs text-white/60">Vitória/ES · @eloehealth</p>
              </div>
              <p className="text-xs text-white/60">
                A Elo People é uma unidade de negócios do hub de soluções para operações de saúde Elo e-Health.
              </p>
              <p className="text-xs text-white/60">
                © 2026 Elo e-Health · NR-01 no Setor da Saúde
              </p>
            </div>
          </Reveal>
        </div>
      </footer>
    </main>
  );
}
