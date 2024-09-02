import { createStore } from "./store";

export interface Task {
    id: number;
    title: string;
    responses: string[];
    correctAnswer: string;
}

export const TasksEN: Task[] = [
    {
        id: 0,
        title: "What are key components of Bytecoin?",
        responses: [
            "NFT, Slashing, L2 on TON, Telegram usernames",
            "Farming, Telegram Bots, GPU mining, Slashing",
            "Virtual Mining, Farming, Halvings, virtual electricity"
        ],
        correctAnswer: "Virtual Mining, Farming, Halvings, virtual electricity"
    },
    {
        id: 1,
        title: "How much is the total supply of Bytecoin?",
        responses: [
            "21 million",
            "100 million",
            "21 Billion",
        ],
        correctAnswer: "21 million",
    },
    {
        id: 2,
        title: "BYTE token distribution is?",
        responses: [
            "15% Team, 30% Fair-launch, 55% community (mining)",
            "0% Team, 0% Insiders, 100% community (mining)",
            "5% team, 3% insiders, 93% community (mining)",
        ],
        correctAnswer: "0% Team, 0% Insiders, 100% community (mining)",
    },
    {
        id: 3,
        title: "How do you mine BYTE?",
        responses: [
            "by using NFT Miners",
            "by using real GPUs",
            "by staking",
        ],
        correctAnswer: "by using NFT Miners",
    },
    {
        id: 4,
        title: "What does the Bytecoin protocol work on?",
        responses: [
            "By leveraging TON smart-contracts",
            "By leveraging Web2 Telegram Bot",
            "By leveraging Telegram Mini App",
        ],
        correctAnswer: "By leveraging TON smart-contracts",
    },
    {
        id: 5,
        title: "How many NFT GPUs is available?",
        responses: [
            "10000",
            "30000",
            "3000",
        ],
        correctAnswer: "3000",
    },
    {
        id: 6,
        title: "What percentage of electricity revenue go to rewards for farmers on DEX?",
        responses: [
            "50%",
            "80%",
            "30%",
        ],
        correctAnswer: "80%",
    },

]

export const TasksRU: Task[] = [
    {
        id: 0,
        title: "Что такое Bytecoin?",
        responses: [
            "NFT, Слэшинг, L2 на TON, Имена пользователей Telegram",
            "Фарминг, Боты Telegram, Майнинг на GPU, Слэшинг",
            "Виртуальный майнинг, Фарминг, Халвинги, виртуальное электричество"
        ],
        correctAnswer: "Виртуальный майнинг, Фарминг, Халвинги, виртуальное электричество"
    },
    {
        id: 1,
        title: "Каков общий объем предложения Bytecoin?",
        responses: [
            "21 миллион",
            "100 миллионов",
            "21 миллиард",
        ],
        correctAnswer: "21 миллион",
    },
    {
        id: 2,
        title: "Как распределяются токены BYTE?",
        responses: [
            "15% Команда, 30% Честный запуск, 55% сообщество (майнинг)",
            "0% Команда, 0% Инсайдеры, 100% сообщество (майнинг)",
            "5% команда, 3% инсайдеры, 93% сообщество (майнинг)",
        ],
        correctAnswer: "0% Команда, 0% Инсайдеры, 100% сообщество (майнинг)",
    },
    {
        id: 3,
        title: "Как добывать BYTE?",
        responses: [
            "с помощью NFT Майнеров",
            "с помощью реальных GPU",
            "путем стейкинга",
        ],
        correctAnswer: "с помощью NFT Майнеров",
    },
    {
        id: 4,
        title: "На чем работает протокол Bytecoin?",
        responses: [
            "Используя смарт-контракты TON",
            "Используя Web2 Telegram Bot",
            "Используя Telegram Mini App",
        ],
        correctAnswer: "Используя смарт-контракты TON",
    },
    {
        id: 5,
        title: "Сколько NFT GPU доступно?",
        responses: [
            "10000",
            "30000",
            "3000",
        ],
        correctAnswer: "3000",
    },
    {
        id: 6,
        title: "Какой процент дохода от электричества идет на вознаграждения для фармеров на DEX?",
        responses: [
            "50%",
            "80%",
            "30%",
        ],
        correctAnswer: "80%",
    },
]

export const [useAllTasksComplete] = createStore({
    amount: 0
});