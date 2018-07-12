import '../styles/fonts.scss'

const DEFAULT_CANVAS_WIDTH = 300
const DEFAULT_CANVAS_HEIGHT = 150
const RGBA = 4
const INTERVAL_DURATION = 300
const COLOR_RESOLUTION = 256
const MAX_COLOR_RESOLUTION = 255
const INDEX_OF_ALPHA = 3
const ORIGIN = 0.5

const width = DEFAULT_CANVAS_WIDTH
const height = DEFAULT_CANVAS_HEIGHT

const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')
const imagedata = context.createImageData(width, height)

setInterval(() => {
    for (let n = 0; n < width * height * RGBA; n++) {
        imagedata.data[n] = n % RGBA === INDEX_OF_ALPHA ? MAX_COLOR_RESOLUTION : Math.floor(Math.random() * COLOR_RESOLUTION)
    }
    context.putImageData(imagedata, ORIGIN, ORIGIN)
}, INTERVAL_DURATION)
