import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';

class TimedProgressBar extends Component {
    render() {
        return (
            <ProgressBar variant="success" now={40} />
        );
    }
}

export default TimedProgressBar;