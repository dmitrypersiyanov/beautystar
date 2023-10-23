export const services = [
  {
    id: 1,
    title: "Brow Tinting",
    price: 150,
    discount: 20,
    totalPrice: function () {
      if (this.discount !== 0) {
        return this.price - (this.price * this.discount) / 100;
      } else {
        return this.price;
      }
    },
    img: "/images/splash.jpg",
    what: `Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum`,
    how: `Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum`,
    for: `Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum`,
    preferableSessions: `Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum`,
  },
  {
    id: 2,
    title: "Brow Lamination",
    price: 145,
    discount: 10,
    totalPrice: function () {
      if (this.discount !== 0) {
        return this.price - (this.price * this.discount) / 100;
      } else {
        return this.price;
      }
    },
    img: "/images/plush.jpg",
    what: `Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum`,
    how: `Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum`,
    for: `Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum`,
    preferableSessions: `Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum`,
  },
  {
    id: 3,
    title: "Microblading",
    price: 125,
    discount: 15,
    totalPrice: function () {
      if (this.discount !== 0) {
        return this.price - (this.price * this.discount) / 100;
      } else {
        return this.price;
      }
    },
    img: "/images/powder.jpg",
    what: `Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum`,
    how: `Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum`,
    for: `Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum`,
    preferableSessions: `Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum`,
  },
  {
    id: 4,
    title: "Waxing",
    price: 199,
    discount: 5,
    totalPrice: function () {
      if (this.discount !== 0) {
        return this.price - (this.price * this.discount) / 100;
      } else {
        return this.price;
      }
    },
    img: "/images/soap.jpg",
    what: `Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum`,
    how: `Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum`,
    for: `Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum`,
    preferableSessions: `Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum`,
  },
  {
    id: 5,
    title: "Wow Brow",
    price: 130,
    discount: 25,
    totalPrice: function () {
      if (this.discount !== 0) {
        return this.price - (this.price * this.discount) / 100;
      } else {
        return this.price;
      }
    },
    img: "/images/design.jpg",
    what: `Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum`,
    how: `Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum`,
    for: `Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum`,
    preferableSessions: `Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum`,
  },
  {
    id: 6,
    title: "Henna Brows",
    price: 175,
    discount: 10,
    totalPrice: function () {
      if (this.discount !== 0) {
        return this.price - (this.price * this.discount) / 100;
      } else {
        return this.price;
      }
    },
    img: "/images/colors.jpg",
    what: `Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum`,
    how: `Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum`,
    for: `Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum`,
    preferableSessions: `Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum`,
  },
  {
    id: 7,
    title: "Lashes",
    price: 200,
    discount: 7,
    totalPrice: function () {
      if (this.discount !== 0) {
        return this.price - (this.price * this.discount) / 100;
      } else {
        return this.price;
      }
    },
    img: "/images/makeup.jpg",
    what: `Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum`,
    how: `Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum`,
    for: `Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum`,
    preferableSessions: `Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum`,
  },
  {
    id: 8,
    title: "Coloring",
    price: 552,
    discount: 7,
    totalPrice: function () {
      if (this.discount !== 0) {
        return this.price - (this.price * this.discount) / 100;
      } else {
        return this.price;
      }
    },
    img: "/images/donato.jpg",
    what: `Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum`,
    how: `Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum`,
    for: `Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum`,
    preferableSessions: `Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum`,
  },
];
