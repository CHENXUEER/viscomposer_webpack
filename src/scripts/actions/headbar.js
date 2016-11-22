/**
 * Created by huwanqi on 2016/10/27.
 */
export const TEST_HELLO_WORLD = 'TEST_HELLO_WORLD';
export const COUNT_DOWN = 'COUNT_DOWN';

export function changeMessage(text) {
    return {
        type: TEST_HELLO_WORLD,
        text
    }
}

export function countDown() {
    return {
        type: COUNT_DOWN,
    }
}