import  styled  from "styled-components";
import { useState } from "react";
import Input from "./Input";
import Select from "./Select";



const Container = styled.div`
    width: 100vw;
    // height: 80px;
    border: 2px solid silver;
    color: #a9a9a9;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;

    form{
        display: flex;
        flex-wrap: wrap;
    }

    .a-form{
        justify-content: center;
        align-items: center;
        gap: 15px;
        
    }

`

const SubmitButton = styled.button`
    background-color: #2B4247;
    color: white;
    align-self: end;
    

    &:hover{
        background-color: rgba(0,0,255,0.1);
        color: #2B4247;
    }

`

const AButton = styled.button `
    background-color: tomato;
    color: white;


    &:hover{
        background-color: rgba(0,0,255,0.1);
        color: tomato;
    }
`

const PropertySearchFom = (props) => {
    const [address, setAddress] = useState("");
    const [aSearch, setaSearch] = useState(false);
    const [type, setType] = useState("");
    const [owner, setOwner] = useState("");
    const [bed, setBed] = useState("");
    const [min, setMin] = useState("");
    const [max, setMax] = useState("");


    const handleSubmit = (e) =>{
        e.preventDefault();
        const data = {
            address,
            aSearch,
            type,
            owner,
            bed,
            min,
            max
        }

        console.log(data);
    }
  return (
    <Container>
        <form onSubmit={handleSubmit} className={aSearch ? "a-form" : ""}>
            <Select 
                title = {aSearch ? "Address" : ""}
                width = {aSearch && "100px"}
                name="address"
                value = {address}
                placeholder= {aSearch? "Any": "Select a property address to search"}
                handleChange = {(e)=>{setAddress(e.target.value)}}
                options = {["hello", "star"]}/>

            {
                aSearch === true &&
                [
                    <Select 
                        key = "1"
                        width = "100px"
                        title =  "Type"
                        name="Type"
                        value = {type}
                        placeholder= "Any"
                        handleChange = {(e)=>{setType(e.target.value)}}
                        options = {["hello", "star"]}/>,

                    <Select 
                        key = "4"
                        width = "100px"
                        title = "Owner" 
                        name="owner"
                        value = {owner}
                        placeholder= "Any"
                        handleChange = {(e)=>{setOwner(e.target.value)}}
                        options = {["hello", "star"]}/>,

                    <Select 
                        key = "5"
                        width = "100px"
                        title = "Bedrooms" 
                        name="bed"
                        value = {bed}
                        placeholder= "Any"
                        handleChange = {(e)=>{setBed(e.target.value)}}
                        options = {["hello", "star"]}/>,

                    <Input 
                        key = "6"
                        width = "100px"
                        title = "Min Price"
                        name="min"
                        type = "number"
                        value = {min}
                        placeholder= ""
                        handleChange = {(e)=>{setMin(e.target.value)}}
                        />,
                    <Input 
                        key = "7"
                        width = "100px"
                        title = "Max Price"
                        name="max"
                        type = "number"
                        value = {max}
                        placeholder= ""
                        handleChange = {(e)=>{setMax(e.target.value)}}
                        /> 
                ]
            }

            <SubmitButton type="submit">- Search -</SubmitButton>
            {
                !aSearch &&
                <AButton onClick={()=>setaSearch(true)}>- Advanced Search -</AButton>
            }
            
        </form>
    </Container>
  )
}

export default PropertySearchFom
