const games = [
    { id: 1, title: 'Diablo II: Resurrected', genre: 'RPG de ação', imagePath: 'https://i.pinimg.com/736x/e4/67/80/e46780e610e1955cbef8113954f795c2.jpg' },
    { id: 2, title: 'Diablo II: Resurrected', genre: 'RPG de ação', imagePath: 'https://i.pinimg.com/736x/e4/67/80/e46780e610e1955cbef8113954f795c2.jpg' },
    { id: 3, title: 'Diablo II: Resurrected', genre: 'RPG de ação', imagePath: 'https://i.pinimg.com/736x/e4/67/80/e46780e610e1955cbef8113954f795c2.jpg' },
    { id: 4, title: 'Diablo II: Resurrected', genre: 'RPG de ação', imagePath: 'https://i.pinimg.com/736x/e4/67/80/e46780e610e1955cbef8113954f795c2.jpg' },
    { id: 5, title: 'Diablo II: Resurrected', genre: 'RPG de ação', imagePath: 'https://i.pinimg.com/736x/e4/67/80/e46780e610e1955cbef8113954f795c2.jpg' }
];

export default defineEventHandler((event) => {
    const limitParam = getQuery(event)?.limit;
    
    if (limitParam) {
        const listFormatted = games.slice(0, Number(limitParam));
        
        return {
            games: listFormatted
        }
    }
    
    return {
        games
    }
})