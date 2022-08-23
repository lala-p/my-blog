import { postObject, PostSystem } from './postData'
import { folderObject, FolderSystem } from './folderData'
import { noticeObject, NoticeSystem } from './noticeData'

export const folderData = new FolderSystem(folderObject, postObject)
export const postData = new PostSystem(postObject, folderObject)
export const noticeData = new NoticeSystem(noticeObject, 10, 5)
