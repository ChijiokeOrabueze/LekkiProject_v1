import React, { Component } from 'react';
import styled from 'styled-components';
import propertyDetails from '../helpers/addProperty';
import Select from './Select';
import Input from './Input';
import TextArea from './TextArea';
import updateDetails from '../helpers/updateProperty';

const Container = styled.div`
    width: 100vw;
    // height: calc(100vh - 80px);
    background-image: url(images/wp3604678.jpg);
    background-size: cover;
    background-position: center;
    
    display: flex;
    flex-direction: column;
    // flex-wrap: wrap;
    justify-content: start;
    align-items: center;
    // opacity: 0.5;

    form {
        border: 1px solid red;
        width: 800px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: white;
        border-radius: 10px;
        margin: 30px 0;
        padding: 10px


        

    }
`

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: start;
    background-color: white;
    gap: 20px;

    textarea{
        flex-basis: 500px;
    }
`

const SubmitButton = styled.button`
    background-color: #2B4247;
    color: white;
    width: 80%;
    margin-top: 10px;
    // align-self: end;
    

    &:hover{
        background-color: rgba(0,0,255,0.1);
        color: #2B4247;
    }

`

class AddProperty extends Component {
    constructor (props){
        super(props);
        this.state = {
            pAddress: "",
            pType: "",
            noBd: "",
            noS: "",
            noK: "",
            noT: "",
            noB: "",
            pOwner: "",
            pImage: "",
            validFrom: "",
            validTo: "",
            price: "",
            desc: "",
            unique: ""
        }

        
    }

    handleChange = (e) =>{
        this.setState({[e.target.name]: e.target.value});
        // console.log(e.target.name, e.target);

    }

    handleSubmit = (e) =>{
        e.preventDefault();
        const data = {...this.state}

        console.log(data);
    }

    componentDidMount() {
        if (this.props.update) {
            this.setState({...this.props.propData});
        }
    }

    

    
    render() {
        const {propId, propData, update} = this.props;
        const details = update ? updateDetails :  propertyDetails;
        
        return (
            <Container style={{height: update ? "calc(100vh - 80px)": ""}}>
                
                <form onSubmit={this.handleSubmit}>
                    <h1 style={{margin: "10px 0"}}>{update? `Update Property ${propId}` : "Add New Property Details"}</h1>
                    <Wrapper>
                        {
                            details.map((p)=>{
                                if (p.type === "select") {
                                    return <Select 
                                                key = {p.id}
                                                // width = "100px"
                                                title = {p.title} 
                                                name={p.name}
                                                value = {this.state[p.name]}
                                                placeholder= {p.pHolder}
                                                handleChange = {this.handleChange}
                                                options = {["hello", "star"]}/>

                                    
                                } else if (p.type === "textarea"){
                                    return <TextArea
                                                key = {p.id}
                                                title = {p.title} 
                                                name={p.name}
                                                rows={10}
                                                cols={50}
                                                value={this.state[p.name]}
                                                handleChange={this.handleChange}
                                                placeHolder={p.pHolder}/>
                                }else{
                                    return <Input 
                                            key = {p.id}
                                            // width = "100px"
                                            title = {p.title}
                                            name= {p.name}
                                            type = {p.type}
                                            value = {this.state[p.name]}
                                            placeholder= {p.pHolder}
                                            handleChange = {this.handleChange}
                                            />
                                }
                            })
                        }

                        {/* <input type="image" src="" alt="" /> */}
                    </Wrapper>
                    <SubmitButton type="submit">- Add Property -</SubmitButton>
                </form>
            </Container>
        )
    }
}



export default AddProperty
