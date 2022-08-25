import { PostData, FolderData, NoticeData } from './dataClass'

import postObject from './postObject'
import folderObject from './folderObject'
import noticeObject from './noticeObject'

export const postData = new PostData(postObject, folderObject)
export const folderData = new FolderData(folderObject, postObject, 2)
export const noticeData = new NoticeData(noticeObject, 3)
// export const noticeData = new NoticeData(noticeObject, 10, 5)