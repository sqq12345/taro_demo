import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtCountdown } from 'taro-ui'
import { add, minus, asyncAdd } from '../../../actions/counter'
import './index.styl'

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))

class Me extends Component {

    config = {
      navigationBarTitleText: '我的页面',
    }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () {
  }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Button className='add_btn' onClick={this.props.add}>+</Button>
        <Button className='dec_btn' onClick={this.props.dec}>-</Button>
        <Button className='dec_btn' onClick={this.props.asyncAdd}>me</Button>
        <View><Text>{this.props.counter.num}</Text></View>
        <View><Text>Hello, World</Text></View>
        {/*<AtCountdown*/}
          {/*format={{ hours: ':', minutes: ':', seconds: '' }}*/}
          {/*seconds={10}*/}
          {/*onTimeUp={this.onTimeUp.bind(this)}*/}
        {/*/>*/}
      </View>
    )
  }
}

export default Me