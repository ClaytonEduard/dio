import { MdEmail, MdLock } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { api } from '../../services/api'

import {
    Column,
    Container,
    CriarText,
    EsqueciText,
    Row,
    SubtitleLogin,
    Title,
    TitleLogin,
    Wrapper
} from "./styles"


const schema = yup
    .object({
        email: yup.string().email('email não é valido').required('Campo obrigatório'),
        password: yup.string().min(3, "No minimo 3 caracteres").required('Campo obrigatótio'),
    })
    .required()

export function Login() {

    const navigate = useNavigate();


    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',

    });

    console.log(errors);
    const onSubmit = async formData => {
        try {
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
            if (data.length === 1) {
                navigate('/feed')
            } else {
                alert('Email ou senha inválidos')
            }
        } catch {
            alert('Houve um erro, tente novamente');
        }
    };


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
                        <TitleLogin>Faça seu cadastro</TitleLogin>
                        <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input control={control} errorMessage={errors?.email?.message} name="email" placeholder="E-mail" leftIcon={<MdEmail />} />
                            <Input control={control} errorMessage={errors?.password?.message} name="password" placeholder="Password" type="password" leftIcon={<MdLock />} />
                            <Button title="Entrar" variant='secundary' type='submit' />
                        </form>
                        <Row>
                            <EsqueciText>Esqueci minha senha</EsqueciText>
                            <CriarText href="/cadastro" >Criar Conta</CriarText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container >
        </>
    )
}

