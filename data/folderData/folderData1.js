
let folderData1 = new Object()

folderData1['root'] = {
    type     : 'folder',
    name     : 'Root',
    childList: ['FolderExample'],
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

folderData1['FolderExample'] = {
    type: 'folder',
    name: 'FolderExample',
    parent: 'root',
    childList: ['example1', 'example2', 'example3']
}

folderData1['example1'] = {
    type: 'folder',
    name: 'example1example1example1example1example1example1',
    parent: 'FolderExample',
}

folderData1['example2'] = {
    type: 'folder',
    name: 'exam',
    parent: 'FolderExample',
}

folderData1['example3'] = {
    type: 'folder',
    name: 'ex3333333333333333333333333333333',
    parent: 'FolderExample',
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// folderData1['react'] = {
//     type: 'folder',
//     name: 'react',
//     parent: 'root',
// }

// folderData1['roqkfdltb'] = {
//     type: 'folder',
//     name: '개발 이슈',
//     parent: 'root',
// }

// folderData1['toyProject'] = {
//     type: 'folder',
//     name: 'toyProject',
//     parent: 'root',
//     childList: ['my-blog']
// }

// folderData1['my-blog'] = {
//     type: 'folder',
//     name: 'my-blog',
//     parent: 'toyProject',
//     childList: ['', '']
// }

// folderData1['asdfddsf'] = {
//     type: 'folder',
//     name: 'plan-it',
//     parent: 'toyProject',
//     childList: ['', '']
// }

// folderData1['asdlkfjsdf'] = {
//     type     : 'folder',
//     name     : '알고리즘',
//     parent   : 'root',
//     childList: ['asdlkfjsdf', 'FolderExample3'],
// }

// folderData1['asdlkfjsdf'] = {
//     type     : 'folder',
//     name     : '백준',
//     parent   : 'asdlkfjsdf',
//     childList: ['FolderExample', 'FolderExample3'],
// }


export default folderData1