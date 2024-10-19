import {ISoftware} from "../api/software/typing.ts";

export const softwareList: ISoftware[] = [
    {
        Id: 0,
        Title: 'Docker',
        LogoFilePath: 'http://127.0.0.1:9000/server-soft-logos/0.png',
        Price: 100,
        Summary: 'Программное обеспечение для автоматизации развёртывания и управления приложениями.',
    },
    {
        Id: 1,
        Title: 'NodeJS',
        LogoFilePath: 'http://127.0.0.1:9000/server-soft-logos/1.png',
        Price: 150,
        Summary: 'Программная платформа, основанная на движке V8, которая превращает JavaScript из узкоспециализированного языка в язык общего назначения.',
    },
    {
        Id: 2,
        Title: 'Python',
        LogoFilePath: 'http://127.0.0.1:9000/server-soft-logos/2.png',
        Price: 200,
        Summary: 'Мультипарадигмальный высокоуровневый язык программирования общего назначения с динамической строгой типизацией.',
    },
    {
        Id: 3,
        Title: 'JS',
        LogoFilePath: 'http://127.0.0.1:9000/server-soft-logos/3.png',
        Price: 300,
        Summary: 'Язык программирования, который в первую очередь применяют в веб-сфере',
    },
    {
        Id: 4,
        Title: 'git',
        LogoFilePath: 'http://127.0.0.1:9000/server-soft-logos/4.png',
        Price: 400,
        Summary: 'Распределённая система управления версиями.',
    },
];
