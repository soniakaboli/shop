import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>دسته‌بندی‌ها</h4>
          <Link to="/">صفحه اصلی</Link>
          <Link to="/cosmetics">لوازم آرایشی</Link>
          <Link to="/cloth">عطر و ادکلن</Link>
          <Link to="/shoses">کیف و کفش</Link>
        </div>

        <div className="footer-section">
          <h4>درباره ما</h4>
          <Link to="/about">تماس با ما</Link>
          <Link to="/about">درباره ما</Link>
        </div>

        <div className="footer-section">
          <h4>شبکه‌های اجتماعی</h4>
          <a href="#">اینستاگرام</a>
          <a href="#">تلگرام</a>
          <a href="#">واتس‌اپ</a>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 فروشگاه من. همه حقوق محفوظ است.
      </div>
    </footer>
  );
};

export default Footer;