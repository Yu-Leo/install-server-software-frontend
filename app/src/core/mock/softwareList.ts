import {ISoftware} from "../api/software/typing.ts";

export const softwareList: ISoftware[] = [
    {
        pk: 0,
        title: 'Docker',
        price: 100,
        installing_time_in_mins: 10,
        size_in_bytes: 300 * 1024 * 1024,  // 300 Мб в байтах
        summary: 'Программное обеспечение для автоматизации развёртывания и управления приложениями.',
        description: 'Docker — программное обеспечение для автоматизации развёртывания и управления приложениями в средах с поддержкой контейнеризации, контейнеризатор приложений. Позволяет «упаковать» приложение со всем своим окружением[англ.] и зависимостями в контейнер, который может быть развёрнут на любой Linux-системе с поддержкой контрольных групп в ядре, а также предоставляет набор команд для управления этими контейнерами. Изначально использовал возможности LXC, с 2015 года начал использовать собственную библиотеку, абстрагирующую виртуализационные возможности ядра Linux — libcontainer. С появлением Open Container Initiative начался переход от монолитной к модульной архитектуре.',
        logo_file_path: '',
        is_active: true,
    },
    {
        pk: 1,
        title: 'NodeJS',
        price: 150,
        installing_time_in_mins: 10,
        size_in_bytes: 300 * 1024 * 1024,  // 300 Мб в байтах
        summary: 'Программная платформа, основанная на движке V8, которая превращает JavaScript из узкоспециализированного языка в язык общего назначения.',
        description: 'Node.js применяется преимущественно на сервере, выполняя роль веб-сервера. Однако есть возможность разрабатывать на Node.js и десктопные оконные приложения, а также программировать микроконтроллеры.',
        logo_file_path: '',
        is_active: true,
    },
    {
        pk: 2,
        title: 'Python',
        price: 200,
        installing_time_in_mins: 20,
        size_in_bytes: 100 * 1024 * 1024,  // 100 Мб в байтах
        summary: 'Мультипарадигмальный высокоуровневый язык программирования общего назначения с динамической строгой типизацией',
        description: 'Мультипарадигмальный высокоуровневый язык программирования общего назначения с динамической строгой типизацией и автоматическим управлением памятью, ориентированный на повышение производительности разработчика, читаемости кода и его качества. Мультипарадигмальный высокоуровневый язык программирования общего назначения с динамической строгой типизацией и автоматическим управлением памятью, ориентированный на повышение производительности разработчика, читаемости кода и его качества, а также на обеспечение переносимости написанных на нём программ. Язык является полностью объектно-ориентированным в том плане, что всё является объектами. Необычной особенностью языка является выделение блоков кода отступами. Синтаксис ядра языка минималистичен, за счёт чего на практике редко возникает необходимость обращаться к документации. Сам же язык известен как интерпретируемый и используется в том числе для написания скриптов',
        logo_file_path: '',
        is_active: true,

    },
    {
        pk: 3,
        title: 'JS',
        price: 300,
        installing_time_in_mins: 43,
        size_in_bytes: 300 * 1024 * 1024,  // 300 Мб в байтах
        summary: 'Язык программирования, который в первую очередь применяют в веб-сфере',
        description: 'Язык программирования, который в первую очередь применяют в веб-сфере. С его помощью сайты делают интерактивными: добавляют всплывающие окна, анимацию, кнопки лайков и формы для отправки информации.',
        logo_file_path: '',
        is_active: true,

    },
    {
        pk: 4,
        title: 'git',
        price: 400,
        installing_time_in_mins: 13,
        size_in_bytes: 100 * 1024 * 1024,  // 100 Мб в байтах
        summary: 'Распределённая система управления версиями.',
        description: 'Распределённая система управления версиями. Проект был создан Линусом Торвальдсом для управления разработкой ядра Linux, первая версия выпущена 7 апреля 2005 года; координатор - Дзюн Хамано. Среди проектов, использующих Git, - ядро Linux, Swift, Android, Drupal, Cairo, GNU Core Utilities, Mesa, Wine, Chromium, Compiz Fusion, FlightGear, jQuery, PHP, NASM, MediaWiki, DokuWiki, Q',
        logo_file_path: '',
        is_active: true,
    }
];
