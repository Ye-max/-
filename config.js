var data = {
      //云开发环境id
      env: 'zaiyi-3ggp5zmqe2dd21e7',
      //分享配置
      share_title: '再易江南',
      share_img: 'https://z3.ax1x.com/2021/10/17/5YBTG4.png', //可以是网络地址，本地文件路径要填绝对位置
      share_poster:'https://z3.ax1x.com/2021/10/17/5YYIeg.jpg',//必须为网络地址
      //客服联系方式
      kefu: {
            qq: '1129097991',
            weixin:'Yeman0918'
      },

      //校区
      campus: [{
                  name: '桃园',
                  id: 0
            },
            {
                  name: '李园',
                  id: 1
            },
            {
                  name: '榴园',
                  id: 2
            },
            {
                  name: '桂园',
                  id: 3
            },
            {
                  name: '梅园',
                  id: 4
            },
            {
                  name: '杏园',
                  id: 5
            },
            {
                  name: '桔园',
                  id: 6
            },
            {
                  name: '涓苑',
                  id: 7
            },
            {
                  name: '清苑',
                  id: 8
            },
            {
                  name: '溪苑',
                  id: 9
            },
            {
                  name: '澈苑',
                  id: 10
            },
            {
                  name: '鸿苑',
                  id: 11
            },
            {
                  name: '浩苑',
                  id: 12
            },
            {
                  name: '润苑',
                  id: 13
            },
            {
                  name: '淳苑',
                  id: 14
            },
            {
                  name: '瀚苑',
                  id: 15
            },
            {
                  name: '其它',
                  id: 16
            },

      ],
      //配置学院，建议不要添加太多，不然前端不好看
      college: [
            {
                  name: '书籍',
                  id: -1
            },
            {
                  name: '电子',
                  id: 0
            },
            {
                  name: '文具',
                  id: 1
            },
            {
                  name: '生活',
                  id: 2
            },
            {
                  name: '食物',
                  id: 3
            },
            {
                  name: '服饰',
                  id: 4
            },
            {
                  name: '运动',
                  id: 5
            },
            {
                  name: '课程',
                  id: 6
            },
            {
                  name: '其他',
                  id: 7
            },
      ],
      class: [
            {
                  name: '表白',
                  id: -1
            },
            {
                  name: '组队',
                  id: 0
            },
            {
                  name: '动态',
                  id: 1
            },
            {
                  name: '寻物',
                  id: 2
            },
      ],
}
//下面的就别动了
function formTime(creatTime) {
      let date = new Date(creatTime),
            Y = date.getFullYear(),
            M = date.getMonth() + 1,
            D = date.getDate(),
            H = date.getHours(),
            m = date.getMinutes(),
            s = date.getSeconds();
      if (M < 10) {
            M = '0' + M;
      }
      if (D < 10) {
            D = '0' + D;
      }
      if (H < 10) {
            H = '0' + H;
      }
      if (m < 10) {
            m = '0' + m;
      }
      if (s < 10) {
            s = '0' + s;
      }
      return Y + '-' + M + '-' + D + ' ' + H + ':' + m + ':' + s;
}

function days() {
      let now = new Date();
      let year = now.getFullYear();
      let month = now.getMonth() + 1;
      let day = now.getDate();
      if (month < 10) {
            month = '0' + month;
      }
      if (day < 10) {
            day = '0' + day;
      }
      let date = year + "" + month + day;
      return date;
}
module.exports = {
      data: JSON.stringify(data),
      formTime: formTime,
      days: days
}