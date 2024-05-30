export const userKey = 'currentUser';

export const scenarioKey = 'scenario';

export const oneHundredElement = Array.from({ length: 101 }, (_, index) => index);

export const switchKey = new Map([
    ['state1_begin', 'switch.'],
    ['state1_end', '_l1'],
    ['state2_begin', 'switch.'],
    ['state2_end', '_l2'],
    ['state3_begin', 'switch.'],
    ['state3_end', '_l3'],
    ['blackLight_begin', 'switch.'],
    ['blackLight_end', '_backlight_mode'],
    ['onColor_begin', 'select.'],
    ['onColor_end', '_on_color'],
    ['offColor_begin', 'select.'],
    ['offColor_end', '_off_color'],
    ['childLock_begin', 'lock.'],
    ['childLock_end', '_child_lock'],
    ['powerOnBehavior_begin', 'select.'],
    ['powerOnBehavior_end', '_power_on_behavior'],
    ['powerOnBehavior1_begin', 'select.'],
    ['powerOnBehavior1_end', '_power_on_behavior_l1'],
    ['powerOnBehavior2_begin', 'select.'],
    ['powerOnBehavior2_end', '_power_on_behavior_l2'],
    ['powerOnBehavior3_begin', 'select.'],
    ['powerOnBehavior3_end', '_power_on_behavior_l3'],
    ['brightness_begin', 'number.'],
    ['brightness_end', '_brightness'],
    ['indicatorMode_begin', 'select.'],
    ['indicatorMode_end', '_indicator_mode'],
    ['countdown1_begin', 'number.'],
    ['countdown1_end', '_countdown_l1'],
    ['countdown2_begin', 'number.'],
    ['countdown2_end', '_countdown_l2'],
    ['countdown3_begin', 'number.'],
    ['countdown3_end', '_countdown_l3'],
])
