var React = require('react')
var ReactDOM = require('react-dom')
var ReactBottomsheet = require('react-bottomsheet')

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      bottomSheet: false
    }
  }

  toggleBottomSheet () {
    let obj = (this.state.bottomSheet) ? { 'bottomSheet': false } : { 'bottomSheet': true }
    this.setState(obj)
  }

  render () {
    let obj = []
    obj.push({
      title: 'modify',
      handler: () => {
        window.alert('modify clicked!')
      }
    })
    obj.push({
      title: 'delete',
      handler: () => {
        window.alert('delete clicked!')
      }
    })

		return (
			<div>
        <button className='example' onClick={this.toggleBottomSheet.bind(this)}>open bottom sheet!</button>
				<ReactBottomsheet
          visible={this.state.bottomSheet}
          onClose={this.toggleBottomSheet.bind(this)}
          list={obj} />
			</div>
		)
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
