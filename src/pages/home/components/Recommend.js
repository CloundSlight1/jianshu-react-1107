import React, {Component} from 'react'
import {RecommendWrapper, RecommendItem} from '../style'
import { connect } from 'react-redux'
import { actionCreators } from '../store'

class Recommend extends Component {

  render() {
    return (
        <RecommendWrapper>
          {
            this.props.list.map((item) => {
              return (
                <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')}/>
              )
            })
          }
        </RecommendWrapper>
    )
  }
}

const mapState = (state) => {
  // console.log('mapState', state.getIn(['home', 'recommendList']))
  return ({
    list: state.getIn(['home', 'recommendList'])
  })  
}

export default connect(mapState, null)(Recommend)