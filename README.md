# REDUX

## 1. Instalar dependências
## 2. Gravar

## 3. REDUX
```
yarn add react-redux
yarn add redux-persist
```

## 4. Criar store / action
    - cart

## 5. rootReduccer

## 6. configurar index da store

## 7. Configurar o App.js

## 8. Criar componente Card Produto

## 9. Alterar Home para inserir o Card, Totalizar, limpar o carrinho

## 10. Login e rotas protegidas

## 11. Implementar Store do usuario

## 12. Implementar Wrapper

## 13. Implementar login

## 14. Testar Persisted Reducer

## 15. Implementar página User


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
