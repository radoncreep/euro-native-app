import { atom, selector } from "recoil";
import { Player } from "../types";
import { myFormationState } from "./Players";

export const myTeamState = atom({
    key: "myTeamState",
    default: [] as Player[] // this is an array of the object type Player
});

const staticArrayPositions = ['FWD', 'MID', 'DEF', 'GCK'];

// structuring the positions for the team state
// this selector is subscribed to the myTeamState atom i.e whenever there is a change in the atom then the selector executes to the corresponding change

export const myPlayersByPosiition = selector({
    key: 'myPlayersByPosition',
    get: ({ get }) => {
        const currentTeamPlayers = get(myTeamState);
        const formation = get(myFormationState);
        
        const groupedPlayers = {};
        
        staticArrayPositions.forEach((position) => {
            groupedPlayers[position] = currentTeamPlayers.filter((p) => p.position === position);

            // push null value for the number of available space in a position
            // groupedPlayers[position] returns an array for each position in assigned to the obj groupedPlayers
            console.log('out ', formation[position].length)
            for (let i = groupedPlayers[position].length; i < formation[position]; i++) {
                console.log('in ', i)
                groupedPlayers[position].push(null);
            }
        });

        // console.log('grouped ', groupedPlayers)

        return groupedPlayers;
    } 
});

// returns number of players in my team
export const numOfPlayers = selector({
    key: 'numOfPlayers',
    get: ({ get} ) => {
        return get(myTeamState).length;
    }
});

export const valueOfPlayers = selector({
    key: 'valueOfPlayers',
    get: ({ get }) => {
        return get(myTeamState).reduce(( acc, player) => acc + player.price, 0);
    }
})