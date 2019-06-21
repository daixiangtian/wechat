/** 获取当前页面z-index最高的层级 */
export function getMaxZIndex () {
  let arr = [...document.all].map(e => +window.getComputedStyle(e).zIndex || 0)
  return arr.length ? Math.max(...arr) + 1 : 0
}

export function removeDom (dom) {
  if (!dom) return
  dom.parentNode.removeChild(dom)
}

export function showDialog (value, title, solo = false) {
  const html = `<div class="posi-f t0 b0 l0 r0 flex flex-center">
      <div class="posi-a t0 b0 l0 r0 bg-0-5"></div>
      <div class="posi-r bg-f w90 br-ra-20">
        <div class="h-100 flex-center flex fon-size-30">${title || '提示'}</div>
        <div class="pad-l-30 pad-r-30 pad-t-30 pad-b-30 br-b-e t-c fon-size-28 lineH-32 min-h-100">${value}</div>
        <div class="flex flex-bt br-t-e">
          ${!solo ? ' <span class="fon-size-30 flex-1 h-100 flex-center flex posi-r after-line-e" id="dislog-cancel">取消</span>' : ''}
          <span class="fon-size-30 flex-1 h-100 flex-center flex col-main" id="dislog-confirm">确认</span>
        </div>
      </div>
    </div>`

  const dialogDom = document.createElement('div')
  dialogDom.style.zIndex = getMaxZIndex()
  dialogDom.innerHTML = html
  document.body.appendChild(dialogDom)

  return new Promise((resolve, reject) => {
    const confirm = document.querySelector('#dislog-confirm'),
      cancel = document.querySelector('#dislog-cancel')

    confirm.onclick = () => {
      removeDom(dialogDom)
      resolve(true)
    }

    if (!solo) {
      cancel.onclick = () => {
        removeDom(dialogDom)
        resolve(false)
      }
    }
  })

}

export function operation ({list = [], callBack}) {

  let operationList = ''

  list.forEach((item, i) => {
    operationList += `<li class="flex flex-y-center pad-l-30 pad-r-30 h-100 fon-size-36 col-6 operation-item" data-index="${i}">
                        <div class="w-120 t-c">
                          ${item.icon ? `<i class="iconfont ${item.icon}"></i>` : ''}
                          ${item.image ? `<img src="${item.icon}"/>` : ''}
                        </div>${item.name}
                      </li>`
  })

  const html = `<div class="posi-f t0 b0 l0 r0 flex flex-center">
                  <div class="posi-a t0 b0 l0 r0 bg-0-5" id="operation-cover"></div>
                  <ul class="bg-f posi-a b0 w100 bg-f">${operationList}</ul>
                </div>`

  const operationDom = document.createElement('div')
  operationDom.style.zIndex = getMaxZIndex()
  operationDom.innerHTML = html
  document.body.appendChild(operationDom)

  const cover = document.querySelector('#operation-cover'),
    operationItem = document.querySelectorAll('.operation-item')

  return new Promise((resolve, reject) => {
    cover.onclick = () => {
      removeDom(operationDom)
      resolve(false)
    }
    operationItem.forEach((item, index) => {
      item.onclick = () => {
        callBack && callBack({...list[index], index})
        removeDom(operationDom)
        resolve({...list[index], index})
      }
    })
  })
}

/**
 * 获取数据类型
 * */
export function getType (obj, str) {
  let type = ''
  if (Object.prototype.toString.call(obj) === '[object Array]') {
    type = 'array'
  } else if (obj === true || obj === false) {
    type = 'boolean'
  } else if (!isNaN(obj) && typeof obj != 'string') {
    type = 'number'
  } else if (obj instanceof HTMLElement) {
    type = 'dom'
  } else if (obj instanceof Map) {
    type = 'map'
  } else if (typeof (obj) == 'object' && Object.prototype.toString.call(obj).toLowerCase() == '[object object]' && !obj.length) {
    type = 'json'
  } else {
    type = typeof (obj)
  }
  return str ? type === str : type
}

/** 获取正确的数据格式，
 *  如果传进来的数据格式是正确的就返回自身，
 *  如果不是就进行返回一个需要的数据格式
 *  */
export function getSuccessData (obj, type) {
  let itemType = getType(obj)
  if (getType(type) != 'string') type = getType(type)
  if (itemType == type) return obj
  switch (type) {
    case 'array':
      return []
    case 'json':
      return {}
    case 'string':
      return ''
    case 'number':
      return 0
    case 'function':
      return () => {
      }
  }
}

/** 判断手机号 */
export function isPhone (tel) {
  const teleReg = /^((0\d{2,3})-)(\d{7,8})$/,
    mobileReg = /^1[3456789]\d{9}$/

  return !(!teleReg.test(tel) && !mobileReg.test(tel))
}

/**
 * 时间戳格式转换以及计算
 * */
export function formatTime (time = 0, format = 'YYYY-MM-DD hh:mm:ss') {

  const now = new Date().getTime()

  if (!time) time = now

  while (time.toString().length < 13) time += '0'

  const date = new Date(time)

  date.getMonth()

  const arg = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDay(),
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
  }

  switch (format) {
    case 'YYYY-MM-DD hh:mm:ss':
      return `${arg.year}-${arg.month}-${arg.day} ${arg.hours}:${arg.minutes}:${arg.seconds}`
    case 'YYYY-MM-DD':
      return `${arg.year}-${arg.month}-${arg.day}`
    case 'MM-DD':
      return `${arg.month}-${arg.day}`
    case 'hh:mm:ss':
      return `${arg.hours}:${arg.minutes}:${arg.seconds}`
    case 'hh:mm':
      return `${arg.hours}:${arg.minutes}`
    case 'computed':
      if (now > time) {
        const dt = Math.abs(time - now),    //时间已过去多少毫秒
          S = dt / 1000,    //秒
          M = S / 60,  //分
          H = M / 60,  //小时
          D = H / 24,   //天
          W = D / 7    //周

        if (~~W > 0 && W < 3) {
          return ~~W + '周前'
        } else if (D < 7 && ~~D > 0) {
          return ~~D + '天前'
        } else if (~~H > 0 && H < 24) {
          return ~~H + '小时前'
        } else if (~~M > 0 && M < 60) {
          return ~~M + '分钟前'
        } else if (~~S > 0 && S < 60) {
          return ~~S + '秒前'
        }
      } else {
        console.log('未来的时间')
      }
      return `${arg.year}-${arg.month}-${arg.day} ${arg.hours}:${arg.minutes}:${arg.seconds}`
  }
}

/** 给元素绑定TOUCH事件 */
export function touch ({dom, start, move, end, stop = true, change}) {
  const f = {
    data: {},
    start (e) {						//手指触碰的屏幕就会触发(一次)
      stop && e.preventDefault()		//阻止冒泡，当stop为false的时候就运行冒泡，默认为true
      f.data = {						//储存的是一些数据
        ...f.data,					//扩展运算，将之前的数据进行合并
        x: e.touches[0].pageX,		//手指开始的横向位置
        y: e.touches[0].pageY,		//手指开始的纵向位置
        ex: 0,						//手指结束的横向位置
        ey: 0,						//手指结束的纵向位置
        time: new Date().getTime()	//手指的开始时间
      }
      start && start(f.data)		//执行自定义的 start 方法
    },
    move (e) {					//多次
      stop && e.preventDefault()		//阻止冒泡，当stop为false的时候就运行冒泡，默认为true
      f.data = {				//储存的是一些数据
        ...f.data,			//扩展运算，将之前的数据进行合并
        ex: e.touches[0].pageX,			//手指结束的横向位置
        ey: e.touches[0].pageY,			//手指结束的纵向位置
      }
      move && move({					//执行自定义的 move方法，并且把得到的数据进行返回
        x: e.touches[0].pageX,
        y: e.touches[0].pageY,
        dx: f.data.ex - f.data.x,
        dy: f.data.ey - f.data.y
      })
    },
    end (e) {				//手指离开屏幕就会触发(一次)
      stop && e.preventDefault()		//阻止冒泡，当stop为false的时候就运行冒泡，默认为true
      let time = new Date().getTime()	//手指离开的时间
      end && end({				//执行自定义的 end 方法，并且把得到的数据进行返回
        time,					//当前时间
        startTime: f.data.time,		//手指的开始时间
        dt: time - f.data.time,			//手指在屏幕逗留的时间差 ms
        dy: (f.data.ey || f.data.y) - f.data.y,		//手指在屏幕上的纵向的移动距离
        dx: (f.data.ex || f.data.x) - f.data.x		//手指在屏幕上的横向的移动距离
      })

      // ↓ 下面的就是执行判断手指移动的方向，当达到条件，就会执行change事件，
      // change 返回的参数
      //  	direction: left | right | up | down | origin
      if (new Date().getTime() - f.data.time < 300) {		// 手指开屏幕上的时间很短

        if (Math.abs(f.data.ex - f.data.x) > 20 && Math.abs(f.data.ex - f.data.x) > Math.abs(f.data.ey - f.data.y)) {
          if (change) {
            if (f.data.ex > f.data.x) {
              change({
                direction: 'right'
              })
            } else if (f.data.ex < f.data.x) {
              change({
                direction: 'left'
              })
            }
          }
        } else if (Math.abs(f.data.ey - f.data.y) > 20 && Math.abs(f.data.ex - f.data.x) < Math.abs(f.data.ey - f.data.y)) {
          if (change) {
            if (f.data.ey > f.data.y) {
              change({
                direction: 'down'
              })
            } else if (f.data.ey < f.data.y) {
              change({
                direction: 'up'
              })
            }
          }
        } else {
          change && change({
            direction: 'origin'
          })
        }
      } else if (Math.abs(f.data.ey - f.data.y) >= 50) {
        if (change) {
          if (f.data.ey > f.data.y) {
            change({
              direction: 'down'
            })
          } else if (f.data.ey < f.data.y) {
            change({
              direction: 'up'
            })
          }
        }
      } else if (Math.abs(f.data.ex - f.data.x) >= 50) {
        if (change) {
          if (f.data.ex > f.data.x) {
            change({
              direction: 'right'
            })
          } else if (f.data.ex < f.data.x) {
            change({
              direction: 'left'
            })
          }
        }
      } else {
        change && change({
          direction: 'origin'
        })
      }
    }
  }
  // 这里是防止dom元素绑定事件异常，导致整体页面无法正常往下执行
  try {
    dom.removeEventListener('touchstart', f.start)
    dom.addEventListener('touchstart', f.start)
    dom.removeEventListener('touchmove', f.move)
    dom.addEventListener('touchmove', f.move)
    dom.removeEventListener('touchend', f.end)
    dom.addEventListener('touchend', f.end)
  } catch (e) {
    console.error('给dom元素绑定事件的时候出现了错误', e)
  }
}

export function getAttrs (dom) {
  let attrs = new Object(null)
  if (getType(dom, 'dom')) {
    let attrsMap = dom.attributes
    for (let a in attrsMap) {
      let val = attrsMap[a].nodeValue
      if (val) {
        attrs[attrsMap[a].name] = val
      }
    }
  }
  return attrs
}
