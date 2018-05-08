import React from 'react';

export default class Counter extends React.Component {
    static propTypes = {
        value: React.PropTypes.number.isRequired,
        onIncreaseClick: React.PropTypes.func.isRequired,
    };

    render() {
        const { value, onIncreaseClick } = this.props;
        return (
            <div>
                <span>{value}</span>
                <button onClick={onIncreaseClick}>Increase</button>
            </div>
        );
    }
}
