/**
 * Created by huwanqi on 2016/10/27.
 */
export const FORMS_ADD = 'FORMS_ADD';

export function addForms(name) {
    return {
        type: FORMS_ADD,
        name
    }
}