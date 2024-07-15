function iphone1(ASIN, colour, display, camera) {
    let obj = {}

    obj.ASIN = ASIN,
        obj.colour = colour,
        obj.display = display,
        obj.camera = camera,

        obj.dial = function () {
            return "trin..tring.."
        }

    obj.sendMessage = function () {
        return "Sending message.."
    }

    obj.cameraClick = function () {
        return "Camera clicked"
    }

    return obj
}
let iphone = iphone1(12345 , "Red" , 5.5 , "24px")
console.log(iphone)
console.log(iphone.dial())

console.log(iphone.sendMessage())

console.log(iphone.cameraClick())




