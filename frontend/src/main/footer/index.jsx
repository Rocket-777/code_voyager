import {StyledFooter, Container, LogoInfo, Info, Text, TechLogos, LogoText} from "./styles";

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
                <img src="/logoFooter.png" alt='logo' width={60} style={{}} />
                <LogoText>
                    VOYAGER
                </LogoText>
                <TechLogos>
                    <img src="/nodeJsLogo.png" alt='logo' width={45} style={{}} />
                    <img src="/reactLogo.png" alt='logo' width={45} style={{}} />
                </TechLogos>
            </LogoInfo>


        </Container>

    </StyledFooter>);

}

export {Footer}
