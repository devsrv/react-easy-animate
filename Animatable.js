import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Animatable extends PureComponent {
    constructor(props) {
        super(props);
        this.wrapperRef = React.createRef();
    }

    state = {
        show: true,
        animationProperties: {}
    }

    allocateAnimationClasses = (classesInp, action = "ADD") => {
        const targetElem = this.wrapperRef.current;

        switch (action) {
            case "ADD":
                classesInp.forEach((className) => {
                    targetElem.classList.add(className);
                });
                break;
        
            default:
                classesInp.forEach((className) => {
                    targetElem.classList.remove(className);
                });
        }
    }

    componentDidMount() {
        this.setState({
            animationProperties: {
                animationDuration: this.props.entryAnimDuration,
                animationDelay: this.props.entryAnimDelay
            }
        });
    }

    componentDidUpdate(prevProps, prevState) {
        const targetElem = this.wrapperRef.current;

        const { show, entryAnimation, exitAnimation, entryAnimDelay, entryAnimDuration, exitAnimDelay, exitAnimDuration } = this.props;

        if(prevProps.show && ! show) {
            if(targetElem) {
                this.allocateAnimationClasses(entryAnimation, "REMOVE");

                this.allocateAnimationClasses(exitAnimation, "ADD");

                this.setState({
                    animationProperties: {
                        animationDuration: exitAnimDuration,
                        animationDelay: exitAnimDelay
                    }
                });
                
                targetElem.addEventListener('animationend', this.handleExitAnimationEnd);
            }
        }

        if(! prevProps.show && show) { 
            this.setState({
                show: true,
                animationProperties: {
                    animationDuration: entryAnimDuration,
                    animationDelay: entryAnimDelay
                }
            });
        }

        if(! prevState.show && this.state.show) targetElem.addEventListener('animationend', this.handleEntryAnimationEnd);
        
    }

    handleEntryAnimationEnd = () => {
        this.wrapperRef.current.removeEventListener('animationend', this.handleEntryAnimationEnd);

        if(this.props.onEntryAnimationEnd) this.props.onEntryAnimationEnd();
    }

    handleExitAnimationEnd = () => {
        this.wrapperRef.current.removeEventListener('animationend', this.handleExitAnimationEnd);
        this.setState({show: false});
        
        if(this.props.onExitAnimationEnd) this.props.onExitAnimationEnd();
    }

    render() {
        return (
            this.state.show &&
            <div 
                className={`animated ${this.props.entryAnimation.join(" ")}`}
                ref={this.wrapperRef}
                style={this.state.animationProperties}
            >
                {this.props.children}
            </div>
        )
    }
}

Animatable.defaultProps = {
    entryAnimation: ['zoomIn'],
    exitAnimation: ['zoomOut']
};

Animatable.propTypes = {
    show: PropTypes.bool,
    entryAnimation: PropTypes.array,
    exitAnimation: PropTypes.array,
    onExitAnimationEnd: PropTypes.func,
    onEntryAnimationEnd: PropTypes.func,
    entryAnimDelay: animTimeInputCheck,
    entryAnimDuration: animTimeInputCheck,
    exitAnimDelay: animTimeInputCheck,
    exitAnimDuration: animTimeInputCheck,
    children: PropTypes.element.isRequired
};

function animTimeInputCheck (props, propName, componentName) {
    if (typeof props[propName] === 'undefined') {
        return;
    }

    if (!/^\-?(([0-9]*[.])?\d)+(s|ms){1}$/.test(props[propName])) {
        let check;

        if(propName === "entryAnimDelay" || propName === "exitAnimDelay" ) check = "check css `animation-delay` property";
        else check = "check css `animation-duration` property";

      return new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. '+ check +'. positive examples - 1s, 2s, -2s, 5ms etc.'
      );
    }
}