import React, { useContext, useState } from "react";
import styles from "./SearchModal.module.css";
import { ProductsContext } from "../contexts/ProductsContext";
import { Link } from "react-router-dom";

export default function SearchModal() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const context = useContext(ProductsContext);

  const { products } = context || {};

  const filteredData = Array.isArray(products)
    ? products.filter((item) => {
        if (item && item.title) {
          return item.title.toLowerCase().includes(searchTerm.toLowerCase());
        }
        return false;
      })
    : [];

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  };

  const closeModal = () => {
    setSearchTerm("");
    setShowModal(false);
  };
  return (
    <div className={styles.app}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        className={styles.searchInput}
      />

      {showModal && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={closeModal}>
              &times;
            </button>
            <h2>Search Results</h2>
            {filteredData.length > 0 ? (
              <ul>
                {filteredData.map((item, index) => (
                  <Link
                    to={`/shop/${item.id}`}
                    key={index}
                    onClick={() => setShowModal(false)}
                  >
                    {" "}
                    {item.title}{" "}
                  </Link>
                ))}
              </ul>
            ) : (
              <p>No results found.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
