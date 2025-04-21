export const type = Object.freeze({
    FILE: 'file',
    FOLDER: 'folder'
});

export const data = [
    {
        name: 'explorer',
        children: [ {
            name: 'file1.txt'
        }, {
            name: 'folder1',
            children: [
                {
                    name: 'file2.txt'
                }
            ]
        },{
            name: 'abc.txt'
        }]
    }
   ]
  