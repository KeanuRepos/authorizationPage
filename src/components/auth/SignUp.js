import React,{Component} from 'react'

export default class SignUp extends Component {
    state = {
        name:null,
        surname:null,
        age:null,
        email:null,
        password:null,
        confirmPassword:null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
            }) 
        }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        if (this.state.password === this.state.confirmPassword) {
            alert("Submit Success");
        }
        else{
            alert("Passwords do not match, please try again");
        }
    }
    render(){
       return(
        <div className=" center container">
            <form autocomplete="off" className = "white" onSubmit = {this.handleSubmit}>
                <h5 className="formHead grey-text text-darken-3">Sign Up</h5>
                <div className="input-field">
                    <label htmlFor ="name">First Name</label>
                    <input autocomplete="off" type ="text" id="name" onChange={this.handleChange}/>
                </div>

                    <div className="input-field">
                        <label htmlFor="surname">Last Name</label>
                        <input autocomplete="off" type="text" id="surname" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="age">Age</label>
                        <input autocomplete="off" type="text" id="age" onChange = {this.handleChange}/>
                    </div>

                    <div className="input-field"> 
                        <label htmlFor="email">Email</label>
                        <input autocomplete="off" type="email" id="email" onChange = {this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input autocomplete="off" type="password" id="password" onChange = {this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="confirmPassword">ConfirmPassword</label>
                        <input autocomplete="off" type="password" id="confirmPassword" onChange = {this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <button className="btn blue lighten-1 x-depth-0">SignUp</button>
                    </div>
                </form>
           </div>
       ) 
    }
}