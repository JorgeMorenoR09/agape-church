import type { ChurchEvent } from './types';

export const events: ChurchEvent[] = [
  {
    id: 'culto-domingo-1',
    date: '2026-03-22',
    time: '10:00 AM',
    title: {
      es: 'Culto Dominical',
      en: 'Sunday Service',
    },
    description: {
      es: 'Únete a nuestra familia cada domingo para un tiempo de adoración, Palabra y comunidad. Todos son bienvenidos.',
      en: 'Join our family every Sunday for a time of worship, the Word, and community. Everyone is welcome.',
    },
    location: {
      es: 'Auditorio Principal — Carrera 45 #68-30, Bogotá',
      en: 'Main Auditorium — Carrera 45 #68-30, Bogotá',
    },
  },
  {
    id: 'noche-alabanza',
    date: '2026-03-27',
    time: '7:00 PM',
    title: {
      es: 'Noche de Alabanza',
      en: 'Praise Night',
    },
    description: {
      es: 'Una noche especial dedicada a la adoración libre y profunda. Ven y experimenta la presencia de Dios de una manera única.',
      en: 'A special night dedicated to free and deep worship. Come and experience God\'s presence in a unique way.',
    },
    location: {
      es: 'Salón de Conferencias — Sede principal',
      en: 'Conference Room — Main campus',
    },
  },
  {
    id: 'retiro-jovenes',
    date: '2026-04-04',
    time: '8:00 AM',
    title: {
      es: 'Retiro de Jóvenes 2026',
      en: 'Youth Retreat 2026',
    },
    description: {
      es: 'Tres días de encuentro, aventura y crecimiento espiritual para jóvenes de 15 a 28 años. Cupos limitados.',
      en: 'Three days of encounter, adventure, and spiritual growth for young people ages 15–28. Limited spots.',
    },
    location: {
      es: 'Centro de Retiros El Refugio — Fusagasugá',
      en: 'El Refugio Retreat Center — Fusagasugá',
    },
  },
  {
    id: 'semana-santa',
    date: '2026-04-06',
    time: '7:00 PM',
    title: {
      es: 'Semana Santa — Vigilia de Oración',
      en: 'Holy Week — Prayer Vigil',
    },
    description: {
      es: 'Acompáñanos en esta vigilia especial de Semana Santa para reflexionar sobre el sacrificio y la resurrección de Cristo.',
      en: "Join us for this special Holy Week vigil to reflect on Christ's sacrifice and resurrection.",
    },
    location: {
      es: 'Auditorio Principal — Sede principal',
      en: 'Main Auditorium — Main campus',
    },
  },
];
