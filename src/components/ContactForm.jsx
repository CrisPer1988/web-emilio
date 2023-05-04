import React from "react";
import { useForm, ValidationError } from '@formspree/react';
import ReactPlayer from "react-player"

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xlekzrdd");
  if (state.succeeded) {
      return <p>Gracias por contactarte, te respondere a la brevedad!</p>;
  }
  return (
    <div id="contacto" className="container__form">
      
    <form className="form__contact" onSubmit={handleSubmit}>
    <h2>Contacto</h2>
<div className="item__form">
<label htmlFor="name">
      Nombre
    </label>
    <input
    required
className="text__input"
      id="name"
      type="text" 
      name="name"
    />
    <ValidationError 
      prefix="Email" 
      field="email"
      errors={state.errors}
    />
</div>

<div className="item__form">

    <label htmlFor="email">
      Email
    </label>
    <input
    required
className="text__input"
      id="email"
      type="email" 
      name="email"
    />
    <ValidationError 
      prefix="Email" 
      field="email"
      errors={state.errors}
    />
</div>

<div className="item__form">

<label htmlFor="phone">
      Telefono
    </label>
    <input
    required
className="text__input"
      id="phone"
      type="number" 
      name="phone"
    />
    <ValidationError 
      prefix="Email" 
      field="email"
      errors={state.errors}
    />
</div>

<div className="item__form">

<label htmlFor="email">
      Mensage
    </label>
    <textarea
      className="text__input"
      id="message"
      name="message"
    />
    <ValidationError 
      prefix="Message" 
      field="message"
      errors={state.errors}
    />
</div>
    <button className="btn__form" type="submit" disabled={state.submitting}>
      Enviar
    </button>
  </form>
  

  </div>
  );
};

export default ContactForm;
