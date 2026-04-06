/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Monitor, Code, TrendingUp, Smartphone, Gift, CheckCircle2, ArrowRight } from 'lucide-react';
import ThreeBackground from './components/ThreeBackground';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const valueRef = useRef<HTMLDivElement>(null);
  const extrasRef = useRef<HTMLDivElement>(null);
  const plansRef = useRef<HTMLDivElement>(null);
  const authorityRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero Animation
    const heroCtx = gsap.context(() => {
      gsap.from('.hero-text', {
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.2
      });
    }, heroRef);

    // Benefits Animation
    const benefitsCtx = gsap.context(() => {
      gsap.from('.benefit-card', {
        scrollTrigger: {
          trigger: benefitsRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out'
      });
    }, benefitsRef);

    // Value Animation
    const valueCtx = gsap.context(() => {
      gsap.from('.value-content', {
        scrollTrigger: {
          trigger: valueRef.current,
          start: 'top 75%',
        },
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: 'back.out(1.5)'
      });
    }, valueRef);

    // Extras Animation
    const extrasCtx = gsap.context(() => {
      gsap.from('.extra-item', {
        scrollTrigger: {
          trigger: extrasRef.current,
          start: 'top 80%',
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out'
      });
    }, extrasRef);

    // Plans Animation
    const plansCtx = gsap.context(() => {
      gsap.from('.plan-card', {
        scrollTrigger: {
          trigger: plansRef.current,
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out'
      });
    }, plansRef);

    // Authority Animation
    const authorityCtx = gsap.context(() => {
      gsap.from('.authority-text', {
        scrollTrigger: {
          trigger: authorityRef.current,
          start: 'top 85%',
        },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });
    }, authorityRef);

    return () => {
      heroCtx.revert();
      benefitsCtx.revert();
      valueCtx.revert();
      extrasCtx.revert();
      plansCtx.revert();
      authorityCtx.revert();
    };
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-neon selection:text-dark">
      <ThreeBackground />

      {/* 1. HERO SECTION */}
      <section ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-32 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark/50 to-dark z-0 pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <div className="hero-text inline-block px-4 py-1.5 mb-6 rounded-full glass-panel text-sm font-medium tracking-wider uppercase text-neon border-neon/30">
            Proposta Comercial Exclusiva
          </div>
          
          <h1 className="hero-text text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Oferta Exclusiva para <br className="hidden md:block" />
            <span className="text-gradient">Hugo Modas</span>
          </h1>
          
          <p className="hero-text text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl font-light">
            Transforme sua presença digital com uma solução profissional, moderna e focada em resultados.
          </p>
          
          <a href="https://wa.me/5531999408496?text=Ol%C3%A1%2C%20equipe%20da%20DS%20Company!%20Analisei%20a%20proposta%20da%20Hugo%20Modas%20e%20estou%20pronto(a)%20para%20dar%20o%20start%20no%20projeto.%20Quero%20realizar%20o%20pagamento%20dos%2050%25%20iniciais%20para%20come%C3%A7armos%20o%20desenvolvimento!" target="_blank" rel="noopener noreferrer" className="hero-text btn-solid-neon px-8 py-4 rounded-full text-lg flex items-center gap-2 group inline-flex">
            Quero iniciar o projeto
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* 2. SEÇÃO DE BENEFÍCIOS */}
      <section ref={benefitsRef} className="py-24 px-6 relative z-10 bg-dark/80">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">O que você vai receber</h2>
            <div className="w-20 h-1 bg-neon mx-auto rounded-full opacity-50" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Monitor, title: "Landing Page Profissional", desc: "Design premium que transmite confiança." },
              { icon: Code, title: "Sistema Personalizado", desc: "Desenvolvido sob medida para suas necessidades." },
              { icon: TrendingUp, title: "Focado em Conversão", desc: "Estrutura otimizada para gerar mais vendas." },
              { icon: Smartphone, title: "100% Responsivo", desc: "Experiência perfeita em celulares e tablets." }
            ].map((benefit, i) => (
              <div key={i} className="benefit-card glass-panel p-8 rounded-2xl flex flex-col items-start hover:border-neon/50 transition-colors group">
                <div className="p-3 rounded-xl bg-neon/10 text-neon mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SEÇÃO DE VALOR */}
      <section ref={valueRef} className="py-32 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="value-content glass-panel glow-box p-12 md:p-20 rounded-3xl relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon to-transparent opacity-50" />
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-neon/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-neon/20 rounded-full blur-3xl" />

            <h2 className="text-3xl md:text-4xl font-bold mb-8">Investimento Único</h2>
            
            <div className="flex flex-col items-center justify-center gap-2 mb-8">
              <span className="text-2xl text-gray-500 line-through decoration-red-500/50 decoration-2">
                De R$ 1.000
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-6xl md:text-8xl font-bold text-neon tracking-tighter">
                  R$ 750
                </span>
              </div>
            </div>
            
            <p className="text-xl text-gray-300 max-w-lg mx-auto mb-8">
              Um valor especial e exclusivo para iniciarmos nossa parceria de sucesso.
            </p>
            
            <div className="inline-block bg-dark/50 border border-neon/30 rounded-2xl p-6 backdrop-blur-sm text-left">
              <h4 className="text-neon font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" /> Condições de Pagamento
              </h4>
              <p className="text-gray-300 space-y-2">
                <span className="block"><strong className="text-white">50% de entrada</strong> para início imediato do desenvolvimento.</span>
                <span className="block"><strong className="text-white">50% na entrega</strong> com o projeto 100% finalizado e aprovado.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SEÇÃO DE BENEFÍCIOS EXTRAS */}
      <section ref={extrasRef} className="py-24 px-6 relative z-10 bg-dark/80 border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Bônus Exclusivos</h2>
              <p className="text-gray-400 text-lg mb-8">
                Fechando agora, você garante vantagens que vão acelerar ainda mais o seu crescimento digital.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="extra-item glass-panel p-6 rounded-2xl flex items-center gap-6 border-l-4 border-l-neon">
                <div className="w-12 h-12 rounded-full bg-neon/10 flex items-center justify-center shrink-0">
                  <Gift className="w-6 h-6 text-neon" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">3 Meses Grátis</h3>
                  <p className="text-gray-400">Sistema sem custo de hospedagem inicial</p>
                </div>
              </div>
              
              <div className="extra-item glass-panel p-6 rounded-2xl flex items-center gap-6 border-l-4 border-l-neon">
                <div className="w-12 h-12 rounded-full bg-neon/10 flex items-center justify-center shrink-0">
                  <Gift className="w-6 h-6 text-neon" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">1 Ano Grátis</h3>
                  <p className="text-gray-400">Hospedagem da Landing Page por nossa conta</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SEÇÃO DE PLANOS FUTUROS */}
      <section ref={plansRef} className="py-32 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Transparência Total</h2>
            <p className="text-gray-400">Custos de manutenção após o período de gratuidade</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="plan-card glass-panel p-8 rounded-3xl text-center">
              <h3 className="text-2xl font-semibold mb-2">Sistema</h3>
              <div className="text-4xl font-bold text-white mb-6">R$ 100<span className="text-lg text-gray-500 font-normal">/mês</span></div>
              <ul className="space-y-3 text-left text-gray-400 mb-8">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-neon" /> Hospedagem premium</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-neon" /> Suporte técnico</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-neon" /> Backups diários</li>
              </ul>
            </div>

            <div className="plan-card glass-panel p-8 rounded-3xl text-center">
              <h3 className="text-2xl font-semibold mb-2">Landing Page</h3>
              <div className="text-4xl font-bold text-white mb-6">R$ 50<span className="text-lg text-gray-500 font-normal">/mês</span></div>
              <ul className="space-y-3 text-left text-gray-400 mb-8">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-neon" /> Servidor de alta velocidade</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-neon" /> Certificado SSL (Segurança)</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-neon" /> Manutenção preventiva</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SEÇÃO DE AUTORIDADE & 7. CTA FINAL */}
      <section ref={authorityRef} className="py-32 px-6 relative z-10 bg-gradient-to-t from-dark via-dark/90 to-transparent">
        <div className="max-w-3xl mx-auto text-center">
          <div className="authority-text mb-16">
            <p className="text-sm tracking-widest uppercase text-gray-500 mb-4">Desenvolvido por</p>
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">DS Company</h2>
            <p className="text-neon text-lg">Especialistas em soluções digitais de alto impacto</p>
          </div>

          <div className="authority-text glass-panel p-12 rounded-3xl border-neon/20 glow-box">
            <h3 className="text-3xl md:text-5xl font-bold mb-6">Pronto para dar o próximo passo?</h3>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Para iniciarmos o desenvolvimento da sua nova plataforma hoje mesmo, basta realizar o pagamento da taxa de 50% de entrada. Clique no botão abaixo para falar diretamente conosco no WhatsApp.
            </p>
            <a href="https://wa.me/5531999408496?text=Ol%C3%A1%2C%20equipe%20da%20DS%20Company!%20Analisei%20a%20proposta%20da%20Hugo%20Modas%20e%20estou%20pronto(a)%20para%20dar%20o%20start%20no%20projeto.%20Quero%20realizar%20o%20pagamento%20dos%2050%25%20iniciais%20para%20come%C3%A7armos%20o%20desenvolvimento!" target="_blank" rel="noopener noreferrer" className="btn-solid-neon px-10 py-5 rounded-full text-xl w-full sm:w-auto flex items-center justify-center gap-3 mx-auto group inline-flex">
              Pagar 50% e Iniciar Projeto
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 text-center text-gray-600 text-sm relative z-10 bg-dark">
        <p>© {new Date().getFullYear()} DS Company. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
