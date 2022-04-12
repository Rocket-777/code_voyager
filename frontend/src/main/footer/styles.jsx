import {styled} from "@mui/material/styles";
import {Typography} from "@mui/material";

const StyledFooter = styled('div')`
  display: flex;
  width: 100%;
  //background-color: #dfe2f5;

  justify-content: left;
  font-size: 30px;
  align-items: center;
  height: 10rem;
  margin: auto 0 0 0;
  background-color: #5c6bc0;
  color: white;
  box-shadow: 0 10px 10px 10px #888;
  
`

const Container = styled('div')`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  

`

const LogoInfo = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto 2% auto 2%;
  
`

const TechLogos = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1% auto auto auto
  
`

const Info = styled('div')`
  display: flex;
  flex-direction: column;
  margin: auto auto auto 2%;
  width: 12%;
  @media only screen and (max-width: 1640px){
    width: 26%;
  }
  @media only screen and (max-width: 768px){
    width: 36%;
  }
  @media only screen and (max-width: 400px){
    width: 45%;
  }



`

const Text = styled(Typography)`
  text-align: justify;
  text-justify: inter-word;
  color: #344086;
  font-size: 0.9rem;
  line-height: 1rem;
  font-weight: bold;
  margin-top: 0.7rem;
  @media only screen and (max-width: 420px){
    font-size: 0.7rem;
    margin-top: 0.4rem;
  }
`

const LogoText = styled(Typography)`
  text-align: justify;
  text-justify: inter-word;
  color: #344086;
  font-size: 0.9rem;
  line-height: 1rem;
  font-weight: bold;
  margin-top: 0.2rem;
  margin-bottom: 0.3rem;
  @media only screen and (max-width: 420px){
    font-size: 0.7rem;
    margin-top: 0.4rem;
  }
`

export {StyledFooter, Container, LogoInfo, Info, Text, TechLogos, LogoText}
