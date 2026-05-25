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
    title: 'На машине',
    body:
      'На машине по Пятницкому шоссе. В дачном поселке есть шлагбаум, мы сообщим как его можно будет открыть. Отметьтесь, пожалуйста, в опросе, если нужно парковочное место.',
    anchor: { href: '#rsvp', text: 'К вопросам для гостей' },
  },
  {
    id: 'taxi',
    label: 'Такси',
    title: 'На такси',
    body:
      'На такси от МЦД Зеленоград. Стоимость — около 1000 рублей, время в пути — около получаса. В Зеленограде нет проблем с поиском машины, обратный поиск может занять 20–30 минут.',
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
    'Мы просим гостей придерживаться дресс-кода all-white и придти в одежде белого цвета без ярких элементов и украшений. Допускается низ пастельных тонов, например светло-серый или бежевый.',
  notes:
    'Мероприятие будет не слишком формальное, поэтому строгий костюм/помпезное платье вам не понадобится, точно также как и спортивная одежда. Достаточно надеть нарядную одежду в нужных тонах! Рекомендуем избегать неудобной обуви и взять на вечер что-то теплое, чтобы не замерзнуть.',
} as const;

export const gifts = {
  title: 'Подарки',
  body:
    'Так как мы живем в Испании и наш багаж ограничен, к сожалению, мы не сможем взять никакие вещи с собой. Цветы же будут вдоволь представлены на нашей даче!',
} as const;

export type RsvpQuestion =
  | { id: string; type: 'text' | 'textarea'; label: string; required?: boolean }
  | { id: string; type: 'choice'; label: string; options: ReadonlyArray<string>; required?: boolean };

export const rsvp = {
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
