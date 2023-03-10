import { Engine, Vector3 } from "babylonjs";
import EntityObject from "./objects/EntityObject";
import SPRITESHEET_DIR from "../assets/player/spritesheet.png";
import SPRITESHEET_MAP_DIR from "../assets/player/spritesheet.json";

import PLAYER_IDLE from "../assets/player/player_02.png";
import PLAYER_WALKING_F1 from "../assets/player/player_03.png";
import PLAYER_WALKING_F2 from "../assets/player/player_04.png";
import PLAYER_WALKING_B1 from "../assets/player/player_01.png";
import PLAYER_WALKING_B2 from "../assets/player/player_24.png";
import PLAYER_WALKING_R1 from "../assets/player/player_12.png";
import PLAYER_WALKING_R2 from "../assets/player/player_13.png";
import PLAYER_WALKING_L1 from "../assets/player/player_15.png";
import PLAYER_WALKING_L2 from "../assets/player/player_16.png";
import Singleton from "./objects/Singleton";

// const SPRITESHEET_MAP_DIR = "assets/player/spritesheet.json"
const FPS_COUNT_: number = 60;
//Time step or latency
const TIME_STEP_: number = 1 / FPS_COUNT_;
const GRAVITY: number = 9.8


const canvas: any = Singleton<any>(
    document.getElementById("canvas")
);
var engine: Engine;
if (Engine.isSupported()) {
    engine = Singleton<Engine>(
        new Engine(canvas, true, {
            deterministicLockstep: true,
            lockstepMaxSteps: 4
        })
    );
}
else {
    throw Error("Engine is not supported. Babylon cannot find a WebGL context.")
}

export {
    FPS_COUNT_,
    TIME_STEP_,
    GRAVITY,
    SPRITESHEET_DIR,
    SPRITESHEET_MAP_DIR,
    PLAYER_IDLE,
    PLAYER_WALKING_F1,
    PLAYER_WALKING_F2,
    PLAYER_WALKING_B1,
    PLAYER_WALKING_B2,
    PLAYER_WALKING_R1,
    PLAYER_WALKING_R2,
    PLAYER_WALKING_L1,
    PLAYER_WALKING_L2,
    engine,
    canvas
};
