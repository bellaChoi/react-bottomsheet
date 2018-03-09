require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var ReactDOM = require('react-dom');
var ReactBottomsheet = require('react-bottomsheet');

var App = (function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    _get(Object.getPrototypeOf(App.prototype), 'constructor', this).call(this, props);

    this.state = {
      bottomSheet: false
    };
  }

  _createClass(App, [{
    key: 'toggleBottomSheet',
    value: function toggleBottomSheet() {
      var obj = this.state.bottomSheet ? { 'bottomSheet': false } : { 'bottomSheet': true };
      this.setState(obj);
    }
  }, {
    key: 'render',
    value: function render() {
      var obj = [];
      obj.push({
        title: 'modify',
        handler: function handler() {
          window.alert('modify clicked!');
        }
      });
      obj.push({
        title: 'delete',
        handler: function handler() {
          window.alert('delete clicked!');
        }
      });

      return React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          { className: 'example', onClick: this.toggleBottomSheet.bind(this) },
          'open bottom sheet!'
        ),
        React.createElement(ReactBottomsheet, {
          visible: this.state.bottomSheet,
          onClose: this.toggleBottomSheet.bind(this),
          list: obj })
      );
    }
  }]);

  return App;
})(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

},{"react":undefined,"react-bottomsheet":undefined,"react-dom":undefined}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvaHlld29uY2hvaS9yZWFjdC1ib3R0b21zaGVldC9leGFtcGxlL3NyYy9leGFtcGxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztBQ0FBLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQTtBQUM1QixJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUE7QUFDbkMsSUFBSSxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQTs7SUFFN0MsR0FBRztZQUFILEdBQUc7O0FBQ0ssV0FEUixHQUFHLENBQ00sS0FBSyxFQUFFOzBCQURoQixHQUFHOztBQUVMLCtCQUZFLEdBQUcsNkNBRUMsS0FBSyxFQUFDOztBQUVaLFFBQUksQ0FBQyxLQUFLLEdBQUc7QUFDWCxpQkFBVyxFQUFFLEtBQUs7S0FDbkIsQ0FBQTtHQUNGOztlQVBHLEdBQUc7O1dBU1csNkJBQUc7QUFDbkIsVUFBSSxHQUFHLEdBQUcsQUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBSSxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsQ0FBQTtBQUN2RixVQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0tBQ25COzs7V0FFTSxrQkFBRztBQUNSLFVBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQTtBQUNaLFNBQUcsQ0FBQyxJQUFJLENBQUM7QUFDUCxhQUFLLEVBQUUsUUFBUTtBQUNmLGVBQU8sRUFBRSxtQkFBTTtBQUNiLGdCQUFNLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUE7U0FDaEM7T0FDRixDQUFDLENBQUE7QUFDRixTQUFHLENBQUMsSUFBSSxDQUFDO0FBQ1AsYUFBSyxFQUFFLFFBQVE7QUFDZixlQUFPLEVBQUUsbUJBQU07QUFDYixnQkFBTSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO1NBQ2hDO09BQ0YsQ0FBQyxDQUFBOztBQUVKLGFBQ0M7OztRQUNLOztZQUFRLFNBQVMsRUFBQyxTQUFTLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEFBQUM7O1NBQTRCO1FBQ3ZHLG9CQUFDLGdCQUFnQjtBQUNYLGlCQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEFBQUM7QUFDaEMsaUJBQU8sRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxBQUFDO0FBQzNDLGNBQUksRUFBRSxHQUFHLEFBQUMsR0FBRztPQUNkLENBQ047S0FDQTs7O1NBdENHLEdBQUc7R0FBUyxLQUFLLENBQUMsU0FBUzs7QUF5Q2pDLFFBQVEsQ0FBQyxNQUFNLENBQUMsb0JBQUMsR0FBRyxPQUFHLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0JylcbnZhciBSZWFjdERPTSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpXG52YXIgUmVhY3RCb3R0b21zaGVldCA9IHJlcXVpcmUoJ3JlYWN0LWJvdHRvbXNoZWV0JylcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYm90dG9tU2hlZXQ6IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlQm90dG9tU2hlZXQgKCkge1xuICAgIGxldCBvYmogPSAodGhpcy5zdGF0ZS5ib3R0b21TaGVldCkgPyB7ICdib3R0b21TaGVldCc6IGZhbHNlIH0gOiB7ICdib3R0b21TaGVldCc6IHRydWUgfVxuICAgIHRoaXMuc2V0U3RhdGUob2JqKVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBsZXQgb2JqID0gW11cbiAgICBvYmoucHVzaCh7XG4gICAgICB0aXRsZTogJ21vZGlmeScsXG4gICAgICBoYW5kbGVyOiAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5hbGVydCgnbW9kaWZ5IGNsaWNrZWQhJylcbiAgICAgIH1cbiAgICB9KVxuICAgIG9iai5wdXNoKHtcbiAgICAgIHRpdGxlOiAnZGVsZXRlJyxcbiAgICAgIGhhbmRsZXI6ICgpID0+IHtcbiAgICAgICAgd2luZG93LmFsZXJ0KCdkZWxldGUgY2xpY2tlZCEnKVxuICAgICAgfVxuICAgIH0pXG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2V4YW1wbGUnIG9uQ2xpY2s9e3RoaXMudG9nZ2xlQm90dG9tU2hlZXQuYmluZCh0aGlzKX0+b3BlbiBib3R0b20gc2hlZXQhPC9idXR0b24+XG5cdFx0XHRcdDxSZWFjdEJvdHRvbXNoZWV0XG4gICAgICAgICAgdmlzaWJsZT17dGhpcy5zdGF0ZS5ib3R0b21TaGVldH1cbiAgICAgICAgICBvbkNsb3NlPXt0aGlzLnRvZ2dsZUJvdHRvbVNoZWV0LmJpbmQodGhpcyl9XG4gICAgICAgICAgbGlzdD17b2JqfSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuICB9XG59XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpXG4iXX0=
