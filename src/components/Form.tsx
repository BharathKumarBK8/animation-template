import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./Form.css";

type Field = {
  name: string;
  label?: string;
  type: "text" | "email" | "tel" | "textarea";
  placeholder?: string;
  required?: boolean;
  rows?: number;
};

type FormProps = {
  fields: Field[];
  onSubmit?: (formData: Record<string, string>) => void;
};

const Form: React.FC<FormProps> = ({ fields, onSubmit }) => {
  const initialFormData = fields.reduce((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {} as Record<string, string>);

  const [formData, setFormData] = useState(initialFormData);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaToken) {
      alert("Please verify that you are not a robot.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken: captchaToken,
        }),
      });

      if (!response.ok) {
        console.error("Server error:", response.statusText);
        alert("Something went wrong. Please try again.");
        return;
      }

      alert("Thank you! Your enquiry has been received.");
      setFormData(initialFormData);
      setCaptchaToken(null);
      recaptchaRef.current?.reset();
    } catch (error) {
      console.error("Network error:", error);
      alert("Could not connect to server.");
    }
  };

  return (
    <form className="enquiry-form" onSubmit={handleSubmit}>
      {fields.map((field) => {
        const commonProps = {
          name: field.name,
          placeholder: field.placeholder,
          required: field.required,
          value: formData[field.name],
          onChange: handleChange,
        };

        return field.type === "textarea" ? (
          <textarea key={field.name} rows={field.rows || 5} {...commonProps} />
        ) : (
          <input key={field.name} type={field.type} {...commonProps} />
        );
      })}

      {/* reCAPTCHA widget */}
      <ReCAPTCHA
        sitekey="6LfuZcYrAAAAAGYyR8qIM2mEogo-JESZ9xILCMFT" // 👈 Replace with your actual site key
        onChange={setCaptchaToken}
        ref={recaptchaRef}
      />

      <button type="submit">Send Enquiry</button>
    </form>
  );
};

export default Form;
