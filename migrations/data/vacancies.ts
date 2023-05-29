import mongoose from 'mongoose';

import Vacancy from '../../server/models/typescript/vacancy';
import { LocationEnum, StatusEnum } from '../../client/models/Vacancy';
import Skill from '../../server/models/typescript/skill';
import { getRandomNumberArray } from '../utils';

import ObjectId = mongoose.Types.ObjectId;
import MongooseArray = mongoose.Types.Array;

export function getVacanciesData(skills: Skill[]): Vacancy[] {

    return [
        {
            title: 'Junior Frontend Developer',
            description:  `CrocoGroup – dreamteam команда по работе в области партнерского маркетинга и лидогенерации.
    
            В связи с расширением, мы ищем опытного frontend разработчика с навыками верстки для работы над проектами по созданию прелендингов и лендингов.
            
            Обязанности:
            ​​​
            • Разработка и поддержка сайтов для лидогенерации;
            • Верстка адаптивного и кроссбраузерного интерфейса;
            • Работа с дизайнерами для достижения наилучшего визуального качества сайта;
            • Тестирование и оптимизация страниц для улучшения показателей конверсии;
            • Участие в планировании и оценке трудозатрат на проекты.
            
            Требования:
            • Уверенные навыки работы с HTML5, CSS3, JavaScript;
            • Опыт работы с фреймворками типа React.js или Vue.js будет преимуществом;
            • Опыт работы с Git;
            • Понимание принципов SEO и UX;
            • Внимание к деталям, умение работать в команде и соблюдать сроки;
            
            Условия:
            • Испытательный срок 1 месяц
            • Базовая ставка: $500 в месяц + процент от результатов работы;
            • Возможности для профессионального роста и обучения;
            • Работа в...`,
            url: ['https://yaroslavl.hh.ru/vacancy/80704616?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic'],
            location: LocationEnum.REMOTE,
            salary: {
                from: 100000,
                to: 200000,
            },
            status: StatusEnum.OPENED,
            deadlineDate: new Date(2024, 0, 1),
            _skills: getRandomNumberArray(3, skills.length).map((id: number) => skills[id]._id) as MongooseArray<ObjectId>,
        },
        {
            title: 'Администратор',
            description:  `Обязанности:
            Осуществляет работу по эффективному обслуживанию объектов зоопарка в части уборки и дезинфекции, чистоты и порядка служебных помещений и помещений общего пользования
            Обеспечивает чистоту и порядок в помещении и на прилегающей к нему территории
            Ведет учет рабочего времени сотрудников отдела. Обеспечивает правильную расстановку рабочих и организацию труда. Координирует работу уборщиков служебных помещений и дворников
            Получает от начальника хозяйственного отдела моющие средства, уборочный инвентарь, обтирочный материал, санитарно-гигиенические средства, обеспечивает их сохранность и рациональное использование
            Требования:
            требовательность
            умение организовать работу подразделения
            Условия:
            оформление по ТК РФ
            с 8.00 до 17.00, скользящий график`,
            url: ['https://yaroslavl.hh.ru/vacancy/81105871?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic'],
            location: LocationEnum.OFFICE_OR_REMOTE,
            salary: {
                from: 150000,
                to: 200000,
            },
            status: StatusEnum.HIRING,
            deadlineDate: new Date(2023, 7, 24),
            _skills: getRandomNumberArray(5, skills.length).map((id: number) => skills[id]._id) as MongooseArray<ObjectId>,
        },
        {
            title: 'Начинающий IT-специалист.',
            description:  `Добрый день!

            Команда digital-агентства CEO Agency находится в поисках талантливого специалиста по чат-ботам в свою команду.
            
            Кто мы? Агентство полного цикла с собственной продуктовой аналитикой, дизайном и веб–разработкой. Опытная команда, которая закрывает весь спектр задач для увеличения эффективности бизнеса.
            
            Рассматриваем на вакансию как кандидатов с опытом работы с чат-ботами, так и начинающих специалистов.
            • Если вы не имеете опыта работы с программированием и автоматизацией процессов - мы готовы взять вас на оплачиваемое обучение-стажировку, а после, по её итогам, дать возможность присоединиться к основной команде проекта.
            
            Работа с нами - отличная возможность для успешного старта в it и digital.
            
            Что надо будет делать:
            • Сборка автоматизированных воронок в сервисах (Senler, SaleBot)
            • Внедрение чат-ботов в каналы взаимодействия с клиентом (Telegram, WhatsApp)
            • Техническое сопровождение, решение технических проблем и поддержка клиентов
            
            Требования:
            • Вы готовы к постоянному...`,
            url: ['https://example.com', 'https://yaroslavl.hh.ru/vacancy/81012432?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic'],
            location: LocationEnum.OFFICE,
            salary: {
                from: 15000,
                to: 20000,
            },
            status: StatusEnum.INTERVIEW,
            _skills: getRandomNumberArray(1, skills.length).map((id: number) => skills[id]._id) as MongooseArray<ObjectId>,
        },
        {
            title: 'Специалист по запуску и эксплуатации ИТ',
            description:  `Обязанности:
            • Поддержка открытий магазинов со стороны поставки и установки ИТ-оборудования (координация и контроль подрядчиков по монтажу и настройке IT оборудования, СКС и IT услуг на новых и реконструируемых объектах);
            • Разработка технических заданий для пуско-наладочных работ и планировок СКС для магазинов
            • Организация, координация, контроль логистики, планирования и управление запасами IT оборудования для новых и реконструируемых объектов согласно графику запуска;
            • Поддержка открытых магазинов с точки зрения ИТ-оборудования – координация и коммуникация решений инцидентов по ИТ-ресурсам и оборудованию;
            • Ведение заявок на создание объектов в информационных системах (ИС) Компании;
            • Координация работ по изменениям на магазинах, касающиеся ИС (смена адреса, время работы, лицензии и пр.);
            • Координация работ по критичным инцидентам в магазинах;
            • Выполнение качественных показателей эффективности (KPI) подразделения.
            • Контроль работы подрядных организаций на объектах, контроль...`,
            url: ['https://hh.ru/vacancy/77990683?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic'],
            location: LocationEnum.REMOTE,
            salary: {
                from: 500000,
                to: 550000,
            },
            status: StatusEnum.ON_HOLD,
            deadlineDate: new Date(2023, 10, 1),
            _skills: getRandomNumberArray(3, skills.length).map((id: number) => skills[id]._id) as MongooseArray<ObjectId>,
        },
        {
            title: 'IT рекрутер',
            description:  `В связи с расширением штата мы в поиске сотрудника на позицию IT рекрутер. Основные задачи: Ведение полного цикла подбора персонала (ИТ специалисты) Коммуникация с нанимающими менеджерами и техническими экспертами (консалтинг в части HR процессов, снятие вакансий, ведение по процессу) Работа с ВУЗами, организация практик/стажировок для студентов Ведение отчетности и базы кандидатов Мы ожидаем: Опыт работы в рекрутменте от 1 года Опыт по закрытию IT вакансий желателен Владение различными инструментами поиска Отличные коммуникативные навыки, инициативность, ориентация на результат Приветствуется опыт участия в различных проектах в сфере HR (работа с ВУЗами, адаптация и пр.) Наше предложение: Трудоустройство согласно ТК, белая заработная плата (уровень оклада обсуждается индивидуально) ДМС со стоматологией, оплата мобильной связи, корпоративные скидки на фитнес Возможность профессионального развития и карьерного роста, а также реализации своих идей (внутренние профессиональные сообщества...`,
            url: ['https://employmentcenter.ru/vacancy/?action=read2&id=13364832&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic'],
            location: LocationEnum.OFFICE,
            salary: {
                from: 20000,
                to: 20000,
            },
            status: StatusEnum.SEARCH,
            deadlineDate: new Date(2023, 1, 1),
            _skills: getRandomNumberArray(10, skills.length).map((id: number) => skills[id]._id) as MongooseArray<ObjectId>,
        },
        {
            title: 'Ведущий Java-разработчик',
            description:  `Навыки: Java, Git, PostgreSQL, Java SE, Intellij IDEA, Junit, Apache Maven, Apache Kafka, Spring Boot. Квалификация: Lead. Специализации: Десктоп разработчик.

            Мы предлагаем:
            • официальное оформление в штат компании по ТК РФ;
            • гибкий график работы;
            • возможность часть времени работать удаленно;
            • настольные игры;
            • ароматный чай;
            • солнечный офис.`,
            url: ['https://career.habr.com/vacancies/1000124456'],
            location: LocationEnum.OFFICE,
            salary: {
                from: 210000,
                to: 220000,
            },
            status: StatusEnum.PREPARATION,
            deadlineDate: new Date(2023, 1, 1),
            _skills: getRandomNumberArray(10, skills.length).map((id: number) => skills[id]._id) as MongooseArray<ObjectId>,
        },
        {
            title: 'Приходящий системный администратор/инженер (IT-аутсорсинг)',
            description:  `Требования:

            Приглашаем к сотрудничеству специалистов IT, рассматриваем студентов последних курсов (информатика) на официальную подработку/дополнительный доход в дочернее предприятие Совкомбанка компанию MCORE. Возможно совмещение в свободное от основной работы время. Оплата сдельная.
            Задачи:
            ремонт компьютерной техники (опыт обязателен) и кассовой аппаратуры;
            установка и настройка OC Windows, а также офисных приложений;
            установка и настройка различного рода ПО;
            подключение и настройка периферийного оборудования, включая торговое (ККТ, сканеры ШК, принтеры, весовое оборудование);
            сборка и размещение комплектов оборудования на точках заказчика;
            работа на высоком техническом уровне с ПК;
            выполнение в срок поставленных задач.
            Hard & soft skills, которые будут нам полезны и интересны:
            опыт работы по настройке и ремонту ПК (желательно уровень системного администратора), а также периферийного оборудования;
            опыт работы по настройке операционных систем, офисных приложений, прочих программных...`,
            url: ['https://yaroslavl.superjob.ru/vakansii/prihodyaschij-sistemnyj-administrator-46415949.html?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic'],
            location: LocationEnum.OFFICE_OR_REMOTE,
            salary: {
                from: 320000,
                to: 350000,
            },
            status: StatusEnum.CLOSED,
            deadlineDate: new Date(2023, 8, 1),
            _skills: getRandomNumberArray(8, skills.length).map((id: number) => skills[id]._id) as MongooseArray<ObjectId>,
        },
    ];
}