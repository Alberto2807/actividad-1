input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.SmallDiamond)
    basic.pause(200)
    basic.showIcon(IconNames.Diamond)
    basic.pause(200)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Ana y Alberto")
    basic.showNumber(28)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
    basic.pause(200)
    basic.showLeds(`
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        . . . . .
        `)
    basic.pause(200)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showNumber(10)
    basic.showNumber(9)
    basic.showNumber(8)
    basic.showNumber(7)
    basic.showNumber(6)
    basic.showNumber(5)
    basic.showNumber(4)
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.showString("Despegue")
})
