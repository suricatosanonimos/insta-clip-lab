import { createFileRoute } from "@tanstack/react-router";
import {
  Sparkles,
  Wand2,
  Captions,
  Crop,
  Music2,
  Zap,
  Upload,
  Settings2,
  Download,
  Play,
  ArrowRight,
  Eye,
  Heart,
  Clapperboard,
} from "lucide-react";
import heroOrb from "@/assets/hero-orb.jpg";
import clipMockup from "@/assets/clip-mockup.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clip Engine — Vídeos longos em Shorts & Reels com IA" },
      {
        name: "description",
        content:
          "Transforme vídeos longos em Shorts e Reels virais automaticamente com IA. Cortes inteligentes, legendas dinâmicas e enquadramento perfeito.",
      },
      { property: "og:title", content: "Clip Engine — Shorts & Reels com IA" },
      {
        property: "og:description",
        content: "Crie conteúdo viral com o poder da IA.",
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen text-foreground">
      <Nav />
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <Showcase />
      <CTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-2xl glass px-5 py-3">
        <a href="#" className="flex items-center gap-2 font-bold">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary shadow-glow">
            <Clapperboard className="h-5 w-5 text-primary-foreground" />
          </span>
          <span className="text-lg tracking-tight">Clip Engine</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#features" className="hover:text-foreground transition-colors">Recursos</a>
          <a href="#how" className="hover:text-foreground transition-colors">Como funciona</a>
          <a href="#showcase" className="hover:text-foreground transition-colors">Exemplos</a>
          <a href="#pricing" className="hover:text-foreground transition-colors">Preços</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="#" className="hidden text-sm text-muted-foreground hover:text-foreground sm:block">Entrar</a>
          <a
            href="#cta"
            className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
          >
            Começar grátis <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-28">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-coral opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-coral" />
            </span>
            ✨ Nova atualização 2.0 — Multi-idiomas
          </span>

          <h1 className="mt-6 text-5xl font-black tracking-tight md:text-7xl">
            Vídeos longos em{" "}
            <span className="text-gradient">Shorts & Reels</span>{" "}
            automaticamente.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            A IA do Clip Engine identifica os melhores momentos, gera legendas
            dinâmicas e entrega clipes prontos para viralizar em segundos.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#cta"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
            >
              <Play className="h-4 w-4 fill-current" />
              Criar meu primeiro clipe
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#showcase"
              className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3 font-semibold transition-colors hover:bg-accent"
            >
              Ver exemplos
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex -space-x-2">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-8 w-8 rounded-full border-2 border-background bg-gradient-primary"
                  style={{ opacity: 0.5 + i * 0.15 }}
                />
              ))}
            </div>
            <span>
              <span className="font-bold text-foreground">+12.000</span> criadores já usam
            </span>
          </div>
        </div>

        <div className="relative animate-fade-up [animation-delay:120ms]">
          <div className="absolute inset-0 -z-10 blur-3xl opacity-60">
            <div className="h-full w-full rounded-full bg-gradient-primary" />
          </div>
          <img
            src={heroOrb}
            alt="Clip Engine AI"
            width={1024}
            height={1024}
            className="mx-auto w-full max-w-lg animate-float rounded-3xl shadow-elegant"
          />
          <div className="absolute -bottom-6 -left-2 hidden glass rounded-2xl p-4 shadow-card md:flex items-center gap-3">
            <Captions className="h-5 w-5 text-gold" />
            <div className="text-sm">
              <div className="font-semibold">Legendas geradas</div>
              <div className="text-xs text-muted-foreground">em 12 idiomas</div>
            </div>
          </div>
          <div className="absolute -top-4 -right-2 hidden glass rounded-2xl p-4 shadow-card md:flex items-center gap-3">
            <Zap className="h-5 w-5 text-coral" />
            <div className="text-sm">
              <div className="font-semibold">12 clipes</div>
              <div className="text-xs text-muted-foreground">em 90 segundos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { v: "10M+", l: "Clipes gerados" },
    { v: "98%", l: "Precisão da IA" },
    { v: "12x", l: "Mais rápido" },
    { v: "4.9★", l: "Avaliação" },
  ];
  return (
    <section className="mx-auto max-w-6xl px-6 pb-8">
      <div className="grid grid-cols-2 gap-4 rounded-3xl glass p-6 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.l} className="text-center">
            <div className="text-3xl font-black md:text-4xl text-gradient">{s.v}</div>
            <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Features() {
  const items = [
    { icon: Wand2, title: "Cortes com IA", desc: "Detecta os momentos mais virais do seu vídeo automaticamente." },
    { icon: Captions, title: "Legendas dinâmicas", desc: "Estilos modernos com sincronização perfeita por palavra." },
    { icon: Crop, title: "Auto-framing", desc: "Reenquadra para 9:16 mantendo o foco no rosto e na ação." },
    { icon: Music2, title: "Trilhas sugeridas", desc: "Biblioteca de músicas que combinam com o tom do clipe." },
    { icon: Sparkles, title: "Títulos com IA", desc: "Gera títulos otimizados para CTR em cada plataforma." },
    { icon: Zap, title: "Processamento rápido", desc: "Renderização em nuvem com GPUs, 12x mais rápido." },
  ];
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-black md:text-5xl">
          Tudo que você precisa para <span className="text-gradient">viralizar</span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          Uma plataforma completa para transformar conteúdo longo em clipes que performam.
        </p>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="group relative rounded-3xl glass p-6 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-glow"
          >
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-primary shadow-glow">
              <Icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="mt-5 text-xl font-bold">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { icon: Upload, title: "Envie seu vídeo", desc: "YouTube, MP4, ou link direto. Sem limite de duração." },
    { icon: Settings2, title: "A IA faz a mágica", desc: "Análise de áudio, rosto e narrativa para selecionar os melhores trechos." },
    { icon: Download, title: "Baixe e publique", desc: "Clipes prontos em 9:16, com legendas e títulos otimizados." },
  ];
  return (
    <section id="how" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-black md:text-5xl">Como funciona</h2>
        <p className="mt-4 text-muted-foreground">Três passos. Zero edição manual.</p>
      </div>

      <div className="relative mt-16 grid gap-8 md:grid-cols-3">
        <div className="pointer-events-none absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent md:block" />
        {steps.map((s, i) => (
          <div key={s.title} className="relative text-center">
            <div className="relative mx-auto grid h-24 w-24 place-items-center rounded-full bg-gradient-primary shadow-glow animate-pulse-glow">
              <s.icon className="h-9 w-9 text-primary-foreground" />
              <span className="absolute -right-1 -top-1 grid h-8 w-8 place-items-center rounded-full glass text-sm font-bold">
                {i + 1}
              </span>
            </div>
            <h3 className="mt-6 text-xl font-bold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Showcase() {
  const clips = [
    { title: "Podcast — Mindset", views: "1.2M", likes: "84K", grad: "from-violet to-coral" },
    { title: "Aula — Marketing", views: "640K", likes: "32K", grad: "from-primary to-violet" },
    { title: "Entrevista CEO", views: "2.4M", likes: "120K", grad: "from-coral to-gold" },
    { title: "Live — Q&A", views: "380K", likes: "18K", grad: "from-violet to-primary" },
  ];
  return (
    <section id="showcase" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-4xl font-black md:text-5xl">
            Resultados que <span className="text-gradient">falam por si</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Mais de 10 milhões de clipes criados, gerando bilhões de visualizações
            para criadores em todo o mundo.
          </p>
          <img
            src={clipMockup}
            alt="Exemplo de clipe gerado"
            width={1024}
            height={1024}
            loading="lazy"
            className="mt-8 mx-auto w-72 drop-shadow-2xl animate-float"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {clips.map((c) => (
            <div
              key={c.title}
              className="group relative aspect-[9/16] overflow-hidden rounded-3xl glass shadow-card transition-transform hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${c.grad} opacity-80`} />
              <div className="absolute inset-0 grid place-items-center">
                <button className="grid h-14 w-14 place-items-center rounded-full glass transition-transform group-hover:scale-110">
                  <Play className="h-6 w-6 fill-current text-foreground" />
                </button>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4">
                <div className="text-sm font-bold">{c.title}</div>
                <div className="mt-1 flex items-center gap-3 text-xs text-foreground/90">
                  <span className="flex items-center gap-1"><Eye className="h-3 w-3" />{c.views}</span>
                  <span className="flex items-center gap-1"><Heart className="h-3 w-3" />{c.likes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="cta" className="mx-auto max-w-6xl px-6 py-24">
      <div className="relative overflow-hidden rounded-[2.5rem] p-12 text-center shadow-elegant md:p-20">
        <div className="absolute inset-0 -z-10 bg-gradient-primary" />
        <div className="absolute inset-0 -z-10 opacity-30"
             style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 60%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

        <h2 className="text-4xl font-black tracking-tight text-primary-foreground md:text-6xl">
          Pronto para viralizar?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-primary-foreground/85">
          Crie sua conta grátis e gere seus primeiros 3 clipes em menos de 2 minutos.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-xl bg-background px-7 py-3.5 font-bold text-foreground shadow-glow transition-transform hover:scale-105"
          >
            <Sparkles className="h-4 w-4" />
            Começar grátis
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-xl border border-primary-foreground/30 px-7 py-3.5 font-semibold text-primary-foreground hover:bg-primary-foreground/10"
          >
            Falar com vendas
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 py-12">
      <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row">
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-primary">
            <Clapperboard className="h-4 w-4 text-primary-foreground" />
          </span>
          <span className="font-semibold text-foreground">Clip Engine</span>
        </div>
        <p>© 2026 Clip Engine. Crie conteúdo viral com o poder da IA.</p>
      </div>
    </footer>
  );
}
