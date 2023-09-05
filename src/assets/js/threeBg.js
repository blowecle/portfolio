import * as THREE from "three";
import bg1 from '../images/wallpapers/56.jpg'

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
)

const container = document.querySelector(".three_bg");

const loader = new THREE.TextureLoader();

const renderer = new THREE.WebGLRenderer({
    antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

// scaling the geometry
let scaleFactor = window.innerWidth / 1920;
let width = 18 * scaleFactor;
let height = 10;
let segmentsW = Math.floor(25 * scaleFactor);
let segmentsH = Math.floor(15 * scaleFactor);

// responsive
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    geometry.attributes.position.needsUpdate = true;
    scaleFactor = window.innerWidth / 2400;
    width = 18 * scaleFactor;
    height = 10;
    segmentsW = Math.floor(25 * scaleFactor);
    segmentsH = Math.floor(15 * scaleFactor);
});

let geometry = new THREE.PlaneGeometry(width, height, segmentsW, segmentsH);


const material = new THREE.MeshBasicMaterial({
    map: loader.load(bg1),

});

const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);
camera.position.z = 5;

const count = geometry.attributes.position.count;
const clock = new THREE.Clock();

function animate() {
    const time = clock.getElapsedTime();
    for(let i = 0; i < count; i++) {
        const x = geometry.attributes.position.getX(i);
        const y = geometry.attributes.position.getY(i);
        // animations
        const anim1 = .75 * Math.sin((x * 2) + (time * .7));
        const anim2 = .25 * Math.sin(x + (time * .7));
        const anim3 = .1 * Math.sin(y + (time * .7))

        geometry.attributes.position.setZ(i, anim2 + anim3);

        geometry.computeVertexNormals();
        geometry.attributes.position.needsUpdate = true;
    }
    requestAnimationFrame(animate); //updates smoother and more frequently than calling render() directly
    renderer.render(scene, camera);
}

animate();