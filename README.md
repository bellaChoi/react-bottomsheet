# react-bottomsheet

[![version](https://img.shields.io/npm/v/react-bottomsheet.svg) ![download](https://img.shields.io/npm/dm/react-bottomsheet.svg)](https://www.npmjs.com/package/react-bottomsheet)

react bottom sheet component. It is not for react-native.

## Demo & Examples

Live demo: [BellaChoi.github.io/components/demos/react-bottomsheet](http://BellaChoi.github.io/react-bottomsheet/)

![](https://zippy.gfycat.com/RigidApprehensiveHake.gif)

To build the examples locally, run:

```
npm install
npm start
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.


## Installation

The easiest way to use react-bottomsheet is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

You can also use the standalone build by including `dist/react-bottomsheet.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.

```
npm install react-bottomsheet --save
```


## Usage

```
var ReactBottomsheet = require('react-bottomsheet');

...

toggleBottomSheet () {
  let obj = (this.state.bottomSheet) ? { 'bottomSheet': false } : { 'bottomSheet': true }
  this.setState(obj)
}

...

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

...

<div>
  <button className='example' onClick={this.toggleBottomSheet.bind(this)}>open bottom sheet!</button>
  <ReactBottomsheet
    visible={this.state.bottomSheet}
    onClose={this.toggleBottomSheet.bind(this)}
    list={obj} />
</div>
```

### custom menu

```
<ReactBottomsheet
  visible={this.state.bottomSheet}
  onClose={this.toggleBottomSheet.bind(this)}>
  <button className='bottom-sheet-item' onClick={this.onClickMenu1}>Menu1</button>
  <button className='bottom-sheet-item' onClick={this.onClickMenu2}>Menu2</button>
</ReactBottomsheet>
```

### custom layout

```
let customLayout = (
  <div className='custom-layout'>Custom</div>
)

<ReactBottomsheet
  visible={this.state.bottomSheet}
  onClose={this.toggleBottomSheet.bind(this)}
  customLayout={customLayout}
  list={obj} />
```

### Properties

|    Property    | Type |          Description          | Default |
| -------------  | ---- |          -----------          | ------- |
| showBlockLayer | bool | show background layer | True |
| visible | bool | Initialize state | True |
| appendCancelBtn | bool | Initialize show cancel button | True |
| className | string | custom class name |  |
| customLayout | string | html to add custom layout |  |
| onClose | function | callback at close (control state) |  |
| onCloseFinishAnimation | function | callback at close (after animation finish) |  |


## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack. A UMD bundle is also built to `dist`, which can be included without the need for any build system.

To build, watch and serve the examples (which will also watch the component source), run `npm start`. If you just want to watch changes to `src` and rebuild `lib`, run `npm run watch` (this is useful if you are working with `npm link`).

## License

Copyright (c) 2017 BellaChoi.

