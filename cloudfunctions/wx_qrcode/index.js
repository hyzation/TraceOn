// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

//引入request-promise
var rp = require('request-promise');

// 云函数入口函数
// exports.main = async (event, context) => {
//   const wxContext = cloud.getWXContext()

//   return {
//     event,
//     openid: wxContext.OPENID,
//     appid: wxContext.APPID,
//     unionid: wxContext.UNIONID,
//   }
// }

exports.main = async (event, context) => {
  // const full_path = event.page + '?' + event.scene;
  try {
    // 生成小程序码
    const wxacodeResult = await cloud.openapi.wxacode.getUnlimited({
      scene: event.scene,
      page: event.page,
      env_version: event.env_version,
      width: 240
    })
    // return wxacodeResult;
    if (wxacodeResult.errCode != 0) {
      // 生成二维码失败，返回错误信息
      return wxacodeResult;
    }

    // 上传到云存储
    const uploadResult = await cloud.uploadFile({
      cloudPath: 'qr/' + new Date().getTime() + '.jpg',
      fileContent: wxacodeResult.buffer,
    });
    // return uploadResult;
    if (!uploadResult.fileID) {
      //上传失败，返回错误信息
      return uploadResult;
    }

    // 获取图片临时路径
    getURLReault = await cloud.getTempFileURL({
      fileList: [uploadResult.fileID]
    });
    fileObj = getURLReault.fileList[0];
    fileObj.fromCache = false;

    // 上传成功，获取文件临时url，返回临时路径的查询结果
    return fileObj;

  } catch (err) {
    return err
  }

}