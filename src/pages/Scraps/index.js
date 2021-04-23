import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import MessageIcon from '@material-ui/icons/Message';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import MeuRecado from '../../components/Recado';
import scrapApi from '../../services/scrap';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const user = {
  nome: 'Luis',
  numero: 44
};

export default function Scraps() {
  const classes = useStyles();

  const [scraps, setScraps] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");

  const [editando, setEditando] = useState({});

  const usuario = useSelector(store => store.user);

  function clicou(e) {
    if(e.key === "A") {
      alert('clicou no A');
    }
  }

  function novoScrap() {
    scrapApi.postScrap(titulo, descricao)
      .then((dados) => {
         if (dados.success) {
           setTitulo('');
           setDescricao('');
           BuscaDados();
         } else {
           alert(dados.message[0]);
         }
      }).catch((error) => {
        alert(error.message);
      });
  }

  useEffect(() => {
    BuscaDados();
  }, []);

  function BuscaDados() {
    scrapApi.getScraps().then((dados) => {
      if (dados.success) {
        setScraps(dados.data);
      } else {
        setScraps([]);
      }
    }).catch((error) => {
      alert(error.message);
    });
  }

  const [open, setOpen] = React.useState(false);

  const handleEditar = (props) => {
    setEditando(props)
    setOpen(true);
  };

  const handleSalvar =  async () => {
    const dados = await scrapApi.updateScrap(editando.id, editando.title, editando.longText);
    try {

    
    if (dados.success) {
      BuscaDados();
      handleClose();
    }

    else {
      alert(dados.message);
    }
  } catch (error){
    alert(error.error);
  }

  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment> 
       <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Editar</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title2"
            label="Titulo"
            type="text"
            fullWidth
            value={editando.title}
            onChange={(e) => setEditando(
              {
                ...editando,
                title: e.target.value,
              }
            )}
          /> <br />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Descrição"
            type="text"
            fullWidth
            value={editando.longText}
            onChange={(e) => setEditando(
              {
                ...editando,
                longText: e.target.value,
              }
            )}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSalvar} color="primary">
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
       <Container component="main" maxWidth="md">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <MessageIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Scrapbook de { usuario.name }
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                name="title"
                variant="outlined"
                required
                fullWidth
                id="title"
                label="Título"
                autoFocus
                value={titulo}
                onChange={e => setTitulo(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="longText"
                label="Descrição"
                name="lastName"
                autoComplete="lname"                
                value={descricao}
                onChange={e => setDescricao(e.target.value)}
                onKeyDown={e => clicou(e)}
              />
            </Grid>
          </Grid>
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={novoScrap}
          >
            Salvar
          </Button>
        </form>
      </div>   

      <Grid container spacing={5} alignItems="flex-end">
        {scraps.map((scrap) => (
          <MeuRecado 
          reload={BuscaDados} 
          key={scrap.id}
          scrap={scrap}
         quem={user} 
         editar={handleEditar}
         />
        ))}
      </Grid>
    </Container>
    </React.Fragment>
  
  );
}