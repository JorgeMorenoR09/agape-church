import type { Ministry } from './types';

export const ministries: Ministry[] = [
  {
    slug: 'jovenes',
    icon: '🔥',
    name: {
      es: 'Ministerio de Jóvenes',
      en: 'Youth Ministry',
    },
    description: {
      es: 'Un espacio vibrante donde los jóvenes descubren su propósito, cultivan su fe y construyen amistades que perduran toda la vida.',
      en: 'A vibrant space where young people discover their purpose, cultivate their faith, and build friendships that last a lifetime.',
    },
  },
  {
    slug: 'familia',
    icon: '🏡',
    name: {
      es: 'Ministerio de Familias',
      en: 'Family Ministry',
    },
    description: {
      es: 'Acompañamos a las familias en cada etapa de la vida, fortaleciendo los lazos del hogar con bases espirituales sólidas.',
      en: 'We walk alongside families in every stage of life, strengthening the home with solid spiritual foundations.',
    },
  },
  {
    slug: 'alabanza',
    icon: '🎵',
    name: {
      es: 'Ministerio de Alabanza',
      en: 'Worship Ministry',
    },
    description: {
      es: 'Lideramos la adoración comunitaria con excelencia y corazón, creando un ambiente donde cada persona puede conectarse con Dios.',
      en: 'We lead communal worship with excellence and heart, creating an atmosphere where everyone can connect with God.',
    },
  },
  {
    slug: 'mision',
    icon: '🌍',
    name: {
      es: 'Misiones y Alcance',
      en: 'Missions & Outreach',
    },
    description: {
      es: 'Llevamos el amor de Cristo más allá de nuestras paredes, sirviendo a las comunidades más vulnerables de nuestra ciudad y el mundo.',
      en: 'We carry the love of Christ beyond our walls, serving the most vulnerable communities in our city and the world.',
    },
  },
];
