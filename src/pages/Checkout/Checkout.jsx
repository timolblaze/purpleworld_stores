import React, { useContext, useState } from "react";
import { countries, Housing, statesInNigeria } from "../../components/mock";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Process from "../../components/Process/Process";
import Footer from "../../components/Footer";
import checkout from "./Checkout.module.css";
import design from "../../assets/design.png";
import { CartContext } from "../../contexts/CartContext";
import PaystackPop from "@paystack/inline-js";

const Checkout = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "",
    houseType: "",
    streetAddress: "",
    city: "",
    state: "",
    phone: "",
    email: "",
    createAccount: false,
    shipToDifferentAddress: false,
    orderNotes: "",
  });

  const [shippingData, setShippingData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "",
    houseType: "",
    streetAddress: "",
    city: "",
    state: "",
    phone: "",
    orderNotes: "",
  });

  const [orderData, setOrderData] = useState(null);
  // const [paymentMethod, setPaymentMethod] = useState("bank");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = (data) => {
    const requiredFields = [
      "firstName",
      "lastName",
      "country",
      "streetAddress",
      "city",
      "state",
      "phone",
      "email",
    ];
    return requiredFields.every((field) => data[field]);
  };

  const handleOrder = (e) => {
    e.preventDefault();
    const dataToValidate = formData.shipToDifferentAddress
      ? shippingData
      : formData;

    if (validateForm(dataToValidate)) {
      const paystack = new PaystackPop();
      paystack.newTransaction({
        key: "pk_test_d6e4e8e4a9f1cb8fc38f61822afefec6b438e41a",
        amount: cartTotal * 100,
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        onSuccess(transaction) {
          let message = `Payment Completed 🥰! Transaction ID: ${transaction.reference}`;
          alert(message);
        },
        onCancel() {
          alert("OOPS 😔!! Transaction Canceled");
        },
      });
    } else {
      alert("Please fill out all required fields.");
    }
  };

  const { cartItems } = useContext(CartContext);
  const cartTotal = cartItems.reduce(
    (acc, item) => acc + Number(item.subtotal),
    0
  );

  return (
    <main>
      <Navbar />
      <Process />
      <div className={checkout.checkoutContainer}>
        <div className={checkout.checkoutLinks1}>
          <p>Returning customer?</p>
          <Link to="/login">Click here to login</Link>
        </div>

        <section className={checkout.checkoutSection}>
          <section className={checkout.checkoutFormSection}>
            <h3>BILLING DETAILS</h3>

            <form className={checkout.checkoutForm}>
              <div className={checkout.names}>
                <div className={checkout.firstName}>
                  <label>First name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={checkout.lastName}>
                  <label>Last name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className={checkout.fieldName}>
                <label>Email address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={checkout.fieldName}>
                <label>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={checkout.fieldName}>
                <label>Company name (optional)</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={checkout.fieldName}>
                <label>Country / Region</label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a country</option>
                  {countries.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className={checkout.fieldName}>
                <select
                  name="houseType"
                  value={formData.houseType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select house type</option>
                  {Housing.map((house, index) => (
                    <option key={index} value={house}>
                      {house}
                    </option>
                  ))}
                </select>
              </div>

              <div className={checkout.fieldName}>
                <label>Street address</label>
                <input
                  type="text"
                  name="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={checkout.fieldName}>
                <label>Town / City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={checkout.fieldName}>
                <label>State</label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a state</option>
                  {statesInNigeria.map((state, index) => (
                    <option key={index} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>

              <div className={checkout.checkbox1}>
                <input
                  type="checkbox"
                  name="createAccount"
                  checked={formData.createAccount}
                  onChange={handleChange}
                />
                <Link to="/sign up">Create an account?</Link>
              </div>

              <div className={checkout.checkbox2}>
                <input
                  type="checkbox"
                  name="shipToDifferentAddress"
                  checked={formData.shipToDifferentAddress}
                  onChange={handleChange}
                />
                <label>Ship to a different address?</label>
              </div>
            </form>

            {formData.shipToDifferentAddress && (
              <form className={checkout.checkoutForm2}>
                <div className={checkout.names}>
                  <div className={checkout.firstName}>
                    <label>First name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={shippingData.firstName}
                      onChange={handleShippingChange}
                      required
                    />
                  </div>

                  <div className={checkout.lastName}>
                    <label>Last name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={shippingData.lastName}
                      onChange={handleShippingChange}
                      required
                    />
                  </div>
                </div>

                <div className={checkout.fieldName}>
                  <label>Company name (optional)</label>
                  <input
                    type="text"
                    name="companyName"
                    value={shippingData.companyName}
                    onChange={handleShippingChange}
                    required
                  />
                </div>

                <div className={checkout.fieldName}>
                  <label>Country / Region</label>
                  <select
                    name="country"
                    value={shippingData.country}
                    onChange={handleShippingChange}
                    required
                  >
                    <option value="">Select a country</option>
                    {countries.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className={checkout.fieldName}>
                  <select
                    name="houseType"
                    value={shippingData.houseType}
                    onChange={handleShippingChange}
                    required
                  >
                    <option value="">Select house type</option>
                    {Housing.map((house, index) => (
                      <option key={index} value={house}>
                        {house}
                      </option>
                    ))}
                  </select>
                </div>

                <div className={checkout.fieldName}>
                  <label>Street address</label>
                  <input
                    type="text"
                    name="streetAddress"
                    value={shippingData.streetAddress}
                    onChange={handleShippingChange}
                    required
                  />
                </div>

                <div className={checkout.fieldName}>
                  <label>Town / City</label>
                  <input
                    type="text"
                    name="city"
                    value={shippingData.city}
                    onChange={handleShippingChange}
                    required
                  />
                </div>

                <div className={checkout.fieldName}>
                  <label>State</label>
                  <select
                    name="state"
                    value={shippingData.state}
                    onChange={handleShippingChange}
                    required
                  >
                    <option value="">Select a state</option>
                    {statesInNigeria.map((state, index) => (
                      <option key={index} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>

                <div className={checkout.fieldName}>
                  <label>Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={shippingData.phone}
                    onChange={handleShippingChange}
                    required
                  />
                </div>

                <div className={checkout.fieldName}>
                  <label>Order notes (optional)</label>
                  <textarea
                    name="orderNotes"
                    value={shippingData.orderNotes}
                    onChange={handleShippingChange}
                    placeholder="Notes about your order, e.g.special notes for delivery"
                    rows={7}
                  ></textarea>
                </div>
              </form>
            )}
          </section>

          <section className={checkout.orderDetailsSection}>
            <img src={design} alt="checkout design" />
            <section className={checkout.orderDetailsContainer}>
              <h3>YOUR ORDER</h3>

              <div className={checkout.checkoutInvoice}>
                <div className={checkout.orderRow}>
                  <p className={checkout.product}>PRODUCT</p>
                  <p className={checkout.subtotal}>SUBTOTAL</p>
                </div>

                <div className={checkout.orderDetails}>
                  {cartItems.map((product, index) => (
                    <div key={index} className={checkout.orderRow}>
                      <p className={checkout.productName}>
                        {product.title} x {product.quantity}
                      </p>
                      <p className={checkout.productPrice}>
                        ₦{product.subtotal.toLocaleString()}
                      </p>
                    </div>
                  ))}
                  <div className={checkout.orderRow}>
                    <p className={checkout.total}>Total</p>
                    <p className={checkout.totalPrice}>
                      ₦{cartTotal.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>

              <div className={checkout.paymentMethods}>
                {/* <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cash"
                />
                Cash on delivery
              </label> */}
              </div>

              <p className={checkout.privacyNotice}>
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our{" "}
                <Link to="/privacy-policy">privacy policy</Link>.
              </p>

              <button
                className={checkout.placeOrderButton}
                onClick={handleOrder}
              >
                PLACE ORDER
              </button>
            </section>
          </section>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default Checkout;
