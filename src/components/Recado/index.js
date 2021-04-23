import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { CardActionArea, CardMedia, makeStyles } from '@material-ui/core';

import scrapApi from '../../services/scrap';

const cardStyles = makeStyles({
    media: {
      height: 140,
    },
});

export default function Recado(props) {
    const cardClasses = cardStyles();

    // Aqui eu tenho o scrap inteiro
    // props.scrap.id -> pra deletar
    async function deleta() {
        // chamada para api
        const retorno = await scrapApi.delete(props.scrap.id);
        if (retorno.success) {
            props.reload();
        }
    }

    function editar() {
        props.editar(props.scrap)
    }

    return (
        <Grid item key={props.scrap.title} xs={12} sm={12} md={6}>
            <Card>
                <CardActionArea>
                    <CardMedia
                        className={cardClasses.media}
                        image="http://psiconefrologia.com/wp-content/uploads/2019/10/vida-bonita-paciente-pro-renal-816x526.jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.scrap.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.scrap.longText}
                            { props.quem.nome }
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary"onClick={editar}>
                        Editar
                </Button>
                    <Button size="small" color="primary"
                    onClick={deleta}>
                        Excluir
                </Button>
                </CardActions>
            </Card>
        </Grid>
    );
}