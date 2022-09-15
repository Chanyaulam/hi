input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    music.playMelody("- - - - - - - - ", 1111)
    basic.pause(100)
})
basic.forever(function () {
	
})
