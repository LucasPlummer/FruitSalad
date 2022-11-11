import { generateId } from "../Utils/generateId.js"

export class Player {
    constructor(data) {
        this.id = generateId()
        this.name = data.name
        this.score = 0
        this.highscore = 0
    }

    get PlayerTemplate() {
        return `
        <div>
        <h6 onclick="app.playersController.setActivePlayer('${this.id}')">${this.name}</h6>
        <h6>Highscore: ${this.highscore}</h6>
        </div>`
    }

    get ActivePlayerTemplate() {
        return `
        <div>
              <h4 class="me-5">${this.name}</h4>
            </div>
            <div>
              <h4>${this.score}</h4>
            </div>`
    }
}
