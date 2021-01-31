import React from 'react'

import contactFormStyles from './contact-form.module.scss'

const ContactForm = () => {
  return (
    <div>
      <form 
        // name="contact"
        // method="post"
        // data-netlify="true"
        // netlify-honeypot="bot-field"
        // action="/success"
        action="https://getform.io/f/6746bcaf-e462-4c55-ad6a-f133ec83f13c"
        method="POST"
      >
        {/* <input type="hidden" name="form-name" value="contact" />
				<p className="hidden" className={contactFormStyles.formFlex}>
					<label>Don’t fill this out if you're human. <br />この項目は空欄でお願いします: </label>
          <input name="bot-field" />
				</p> */}
        <p className={contactFormStyles.formFlex}>
					<label>Name: </label>
          <input type="text" name="name" placeholder="i.e. Robin Brawn" />
				</p>
				<p className={contactFormStyles.formFlex}>
					<label>Email: </label>
          <input type="email" name="email" placeholder="abc@mail.com" />
				</p>
				<p className={contactFormStyles.formFlex}>
					<label>Message: </label>
          <input type="text" name="message" placeholder="Write your message" />
				</p>
				<p>
					<button className={contactFormStyles.contactButton} type="submit">Send</button>
				</p>
			</form>
    </div>
  )
}

export default ContactForm