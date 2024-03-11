import React from 'react'
import { Header } from '../../components/Header'
import { MdEmail, MdLock, MdPerson } from 'react-icons/md'
import { Button } from '../../components/Button';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useNavigate } from 'react-router-dom'
import {
    Column,
    Container,
    Row,
    Title,
    Wrapper,
    TitleCadastro,
    SubtitleCadastro,
    JaTemConta,
    Info,
    FazerLogin
} from "./styles"
import { Input } from '../../components/Input'
import { api } from '../../services/api';



const schema = yup
    .object({
        nome: yup.string().min(12).required('Campo obrigatório'),
        email: yup.string().email('email não é valido').required('Campo obrigatório'),
        password: yup.string().min(3, "No minimo 3 caracteres").required('Campo obrigatótio'),
    })
    .required()


export function Cadastro() {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',

    });

    console.log(errors);
    const onSubmit = async formData => {
        try {


        } catch (error) {
            alert('Houve um erro ao cadastrar')
        }
    }

    return (
        <>
            <Header />
            <Container>
                <Column>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleCadastro>Comece agora grátis</TitleCadastro>
                        <SubtitleCadastro>Crie sua conta e make the change._ </SubtitleCadastro>
                        <form >
                            <Input name="nome" control={control} errorMessage={errors?.nome?.message} placeholder="Nome Completo" leftIcon={<MdPerson style={{ color: "#8647AD" }} />} />
                            <Input name="email" control={control} errorMessage={errors?.email?.message} placeholder="E-mail" leftIcon={<MdEmail style={{ color: "#8647AD" }} />} />
                            <Input name="password" control={control} errorMessage={errors?.password?.message} placeholder="Password" type="password" leftIcon={<MdLock style={{ color: "#8647AD" }} />} />

                            <Button title="Criar minha conta" variant='secundary' type='submit' />
                        </form>
                        <Row>
                            <Info>
                                Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
                            </Info>
                        </Row>
                        <Row>
                            <JaTemConta>já tenho conta. <FazerLogin href='/login'>Fazer login</FazerLogin></JaTemConta>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    )
}
