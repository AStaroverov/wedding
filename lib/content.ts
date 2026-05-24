export const greeting = {
  text:
    'Ура, вы приглашены на свадьбу Саши и Али! На этом сайте есть вся важная информация о мероприятии и вопросы для гостей.',
} as const;

export const program: ReadonlyArray<{ time: string; title: string }> = [
  { time: '13:00–13:30', title: 'Сбор гостей' },
  { time: '14:00', title: 'Церемония' },
  { time: '15:30', title: 'Обед' },
  { time: '19:00', title: 'Ужин' },
  { time: '22:00', title: 'Окончание официальной части' },
];

export const travel: ReadonlyArray<{
  id: 'car' | 'taxi';
  label: string;
  title: string;
  body: string;
  anchor?: { href: string; text: string };
}> = [
  {
    id: 'car',
    label: 'Машина',
    title: 'По Пятницкому шоссе',
    body:
      'В дачном посёлке есть шлагбаум — мы сообщим, как его можно открыть. Если нужно парковочное место, отметьте это в вопросах для гостей.',
    anchor: { href: '#rsvp', text: 'К вопросам для гостей' },
  },
  {
    id: 'taxi',
    label: 'Такси',
    title: 'От МЦД Зеленоград',
    body:
      'Стоимость — около 1000 ₽, время в пути — около получаса. В Зеленограде нет проблем с поиском машины, обратный поиск может занять 20–30 минут.',
  },
];

export const dressCode = {
  rule: 'all-white',
  palette: [
    { hex: '#FFFFFF', label: 'белый' },
    { hex: '#F5F1EA', label: 'cream' },
    { hex: '#E5DFD3', label: 'бежевый' },
    { hex: '#D9D6CF', label: 'светло-серый' },
  ],
  short:
    'Одежда белого цвета без ярких элементов и украшений. Допускается низ пастельных тонов — светло-серый или бежевый.',
  notes:
    'Мероприятие не слишком формальное: строгий костюм или помпезное платье не понадобятся, спортивная одежда тоже. Достаточно нарядной одежды в нужных тонах. Рекомендуем удобную обувь и что-то тёплое на вечер.',
} as const;

export const gifts = {
  title: 'Без вещей и без цветов',
  body:
    'Мы живём в Испании, и наш багаж ограничен — к сожалению, мы не сможем взять никакие вещи с собой. Цветов же будет вдоволь представлено на нашей даче!',
} as const;

export type RsvpQuestion =
  | { id: string; type: 'text' | 'textarea'; label: string; required?: boolean }
  | { id: string; type: 'choice'; label: string; options: ReadonlyArray<string>; required?: boolean };

export const rsvp = {
  intro: 'Пожалуйста, ответьте на несколько вопросов — это поможет нам всё подготовить.',
  questions: [
    {
      id: 'name',
      type: 'text',
      label: 'Имя и фамилия',
      required: true,
    },
    {
      id: 'drinks',
      type: 'choice',
      label: 'Какие напитки вы предпочитаете?',
      options: ['Больше алкогольные', '50 на 50', 'Больше безалкогольные'],
      required: true,
    },
    {
      id: 'transport',
      type: 'choice',
      label: 'Как вы будете добираться?',
      options: ['Машина (я водитель)', 'Машина (я пассажир)', 'Такси'],
      required: true,
    },
    {
      id: 'song',
      type: 'text',
      label: 'Под какую песню точно пойдёте танцевать?',
    },
    {
      id: 'wishes',
      type: 'textarea',
      label: 'Есть ли у вас особые пожелания?',
    },
  ] as const satisfies ReadonlyArray<RsvpQuestion>,
} as const;
