a = 5

def on_forever():
    global a
    if input.button_is_pressed(Button.A):
        a += 1
        basic.show_number(a)
    if input.button_is_pressed(Button.B):
        a += -1
        basic.show_number(a)
basic.forever(on_forever)
