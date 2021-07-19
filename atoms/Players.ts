import { atom } from 'recoil';
import { players } from '../assets/data/players';

export const allPlayerState = atom({
    key: 'allPlayerState',
    default: players
});

export const positionFilterState =  atom({
    key: 'positionFilterState',
    default: []
});