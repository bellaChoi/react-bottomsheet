require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"react-bottomsheet":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var propTypes = {
  showBlockLayer: _react.PropTypes.bool,
  visible: _react.PropTypes.bool,
  className: _react.PropTypes.string,
  onClose: _react.PropTypes.func.isRequired,
  appendCancelBtn: _react.PropTypes.bool,
  customLayout: _react.PropTypes.string
};

var defaultProps = {
  showBlockLayer: true,
  visible: true,
  className: '',
  appendCancelBtn: true
};

var BottomSheet = (function (_React$Component) {
  _inherits(BottomSheet, _React$Component);

  function BottomSheet(props) {
    _classCallCheck(this, BottomSheet);

    _get(Object.getPrototypeOf(BottomSheet.prototype), 'constructor', this).call(this, props);

    this.state = {
      isShow: false,
      animationState: 'leave'
    };
  }

  _createClass(BottomSheet, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.visible) {
        this.enter();
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (Object.is(this.state, nextState) && Object.is(this.props, nextProps)) {
        return false;
      }
      return true;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!this.props.visible && nextProps.visible) {
        this.enter();
      } else if (this.props.visible && !nextProps.visible) {
        this.leave();
      }
    }
  }, {
    key: 'enter',
    value: function enter() {
      var _this = this;

      this.setState({
        isShow: true
      });
      setTimeout(function () {
        document.getElementsByTagName('html')[0].style.overflow = 'hidden';
        _this.setState({
          animationState: 'enter'
        });
      }, 50);
    }
  }, {
    key: 'leave',
    value: function leave() {
      this.setState({
        animationState: 'leave'
      });
      setTimeout(this.onClose.bind(this), 500);
    }
  }, {
    key: 'onClose',
    value: function onClose() {
      if (this.state.animationState === 'leave') {
        document.getElementsByTagName('html')[0].style.overflow = 'auto';
        this.setState({
          isShow: false
        });
      }

      this.props.onCloseFinishAnimation && this.props.onCloseFinishAnimation();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var layer = this.props.showBlockLayer ? _react2['default'].createElement('div', { className: 'bottom-sheet-block-layer', onClick: this.props.onClose }) : null;

      return _react2['default'].createElement(
        'div',
        { className: 'bottom-sheet-wrapper ' + (this.props.className || '') + ' ' + (this.state.animationState || '') + ' ' + (this.state.isShow ? 'shown' : 'hide') },
        layer,
        this.props.customLayout,
        _react2['default'].createElement(
          'div',
          { className: 'bottom-sheet' },
          this.props.children,
          this.props.list && this.props.list.map(function (item, idx) {
            return _react2['default'].createElement(
              'button',
              { key: idx, className: 'bottom-sheet-item', onClick: item.handler },
              item.title
            );
          }),
          this.props.appendCancelBtn && (function () {
            return _react2['default'].createElement(
              'button',
              { className: 'bottom-sheet-item cancel', onClick: _this2.props.onClose },
              'cancel'
            );
          })()
        )
      );
    }
  }]);

  return BottomSheet;
})(_react2['default'].Component);

BottomSheet.propTypes = propTypes;
BottomSheet.defaultProps = defaultProps;

exports['default'] = BottomSheet;
module.exports = exports['default'];

},{"react":undefined}]},{},[]);
