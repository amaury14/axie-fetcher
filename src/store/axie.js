import { createSlice } from "@reduxjs/toolkit";
import BASE_URL from "../config/config";

const axios = require("axios");

export const axieSlice = createSlice({
  name: "axie",
  initialState: {
    id: 0,
    loading: false,
    axie: null,
    round: 1,
    energy: 3,
    cards: 6,
  },
  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
    },
    fetchAxie: (state, action) => {
      state.loading = true;
    },
    fetchAxieSuccess: (state, action) => {
      state.loading = false;
      state.axie = action.payload;
    },
    incrementEnergy: (state, action) => {
      state.energy += 1;
    },
    decrementEnergy: (state, action) => {
      if (state.energy > 0) {
        state.energy -= 1;
      }
    },
    incrementCards: (state, action) => {
      state.cards += 1;
    },
    decrementCards: (state, action) => {
      if (state.cards > 0) {
        state.cards -= 1;
      }
    },
    nextRound: (state, action) => {
      state.round += 1;
      state.energy += 2;
      state.cards += 3;
    },
    newGame: (state, action) => {
      state.round = 1;
      state.cards = 6;
      state.energy = 3;
    },
  },
});

export function loadAxie(id) {
  return async function loadAxieThunk(dispatch, getState) {
    await axios
      .post(`${BASE_URL}`, {
        operationName: "GetAxieDetail",
        query:
          "query GetAxieDetail($axieId: ID!) {\n    axie(axieId: $axieId) {\n    ...AxieDetail\n    __typename\n  }\n}\nfragment AxieDetail on Axie {\n  id\n  image\n  class\n  name\n  genes\n  birthDate\n  bodyShape\n  class\n  sireId\n  sireClass\n  matronId\n  matronClass\n  stage\n  title\n  breedCount\n  figure {\n    atlas\n    model\n    image\n    __typename\n  }\n  parts {\n    ...AxiePart\n    __typename\n  }\n  stats {\n    ...AxieStats\n    __typename\n  }\n  children {\n    id\n    name\n    class\n    image\n    title\n    stage\n    __typename\n  }\n  __typename\n}\n\nfragment AxiePart on AxiePart {\n  id\n  name\n  class\n  type\n  specialGenes\n  stage\n  abilities {\n    ...AxieCardAbility\n    __typename\n  }\n  __typename\n}\nfragment AxieCardAbility on AxieCardAbility {\n  id\n  name\n  attack\n  defense\n  energy\n  description\n  backgroundUrl\n  effectIconUrl\n  __typename\n}\nfragment AxieStats on AxieStats {\n  hp\n  speed\n  skill\n  morale\n  __typename\n}",
        variables: {
          axieId: id,
        },
      })
      .then(function (response) {
        dispatch(fetchAxieSuccess(response.data.data.axie));
      });
  };
}

// Action creators are generated for each case reducer function
export const {
  setId,
  fetchAxie,
  fetchAxieSuccess,
  incrementEnergy,
  decrementEnergy,
  incrementCards,
  decrementCards,
  nextRound,
  newGame,
} = axieSlice.actions;

export default axieSlice.reducer;
