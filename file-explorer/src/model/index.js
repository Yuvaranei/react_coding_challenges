const type = Object.freeze({
    FILE: 'file',
    FOLDER: 'folder'
});

export const structure = {
    html: {
        file1: {type: type.FILE},
        folder1: {
            type: type.FOLDER,
            value: {
                file2: {type: type.FILE}
            }
        }
    }
}