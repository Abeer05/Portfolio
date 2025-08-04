import React, { useRef, useState, Suspense } from "react";
import emailjs from "@emailjs/browser";

import Cat from "../models/Cat.jsx";
import Loader from "../components/Loader";
import { Canvas } from "@react-three/fiber";
import useAlert from "../hooks/useAlert.js";
import Alert from "../components/Alert.jsx";

console.log("ENV CHECK", {
  service: import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
  template: import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
});

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState(null);

  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation("LowPolyCat_StartAnim");

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          to_name: "Abeer Malik",
          email: form.email,
          to_email: "malikabeer23@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);

        showAlert({
          show: true,
          text: "Thank you! I will get back to you soon",
          type: "success",
        });

        setTimeout(() => {
          hideAlert();
          setCurrentAnimation(null);
          setForm({ name: "", email: "", message: "" });
        }, [3000]);
      })
      .catch((error) => {
        setIsLoading(false);
        setCurrentAnimation(null);
        console.error(error);
        showAlert({
          show: true,
          text: "Something went wrong. Please try again.",
          type: "danger",
        });
      });
  };

  const handleFocus = () => setCurrentAnimation("LowPolyCat_StartAnim");
  const handleBlur = () => setCurrentAnimation(null);

  return (
    <section className="relative flex lg:flex-row flex-col max-container h-[100vh]">
      {alert.show && <Alert {...alert} />}
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>
        <form
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
        >
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Abeer Malik"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            ></input>
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="malikabeer23@gmail.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            ></input>
          </label>
          <label className="text-black-500 font-semibold">
            Your Message
            <textarea
              name="message"
              rows={4}
              className="textarea"
              placeholder="Looking forward to hearing from you!"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            ></textarea>
          </label>
          <button
            type="submit"
            className="btn"
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? "Submitting.." : "Send Message"}
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas camera={{ position: [0, 0, 3], fov: 75, near: 0.1, far: 1000 }}>
          <directionalLight castShadow intensity={2.5} position={[0, 0, 1]} />
          <ambientLight castShadow intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <Cat currentAnimation={currentAnimation} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
