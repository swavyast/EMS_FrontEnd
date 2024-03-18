import React from 'react';
import PropTypes from 'prop-types';

class FooterComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <footer className='footer bg-gradient-primary text-center p-2'>
                    <span className='text-muted p-2'>All Rights Reserved 2024 @ml.com</span>
                </footer>
            </div>
        );
    }
}

FooterComponent.propTypes = {};

export default FooterComponent;
