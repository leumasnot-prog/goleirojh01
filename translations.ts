// Translation system for PT/EN

export type Language = 'pt' | 'en';

export const translations = {
    pt: {
        // Navigation
        nav: {
            inicio: 'Início',
            stats: 'Estatísticas',
            perfil: 'Perfil',
            midia: 'Mídia',
            contato: 'Contato',
        },

        // Hero
        hero: {
            cta: 'Melhores Momentos',
            scroll: 'Scroll',
        },

        // Stats
        stats: {
            title: 'MÉTRICAS TÉCNICAS',
            subtitle: 'ENGINE PERFORMANCE',
            season: 'Temporada 2025/2026',
            calibration: 'Real-time data calibration v2.0',
            matches: 'Jogos Profissionais',
            minutes: 'Minutos Totais',
            accuracy: 'Acurácia em Lançamentos',
            accuracyDesc: 'Goleiro com excelente saída de bola',
            vsAverage: '+6.3% VS MÉDIA',
            prevSeason: 'Temporada Anterior',
            radarScan: 'RADAR SCAN',
            // Radar chart labels
            agility: 'Agilidade',
            goalExit: 'Saída de Gol',
            reflexes: 'Reflexos',
            footwork: 'Jogo com Pés',
            positioning: 'Posicionamento',
            leadership: 'Liderança',
        },

        // Bio
        bio: {
            title: 'O Perfil',
            subtitle: 'PERFIL TÉCNICO',
            name: 'Nome',
            position: 'Posição',
            secondaryPos: 'Posição Sec.',
            nationality: 'Nacionalidade',
            age: 'Idade',
            years: 'anos',
            physical: 'Físico',
            quote: 'Segurança nas Mãos, Visão nos Pés',
            description: 'Mais do que defender, Jhonatan constrói. Um goleiro de reflexos rápidos e técnica apurada sob as traves, que se transforma no primeiro armador do time quando tem a posse. Canhoto e com excelente leitura tática, oferece precisão milimétrica em lançamentos e passes curtos.',
        },

        // Gallery
        gallery: {
            title: 'Sala de Mídia',
            subtitle: 'GALERIA DE MÍDIA',
            viewAlbum: 'Ver álbum completo',
            highlightClip: 'Clipe de Destaques',
            seasonHighlights: 'TEMPORADA 2025 - MELHORES MOMENTOS',
        },

        // Footer
        footer: {
            title: 'Entre em Contato',
            subtitle: 'CONTRATAÇÃO & SCOUTING',
            description: 'Para propostas oficiais, envio de convites para testes ou agendamento de entrevistas, entre em contato através dos canais oficiais.',
            formName: 'Nome Completo',
            formNamePlaceholder: 'Ex: José Silva (Scout)',
            formClub: 'Clube / Agência',
            formClubPlaceholder: 'Ex: Olheiro Premier League',
            formMessage: 'Mensagem',
            formMessagePlaceholder: 'Descreva o propósito do contato...',
            sendMessage: 'Enviar Mensagem',
            rights: '© 2026 Jhonatan. Todos os direitos reservados.',
            legal: 'Jurídico',
            privacy: 'Privacidade',
        },

        // Athlete data labels
        athlete: {
            goalkeeper: 'Goleiro',
            leftBack: 'Lateral Esquerdo (LE)',
            leftFooted: 'Canhoto',
            brazilian: 'Brasileiro',
        }
    },

    en: {
        // Navigation
        nav: {
            inicio: 'Home',
            stats: 'Statistics',
            perfil: 'Profile',
            midia: 'Media',
            contato: 'Contact',
        },

        // Hero
        hero: {
            cta: 'Best Moments',
            scroll: 'Scroll',
        },

        // Stats
        stats: {
            title: 'TECHNICAL METRICS',
            subtitle: 'ENGINE PERFORMANCE',
            season: 'Season 2025/2026',
            calibration: 'Real-time data calibration v2.0',
            matches: 'Professional Matches',
            minutes: 'Total Minutes',
            accuracy: 'Passing Accuracy',
            accuracyDesc: 'Goalkeeper with excellent ball distribution',
            vsAverage: '+6.3% VS AVERAGE',
            prevSeason: 'Previous Season',
            radarScan: 'RADAR SCAN',
            // Radar chart labels
            agility: 'Agility',
            goalExit: 'Goal Exit',
            reflexes: 'Reflexes',
            footwork: 'Footwork',
            positioning: 'Positioning',
            leadership: 'Leadership',
        },

        // Bio
        bio: {
            title: 'The Profile',
            subtitle: 'TECHNICAL PROFILE',
            name: 'Name',
            position: 'Position',
            secondaryPos: 'Secondary Pos.',
            nationality: 'Nationality',
            age: 'Age',
            years: 'years',
            physical: 'Physical',
            quote: 'Safe Hands, Vision at Feet',
            description: 'More than defending, Jhonatan builds. A goalkeeper with quick reflexes and refined technique under the crossbar, who becomes the team\'s first playmaker when in possession. Left-footed with excellent tactical reading, he offers pinpoint accuracy in long balls and short passes.',
        },

        // Gallery
        gallery: {
            title: 'Media Room',
            subtitle: 'MEDIA GALLERY',
            viewAlbum: 'View full album',
            highlightClip: 'Highlight Clip',
            seasonHighlights: 'SEASON 2025 - BEST MOMENTS',
        },

        // Footer
        footer: {
            title: 'Get in Touch',
            subtitle: 'HIRING & SCOUTING',
            description: 'For official proposals, trial invitations, or interview scheduling, please reach out through the official channels.',
            formName: 'Full Name',
            formNamePlaceholder: 'E.g.: John Smith (Scout)',
            formClub: 'Club / Agency',
            formClubPlaceholder: 'E.g.: Premier League Scout',
            formMessage: 'Message',
            formMessagePlaceholder: 'Describe the purpose of your contact...',
            sendMessage: 'Send Message',
            rights: '© 2026 Jhonatan. All rights reserved.',
            legal: 'Legal',
            privacy: 'Privacy',
        },

        // Athlete data labels
        athlete: {
            goalkeeper: 'Goalkeeper',
            leftBack: 'Left Back (LB)',
            leftFooted: 'Left-footed',
            brazilian: 'Brazilian',
        }
    }
} as const;

export type Translations = typeof translations.pt;
