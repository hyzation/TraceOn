// components/yjCanvas/yjCanvas.js
Component({
  properties:{
    options: {
      type: Array,
      value: [],
      observer: 'optionChange'
    },
    width: Number,
    height: Number,
    canvasId: String,
  },
  /**
   * 页面的初始数据
   */
  data: {
    
  },
  methods:{
    optionChange(){
      console.log(123);
      let that = this
      if(this.data.options.length == 0) return
      if(!this.data.canvasId) return this.triggerEvent('canvasChange',{code: 1,msg: '无canvasId'})
      const query = this.createSelectorQuery()
      query.select('#'+this.data.canvasId).fields({node: true, size: true},res=>{
        let canvas = res.node
        let ctx =  canvas.getContext('2d')
        wx.getSystemInfo({
          success: (result) => {
            let zoom = result.pixelRatio
            canvas.width = this.data.width * zoom
            canvas.height = this.data.height * zoom
            this.render(canvas,ctx,this.data.options,zoom).then(res=>{
              setTimeout(()=>{
                wx.canvasToTempFilePath({
                  canvas,
                  width: this.data.width * zoom,
                  height: this.data.height * zoom,
                  destWidth: this.data.width * zoom,
                  destHeight: this.data.height * zoom,
                  quality: 1,
                  success(res) {
                    that.triggerEvent('canvasChange',{code: 0, data: res,msg: '成功'})
                  },
                  fail(err){
                    that.triggerEvent('canvasChange',{code: 1,data: err,msg: '生成图片失败'})
                  }
                })
              },300)
              
            })
          },
        })
      }).exec()
    },
    render(canvas,ctx,options,zoom){
      let promise = Promise.resolve()
      let promise2 = options.forEach(item=>{
        promise = promise.then(() => new Promise(resolve => {
          switch(item.type){
            case 'image':
              let img = canvas.createImage()
              img.src = item.url
              img.onload = e => {
                if(item.round){
                  ctx.save();
                  ctx.beginPath()
                  ctx.arc((item.left + item.borderRadius) * zoom, (item.top + item.borderRadius) * zoom, item.borderRadius * zoom, 0, 2*Math.PI ,false)
                  ctx.clip()
                  ctx.drawImage(img, item.left * zoom, item.top * zoom, item.width * zoom, item .height * zoom)
                  ctx.restore()
                  resolve()
                }else{
                  ctx.drawImage(img, item.left * zoom, item.top * zoom, item.width * zoom, item.height * zoom)
                  resolve()
                }
              }
              // this.getImageInfo(item.url).then(res=>{
                
              // })
              break;
              case 'text':
                ctx.font = item.fontSize * zoom + 'px '+ item.fontFamily||'PingFangSC-Regular'
                ctx.fillStyle = item.color
                let promise = this.textList(ctx,item,zoom)
                Promise.all([promise]).then(res=>{
                  resolve()
                })
                break;
              case 'rect':
                ctx.fillStyle = item.background
                if(item.round){
                  ctx.save()
                  ctx.beginPath()
                  // 左上角
                  ctx.arc((item.left + item.borderRadius)*zoom,(item.top + item.borderRadius)*zoom,item.borderRadius * zoom, Math.PI, 1.5 * Math.PI,false)
                  // border-top
                  ctx.moveTo((item.left+item.borderRadius)*zoom,item.top*zoom)
                  ctx.lineTo((item.left + item.width - item.borderRadius)*zoom,item.top*zoom)
                  ctx.lineTo((item.left+item.width)*zoom,(item.top+item.borderRadius)*zoom)
                  // 右上角
                  ctx.arc((item.left + item.width - item.borderRadius) * zoom, (item.top + item.borderRadius) * zoom, item.borderRadius * zoom, Math.PI * 1.5, Math.PI * 2, false)
                  // border-right
                  ctx.lineTo((item.left + item.width)*zoom, (item.top + item.height - item.borderRadius)*zoom)
                  ctx.lineTo((item.left + item.width - item.borderRadius) * zoom , (item.top + item.height) * zoom)
                  // 右下角
                  ctx.arc((item.left + item.width - item.borderRadius) * zoom , (item.top + item.height - item.borderRadius) * zoom, item.borderRadius * zoom, 0 ,Math.PI * 0.5, false)
                  // border-bottom
                  ctx.lineTo((item.left + item.borderRadius) * zoom, (item.top + item.height) * zoom)
                  ctx.lineTo(item.left * zoom, (item.top + item.height - item.borderRadius) * zoom)
                  // 左下角
                  ctx.arc((item.left + item.borderRadius) * zoom, (item.top + item.height - item.borderRadius) * zoom, item.borderRadius * zoom , Math.PI * 0.5, Math.PI, false)
                  // border-left
                  ctx.lineTo(item.left * zoom, (item.top + item.borderRadius) * zoom)
                  ctx.lineTo((item.left + item.borderRadius) * zoom, item.top * zoom)
                  ctx.fill()
                  ctx.closePath()
                  ctx.clip()
                  resolve()
                }else{
                  ctx.rect(item.left * zoom, item.top * zoom ,item.width * zoom, item.height * zoom)
                  ctx.fill()
                  resolve()
                }
            }
        }))
      })
      return new Promise(resolve=>{
        Promise.all([promise2]).then(res=>{
          resolve()
        })
      })
    },
    textList(ctx,item,zoom,){
      let chr = item.content.split("")
      let temp = ""
      let row = []
      for(let i = 0; i < chr.length ; i++){
        if(ctx.measureText(temp).width < (item.maxWidth * zoom || this.data.width * zoom)){
          temp += chr[i]
        }else{
          i--
          row.push(temp)
          temp = ''
        }
      }
      row.push(temp)
      if(item.maxLine && row.length > item.maxLine){
        let rowCut = row.slice(0,item.maxLine)
        let rowPart = rowCut[item.maxLine - 1]
        let lastChr = rowPart.split('')
        let lastTemp = ""
        for(let i = 0; i < lastChr.length; i++){
          if(ctx.measureText(lastTemp).width < ((item.maxWidth * zoom || this.data.width * zoom) - item.fontSize * zoom * 1.5)){
            lastTemp += lastChr[i]
          }else{
            break;
          }
        }
        lestTemp += '...'
        rowCut.splice(item.maxLine - 1, 1 , lastTemp)
        row = rowCut
      }
      let promise = row.forEach((res ,index)=>{
        let lineLight = item.lineHeight || item.fontSize
        ctx.fillText(res, item.left*zoom, lineLight*zoom + index * lineLight*zoom + item.top*zoom)
      })
      Promise.all([promise]).then(res=>{
        return promise
      })
    },
    getImageInfo(url){
      const objExp = new RegExp(/^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/)
      return new Promise((resolve,reject)=>{
        if(objExp.test(url)){
          wx.getImageInfo({
            src: url,
            success: (res)=>{
              resolve(res.path)
            },
            fail: (err)=>{
              this.triggerEvent('canvasChage',{code: 1,data: err,msg: '图片加载失败'})
              reject(err)
            }
          })
        }else{
          resolve(url)
        }
      }) 
    }
  },
})