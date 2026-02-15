/*
  Как указывать:
  maps, lectures, tests, videos - карты, лекции, тесты, видео

  id: любой (желательно m, l, t, v + цифра)
  title: Название, которое будет отображаться на сайте
  fileUrl: Путь к файлу в папке public/сущность, его нужно указывать начиная с /сущность/

  Например, добавил файл lecture4.pdf в папку public/lectures и будет
  { id: l4, title: 'Название лекции', fileUrl: '/lectures/lecture4.pdf' }
*/

export const MAPS_DATA = Array.from({ length: 20 }, (_, i) => ({
  id: `m${i + 1}`,
  title: `Карта ${i + 1}`,
  fileUrl: `${import.meta.env.BASE_URL}maps/1.jpg`
}));

export const LECTURES_DATA = Array.from({ length: 50 }, (_, i) => ({
  id: `l${i + 1}`,
  title: `Лекция ${i + 1}`,
  fileUrl: `${import.meta.env.BASE_URL}lectures/${i % 2 === 0 ? '1.pdf' : '2.docx'}`
}));

export const TESTS_DATA = Array.from({ length: 50 }, (_, i) => ({
  id: `t${i + 1}`,
  title: `Тест ${i + 1}`,
  fileUrl: `${import.meta.env.BASE_URL}tests/${i % 2 === 0 ? '1.pdf' : '2.docx'}`
}));

export const VIDEOS_DATA = Array.from({ length: 20 }, (_, i) => ({
  id: `v${i + 1}`,
  title: `Урок ${i + 1}`,
  fileUrl: `${import.meta.env.BASE_URL}videos/1.mp4`
}));
