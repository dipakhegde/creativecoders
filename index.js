import {sum} from "rony1256";
import{GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
let a = 66 , b =99;
console.log(sum(a,b))
 export function mult(x,y) {

     let gltfLoader = new GLTFLoader();
     gltfLoader.load("./port_env.glb", (gltfObject) =>
     {

     });
     return(x*y);
 }

console.log("ssh test")
