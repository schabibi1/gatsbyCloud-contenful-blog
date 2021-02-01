import React from 'react'

import contactFormStyles from './contact-form.module.scss'

const ContactForm = () => {
  return (
    <div>
      <form
        action="https://getform.io/f/6746bcaf-e462-4c55-ad6a-f133ec83f13c"
        method="POST"
      >
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