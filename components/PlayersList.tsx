import React from "react";
import { BottomSheetFlatList } from "@gorhom/bottom-sheet";

import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { allPlayerState } from "../atoms/Players";

import { PlayerListItem } from "./PlayerListItem";

export const PlayersList = () => {
    // const [ players, setPlayers ]  = useRecoilState(allPlayerState);
    // const setPlayers = useSetRecoilState(allPlayerState);
    
    const players = useRecoilValue(allPlayerState); // returns only the value

    return (
        <BottomSheetFlatList 
          data={players}
          renderItem={({ item }) => (
              <PlayerListItem player={item} />
            )
          }
        />
    )
}