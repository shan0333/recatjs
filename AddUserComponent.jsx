import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class AddUserComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
            cardNo: '',
            email: '',
            phone: '',
            message: null
        }
        this.saveCard = this.saveCard.bind(this);
    }

    saveCard = (e) => {
        e.preventDefault();
        let card = {cardNo: this.state.cardNo, email: this.state.email, phone: this.state.phone};
        ApiService.addCard(card)
            .then(res => {
                this.setState({message : 'User added successfully.'});
                this.props.history.push('/users');
            });
    }
	
	isValidEmailAndPhone = (e) => {
        e.preventDefault();
        let card = {email: this.state.email, phone: this.state.phone};
        ApiService.isValidEmailAndPhone(card)
            .then(res => {
                this.setState({message : res.data});
				if(res.data === "sucess"){
					this.isValidEmailAndPhone()
				}
				
                this.props.history.push('/users');
            });
    }
	
	
	isValidCard = (e) => {
        e.preventDefault();
        let card = {cardNo: this.state.cardNo};
        ApiService.isValidCard(card)
            .then(res => {
                this.setState({message : res.data});
				if(res.data === "sucess"){
					this.isValidEmailAndPhone()
				}
                this.props.history.push('/users');
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return(
            <div>
                <Typography variant="h4" style={style}>Card Info</Typography>
                <form style={formContainer}>

                    <TextField type="text" placeholder="Card Number" fullWidth margin="normal" name="cardNo" value={this.state.cardNo} onChange={this.onChange}/>

                    <TextField placeholder="Email Id" fullWidth margin="normal" name="email" value={this.state.email} onChange={this.onChange}/>

                    <TextField placeholder="Phone Number" fullWidth margin="normal" name="phone" value={this.state.phone} onChange={this.onChange}/>

                    <Button variant="contained" color="primary" onClick={this.saveUser}>Submit</Button>
            </form>
    </div>
        );
    }
}
const formContainer = {
    display: 'flex',
    flexFlow: 'row wrap',
	width:450,
	marginLeft:350
};

const style ={
    display: 'flex',
    justifyContent: 'center'

}

export default AddUserComponent;
