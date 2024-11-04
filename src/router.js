import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";
import ResumePage from "./pages/resume/ResumePage";
import { PortfolioPage } from "./pages/portfolio/PortfolioPage";
import { BlogPage } from "./pages/blog/BlogPage";
import { ContactPage } from "./pages/contact/ContactPage";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
};

export default Router;
