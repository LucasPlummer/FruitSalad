import { appState } from "../AppState.js";
import { Player } from "../Models/Player.js";
import { playersService } from "../Services/PlayersService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { setHTML } from "../Utils/Writer.js";
// setHTML

// playersService

// Player

function _drawPlayers() {
    let template = ''
    appState.players.forEach(
        p => template += p.PlayerTemplate
    )
    setHTML('name-score', template)

}

function _drawActivePlayer() {
    setHTML('active-player', appState.activePlayer.ActivePlayerTemplate)
}

function _drawActiveFruit() {
    setHTML('active-word', appState.activeFruit)
}

export class PlayersController {
    constructor() {
        console.log('players controller loaded');
        appState.on('players', _drawPlayers)
        appState.on('activePlayer', _drawActivePlayer)
        // appState.on('activeFruit', this.grabFruit)
        appState.on('activeFruit', _drawActiveFruit)
        _drawPlayers()
    }

    createPlayer() {
        window.event.preventDefault()
        console.log('the form is not reloading the page')
        let form = window.event.target
        let formData = getFormData(form)
        console.log(formData)
        playersService.createPlayer(formData)
        this.grabFruit()

    }

    setActivePlayer(id) {
        playersService.setActivePlayer(id)
        console.log('setActivePlayer working!');
    }

    grabFruit() {
        playersService.grabFruit()
    }

    checkAnswer() {
        window.event.preventDefault()
        let answerForm = window.event.target
        // console.log(answerForm)
        let answer = answerForm.answer.value
        if (answer == appState.activeFruit) {
            appState.activePlayer.score += 1
            // console.log(appState.activePlayer.score)
        }
        _drawActivePlayer()
        this.grabFruit()
        answerForm.reset()
    }
}
