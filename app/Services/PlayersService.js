import { appState } from "../AppState.js"
import { Player } from "../Models/Player.js";



class PlayersService {
    constructor() {

    }

    createPlayer(formData) {
        let newPlayer = new Player(formData)
        appState.players = [...appState.players, newPlayer]
        appState.activePlayer = newPlayer
        // console.log(appState.players);
    }

    setActivePlayer(id) {
        // console.log('services required')
        let foundPlayer = appState.players.find(
            p => p.id == id
        )
        // console.log(foundPlayer)
        appState.activePlayer = foundPlayer;
    }

    grabFruit() {
        let randomNum = Math.floor(Math.random() * appState.fruits.length)
        appState.activeFruit = appState.fruits[randomNum]
        // console.log(appState.activeFruit)
    }
}


export const playersService = new PlayersService()