import {StyledFooter, Container, LogoInfo, Info, Text} from "./styles";

const Footer = () => {

    return(<StyledFooter>
        <Container>
            <Info>
                <Text>
                    Выпускная квалификационная работа
                </Text>
                <Text>
                    Веб-Приложение для туризма в г.Калуге "Voyager"
                </Text>
                <Text>
                    Автор проекта и разработчик: Дереглазов К.Ю.
                </Text>
            </Info>
            <LogoInfo>
                <img src="/logoFooter.png" alt='logo' width={90} style={{}} />
                <Text>
                    Voyager
                </Text>
            </LogoInfo>


        </Container>

    </StyledFooter>);

}

export {Footer}
