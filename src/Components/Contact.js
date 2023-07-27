import React, { Component } from 'react';

class ContactUsFormValidationUsingCC extends React.Component {
    constructor(props){
      super(props);
  
      this.state = {
        fields: {},
        errors: {},
        disply: "none"
      }
    }
  
    handleValidation(){
      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;
  
      //Name
      if(!fields["firstname"]){
        formIsValid = false;
        errors["firstname"] = "Please enter your firstname";
      }
  
      // if(typeof fields["firstname"] !== "undefined"){
      //   if(!fields["firstname"].match(/^[a-zA-Z]+$/)){
      //     formIsValid = false;
      //     errors["firstname"] = "Only letters";
      //   }      	
      // }

      // if(!fields["lastname"]){
      //   formIsValid = false;
      //   errors["lastname"] = "Cannot be empty";
      // }

      // if(typeof fields["lastname"] !== "undefined"){
      //   if(!fields["lastname"].match(/^[a-zA-Z]+$/)){
      //     formIsValid = false;
      //     errors["lastname"] = "Only letters";
      //   }      	
      // }
  
      //Email
      if(!fields["email"]){
        formIsValid = false;
        errors["email"] = "Please enter your email";
      }
  
      if(typeof fields["email"] !== "undefined"){
        let lastAtPos = fields["email"].lastIndexOf('@');
        let lastDotPos = fields["email"].lastIndexOf('.');
  
        if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
          formIsValid = false;
          errors["email"] = "Please enter the valid email";
        }
      }
  
      this.setState({errors: errors});
      return formIsValid;
    }
  
    submitForm(e){
      e.preventDefault();
      if(this.handleValidation()){
        this.setState({disply : "block"});
        
      }
      // else{
      //   alert("Form has errors.");
      // }
  
    }
  
    handleChange(field, e){    		
      let fields = this.state.fields;
      fields[field] = e.target.value;        
      this.setState({fields});
    }
  
    render(){
      return (
        <div>        	

          <div className="container Contactpg">
            <h2 className='text-center'>Contact Us</h2>
            
            <form name="contactform" className="contactform" onSubmit= {this.submitForm.bind(this)}>
            <div className="alert alert-success" role="alert" style={{display: this.state.disply}}>Thanks. Our team will contact your shortly!</div>
            {/* <fieldset> */}
                <label for="fname">First Name</label>
                <input type="text" id="fname" ref="firstname" placeholder="Your name.." onChange={this.handleChange.bind(this, "firstname")} value={this.state.fields["firstname"]}/>
                <span className="error">{this.state.errors['firstname']}</span>
                <br />
                <label for="lname">Last Name</label>
                <input type="text" id="lname" ref="lastname" placeholder="Your last name.." onChange={this.handleChange.bind(this, 'lastname')} value={this.state.fields['lastname']}/>
                <span className="error">{this.state.errors['lastname']}</span>
                <br />
                <label for="email">Email</label>
                <input type="text" id="email" ref="email" placeholder="Your Email.." onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}/>
                <span className="error">{this.state.errors['email']}</span>
                <br />
                <label for="phone">Mobile Number</label>
                <input type="text" id="phone" ref="phone" placeholder="Your Mobile Number.." onChange={this.handleChange.bind(this, "phone")} value={this.state.fields["phone"]}/>
                <span className="error">{this.state.errors['phone']}</span>
                <br />
                {/* <label for="country">Country</label>
                <select id="country" name="country">
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
                </select> */}

                <label for="subject">Subject</label>
                <textarea id="subject" ref="subject" placeholder="Write something.."></textarea>

                <input type="submit" value="Submit" id="ContactSubmit"/>
                {/* </fieldset> */}
            </form>
            </div>
        </div>
      )
    }
  }

  export default ContactUsFormValidationUsingCC;