export interface Task {
    id: number;
    title: string;
    responses: string[];
    correctAnswer: string;
}

export const Tasks: Task[] = [
    {
        id: 1,
        title: "What are key components of Bytecoin?",
        responses: [
            "NFT, Slashing, L2 on TON, Telegram usernames",
            "Farming, Telegram Bots, GPU mining, Slashing",
            "Virtual Mining, Farming, Halvings, virtual electricity"
        ],
        correctAnswer: "Virtual Mining, Farming, Halvings, virtual electricity"
    },
    {
        id: 2,
        title: "How much is the total supply of Bytecoin?",
        responses: [
            "21 million",
            "100 million",
            "21 Billion",
        ],
        correctAnswer: "21 million",
    },
    {
        id: 3,
        title: "BYTE token distribution is?",
        responses: [
            "15% Team, 30% Fair-launch, 55% community (mining)",
            "0% Team, 0% Insiders, 100% community (mining)",
            "5% team, 3% insiders, 93% community (mining)",
        ],
        correctAnswer: "0% Team, 0% Insiders, 100% community (mining)",
    },
    {
        id: 4,
        title: "How do you mine BYTE?",
        responses: [
            "by using NFT Miners",
            "by using real GPUs",
            "by staking",
        ],
        correctAnswer: "by using NFT Miners",
    },
    {
        id: 5,
        title: "What does the Bytecoin protocol work on?",
        responses: [
            "By leveraging TON smart-contracts",
            "By leveraging Web2 Telegram Bot",
            "By leveraging Telegram Mini App",
        ],
        correctAnswer: "By leveraging TON smart-contracts",
    },
    {
        id: 6,
        title: "How many NFT GPUs is available?",
        responses: [
            "10000",
            "30000",
            "3000",
        ],
        correctAnswer: "3000",
    },
    {
        id: 7,
        title: "What percentage of electricity revenue go to rewards for farmers on DEX?",
        responses: [
            "50%",
            "80%",
            "30%",
        ],
        correctAnswer: "80%",
    },

]