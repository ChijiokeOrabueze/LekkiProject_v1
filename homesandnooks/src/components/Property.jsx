import { Link } from "react-router-dom";
import  styled  from "styled-components";



const Container = styled.div`
    width: 100%;
    // height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 10px;
    flex-basis: 290px;
    border: 1px solid silver;

    @media (max-width: 900px) {
        flex-basis: 350px;
    }

    @media (max-width: 700px) {
        margin-bottom: 20px;
    }

`

const Image = styled.img`
    height: 200px;
    width: 290px;
    border-radius: 5px;

    @media (max-width: 900px) {
        width: 300px;
    }

`
const Description = styled.p`

`

const Button = styled.button`
    background-color: #2B4247;
    color: white;
    

    &:hover{
        background-color: rgba(0,0,255,0.1);
        color: #2B4247;
    }

`



const Property = (props) => {
    const {title, desc, loc, img} = props;
  return (
    <Container>
        <h4>{title}</h4>
        <Image src={`images/${img}`} alt = {img}/>
        <Description>{desc}</Description>
        <h5>{loc}</h5>
        <Link to="/property"><Button>- view listing -</Button></Link>
    </Container>
  )
}

export default Property
