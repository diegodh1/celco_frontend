import React from 'react';
function Frame(props) {
    const { base64 } = props;
    return (
        <iframe src={"data:application/pdf;base64,"+base64} height="100%" width="100%">
        </iframe>
    )
}

export default Frame;