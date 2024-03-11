import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

`
export const Wrapper = styled.div`
    max-width: 300px;
`
export const Column = styled.div`
    flex: 1;
`
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-size: 32px;
    font-weight: 700;
    width: 380px;
    margin-bottom: 20px;
    line-height: 44px;
    color: white;
`

export const TitleCadastro = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-size: 32px;
    font-weight: 700;
    width: 350px;
    margin-bottom: 20px;
    line-height: 44px;

`

export const SubtitleCadastro = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 35px;
    line-height: 25px;

`

export const Info = styled.p`
    min-width: 340px;
    font-family: 'Open Sans';
    font-style: normal;
    font-size: 18px;
    font-weight: 400;
    line-height: 19px;
    color: white;

`

export const JaTemConta = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-size: 14px;
    font-weight: 700;
    line-height: 19px;
    color: white;
`

export const FazerLogin = styled.a`
    font-family: 'Open Sans';
    font-style: normal;
    font-size: 14px;
    font-weight: 700;
    line-height: 19px;
    color: #23DD7A;

    cursor: pointer;
    text-decoration: none;

`