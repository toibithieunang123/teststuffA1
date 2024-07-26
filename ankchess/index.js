import {initGame} from "./data/data.js";
import { initGameRender } from "./render/main.js";

// will be usefull until game ends
const globalState = initGame();

initGameRender(globalState);

