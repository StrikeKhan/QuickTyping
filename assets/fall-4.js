var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _templateObject = _taggedTemplateLiteral(["\n  padding: 0.25rem 0.75rem;\n  font-size: 1.3rem;\n  background: ", ";\n  border-radius: 3px;\n  display: inline-block;\n  border: 2px solid #0000ff;\n  cursor: pointer;\n  transition: 0.25s;\n  will-change: transform;\n  ", " box-shadow: -1px 1px 0px #0000ff,\n    -2px 2px 0px #0000ff,\n    -3px 3px 0px #0000ff,\n    -4px 4px 0px #0000ff;\n\n  &:hover {\n    transform: scale(1.05);\n    box-shadow: -1px 1px 0px #0000ff, -2px 2px 0px #0000ff, -3px 3px 0px #0000ff,\n      -4px 4px 0px #0000ff, -5px 5px 0px #0000ff, -6px 6px 0px #0000ff;\n  }\n\n  &:active {\n    transform: scale(0.95);\n    box-shadow: -1px 1px 0px #222, -2px 2px 0px #222;\n  }\n"], ["\n  padding: 0.25rem 0.75rem;\n  font-size: 1.3rem;\n  background: ", ";\n  border-radius: 3px;\n  display: inline-block;\n  border: 2px solid #000;\n  cursor: pointer;\n  transition: 0.25s;\n  will-change: transform;\n  ", " box-shadow: -1px 1px 0px #0000ff,\n    -2px 2px 0px #0000ff,\n    -3px 3px 0px #0000ff,\n    -4px 4px 0px #0000ff;\n\n  &:hover {\n    transform: scale(1.05);\n    box-shadow: -1px 1px 0px #0000ff, -2px 2px 0px #0000ff, -3px 3px 0px #0000ff,\n      -4px 4px 0px #0000ff, -5px 5px 0px #0000ff, -6px 6px 0px #0000ff;\n  }\n\n  &:active {\n    transform: scale(0.95);\n    box-shadow: -1px 1px 0px #222, -2px 2px 0px #222;\n  }\n"]),_templateObject2 = _taggedTemplateLiteral(["\n color:blue; \n display: block;\n  margin: 10px 0;\n  position: relative;\n  font-size: 1.3rem;\n  cursor: pointer;\n  transition: 0.25s;\n\n  input {\n    display: none;\n  }\n\n  span {\n    display: block;\n    padding-left: 50px;\n\n    &::before {\n      content: \"\";\n      position: absolute;\n      height: 10px;\n      width: 10px;\n      border: 2px solid  #a12323;\n      left: 20px;\n      top: 5px;\n      transition: 0.25s;\n    }\n  }\n\n  input:checked + span {\n    font-size: 1.4rem;\n\n    &::before {\n      border-top: none;\n      border-left: none;\n      transform: rotate(45deg);\n      height: 20px;\n      top: -2px;\n    }\n  }\n"], ["\n  display: block;\n  margin: 10px 0;\n  position: relative;\n  font-size: 1.3rem;\n  cursor: pointer;\n  transition: 0.25s;\n\n  input {\n    display: none;\n  }\n\n  span {\n    display: block;\n    padding-left: 50px;\n\n    &::before {\n      content: \"\";\n      position: absolute;\n      height: 10px;\n      width: 10px;\n      border: 2px solid black;\n      left: 20px;\n      top: 5px;\n      transition: 0.25s;\n    }\n  }\n\n  input:checked + span {\n    font-size: 1.4rem;\n\n    &::before {\n      border-top: none;\n      border-left: none;\n      transform: rotate(45deg);\n      height: 20px;\n      top: -2px;\n    }\n  }\n"]),_templateObject3 = _taggedTemplateLiteral(["\n  animation: header-animation 2s infinite linear;\n color:blueviolet; \n font-family: \"Bungee Shade\", cursive;\n  text-align: center;\n  font-size: 4rem;\n\n  @keyframes header-animation {\n    0% {\n      text-shadow: -1px 1px #00aeef, -2px 2px #00aeef, -3px 3px #00aeef, -4px 4px #00aeef,\n        -5px 5px #00aeef, -6px 6px #fff, -7px 7px #fff, -8px 8px #fff,\n        -9px 9px #fff, -10px 10px #fff;\n    }\n    10% {\n      text-shadow: -1px 1px #fff, -2px 2px #00aeef, -3px 3px #00aeef, -4px 4px #00aeef,\n        -5px 5px #00aeef, -6px 6px #00aeef, -7px 7px #fff, -8px 8px #fff,\n        -9px 9px #fff, -10px 10px #fff;\n    }\n    20% {\n      text-shadow: -1px 1px #fff, -2px 2px #fff, -3px 3px #00aeef, -4px 4px #00aeef,\n        -5px 5px #00aeef, -6px 6px #00aeef, -7px 7px #00aeef, -8px 8px #fff,\n        -9px 9px #fff, -10px 10px #fff;\n    }\n    30% {\n      text-shadow: -1px 1px #fff, -2px 2px #fff, -3px 3px #fff, -4px 4px #00aeef,\n        -5px 5px #00aeef, -6px 6px #00aeef, -7px 7px #00aeef, -8px 8px #00aeef,\n        -9px 9px #fff, -10px 10px #fff;\n    }\n    40% {\n      text-shadow: -1px 1px #fff, -2px 2px #fff, -3px 3px #fff, -4px 4px #fff,\n        -5px 5px #00aeef, -6px 6px #00aeef, -7px 7px #00aeef, -8px 8px #00aeef,\n        -9px 9px #00aeef, -10px 10px #fff;\n    }\n    50% {\n      text-shadow: -1px 1px #fff, -2px 2px #fff, -3px 3px #fff, -4px 4px #fff,\n        -5px 5px #fff, -6px 6px #00aeef, -7px 7px #00aeef, -8px 8px #00aeef,\n        -9px 9px #00aeef, -10px 10px #00aeef;\n    }\n    60% {\n      text-shadow: -1px 1px #00aeef, -2px 2px #fff, -3px 3px #fff, -4px 4px #fff,\n        -5px 5px #fff, -6px 6px #fff, -7px 7px #00aeef, -8px 8px #00aeef,\n        -9px 9px #00aeef, -10px 10px #00aeef;\n    }\n    70% {\n      text-shadow: -1px 1px #00aeef, -2px 2px #00aeef, -3px 3px #fff, -4px 4px #fff,\n        -5px 5px #fff, -6px 6px #fff, -7px 7px #fff, -8px 8px #00aeef,\n        -9px 9px #00aeef, -10px 10px #00aeef;\n    }\n    80% {\n      text-shadow: -1px 1px #00aeef, -2px 2px #00aeef, -3px 3px #00aeef, -4px 4px #fff,\n        -5px 5px #fff, -6px 6px #fff, -7px 7px #fff, -8px 8px #fff,\n        -9px 9px #00aeef, -10px 10px #00aeef;\n    }\n    90% {\n      text-shadow: -1px 1px #00aeef, -2px 2px #00aeef, -3px 3px #00aeef, -4px 4px #00aeef,\n        -5px 5px #fff, -6px 6px #fff, -7px 7px #fff, -8px 8px #fff,\n        -9px 9px #fff, -10px 10px #00aeef;\n    }\n    100% {\n      text-shadow: -1px 1px #00aeef, -2px 2px #00aeef, -3px 3px #00aeef, -4px 4px #00aeef,\n        -5px 5px #00aeef, -6px 6px #fff, -7px 7px #fff, -8px 8px #fff,\n        -9px 9px #fff, -10px 10px #fff;\n    }\n  }\n\n  @keyframes header-animation-2 {\n    0% {\n      text-shadow: -1px 1px #fff, -2px 2px #fff, -3px 3px #fff, -4px 4px #fff,\n        -5px 5px #fff;\n    }\n    20% {\n      text-shadow: -1px 1px #00aeef, -2px 2px #fff, -3px 3px #fff, -4px 4px #fff,\n        -5px 5px #fff;\n    }\n    40% {\n      text-shadow: -1px 1px #00aeef, -2px 2px #00aeef, -3px 3px #fff, -4px 4px #fff,\n        -5px 5px #fff;\n    }\n    60% {\n      text-shadow: -1px 1px #00aeef, -2px 2px #00aeef, -3px 3px #00aeef, -4px 4px #fff,\n        -5px 5px #fff;\n    }\n    80% {\n      text-shadow: -1px 1px #00aeef, -2px 2px #00aeef, -3px 3px #00aeef, -4px 4px #00aeef,\n        -5px 5px #fff;\n    }\n    100% {\n      text-shadow: -1px 1px #00aeef, -2px 2px #00aeef, -3px 3px #00aeef, -4px 4px #00aeef,\n        -5px 5px #00aeef, -6px 6px #fff;\n    }\n  }\n"], ["\n  animation: header-animation 2s infinite linear;\n  font-family: \"Bungee Shade\", cursive;\n  text-align: center;\n  font-size: 4rem;\n\n  @keyframes header-animation {\n    0% {\n      text-shadow: -1px 1px #00aeef, -2px 2px #00aeef, -3px 3px #00aeef, -4px 4px #00aeef,\n        -5px 5px #00aeef, -6px 6px #fff, -7px 7px #fff, -8px 8px #fff,\n        -9px 9px #fff, -10px 10px #fff;\n    }\n    10% {\n      text-shadow: -1px 1px #fff, -2px 2px #00aeef, -3px 3px #00aeef, -4px 4px #00aeef,\n        -5px 5px #00aeef, -6px 6px #00aeef, -7px 7px #fff, -8px 8px #fff,\n        -9px 9px #fff, -10px 10px #fff;\n    }\n    20% {\n      text-shadow: -1px 1px #fff, -2px 2px #fff, -3px 3px #00aeef, -4px 4px #00aeef,\n        -5px 5px #00aeef, -6px 6px #00aeef, -7px 7px #00aeef, -8px 8px #fff,\n        -9px 9px #fff, -10px 10px #fff;\n    }\n    30% {\n      text-shadow: -1px 1px #fff, -2px 2px #fff, -3px 3px #fff, -4px 4px #00aeef,\n        -5px 5px #00aeef, -6px 6px #00aeef, -7px 7px #00aeef, -8px 8px #00aeef,\n        -9px 9px #fff, -10px 10px #fff;\n    }\n    40% {\n      text-shadow: -1px 1px #fff, -2px 2px #fff, -3px 3px #fff, -4px 4px #fff,\n        -5px 5px #00aeef, -6px 6px #00aeef, -7px 7px #00aeef, -8px 8px #00aeef,\n        -9px 9px #00aeef, -10px 10px #fff;\n    }\n    50% {\n      text-shadow: -1px 1px #fff, -2px 2px #fff, -3px 3px #fff, -4px 4px #fff,\n        -5px 5px #fff, -6px 6px #00aeef, -7px 7px #00aeef, -8px 8px #00aeef,\n        -9px 9px #00aeef, -10px 10px #00aeef;\n    }\n    60% {\n      text-shadow: -1px 1px #00aeef, -2px 2px #fff, -3px 3px #fff, -4px 4px #fff,\n        -5px 5px #fff, -6px 6px #fff, -7px 7px #00aeef, -8px 8px #00aeef,\n        -9px 9px #00aeef, -10px 10px #00aeef;\n    }\n    70% {\n      text-shadow: -1px 1px #00aeef, -2px 2px #00aeef, -3px 3px #fff, -4px 4px #fff,\n        -5px 5px #fff, -6px 6px #fff, -7px 7px #fff, -8px 8px #00aeef,\n        -9px 9px #00aeef, -10px 10px #00aeef;\n    }\n    80% {\n      text-shadow: -1px 1px #00aeef, -2px 2px #00aeef, -3px 3px #00aeef, -4px 4px #fff,\n        -5px 5px #fff, -6px 6px #fff, -7px 7px #fff, -8px 8px #fff,\n        -9px 9px #00aeef, -10px 10px #00aeef;\n    }\n    90% {\n      text-shadow: -1px 1px #00aeef, -2px 2px #00aeef, -3px 3px #00aeef, -4px 4px #00aeef,\n        -5px 5px #fff, -6px 6px #fff, -7px 7px #fff, -8px 8px #fff,\n        -9px 9px #fff, -10px 10px #00aeef;\n    }\n    100% {\n      text-shadow: -1px 1px #00aeef, -2px 2px #00aeef, -3px 3px #00aeef, -4px 4px #00aeef,\n        -5px 5px #00aeef, -6px 6px #fff, -7px 7px #fff, -8px 8px #fff,\n        -9px 9px #fff, -10px 10px #fff;\n    }\n  }\n\n  @keyframes header-animation-2 {\n    0% {\n      text-shadow: -1px 1px #fff, -2px 2px #fff, -3px 3px #fff, -4px 4px #fff,\n        -5px 5px #fff;\n    }\n    20% {\n      text-shadow: -1px 1px #00aeef, -2px 2px #fff, -3px 3px #fff, -4px 4px #fff,\n        -5px 5px #fff;\n    }\n    40% {\n      text-shadow: -1px 1px #00aeef, -2px 2px #00aeef, -3px 3px #fff, -4px 4px #fff,\n        -5px 5px #fff;\n    }\n    60% {\n      text-shadow: -1px 1px #00aeef, -2px 2px #00aeef, -3px 3px #00aeef, -4px 4px #fff,\n        -5px 5px #fff;\n    }\n    80% {\n      text-shadow: -1px 1px #00aeef, -2px 2px #00aeef, -3px 3px #00aeef, -4px 4px #00aeef,\n        -5px 5px #fff;\n    }\n    100% {\n      text-shadow: -1px 1px #00aeef, -2px 2px #00aeef, -3px 3px #00aeef, -4px 4px #00aeef,\n        -5px 5px #00aeef, -6px 6px #fff;\n    }\n  }\n"]),_templateObject4 = _taggedTemplateLiteral(["\n  width: 100%;\n  min-height: 80vh;\n  display: flex;\n  overflow: hidden;\n  align-items: center;\n  justify-content: center;\n  background: #aab5c5;\n"], ["\n  width: 100%;\nmin-height:80vh;\n  display: flex;\n  overflow: hidden;\n  align-items: center;\n  justify-content: center;\n  background: #aab5c5;\n"]),_templateObject5 = _taggedTemplateLiteral(["\n  width: 80%;\n  position: absolute;\n  bottom: 0;\n  left: 10%;\n  height: 50px;\n"], ["\n  width: 80%;\n  position: absolute;\n  bottom: 0;\n  left: 10%;\n  height: 50px;\n"]),_templateObject6 = _taggedTemplateLiteral(["\n  position: absolute;\n  left: 50%;\n  top: -10%;\n  transform: translate(-50%, -50%);\n  font-size: 30px;\n"], ["\n  position: absolute;\n  left: 50%;\n  top: -10%;\n  transform: translate(-50%, -50%);\n  font-size: 30px;\n"]),_templateObject7 = _taggedTemplateLiteral(["\n  position: absolute;\n  bottom: 10%;\n  left: 0%;\n  height: 80%;\n  transition: 0.5s;\n  background: #f46652;\n"], ["\n  position: absolute;\n  bottom: 10%;\n  left: 0%;\n  height: 80%;\n  transition: 0.5s;\n  background: #f46652;\n"]),_templateObject8 = _taggedTemplateLiteral(["\n  max-width: 750px;\n  width: 100%;\n  border: 5px double #c6c6cb;\n  padding: 1rem;\n  top: 0;\n  position: relative;\n  background: white;\n  margin: 1rem;\n  animation: slide-in forwards 0.5s;\n  transition: 0.5s;\n\n  @keyframes slide-in {\n    0% {\n      transform: translateY(-150vh);\n    }\n    100% {\n      transform: translateY(0);\n    }\n  }\n\n  &.reverse-animate-slide-in {\n    transform: translateY(-100vw);\n  }\n"], ["\n  max-width: 750px;\n  width: 100%;\n  border: 5px double #c6c6cb;\n  padding: 1rem;\n  top: 0;\n  position: relative;\n  background: white;\n  margin: 1rem;\n  animation: slide-in forwards 0.5s;\n  transition: 0.5s;\n\n  @keyframes slide-in {\n    0% {\n      transform: translateY(-150vh);\n    }\n    100% {\n      transform: translateY(0);\n    }\n  }\n\n  &.reverse-animate-slide-in {\n    transform: translateY(-100vw);\n  }\n"]),_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  @media (max-width: 750px) {\n    & {\n      display: block;\n    }\n  }\n"], ["\n  display: flex;\n  justify-content: space-between;\n  @media (max-width: 750px) {\n    & {\n      display: block;\n    }\n  }\n"]),_templateObject10 = _taggedTemplateLiteral(["\n  width: 30%;\n  margin: 1rem;\n  @media (max-width: 750px) {\n    & {\n      border-top: 2px solid #888;\n      width: 100%;\n      margin: 0;\n    }\n  }\n"], ["\n  width: 30%;\n  margin: 1rem;\n  @media (max-width: 750px) {\n    & {\n      border-top: 2px solid #888;\n      width: 100%;\n      margin: 0;\n    }\n  }\n"]),_templateObject11 = _taggedTemplateLiteral(["\n  @keyframes scale-in {\n    0% {\n      transform: scale(0);\n    }\n    100% {\n      transform: scale(1);\n    }\n  }\n\n  h2 {\n    text-align: center;\n    font-size: 2.5rem;\n    animation: scale-in 2s forwards;\n  }\n  h3 {\n    font-size: 1.5rem;\n  }\n"], ["\n  @keyframes scale-in {\n    0% {\n      transform: scale(0);\n    }\n    100% {\n      transform: scale(1);\n    }\n  }\n\n  h2 {\n    text-align: center;\n    font-size: 2.5rem;\n    animation: scale-in 2s forwards;\n  }\n  h3 {\n    font-size: 1.5rem;\n  }\n"]);function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}function _taggedTemplateLiteral(strings, raw) {return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));}var styled = styled.default;var _React =
React,Component = _React.Component;

var data = {
  letters: "abcdefghijklmnopqrstuvwxyz".split(""),
  numbers: "0123456789".split(""),
  symbols: "<>;'\"[]{}+=()&%$#@!_-*:.,`?".split("") };


var StyledButton = styled.button(_templateObject,


function (props) {return props.background || "transparent";},






function (props) {return (
    props.italic && "font-style: italic;");});
















function Button(props) {
  return (
    React.createElement(StyledButton, _extends({ onClick: props.handleClick }, props),
      props.children));


}

var BlockLabel = styled.label(_templateObject2);








































function StyledCheckbox(props) {
  var disabled = false;
  var spanStyles = {
    opacity: 1 };

  if (props.disabled === true) {
    disabled = true;
    spanStyles.opacity = 0.75;
  }
  return (
    React.createElement(BlockLabel, null,
      React.createElement("input", {
        type: "checkbox",
        disabled: disabled,
        value: props.value,
        checked: props.checked,
        onChange: props.handleInput }),

      React.createElement("span", { style: spanStyles }, props.children)));


}

var AnimatedHeader = styled.h1(_templateObject3);



























































































var ViewContainer = styled.div(_templateObject4);









var HealthBarContainer = styled.div(_templateObject5);







var Title = styled.p(_templateObject6);







var HealthBarDiv = styled.div(_templateObject7);








function HealthBar(props) {
  var style = {
    width: props.width + "%",
  "border-radius" : "3%"
  };

  return (
    React.createElement(HealthBarContainer, null,
      React.createElement(HealthBarDiv, { style: style }),
      React.createElement(Title, null, "Time")));


}

var InnerContainer = styled.div(_templateObject8);

























function RadioCheckBox(props) {
  var disabled = false;
  var spanStyles = {
    opacity: 1 };

  if (props.disabled === true) {
    disabled = true;
    spanStyles.opacity = 0.75;
  }
  return (
    React.createElement(BlockLabel, null,
      React.createElement("input", {
        type: "checkbox",
        disabled: disabled,
        value: props.value,
        checked: props.checked,
        onChange: props.handleInput }),

      React.createElement("span", { style: spanStyles }, props.children)));


}

var OptionsContainer = styled.div(_templateObject9);









var OptionsList = styled.div(_templateObject10);var











StartView = function (_Component) {_inherits(StartView, _Component);
  function StartView(props) {_classCallCheck(this, StartView);var _this = _possibleConstructorReturn(this, (StartView.__proto__ || Object.getPrototypeOf(StartView)).call(this,
    props));_this.











































    onStartGame = function () {
      _this.setState(function (prevState) {
        prevState.animatingOut = true;
        return prevState;
      });

      setTimeout(function () {var _this$state =
        _this.state,selectedTextOptions = _this$state.selectedTextOptions,spawnRate = _this$state.spawnRate,hardcore = _this$state.hardcore;
        if (_this.state.selectedTextOptions.length >= 1) {
          _this.handleGameStart(selectedTextOptions, spawnRate, hardcore);
        }
      }, 500);
    };_this.state = { textOptions: props.textOptions, selectedTextOptions: props.selectedTextOptions, spawnRate: props.spawnRate, hardcore: props.hardcore, animatingOut: false };_this.handleGameStart = props.onGameStart;_this.updateOptions = _this.updateOptions.bind(_this);_this.handleSpeedUpdate = _this.handleSpeedUpdate.bind(_this);_this.handleHardcore = _this.handleHardcore.bind(_this);return _this;}_createClass(StartView, [{ key: "updateOptions", value: function updateOptions(val) {if (!this.state.selectedTextOptions.includes(val)) {this.setState(function (prevState) {prevState.selectedTextOptions.push(val);return prevState;});} else {this.setState(function (prevState) {var index = prevState.selectedTextOptions.indexOf(val);prevState.selectedTextOptions.splice(index, 1);return prevState;});}} }, { key: "handleSpeedUpdate", value: function handleSpeedUpdate(value) {var rate = value;this.setState(function (prevState) {prevState.spawnRate = rate;return prevState;});} }, { key: "handleHardcore", value: function handleHardcore() {this.setState(function (prevState) {prevState.hardcore = !prevState.hardcore;return prevState;});} }, { key: "render", value: function render()

    {var _this2 = this;var _state =
      this.state,textOptions = _state.textOptions,selectedTextOptions = _state.selectedTextOptions,spawnRate = _state.spawnRate;

      textOptions = textOptions.map(function (val) {
        var checked = false;
        if (selectedTextOptions.includes(val)) {
          checked = true;
        }
        return (
          React.createElement(StyledCheckbox, {
              key: val,
              value: val,
              checked: checked,
              tabindex: "0",
              handleInput: function handleInput() {
                _this2.updateOptions(val);
              } },

            val.charAt(0).toUpperCase() + val.slice(1)));


      });

      var speedOptions = [
      "Faster",
      "Fast",
      "Normal",
      "Slow",
      "Slower"].
      map(function (el, i) {
        var checked = false;
        var value = 10 + i * 5;
        if (spawnRate === value) {
          checked = true;
        }
        return (
          React.createElement(StyledCheckbox, {
              key: value,
              value: value,
              checked: checked,
              handleInput: function handleInput() {
                _this2.handleSpeedUpdate(value);
              } },

            el));


      });

      var disabled = this.state.selectedTextOptions.length >= 1 ? false : true;

      var animatingOut = this.state.animatingOut ?
      { opacity: "1", top: "-150vh" } :
      {};

      return (
        React.createElement(ViewContainer, null,
          React.createElement(InnerContainer, { style: animatingOut },
            React.createElement(AnimatedHeader, null, "Type Fall"),
            React.createElement("p", null, "Select types of characters you would like to practice, the rate and whether you are penalized for mistakes."),



            React.createElement(OptionsContainer, null,
              React.createElement(OptionsList, null, textOptions),
              React.createElement(OptionsList, null, speedOptions),
              React.createElement(OptionsList, null,
                React.createElement(StyledCheckbox, {
                    value: "hardcore",
                    checked: this.state.hardcore,
                    handleInput: function handleInput() {
                      _this2.handleHardcore();
                    } }, "Hardcore"))),





            React.createElement("div", { style: { textAlign: "right" } },
              React.createElement(Button, { handleClick: this.onStartGame, disabled: disabled }, "Start Game")))));






    } }]);return StartView;}(Component);var


GameView = function (_Component2) {_inherits(GameView, _Component2);
  function GameView(props) {_classCallCheck(this, GameView);var _this3 = _possibleConstructorReturn(this, (GameView.__proto__ || Object.getPrototypeOf(GameView)).call(this,
    props));_initialiseProps.call(_this3);
    var options = props.textOptions.map(function (val) {
      if (data[val]) {
        return data[val];
      } else {
        return null;
      }
    });
    options = [].concat.apply([], options);
    _this3.gameTime = 0;
    _this3.intSpeed = 50;
    _this3.spawnRate = _this3.intSpeed * props.spawnRate;
    _this3.handleGameOver = props.onGameOver;
    _this3.hardcore = props.hardcore;
    _this3.state = {
      selectedCategories: props.textOptions,
      options: options,
      optionsPlaying: [],
      speed: 0.9,
      score: 0,
      health: 100,
      animatingOut: false };return _this3;

  }_createClass(GameView, [{ key: "componentDidMount", value: function componentDidMount()





    {
      this.interval = setInterval(this.gameInterval, this.intSpeed);
    } }, { key: "render", value: function render()



































































































    {var _this4 = this;
      var targets = this.state.optionsPlaying.map(function (val) {
        var style = {
          position: "absolute",
          left: Math.round(val.xPosition) + "vw",
          top: 0,
          fontSize: "2rem",
          color: "white",
          border: "2px solid #00aeef",
          background : "#00aeef",
          'border-radius': "50%",
          // "line-height" : "2",
          padding: "1rem",
          transform: "translate(-50%," + val.yPosition + "vh)",
          transition: _this4.intSpeed + "ms" };

        if (!val.active) {
          style.transform = "translate(-50%," + val.yPosition + "vh) scale(2) rotate(360deg)";
          style.opacity = 0;
          style.transition = "500ms";
        }
        if (val.hitHealth) {
          style.color = "#00aeef";
        }
        return (
          React.createElement("h3", { style: style, key: val.character },
            val.character));


      });

      var containerStyles = {
        padding: "0 1rem",
        height: "80vh",
        overflow: "hidden",
        background: "url(assets/background-1.png)",
        position: "relative",
        animation: "slide-in forwards .5s",
        transition: ".5s" };


      containerStyles.top = this.state.animatingOut ? "150vh" : "0";
      containerStyles.background = this.state.animatingOut ? "#F46652" : "url(assets/background-1.png)";

      return (
        React.createElement("div", {
            style: containerStyles,
            onClick: function onClick() {
              document.querySelector("input").focus();
            } },

          React.createElement("h1", null, "Score: ", this.state.score),
          React.createElement("input", {
            type: "text",
            autoFocus: true,
            onChange: this.handleUserKeyInput,
            style: { opacity: 0, fontSize: "20px" } }),

          targets,
          React.createElement(HealthBar, { width: this.state.health })));


    } }]);return GameView;}(Component);var _initialiseProps = function _initialiseProps() {var _this7 = this;this.randomIntInRange = function (min, max) {return Math.floor(Math.random() * (max - min)) + min;};this.addNewItem = function () {if (_this7.state.options.length > 0) {var index = _this7.randomIntInRange(0, _this7.state.options.length);var item = { character: _this7.state.options[index], xPosition: _this7.randomIntInRange(5, 95), yPosition: -20, active: true, hitHealth: false, remove: false };_this7.setState(function (prevState) {prevState.optionsPlaying.push(item);prevState.options.splice(index, 1);return prevState;});}};this.updatePositions = function () {_this7.setState(function (prevState) {var options = [];prevState.optionsPlaying.forEach(function (val) {if (val.active) {val.yPosition += prevState.speed;}if (val.yPosition > 80 && val.active) {val.active = false;val.deathTimer = 0;val.hitHealth = true;prevState.health -= 10;}if (!val.active) {val.deathTimer++;}if (val.deathTimer > 20) {val.remove = true;}if (val.remove) {prevState.options.push(val.character);} else {options.push(val);}});prevState.optionsPlaying = options;return prevState;});};this.onGameOver = function () {clearInterval(_this7.interval);_this7.setState(function (prevState) {prevState.animatingOut = true;return prevState;});setTimeout(function () {_this7.handleGameOver(_this7.state.score);}, 500);};this.gameInterval = function () {if (_this7.state.health <= 0) {_this7.onGameOver();} else {if (_this7.gameTime % _this7.spawnRate === 0) {_this7.addNewItem();}if (document.querySelector("input")) {document.querySelector("input").focus();}_this7.updatePositions();_this7.gameTime += _this7.intSpeed;}};this.handleUserKeyInput = function (e) {var val = e.target.value.toLowerCase();var found = false;_this7.state.optionsPlaying.forEach(function (el, index, arr) {if (val === el.character && el.active) {found = true;_this7.setState(function (prevState) {prevState.optionsPlaying[index].active = false;prevState.optionsPlaying[index].deathTimer = 0;prevState.score++;return prevState;});}});if (!found && _this7.hardcore) {_this7.setState(function (prevState) {prevState.health -= 10;return prevState;});}e.target.value = "";};};


var GameOverContainer = styled.div(_templateObject11);var



















GameOverView = function (_React$Component) {_inherits(GameOverView, _React$Component);
  function GameOverView(props) {_classCallCheck(this, GameOverView);var _this5 = _possibleConstructorReturn(this, (GameOverView.__proto__ || Object.getPrototypeOf(GameOverView)).call(this,
    props));_this5.






    restartGame = function () {
      _this5.setState(function (prevState) {
        prevState.animatingOut = true;
        return prevState;
      });

      setTimeout(function () {
        _this5.props.onGameRestart();
      }, 500);
    };_this5.state = { animatingOut: false };_this5.props = props;return _this5;}_createClass(GameOverView, [{ key: "render", value: function render()

    {
      var props = this.props;
      var options = props.selectedTextOptions.map(function (el, i, arr) {
        var tail = ", ";
        if (i === arr.length - 1) {
          tail = "";
        }
        var text = el.charAt(0).toUpperCase() + el.slice(1) + tail;
        return text;
      });

      var highScoretext =
      props.score === props.highScore ? "New Highscore!" : "";

      var spawnSpeedText = "";
      switch (props.spawnRate) {
        case 10:
          spawnSpeedText = "Faster";
          break;
        case 15:
          spawnSpeedText = "Fast";
          break;
        case 20:
          spawnSpeedText = "Normal";
          break;
        case 25:
          spawnSpeedText = "Slow";
          break;
        case 30:
          spawnSpeedText = "Slower";
          break;
        default:
          spawnSpeedText = "";
          break;}


      var hardcoreText = props.hardcore ? "Hardcore" : "";

      var containerStyle = this.state.animatingOut ? { top: "-150vh" } : {};

      return (
        React.createElement(ViewContainer, null,
          React.createElement(InnerContainer, { style: containerStyle },
            React.createElement(AnimatedHeader, null, "Type Fall"),
            React.createElement(GameOverContainer, null,
              React.createElement("h2", null, "Game Over!"),
              React.createElement("h2", null, highScoretext),
              React.createElement("h3", null, "Score: ", props.score),
              React.createElement("h3", null, "Highscore: ", props.highScore),
              React.createElement("h3", null, hardcoreText),
              React.createElement("h3", null, "Characters: ", options),
              React.createElement("h3", null, "Speed: ", spawnSpeedText),
              React.createElement("div", { style: { textAlign: "right" } },
                React.createElement(Button, { handleClick: this.restartGame }, "New Game"))))));





    } }]);return GameOverView;}(React.Component);var


App = function (_Component3) {_inherits(App, _Component3);
  function App(props) {_classCallCheck(this, App);var _this6 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this,
    props));_this6.











    handleGameStart = function (textOptions, spawnRate, hardcore) {
      var rate = spawnRate;

      _this6.setState(function (prevState) {
        prevState.selectedTextOptions = textOptions;
        prevState.currentView = "GameView";
        prevState.spawnRate = rate;
        prevState.hardcore = hardcore;
        return prevState;
      });
    };_this6.

    handleGameOver = function (score) {
      _this6.setState(function (prevState) {
        prevState.score = score;
        if (score > prevState.highScore) {
          prevState.highScore = score;
        }
        prevState.currentView = "GameOverView";
        return prevState;
      });
    };_this6.

    handleGameRestart = function () {
      _this6.setState(function (prevState) {
        prevState.currentView = "StartView";
        return prevState;
      });
    };_this6.state = { currentView: "StartView", selectedTextOptions: ["letters"], textOptions: ["letters", "numbers", "symbols"], spawnRate: 20, hardcore: false, score: 0, highScore: 0 };return _this6;}_createClass(App, [{ key: "render", value: function render()

    {
      if (this.state.currentView === "StartView") {
        return (
          React.createElement(StartView, {
            textOptions: this.state.textOptions,
            selectedTextOptions: this.state.selectedTextOptions,
            spawnRate: this.state.spawnRate,
            onGameStart: this.handleGameStart,
            hardcore: this.state.hardcore }));


      } else if (this.state.currentView === "GameView") {
        return (
          React.createElement(GameView, {
            textOptions: this.state.selectedTextOptions,
            spawnRate: this.state.spawnRate,
            onGameOver: this.handleGameOver,
            hardcore: this.state.hardcore }));


      } else if (this.state.currentView === "GameOverView") {
        return (
          React.createElement(GameOverView, {
            score: this.state.score,
            highScore: this.state.highScore,
            selectedTextOptions: this.state.selectedTextOptions,
            spawnRate: this.state.spawnRate,
            onGameRestart: this.handleGameRestart,
            hardcore: this.state.hardcore }));


      } else {
        return (
          React.createElement(StartView, {
            textOptions: this.state.textOptions,
            selectedTextOptions: this.state.selectedTextOptions,
            spawnRate: this.state.spawnRate,
            onGameStart: this.handleGameStart }));


      }
    } }]);return App;}(Component);


ReactDOM.render(React.createElement(App, null), document.getElementById("root"));