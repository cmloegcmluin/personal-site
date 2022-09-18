import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    SpotLight,
    DirectionalLight,
    Mesh,
    MeshLambertMaterial,
    LoadingManager,
} from 'three'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import dougstoothObj from '../assets/ht3d_001_dougstooth.obj'

const scene = new Scene()
const camera = new PerspectiveCamera(75, 1, 1, 10000)

const w = window,
    e = document.documentElement,
    g = document.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight || e.clientHeight || g.clientHeight

const canvasDimensions = Math.min(x, y)

const dougstoothCanvas = document.querySelector('#dougstoothCanvas')
dougstoothCanvas.width = canvasDimensions
dougstoothCanvas.height = canvasDimensions

let drag = false;
dougstoothCanvas.addEventListener('mousedown', () => drag = false)
dougstoothCanvas.addEventListener('mousemove', () => drag = true)
dougstoothCanvas.addEventListener('mouseup', () => {
    if (!drag) {
        window.open(
            "https://houndstoothtopia.douglasblumeyer.com",
            "_blank",
        )
    } 
})

const renderer = new WebGLRenderer({canvas: dougstoothCanvas, alpha: true})

renderer.shadowMapEnabled = true

renderer.shadowCameraNear = 3
renderer.shadowCameraFar = camera.far
renderer.shadowCameraFov = 50

renderer.shadowMapBias = 0.0039
renderer.shadowMapDarkness = 0.5
renderer.shadowMapWidth = 1024
renderer.shadowMapHeight = 1024

const directionalLight = new DirectionalLight(0xffffff, 1)
directionalLight.position.set(-2, -2, -1)
directionalLight.target.position.set(2, 4, 1)

window.spotLight = new SpotLight()
spotLight.intensity = 0.3
spotLight.position.set(2, 4, 1)
spotLight.castShadow = true

spotLight.shadowMapWidth = 512
spotLight.shadowMapHeight = 512

const d = 200

spotLight.shadowCameraLeft = -d
spotLight.shadowCameraRight = d
spotLight.shadowCameraTop = d
spotLight.shadowCameraBottom = -d

spotLight.shadowCameraNear = 1
spotLight.shadowCameraFar = 1000
spotLight.shadowDarkness = 0.5

scene.add(spotLight)

camera.position.z = 5

const controls = new OrbitControls(camera, renderer.domElement, spotLight)
controls.damping = 0.2

const manager = new LoadingManager()

const loader = new OBJLoader(manager)
loader.load(dougstoothObj, function (object) {
    object.traverse(function (child) {
        if (child instanceof Mesh) {
            child.material = new MeshLambertMaterial({color: 0xdddddd})
            child.castShadow = true
            child.receiveShadow = true
            child.scale.set(0.5, 0.5, 0.5)
        }
    })

    window.bob = object

    scene.add(object)
})


const render = function () {
    requestAnimationFrame(render)

    if (!window.bob) return

    window.bob.rotation.x += 0.001
    window.bob.rotation.y += 0.001

    renderer.render(scene, camera)
}

render()
