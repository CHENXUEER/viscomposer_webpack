/**
 * Created by huwanqi on 2016/10/27.
 */
export const MARKS_ADD = 'MARKS_ADD';

export function addMarks(name) {
    return {
        type: MARKS_ADD,
        name
    }
}