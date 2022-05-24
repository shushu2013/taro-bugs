import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View, Button } from '@tarojs/components'

import './index.styl'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleVideoTest = () => {
    Taro.navigateTo({
      url: '/pages/videoTest/index'
    })
  }

  handleInputTest = () => {
    Taro.navigateTo({
      url: '/pages/inputTest/index'
    })
  }

  render () {
    return (
      <View className='index'>
        <Button
          onClick={this.handleVideoTest}
          className="btn"
          type="primary"
        >
          打开视频测试页面
        </Button>

        <Button
          onClick={this.handleInputTest}
          className="btn"
          type="primary"
        >
          打开输入框测试页面
        </Button>
      </View>
    )
  }
}
