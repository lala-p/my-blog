import FolderBase from './folderBase'

let folderData1 = new Object()

folderData1['root'] = new FolderBase()

folderData1['root'].name = 'Root'
folderData1['root'].childList = ['childList']

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

folderData1['FolderExample'] = new FolderBase()

folderData1['FolderExample'].name = 'folderEx'
folderData1['FolderExample'].parent = 'root'
folderData1['FolderExample'].childList = ['example1', 'example2', 'example3']

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

folderData1['example1'] = new FolderBase()

folderData1['example1'].type = 'linkFolder'
folderData1['example1'].name = 'folder11111111111111111111111111111111111111111'
folderData1['example1'].parent = 'FolderExample'
folderData1['example1'].childList = ['file1', 'file2', 'file3', 'file4', 'file5']

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

folderData1['example2'] = new FolderBase()

folderData1['example2'].name = 'folder2'
folderData1['example2'].parent = 'FolderExample'

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

folderData1['example3'] = new FolderBase()

folderData1['example3'].name = 'folder33333333'
folderData1['example3'].parent = 'FolderExample'

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

export default folderData1
