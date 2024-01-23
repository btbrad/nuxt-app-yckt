import { ElMessage } from 'element-plus'
import { ElMessageBox } from 'element-plus'

export const showMessage = (msg: string, type: string = 'success') => {
  ElMessage({
    // @ts-ignore
    message: msg,
    type,
  })
}

export const showConfirmMessage = (
  msg: string = '',
  title: string = '提示',
  confirmCallback?: any,
  cancelCallback?: any
) => {
  ElMessageBox.confirm(msg, title, {
    confirmButtonText: 'OK',
    cancelButtonText: 'Cancel',
    type: 'warning',
  })
    .then(() => {
      confirmCallback!()
    })
    .catch(() => {
      cancelCallback!()
    })
}
