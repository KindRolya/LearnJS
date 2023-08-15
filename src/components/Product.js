import React, { Component } from "react";
import "./Product.css";
import { Products } from "./Product-list";

const categories = [
  { id: 1, Category: "Smartphone", icon: "fa-solid fa-mobile-screen", cname: "iconcat" },
  { id: 2, Category: "Tablet", icon: "fa-solid fa-tablet", cname: "iconcat" },
  { id: 3, Category: "Laptop", icon: "fa-solid fa-laptop", cname: "iconcat" },
  { id: 4, Category: "Smartwatch", icon: "fa-solid fa-clock", cname: "iconcat" },
  { id: 5, Category: "Headphone", icon: "fa-solid fa-headphones", cname: "iconcat" },
  // Thêm các danh mục khác vào đây
];

class Catg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: null, // Lưu danh mục được chọn
      isScrolling: false,
    };
  }

  handleScroll = () => {
    // Kiểm tra nếu vị trí trang lớn hơn giá trị nào đó (ví dụ: 500) thì thay đổi chiều cao của .Categr
    if (window.scrollY > 100) {
      this.setState({ isScrolling: true });
    } else {
      this.setState({ isScrolling: false });
    }
  };
  
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }



  handleCategoryClick = (category) => {
    this.setState({ selectedCategory: category });
  };

  render() {
    const { selectedCategory, isScrolling } = this.state;
    const selectedCategoryName = categories.find(item => item.Category === selectedCategory)?.Category;

    return (
        <>
          <div className={`Categr ${isScrolling ? "scrolling" : ""}`}>
            <div className="Categr-menu">
              {categories.map((item, index) => (
                <li key={index} onClick={() => this.handleCategoryClick(item.Category)}>
                  <div className={item.cname} title={item.Category}>
                    <i className={item.icon} />
                  </div>
                </li>
              ))}
            </div>
          </div>
          <div className="Prod">
            <h2 className="Product-list-title">{selectedCategoryName || "Products"}</h2>
            <div className="Product-list">
              <ul>
                {selectedCategory
                  ? Products.filter(product => product.Category === selectedCategory).map((product, index) => (
                      <li key={index}>{product.title}</li>
                    ))
                  : Products.map((product, index) => (
                      <li key={index}>{product.title}</li>
                    ))}
              </ul>
            </div>
          </div>
        </>
      );
  }
}

export default Catg;
