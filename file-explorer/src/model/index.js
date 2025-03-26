export const type = Object.freeze({
    FILE: 'file',
    FOLDER: 'folder'
});

export const structure = [{
    type: type.FOLDER, 
    name: 'main',
     content:[
    {type: type.FILE, name: 'filename', content: ''},
    {type: type.FOLDER, name: 'html', content: [
        {type: type.FILE, name: 'basics', content: ''}
    ]}
]}]


