import { MusicVAE } from '@magenta/music/node/music_vae'
import { Player } from '@magenta/music/node/core'
import { ModelEndpoints } from '../constants/model.constant'

export class PianoGenerator {
    private model: MusicVAE
    private player: Player
    
    constructor() {
        this.model = new MusicVAE(ModelEndpoints.VAE)
        this.player = new Player()
    }

    public composeMusic() {
        // TODO : 
    }
    
}