import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane as message } from "@fortawesome/free-solid-svg-icons";
import "./email.css";
import swal from "sweetalert";
const Email = () => {
  const formulario = {
    name: "",
    mail: "",
    message: "",
  };
  const [value, setValue] = useState(formulario);
  const onChangeValue = (e) => {
    if (e.target.name === "user_name") {
      setValue({
        ...value,
        name: e.target.value,
      });
    } else if (e.target.name === "user_mail") {
      setValue({
        ...value,
        mail: e.target.value,
      });
    } else if (e.target.name === "user_message") {
      setValue({
        ...value,
        message: e.target.value,
      });
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    let validator = 0;
    for (const property in value) {
        validator = validator + 1;
      if (value[property] === "") {
        swal({
          title: "Por favor llena todos los campos",
          icon: "warning",
        });
        break;
    }
      if (validator === 3) {
        emailjs
          .sendForm(
            "service_uo3l6tj",
            "template_ztl700j",
            e.target,
            "zuJsKnKK4-oI0q0S8"
          )
          .then((response) => {
            if (response.status === 200) {
              swal({
                title: "Acabas de enviarle un mensaje a Franco",
                icon: "success",
              });
            }
          })
          .catch((error) => {
            if (error) {
              swal({
                title: "Parece que algo salio mal, intentalo nuevamente",
                icon: "error",
              });
            }
          });
        e.target.reset();
        setValue(formulario);
      }
    }
  };

  return (
    <div id="contactme" className="contact">
      <h2>contactame</h2>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <label>nombre</label>
          <br />
          <input
            onChange={onChangeValue}
            name="user_name"
            type="text"
            placeholder="nombre"
          />
        </div>
        <div className="form-group">
          <label>correo</label>
          <br />
          <input
            onChange={onChangeValue}
            name="user_mail"
            type="email"
            placeholder="correo"
          />
        </div>
        <div className="form-group">
          <label>mensaje</label>
          <br />
          <textarea
            onChange={onChangeValue}
            name="user_message"
            type="text"
            placeholder="mensaje"
          />
        </div>
        <button>
          <FontAwesomeIcon className="icon_message" icon={message} />
          enviar
        </button>
      </form>
    </div>
  );
};

export { Email };
