import { Button, Container } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';

import scrapApi from '../../services/scrap';
import { login } from '../../store/modules/user/actions';

export default function Home() {
    const dispatch = useDispatch();

    function logar() {
        scrapApi.login("mentor04@growdev.com.br", "101112")
            .then((dados) => {
                if (dados.success) {
                    localStorage.setItem("token", dados.data.token);

                    dispatch(
                        login(
                            dados.data
                        )
                    );

                    window.location.href = '/';
                } else {
                    alert('deu errado');
                }
            })
    }

    return (
        <Container component="main" maxWidth="md">
            <h1>Login</h1>

            <Button
                type="button"
                fullWidth
                variant="contained"
                onClick={logar}
            >Loging</Button>
        </Container>
    );
}