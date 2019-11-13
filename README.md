# react-easy-animate
> A micro react higher-order component that lets you manage entry and exit animation of your react components using css classes with ease

[![npm version](https://img.shields.io/npm/v/react-easy-animate.svg)](https://www.npmjs.com/package/react-easy-animate)
[![npm downloads](https://img.shields.io/npm/dm/react-easy-animate.svg)](https://www.npmjs.com/package/react-easy-animate)
[![license](https://img.shields.io/npm/l/react-easy-animate)](https://github.com/devsrv/react-easy-animate/blob/master/LICENSE)
![npm bundle size](https://img.shields.io/bundlephobia/min/react-easy-animate?color=brightgreen)

### Check the interactive example: <a href="#">http://devsrv.github.io/react-easy-animate/</a>

## Features

- **Control entry & exit animation** - css animation class to use when component appearing & disappearing
- **Animation delay & duration** - manage animation delay and duration for both entry & exit animations
- **Hook into animationEnd events** – access to all animation end events that you can act to

## Installation

Using [npm](https://www.npmjs.com/package/react-easy-animate):

    $ npm i react-easy-animate --save
    
## Usage

### Basic Example

```js
import React, { Component } from 'react';
import Animatable from 'react-easy-animate';

class Main extends Component {
    state = {
        show: true,
    }

    render() {
        return (
            <div className="col">
                <Animatable show={this.state.show}>
                    <p>Lorem ipsum dolor sit amet</p>
                </Animatable>
                
                <button type="button" 
                    onClick={() => this.setState((state) => ({show: !state.show}))}>
                    click
                </button>
            </div>
        )
    }
}

render(<Main />, document.getElementById('root'));
```

### Example with [animate.css](https://daneden.github.io/animate.css/)

```js
import React, { Component } from 'react';
import { render } from 'react-dom';
import Animatable from 'react-easy-animate';
require("animate.css");

export default class Main extends Component {
    state = {
        show: true,
        disabled: false
    }

    render() {
        return (
                <div className="col">
                    <Animatable 
                        show={this.state.show}
                        entryAnimation={["zoomIn"]}
                        exitAnimation={["zoomOutDown", "faster"]}
                        onExitAnimationEnd={() => this.setState({disabled: false})}
                        onEntryAnimationEnd={() => this.setState({disabled: false})}
                    >
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Lorem ipsum dolor sit amet</h5>
                                <Animatable 
                                    entryAnimDelay="1s" 
                                    show={this.state.show}
                                >
                                    <p>Lorem ipsum dolor sit amet</p>
                                </Animatable>
                            </div>
                        </div>
                    </Animatable>

                    <button type="button" 
                        disabled={this.state.disabled} 
                        onClick={() => this.setState((state) => ({show: !state.show, disabled: true}))}>
                            {this.state.show? "HIDE" : "SHOW"}
                    </button>
                </div>
        )
    }
}

render(<Main />, document.getElementById('root'));
```

## API

### Props

| Property | Type | Default | Required | Description |
|-|:-:|:-:|:-:|-|
|show|bool|`undefined`| ✓ |whether to show or hide the component. |
| entryAnimation |array|`zoomIn` | | *css classes* responsible for animating the component when the component is appearing from a disappeared state|
|exitAnimation|array|`zoomOut`| | *css classes* responsible for animating the component when the component is disappearing from a visible state|
|onExitAnimationEnd|func|`undefined`| | function to call when the disappearing animation ends |
|onEntryAnimationEnd|func|`undefined`| | function to call when the appearing animation ends |
|entryAnimDelay|string|`undefined`| | css `animation-delay` value for the appearing animation |
|entryAnimDuration|string|`undefined`| | css `animation-duration` value for the appearing animation |
|exitAnimDelay|string|`undefined`| | css `animation-delay` value for the disappearing animation |
|exitAnimDuration|string|`undefined`| | css `animation-duration` value for the disappearing animation |



---