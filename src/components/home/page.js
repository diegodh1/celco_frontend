import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import Item from './items';
import Frame from './frame';
import Imagen from './imagen';
import Grid from '@material-ui/core/Grid';
import Reply from '@material-ui/icons/Reply';
import Loader from 'react-loader-spinner'

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        height: '700px',
        overflowY: 'scroll',
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));
const ListItems = (props) => {
    const { paths, handleClick } = props;
    return paths.map((path) =>
        // Correcto! La key debería ser especificada dentro del array.
        <Item key={path.nombre}
            nombre={path.nombre} ruta={path.ruta} handleClick={handleClick} ext={path.extension} />

    );
}

const Lista = props => {
    const classes = useStyles();
    const { paths, handleClick, base64, ext, backDirectory, cargando } = props;
    let render;
    if (cargando) {

        const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
        render = <div style={style}><Loader
            type="Puff"
            color="#F9AE4E"
            height={100}
            width={100}
            timeout={3000} //3 secs

        /></div>;
    }
    else {

        render = <Documento base64={base64} ext={ext} />;
    }
    return (
        <Grid container spacing={2}>
            <Grid item xs={3}>
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            <a href="#" onClick={(event) => backDirectory(event)}><Reply style={{color:"green"}}/></a>Carpetas Compartidas
                            </ListSubheader>
                    }
                    className={classes.root}
                >
                    <ListItems paths={paths} handleClick={handleClick} />
                </List>
            </Grid>

            <Grid item xs={9}>
                {render}
            </Grid>
        </Grid>

    )
}
function Documento(props) {
    const { ext, base64 } = props;
    if (ext === 'pdf') {
        return <Frame base64={base64} />
    }
    else if (ext === 'jpg' || ext === 'png' || ext === 'gif' || ext === 'jpeg' || ext === 'ico') {
        return <Imagen base64={base64} ext={ext} />
    }
    else {
        return <h4> CELCO</h4>
    }
}
export default Lista;