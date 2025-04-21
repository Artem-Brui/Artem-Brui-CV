import classNames from "classnames";
import cl from "./Form.module.scss";
import React, { useRef, useState } from "react";
import useTheme from "@customHooks/useTheme";
import useLanguage from "@customHooks/useLanguage";

const Form = () => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const { theme } = useTheme();
  const { content } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const formDataContent = content.ContactSection.form;

  let textareaHeight = 16;

  if (window.innerWidth > 767) {
    textareaHeight = 18;
  }
  if (window.innerWidth > 1279) {
    textareaHeight = 20;
  }

  const handleChangeEmail: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setFormData({
      ...formData,
      email: event.target.value,
    });
  };

  const handleChangeName: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setFormData({
      ...formData,
      name: event.target.value,
    });
  };

  const handleChangeMessage: React.ChangeEventHandler<HTMLTextAreaElement> = (
    event
  ) => {
    const textarea = textareaRef.current;

    if (textarea) {
      textarea.style.height = `${textareaHeight + 5}px`;
      textarea.style.lineHeight = `${textareaHeight + 8}px`;

      if (textarea.scrollHeight > textareaHeight + 8) {
        textarea.style.height = `${textarea.scrollHeight}px`;
      }
    }
    setFormData({
      ...formData,
      message: event.target.value,
    });
  };

  const handleSubmitForm: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();

    const stringToSend = `name=${formData.name}&email=${formData.email}&message=${formData.message}`;

    setFormData({
      name: "",
      email: "",
      message: "",
    });

    const textarea = textareaRef.current;

    if (textarea) {
        textarea.style.height = `${textareaHeight + 5}px`;
        textarea.style.lineHeight = `${textareaHeight + 8}px`;
    }

    await fetch(
      "https://script.google.com/macros/s/AKfycbzsvdPoYuS42g20a4j6CeyNobJGCRPlRZSBFjIL9EnbqsrgVHrv7DCrJu1NAGwDRsI/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: stringToSend,
      }
    );
  };

  return (
    <form
      onSubmit={handleSubmitForm}
      className={classNames(cl.form, cl[theme])}
    >
      <h3 className={cl.form__header}>{content.ContactSection.formHeader}</h3>

      <label className={classNames(cl.fields_labels, cl.label_name)}>
        {formDataContent.formLabels.name}
        <input
          className={cl.name}
          type="name"
          value={formData.name}
          placeholder={formDataContent.formPlaceholders.name}
          onChange={handleChangeName}
          autoComplete="name"
          required
        />
      </label>

      <label className={classNames(cl.fields_labels, cl.label_email)}>
        {formDataContent.formLabels.email}
        <input
          className={cl.email}
          type="email"
          placeholder={formDataContent.formPlaceholders.email}
          value={formData.email}
          onChange={handleChangeEmail}
          autoComplete="email"
          required
        />
      </label>

      <label className={classNames(cl.fields_labels, cl.label_message)}>
        {formDataContent.formLabels.message}
        <textarea
          className={cl.message}
          placeholder={formDataContent.formPlaceholders.message}
          required
          ref={textareaRef}
          value={formData.message}
          onChange={handleChangeMessage}
        />
      </label>

      <label className={cl.label_button}>
        <input
          className={cl.input_button}
          type="submit"
          value={formDataContent.formLabels.button}
        />
      </label>
    </form>
  );
};

export default Form;
