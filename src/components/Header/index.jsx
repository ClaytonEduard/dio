import React from 'react'
import logo from '../../assets/logo-dio.png'
import { Button } from '../Button'

import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from './styles';

export function Header({ autenticado }) {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt='Logo da DIO'></img>
                    {
                        autenticado ? (
                            <>
                                <BuscarInputContainer>
                                    <Input placeholder='Buscar ...' />
                                </BuscarInputContainer>
                                <Menu>Live Code</Menu>
                                <Menu>Global</Menu>
                            </>
                        ) : null
                    }
                </Row>
                <Row>
                    {autenticado ? (<UserPicture src='https://avatars.githubusercontent.com/u/11823640?v=4' />) : (
                        <>
                            <MenuRight href='#' >Home</MenuRight>
                            <Button title="Entrar" />
                            <Button title="Cadastrar" />
                        </>
                    )}
                </Row>
            </Container >

        </Wrapper >
    )
}
