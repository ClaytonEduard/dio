import React from 'react'
import { FiThumbsUp } from 'react-icons/fi'
import {
    CardContainer,
    Content,
    HasInfo,
    ImageBackground,
    PostInfo,
    UserInfo,
    UserPicture
} from './styles';


const Card = () => {
    return (
        <CardContainer>
            <ImageBackground src='https://img.freepik.com/fotos-gratis/fundo-de-ficcao-cientifica-futurista-moderno_35913-2152.jpg?t=st=1709834530~exp=1709838130~hmac=2e525d272deba4f92cbc62471b0d4f78e1c6668ee512a03af72a5f7264017b02&w=1060' />
            <Content>
                <UserInfo>
                    <UserPicture src='https://avatars.githubusercontent.com/u/11823640?v=4' />
                    <div>
                        <h4>Clayton Eduard</h4>
                        <p>Há 8 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para curso HTML e CSS</h4>
                    <p>Projeto feito o curso de html e css no bootcamp dio do Global avanade...<strong>Saiba Mais</strong> </p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #Javascript</h4>
                    <p>
                        <FiThumbsUp /> 10
                    </p>
                </HasInfo>
            </Content>

        </CardContainer>
    )
}
export { Card }