import React, { Component } from "react";
const data = require('./data.json'); 
 

class Contact extends Component {
  render() {
    return (
      <div> 
          <div> 
            <h2>Thank you for visiting {window.location.hostname}.</h2>
            <p>To receive our exclusive e-mail offers from {window.location.hostname} name
              companies, please complete the form bellow.
            </p>
          </div>

          <div className="mycontact"> 

          <form id="form-id" class="form-class" method="post" action="contact-form-process.php">
        
        <div class=" form-group">
            <label for="Name" class="label">Your name</label>
            <div class="input-group">
                <input type="text" id="Name" name="Name" class="form-control" required></input>
            </div>
        </div>

        <div class=" form-group">
            <label for="Email" class="label">Your email address</label>
            <div class="input-group">
                <input type="email" id="Email" name="Email" class="form-control" required></input>
            </div>
        </div>

        <div class="form-group">
            <label for="Message" class="label">Your message</label>
            <div class="input-group">
                <textarea id="Message" name="Message" class="form-control" rows="6" maxlength="3000" required></textarea>
            </div>
        </div>

        <div class="form-group">
            <button type="submit" id="button" class="btn btn-primary btn-lg btn-block">Send Message</button>
        </div>

        <div class="credit" id="credit">
        Simple HTML email form provided by: <a href="https://www.freecontactform.com" target="_blank">FreeContactForm.com</a>
        </div>

    </form>

          </div>



      </div>

    );
  }
}
 
export default Contact;
