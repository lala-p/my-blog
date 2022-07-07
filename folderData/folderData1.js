
let folderData1 = new Object()

folderData1['root'] = {
    type: 'folder',
    name: 'root',
    parent: null,
    childList: ['FolderExample', 'FolderExample3']
}

folderData1['FolderExample'] = {
    type: 'folder',
    name: 'Folderrrrr',
    parent: 'root',
    childList: ['FileExample1', 'FileExample2']
}

folderData1['FolderExample2'] = {
    type: 'folder',
    name: 'Folderrrrr',
    parent: 'FolderExample',
    childList: []
}

folderData1['FolderExample3'] = {
    type: 'folder',
    name: 'Folderrrrr',
    parent: 'root',
    childList: ['FileExample1', 'FileExample2']
}


export default folderData1