import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  showBlockLayer: PropTypes.bool,
  visible: PropTypes.bool,
  className: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  appendCancelBtn: PropTypes.bool,
  customLayout: PropTypes.string
}

const defaultProps = {
  showBlockLayer: true,
  visible: true,
  className: '',
  appendCancelBtn: true
}

class BottomSheet extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isShow: false,
      animationState: 'leave'
    }
  }

  componentDidMount () {
    if (this.props.visible) {
      this.enter()
    }
  }

  shouldComponentUpdate (nextProps, nextState) {
    if (Object.is(this.state, nextState) && Object.is(this.props, nextProps)) {
      return false
    }
    return true
  }

  componentWillReceiveProps (nextProps) {
    if (!this.props.visible && nextProps.visible) {
      this.enter()
    } else if (this.props.visible && !nextProps.visible) {
      this.leave()
    }
  }

  enter () {
    this.setState({
      isShow: true
    })
    setTimeout(() => {
      document.getElementsByTagName('html')[0].style.overflow = 'hidden'
      this.setState({
        animationState: 'enter'
      })
    }, 50)
  }

  leave () {
    this.setState({
      animationState: 'leave'
    })
    setTimeout(this.onClose.bind(this), 500)
  }

  onClose () {
    if (this.state.animationState === 'leave') {
      document.getElementsByTagName('html')[0].style.overflow = 'auto'
      this.setState({
        isShow: false
      })
    }

    this.props.onCloseFinishAnimation && this.props.onCloseFinishAnimation()
  }

  componentWillUnmount () {
    document.getElementsByTagName('html')[0].style.overflow = 'auto'
  }

  render () {
    const layer = this.props.showBlockLayer ? <div className='bottom-sheet-block-layer' onClick={this.props.onClose} /> : null

    return (
      <div className={`bottom-sheet-wrapper ${this.props.className || ''} ${this.state.animationState || ''} ${this.state.isShow ? 'shown' : 'hide'}`}>
        {layer}
        {this.props.customLayout}
        <div className='bottom-sheet'>
          {this.props.children}
          {this.props.list && this.props.list.map((item, idx) => {
             return (<button key={idx} className='bottom-sheet-item' onClick={item.handler}>
                       {item.title}
                     </button>)
           })}
          {this.props.appendCancelBtn && (() => {
             return (<button className='bottom-sheet-item cancel' onClick={this.props.onClose}>
                       cancel
                     </button>)
           })()}
        </div>
      </div>
    )
  }
}

BottomSheet.propTypes = propTypes
BottomSheet.defaultProps = defaultProps

export default BottomSheet
