basic.clearScreen()
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showString("A")
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.showString("B")
    }
    if (input.buttonIsPressed(Button.AB)) {
        basic.clearScreen()
        basic.pause(2000)
    }
})
