import * as THREE from 'https://cdn.skypack.dev/pin/three@v0.140.2-kyQ1EzfY1v9TgPR0itVJ/mode=imports/optimized/three.js';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000)
/**
 * THREE.PerspectiveCamera 파라미터 설명
 * 1. FOV(시야각,field of view) : 해당 시점의 화면이 보여지는 정도를 나타낸다 값은 각도 값으로 설정
 * 2. Aspect Ratio(종횡비)
 * 3. near 절단면      far값 보다 멀리 있는 요소나 near 값보다 가까이 있는 오브젝트는
 * 4. far  절단면      렌더링 되지 않는다
 */

const renderer = new THREE.WebGLRenderer()
renderer.setSize( window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshBasicMaterial({color: 0x00ff00})
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

camera.position.z = 5

function animate() {
    requestAnimationFrame(animate)
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    renderer.render(scene, camera)
}
animate()