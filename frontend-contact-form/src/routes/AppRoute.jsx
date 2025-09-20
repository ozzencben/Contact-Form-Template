import { Route, Routes } from "react-router-dom";
import ContactForm from "../contact-form/ContactForm";

export const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<ContactForm />} />
    </Routes>
  );
};
