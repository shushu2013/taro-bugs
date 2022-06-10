import { Component } from 'react'
import { View, Swiper, SwiperItem } from '@tarojs/components'
import './index.styl'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <Swiper
        className="swiper"
        indicatorDots
        indicatorColor="rgba(255,255,255,0.3)"
        indicatorActiveColor="rgba(255,255,255,1)"
        circular
        snap-to-edge
        autoplay={true}
      >
        <SwiperItem>
          <View className='demo-text'>1</View>
        </SwiperItem>
        <SwiperItem>
          <View className='demo-text'>2</View>
        </SwiperItem>
        <SwiperItem>
          <View className='demo-text'>3</View>
        </SwiperItem>
      </Swiper>
    )
  }
}
