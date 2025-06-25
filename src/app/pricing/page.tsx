"use client";
import React from "react";
import { joinClasses } from "@/util/joinClasses";
import styles from "./pricing.module.css";
// import carAtNight from "@/assets/img/gallery/IMG_2019.jpg";
import Image from "next/image";

const PricingPage = () => {
  return (
    <div className={joinClasses("contentSpan", styles.mainContent)}>
      <h1>Pricing</h1>
      <p>The pricing tables below reflect our current pricing.</p>
      <h2>Manual</h2>
      <table>
        <tbody>
          <tr>
            <th>Hours</th>
            <th>Price</th>
          </tr>
          <tr>
            <td>1 hour</td>
            <td>£35</td>
          </tr>
          <tr>
            <td>2 hours</td>
            <td>£67</td>
          </tr>
          <tr>
            <td>10 hours</td>
            <td>£320</td>
          </tr>
        </tbody>
      </table>

      <h2>Automatic</h2>
      <table>
        <tbody>
          <tr>
            <th>Hours</th>
            <th>Price</th>
          </tr>
          <tr>
            <td>1 hour</td>
            <td>£37</td>
          </tr>
          <tr>
            <td>2 hours</td>
            <td>£70</td>
          </tr>
          <tr>
            <td>10 hours</td>
            <td>£330</td>
          </tr>
        </tbody>
      </table>

      <h2>Discounted lessons</h2>
      <p>You may be eligible through our NHS or student discount schemes.</p>
      <p>To qualify you must have either:</p>
      <ul>
        <li>NHS staff identification badge</li>
        <li>NHS smartcard</li>
        <li>Student ID card from an educational institution.</li>
      </ul>
      <p>All schemes currently offer 10% off from regular courses.</p>

      <h2>Unsocial hours</h2>
      <p>Additional charges apply for lessons booked for unsocial hours.</p>
    </div>
  );
};

export default PricingPage;
