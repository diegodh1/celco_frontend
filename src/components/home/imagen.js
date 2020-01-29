import React from 'react';
function Imagen(props) {
    const { base64,ext } = props;
    return (
        <img src={"data:image/"+ext+";base64, "+base64} height="100%" width="100%"/>
    )
}

export default Imagen;