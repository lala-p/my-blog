import { Folder } from '../baseClass'

let folderObject1 = new Object()

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

folderObject1['root'] = new Folder()

folderObject1['root'].name = 'Root'
folderObject1['root'].childList = ['FolderExample']

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

folderObject1['FolderExample'] = new Folder()

folderObject1['FolderExample'].name = 'folderEx'
folderObject1['FolderExample'].parent = 'root'
folderObject1['FolderExample'].childList = ['example1', 'example2']

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

folderObject1['example1'] = new Folder()

folderObject1['example1'].type = 'postFolder'
// folderObject1['example1'].name = 'folder11111111111111111111111111111111111111111'
folderObject1['example1'].name = 'folder111'
folderObject1['example1'].parent = 'FolderExample'
folderObject1['example1'].childList = ['file1', 'file2', 'file3']

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

folderObject1['example2'] = new Folder()

folderObject1['example2'].type = 'postFolder'

folderObject1['example2'].name = 'folder2'
folderObject1['example2'].parent = 'FolderExample'
folderObject1['example2'].childList = ['file4', 'file5', 'test']

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

export default folderObject1
