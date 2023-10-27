export const services = [
  {
    id: 1,
    title: "Coloring",
    price: 150,
    discount: 20,
    totalPrice: function () {
      if (this.discount !== 0) {
        return this.price - (this.price * this.discount) / 100;
      } else {
        return this.price;
      }
    },
    img: "/images/color.webp",
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
    title: "Men's cuts",
    price: 145,
    discount: 10,
    totalPrice: function () {
      if (this.discount !== 0) {
        return this.price - (this.price * this.discount) / 100;
      } else {
        return this.price;
      }
    },
    img: "/images/mens.webp",
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
    title: "Ombré",
    price: 125,
    discount: 15,
    totalPrice: function () {
      if (this.discount !== 0) {
        return this.price - (this.price * this.discount) / 100;
      } else {
        return this.price;
      }
    },
    img: "/images/ombre2.webp",
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
    title: "Braiding",
    price: 199,
    discount: 5,
    totalPrice: function () {
      if (this.discount !== 0) {
        return this.price - (this.price * this.discount) / 100;
      } else {
        return this.price;
      }
    },
    img: "/images/braiding.webp",
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
    title: "Extensions",
    price: 130,
    discount: 25,
    totalPrice: function () {
      if (this.discount !== 0) {
        return this.price - (this.price * this.discount) / 100;
      } else {
        return this.price;
      }
    },
    img: "/images/extension.webp",
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
    title: "Curly | Textured Hair",
    price: 175,
    discount: 10,
    totalPrice: function () {
      if (this.discount !== 0) {
        return this.price - (this.price * this.discount) / 100;
      } else {
        return this.price;
      }
    },
    img: "/images/curly.webp",
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
    title: "Blondes",
    price: 200,
    discount: 7,
    totalPrice: function () {
      if (this.discount !== 0) {
        return this.price - (this.price * this.discount) / 100;
      } else {
        return this.price;
      }
    },
    img: "/images/blondes.webp",
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
    title: "Balayage",
    price: 552,
    discount: 7,
    totalPrice: function () {
      if (this.discount !== 0) {
        return this.price - (this.price * this.discount) / 100;
      } else {
        return this.price;
      }
    },
    img: "/images/balayage.webp",
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
    id: 9,
    title: "Children Haircuts",
    price: 552,
    discount: 7,
    totalPrice: function () {
      if (this.discount !== 0) {
        return this.price - (this.price * this.discount) / 100;
      } else {
        return this.price;
      }
    },
    img: "/images/children.webp",
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
    id: 10,
    title: "Special Occasions",
    price: 552,
    discount: 7,
    totalPrice: function () {
      if (this.discount !== 0) {
        return this.price - (this.price * this.discount) / 100;
      } else {
        return this.price;
      }
    },
    img: "/images/occasion.webp",
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
    id: 11,
    title: "Up Do’s",
    price: 552,
    discount: 7,
    totalPrice: function () {
      if (this.discount !== 0) {
        return this.price - (this.price * this.discount) / 100;
      } else {
        return this.price;
      }
    },
    img: "/images/updo.webp",
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
    id: 12,
    title: "Color Correction",
    price: 552,
    discount: 7,
    totalPrice: function () {
      if (this.discount !== 0) {
        return this.price - (this.price * this.discount) / 100;
      } else {
        return this.price;
      }
    },
    img: "/images/correction.webp",
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
    id: 13,
    title: "Fades",
    price: 552,
    discount: 7,
    totalPrice: function () {
      if (this.discount !== 0) {
        return this.price - (this.price * this.discount) / 100;
      } else {
        return this.price;
      }
    },
    img: "/images/fade.webp",
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
