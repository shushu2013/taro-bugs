export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/inputTest/index',
    'pages/videoTest/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  animation: false,
  // tabBar: {
  //   list: [
  //     {
  //       iconPath: 'img/home-normal@2x.png',
  //       selectedIconPath: 'img/home-active@2x.png',
  //       pagePath: 'pages/index/index',
  //       text: '视频测试',
  //     },
  //     {
  //       iconPath: 'img/enterprise-normal@2x.png',
  //       selectedIconPath: 'img/enterprise-active@2x.png',
  //       pagePath: 'pages/input/index',
  //       text: '输入框测试',
  //     },
  //   ],
  //   color: '#999999',
  //   selectedColor: '#FFDB59',
  //   backgroundColor: '#fff',
  //   borderStyle: 'white',
  // }
})
