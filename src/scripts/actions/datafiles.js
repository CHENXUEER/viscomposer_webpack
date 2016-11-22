/**
 * Created by huwanqi on 2016/10/27.
 */
export const UPLOAD_FILE = 'UPLOAD_FILE';
export const FETCH_FILES_REQUEST = 'FETCH_FILES_REQUEST';
export const FETCH_FILES_SUCCESS = 'FETCH_FILES_SUCCESS';
export const FETCH_FILES_FAIL = 'FETCH_FILES_FAIL';

export const FETCH_FILE_REQUEST = 'FETCH_FILE_REQUEST';
export const FETCH_FILE_SUCCESS = 'FETCH_FILE_SUCCESS';
export const FETCH_FILE_FAIL = 'FETCH_FILE_FAIL';

export const SORT_CSV = 'SORT_CSV';

export function uploadFile(file) {
    return {
        type: UPLOAD_FILE,
        file
    }
}

export function fetchFiles() {
    return {
        type: FETCH_FILES_REQUEST
    }
}

export function fetchFilesSuccess(list) {
    return {
        type: FETCH_FILES_SUCCESS,
        list
    }
}

export function fetchFilesFail() {
    return {
        type: FETCH_FILES_FAIL
    }
}

export function fetchFile() {
    return {
        type: FETCH_FILE_REQUEST
    }
}

export function fetchFileSuccess(data) {
    return {
        type: FETCH_FILE_SUCCESS,
        data
    }
}

export function fetchFileFail() {
    return {
        type: FETCH_FILE_FAIL
    }
}

export function sortCsv(field, order) {
    return {
        type: SORT_CSV,
        field, order
    }
}