import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FolderShared from '@material-ui/icons/FolderShared';
import PictureAsPdf from '@material-ui/icons/PictureAsPdf';
import Photo from '@material-ui/icons/Photo';


function GetIcon(props) {
    const { ext } = props;
    switch (ext) {
        case "pdf":
            return <PictureAsPdf style={{color:"red"}}/>
            break;
        case "png":
            return <Photo style={{color:"blue"}}/>
            break;
        case "jpg":
            return <Photo style={{color:"blue"}}/>
            break;
        case "jpeg":
            return <Photo style={{color:"blue"}}/>
            break;
        case "gif":
            return <Photo style={{color:"blue"}}/>
            break;
        case "PDF":
            return <PictureAsPdf />
            break;
        case "PNG":
            return <Photo style={{color:"blue"}}/>
            break;
        case "JPG":
            return <Photo style={{color:"blue"}}/>
            break;
        case "JPEG":
            return <Photo style={{color:"blue"}}/>
            break;
        case "GIF":
            return <Photo style={{color:"blue"}}/>
            break;
        default:
            return <FolderShared style={{color:"#F9AE4E"}}/>

    }
}
function Item(props) {
    const { nombre, ruta, handleClick, ext } = props;
    return (
        <ListItem onClick={(event) => handleClick(ruta, event, ext)} button>
            <ListItemIcon>
                < GetIcon ext={ext} />
            </ListItemIcon>
            <ListItemText primary={nombre} />
        </ListItem>
    )
}
export default Item;