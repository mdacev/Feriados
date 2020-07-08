import React from 'react';
import {Spinner} from 'react-bootstrap'

function LoadingView( props ) {

    
    return (
        <div className="loading">
            <Spinner animation="border" role="status" variant="secondary">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>
    );


}

export default LoadingView;