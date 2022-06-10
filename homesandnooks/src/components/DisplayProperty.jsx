import  styled  from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";



const Container = styled.div`
    width: 100vw;
    padding: 15px 30px;
    p,h4{
        display: inline;
    }

`
const Heading = styled.div`
    display: flex;
    width: 100vw;
    justify-content: start;

`

const UpdateButton = styled.button`
    background-color: teal;
    color: white;
    margin-left: 20px;

`

const ImageContainer = styled.div`
    overflow-x: scroll;
    width: calc(100vw - 60px);
    height: 420px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;


    div{
        // width: 100%;
        height: 400px;
        display: flex;
        justify-content:space-between;
        gap: 20px;
    }
    
`
const Slide = styled.div`
    width: 20%;
    height: 400px;
    transition: 2s;
`

const Image = styled.img`
    // width: 100%;
    // height: 400px;
    border-radius: 5px;
`

const Details = styled.div`
    display: flex;
    gap: 20px;

`

const Sub = styled.div`

    .first, .second{
        display: flex;
        gap: 40px;
        margin-bottom: 10px;

    }

    p,h4{
        display: block
    }

    p{
        font-size: 12px;
    }

    h4{
        color: coral;
    }

`



const DisplayProperty = () => {
    const navigate = useNavigate();
    const [itemId, setId] = useState(1);


  return (
      
    <Container>
        <Heading>
            <div>
                <div><p>Uploaded by:</p><h4> Uju Chima</h4></div>
                <div><p>Property Owner:</p><h4> Mr. Mark Taiwo</h4></div>
            </div>
            <UpdateButton type="button" onClick={()=> navigate('/update_property', {state: {id:itemId}})}>Update Property</UpdateButton>
        </Heading>
        <ImageContainer>
            <div>
                <Slide><Image src="images/che.webp" alt="test"/></Slide>
                <Slide><Image src="images/che.webp" alt="test"/></Slide>
                <Slide><Image src="images/che.webp" alt="test"/></Slide>
                <Slide><Image src="images/che.webp" alt="test"/></Slide>
                <Slide><Image src="images/white-and-brown-house.jpg" alt="test"/></Slide>
                <Slide><Image src="images/che.webp" alt="test"/></Slide>
            </div> 
        </ImageContainer>
        <h2>N500000</h2>
        <Details>
            <div><h4>5</h4><p> Bedrooms</p></div>
            <div><h4>3</h4><p> Sitting Rooms</p></div>
            <div><h4>2</h4><p> kitchen</p></div>
            <div><h4>4</h4><p> Bathrooms</p></div>
            <div><h4>2</h4><p> Toilets</p></div>
        </Details>
        <h3 style={{margin: "10px 0"}}>4, Abiodun street, Lagos</h3>
        <Sub>
            <div className="first">
                <div>
                    <h4>Apartment</h4>
                    <p>Property Type</p>
                </div>

                <div>
                    <h4>Mr. Mike</h4>
                    <p>Property Owner</p>
                </div>
            </div>
            <div className="second">
                <div>
                    <h4>23/04/20</h4>
                    <p>Valid From</p>
                </div>
                <div>
                    <h4>23/09/20</h4>
                    <p>Valid To</p>
                </div>
            </div>
            
            
        </Sub>


        
      
    </Container>
  )
}

export default DisplayProperty
