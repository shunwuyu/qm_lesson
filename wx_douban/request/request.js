import api from './api'
import utils from '../utils/util'

function request(url, data, successCb, errorCb, completeCb) {
  wx.request({
    url,
    data,
    header:{
      'Content-Type': 'json'
    },
    method: 'GET',
    success: (res) => {
      if (res.statusCode == 200 && utils.isFunction(successCb))
        successCb(res.data)
    },
    error: () => {
      if (utils.isFunction(errorCb))
        errorCb()
    },
    complete: () => {
      if (utils.isFunction(completeCb))
        completeCb();
    }
  })
}

function requestSearchBook(data, successCb, errorCb, completeCb)  {
  request(api.API_BOOK_SEARCH, data, successCb, errorCb, completeCb);
}
function requestBookDetail(id, data, successCb, errorCb, completeCb ) {
  request(api.API_BOOK_DETAIL.replace(':id', id), data, successCb, errorCb, completeCb);
  // wx.request()
}

export default {
  requestSearchBook: requestSearchBook,
  requestBookDetail: requestBookDetail
}