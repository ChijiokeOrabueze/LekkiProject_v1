import  styled  from "styled-components";
import Property from "./Property";
import PropertySearchFom from "./PropertySearchFom";



const Container = styled.div`
    width: 100vw;
    text-align: center;
    // height: 100vh;
    // text-align: center;
    // display: flex;
    // justify-content: center;
    // align-items: center;

`

const Left = styled.div`
    width: 100vw;
    height: 100vh;
    // background-color: red;
    flex:2;
    text-align: center;
    overflow: hidden;

    h1{
        // border: 1px solid coral;
        // background-color: rgb(51, 51, 51);
        color: rgb(51, 51, 51);
        font-weight: 100;
    }


`

const Wrapper = styled.div`
    width: 100%;
    // height: calc(100vh - 40px);
    display: flex;
    justify-content: start;
    gap: 15px;
    padding-left: 30px;
    padding-right: 30px;
    align-items: center;
    margin-top: 40px;
    flex-wrap: wrap;
    
`

const Properties = () => {
  return (
    <Container>
        <PropertySearchFom />
        <h1>Property Listing</h1>
        <Wrapper>
            <Property 
                title = "Lounge hotels"
                desc = "This is a storey building"
                loc = "Location - Abuja, Nigeria"
                img = "che.webp"
                />
            <Property 
                title = "Lounge hotels"
                desc = "This is a storey building"
                loc = "Location - Abuja, Nigeria"
                img = "che.webp"
                />
        </Wrapper>
        
        
    </Container>
  )
}

export default Properties
