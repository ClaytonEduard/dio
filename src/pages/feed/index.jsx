import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { UserInfo } from '../../components/UserInfo'

import banner from '../../assets/banner.png'

import { Container, Column, Title, TitleHighlight } from "./styles"
import { Card } from '../../components/Card'

export function Feed() {
    return (<>
        <Header autenticado={true} />
        <Container>
            <Column flex={2}>
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
                <UserInfo percentual={35} nome="Clayton Eduard " image="https://avatars.githubusercontent.com/u/11823640?v=4" />
                <UserInfo percentual={84} nome="Clayton Eduard " image="https://avatars.githubusercontent.com/u/11823640?v=4" />
                <UserInfo percentual={23} nome="Clayton Eduard " image="https://avatars.githubusercontent.com/u/11823640?v=4" />
                <UserInfo percentual={55} nome="Clayton Eduard " image="https://avatars.githubusercontent.com/u/11823640?v=4" />
                <UserInfo percentual={64} nome="Clayton Eduard " image="https://avatars.githubusercontent.com/u/11823640?v=4" />
            </Column>
        </Container>
    </>
    )
}

