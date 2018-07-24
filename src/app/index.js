import '../styles/main.scss'

const CANVAS_WIDTH = 400
const CANVAS_HEIGHT = 1200
const RGBA = 4
const COLOR_RESOLUTION = 256
const MAX_COLOR_RESOLUTION = 255
const INDEX_OF_ALPHA = 3
const ORIGIN = 0.5

const width = CANVAS_WIDTH
const height = CANVAS_HEIGHT

const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')
const imagedata = context.createImageData(width, height)

for (let n = 0; n < width * height * RGBA; n++) {
    imagedata.data[n] = n % RGBA === INDEX_OF_ALPHA ? MAX_COLOR_RESOLUTION : Math.floor(Math.random() * COLOR_RESOLUTION)
}
context.putImageData(imagedata, ORIGIN, ORIGIN)
