import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className={`${styles.footer}  px-md-5 px-3 g-2`}>
      <div className="row">
        <div className="d-flex justify-content-between flex-column flex-md-row gap-2">
          <div className="w-25">
            <h5 className="text-white">About Us</h5>
            <p className="text-white mb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              eget justo urna.
            </p>
          </div>
          <div className="mt-5 mt-md-0 w-25 px-2">
            <h5 className="text-white ">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to={"/"} style={{ textDecoration: "none" }}>
                  <h6 className="text-white">Home</h6>
                </Link>
              </li>
              <li>
                <h6 className="text-white">Books</h6>
              </li>
              <li>
                <h6 className="text-white">About Us</h6>
              </li>
              <li>
                <h6 className="text-white">Contact</h6>
              </li>
            </ul>
          </div>
          <div className="mt-5 mt-md-0">
            <h5 className="text-white ">Contact Us</h5>
            <address className="text-white">
              Address: Al-Basatin Commercial Complex 7th floor, Al-Basatin Area
              <br />
              City, Nablus
              <br />
              Email: info@endeavor.com
              <br />
              Phone: 0566516512
            </address>
          </div>
        </div>
      </div>
      <div className="bottom-footer text-center py-3 text-white">
        &copy; {new Date().getFullYear()} Bookstore. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
