import React from 'react';
import { AliveProvider } from './context/AliveContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PilaresSection } from './components/PilaresSection';
import { AboutSection } from './components/AboutSection';
import { ImpactSection } from './components/ImpactSection';
import { ProjectsSection } from './components/ProjectsSection';
import { EventsSection } from './components/EventsSection';
import { GallerySection } from './components/GallerySection';
import { ParticipateSection } from './components/ParticipateSection';
import { NewsSection } from './components/NewsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

// Modals
import { ProjectModal } from './components/ProjectModal';
import { EventRegisterModal } from './components/EventRegisterModal';
import { NewsArticleModal } from './components/NewsArticleModal';
import { LightboxModal } from './components/LightboxModal';
import { ParticipateModal } from './components/ParticipateModal';
import { AdminCMSModal } from './components/AdminCMSModal';
import { HistoryModal } from './components/HistoryModal';
import { Toast } from './components/Toast';

export default function App() {
  return (
    <AliveProvider>
      <div className="min-h-screen bg-[#FDFCF8] text-[#1A1A1A] antialiased selection:bg-[#2D5A27] selection:text-white">
        {/* [PROTÓTIPO: BARRA DE NAVEGAÇÃO SUPERIOR FIXA (Header / Navbar)] */}
        <Navbar />

        {/* [PROTÓTIPO: CONTEÚDO PRINCIPAL DA PÁGINA (Dobra a Dobra)] */}
        <main>
          {/* [PROTÓTIPO: DOBRA 1 - HERO / BANNER PRINCIPAL DE ABERTURA] */}
          <Hero />

          {/* [PROTÓTIPO: DOBRA 2 - OS 3 PILARES: SAÚDE, CULTURA E EDUCAÇÃO] */}
          <PilaresSection />

          {/* [PROTÓTIPO: DOBRA 3 - SOBRE NÓS / MANIFESTO & ANATOMIA DO EMBLEMA ALIVE] */}
          <AboutSection />

          {/* [PROTÓTIPO: DOBRA 4 - IMPACTO SOCIAL & MÉTRICAS COM CONTADORES ANIMADOS] */}
          <ImpactSection />

          {/* [PROTÓTIPO: DOBRA 5 - PROJETOS & AÇÕES EM ANDAMENTO COM FILTRO E BUSCA] */}
          <ProjectsSection />

          {/* [PROTÓTIPO: DOBRA 6 - AGENDA VIVA / EVENTOS & WORKSHOPS COM INSCRIÇÃO] */}
          <EventsSection />

          {/* [PROTÓTIPO: DOBRA 7 - GALERIA VISUAL & FOTOS DAS AÇÕES COM LIGHTBOX] */}
          <GallerySection />

          {/* [PROTÓTIPO: DOBRA 8 - FAÇA PARTE / ENGAJAMENTO (4 CAMINHOS DE PARTICIPAÇÃO)] */}
          <ParticipateSection />

          {/* [PROTÓTIPO: DOBRA 9 - CONTEÚDOS & NOTÍCIAS / BLOG EDITORIAL] */}
          <NewsSection />

          {/* [PROTÓTIPO: DOBRA 10 - CANAL DE CONTATO, FORMULÁRIO E FAQ COM ACORDEÃO] */}
          <ContactSection />
        </main>

        {/* [PROTÓTIPO: RODAPÉ INSTITUCIONAL (Footer com Links, Newsletter e Logo)] */}
        <Footer />

        {/* [PROTÓTIPO: MODAIS INTERATIVOS & OVERLAYS DO SISTEMA] */}
        {/* Modal com detalhes completos do projeto selecionado */}
        <ProjectModal />
        {/* Modal de inscrição para vagas no evento selecionado */}
        <EventRegisterModal />
        {/* Modal de leitura imersiva de artigo/notícia */}
        <NewsArticleModal />
        {/* Modal Lightbox de ampliação de fotos da galeria */}
        <LightboxModal />
        {/* Modal de formulário de inscrição em 'Faça Parte' (4 categorias) */}
        <ParticipateModal />
        {/* Modal do Painel Administrativo / CMS para edição de dados */}
        <AdminCMSModal />
        {/* Modal de histórico de eventos e projetos anteriores */}
        <HistoryModal />

        {/* [PROTÓTIPO: NOTIFICAÇÃO GLOBAL FLUTUANTE (Feedback visual / Toast)] */}
        <Toast />
      </div>
    </AliveProvider>
  );
}
