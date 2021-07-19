import { atom, selector } from 'recoil';
import { players } from '../assets/data/players';

export const allPlayerState = atom({
    key: 'allPlayerState',
    default: players
});

export const positionFilterState =  atom({
    key: 'positionFilterState',
    default: [] as string[]
});

// derviative data from allPlayerState
export const filteredPlayers = selector({
    key: 'filteredPlayers',
    get: ({ get }) => {
        const players = get(allPlayerState); // subscribed to the above state
        const filters = get(positionFilterState);

        // for each player in players if their position is included in filters
        // the we return an array every player obj returning true
        return players.filter((player) => (filters.length === 0) ? players : filters.includes(player.position));
    }
})