import { Component } from 'react'
import { View, Input } from '@tarojs/components'
import './index.styl'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='set-input-page'>
        <Input
          className="input-content"
          type="text"
          focus={true}
          placeholder="请输入内容"
        />
      </View>
    )
  }
}
