import {StyledFooter, Container, LogoInfo, Info, Text, TechLogos, LogoText} from "./styles";
import Logo from '../../../assets/newLogo-blue.svg'
import ReactLogo from '../../../assets/reactLogo.svg'
import NodeLogo from "../../../assets/nodejsLogo.svg"

const Footer = () => {

    return(<StyledFooter>
        <Container>
            <Info>
                <Text>

                </Text>
                <Text>

                </Text>
                <Text>

                </Text>
            </Info>

            <LogoInfo>
                <Logo width={80}/>
                {/*<img src="/logoFooter.png" alt='logo' width={60} style={{}} />*/}
                <LogoText>
                    VOYAGER
                </LogoText>
                <TechLogos>
                    {/*<img src="/nodeJsLogo.png" alt='logo' width={45} style={{}} />*/}
                    {/*<img src="/reactLogo.png" alt='logo' width={45} style={{}} />*/}
                    <NodeLogo width={34} height={34}/>
                    <ReactLogo width={35} height={35}/>
                </TechLogos>
            </LogoInfo>


        </Container>

    </StyledFooter>);

}

export {Footer}
