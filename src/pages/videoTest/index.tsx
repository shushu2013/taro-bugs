import { Component } from 'react'
import { View, Video } from '@tarojs/components'
import './index.styl'

export default class Index extends Component {

  state: any = {
    videoUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
    coverUrl: 'https://img.finstao.com/60e2ac9674ee115e29e44cb036469af6.png',
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const {
      videoUrl,
      coverUrl,
    } = this.state

    return (
      <View className="video-detail-page">
        <Video
          id='video'
          src={videoUrl}
          initialTime={0}
          controls={true}
          showFullscreenBtn={true}
          autoplay={false}
          loop={false}
          muted={false}
          poster={coverUrl}
        />
      </View>
    )
  }
}
