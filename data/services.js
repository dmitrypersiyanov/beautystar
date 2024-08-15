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
    img: "/images/color.jpg",
    what: `Hair coloring involves applying pigments to alter the natural or current 
    color of your hair. From bold, vibrant hues to subtle, natural shades, it’s a 
    transformative technique that enhances your look and personal style`,
    how: `We begin with a detailed consultation to understand your color goals. 
    Our stylists then select the perfect shades and formulas, applying them with 
    precision. After the coloring process, we ensure optimal results with high-quality 
    aftercare treatments for vibrant, long-lasting color`,
    for: `Hair coloring is perfect for anyone looking to refresh their look, cover 
    gray hair, or experiment with new shades. Whether you’re aiming for a dramatic 
    change or a natural enhancement, our services cater to all hair types and personal styles`,
    preferableSessions: `The number of sessions depends on the desired outcome. For a 
    simple color refresh, one session may suffice. For significant changes or complex 
    techniques, multiple sessions might be necessary to achieve the perfect shade 
    and ensure hair health`,
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
    img: "/images/mens.jpg",
    what: `Men’s cuts are tailored haircuts designed to suit individual styles 
    and preferences. Ranging from classic trims to modern styles, these cuts 
    enhance your appearance and help you maintain a polished, fresh look`,
    how: `Our skilled barbers start with a consultation to understand your 
    preferred style. We use advanced cutting techniques and tools to achieve 
    your desired look, paying attention to detail and ensuring precision. 
    Each cut is finished with styling products for a sharp, well-groomed appearance`,
    for: `Men’s cuts are ideal for anyone seeking a stylish and well-maintained 
    haircut. Whether you need a professional look for work, a trendy update, 
    or a simple tidy-up, our cuts are designed to suit all hair types and personal 
    styles`,
    preferableSessions: `Typically, a men\’s haircut is achieved in a single visit. 
    However, to keep your look consistently fresh and avoid waiting for your hair to 
    grow out too much, consider visiting us twice a month. Sign up for our 
    subscription service at a reduced rate to maintain your style effortlessly`,
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
    img: "/images/ombre2.jpg",
    what: `Ombré is a hair coloring technique that creates a gradual transition 
    from dark roots to lighter ends. This stylish effect blends colors 
    seamlessly, offering a natural, sun-kissed look with minimal maintenance`,
    how: `We start by assessing your current hair color and discussing your 
    desired end result. Our experts then apply the lighter shade starting 
    from the mid-lengths to the ends, ensuring a smooth, gradual fade. 
    The process is finished with treatments to enhance shine and longevity`,
    for: `Ombré is perfect for those who want a chic, low-maintenance color 
    change. It suits all hair types and lengths and is especially great 
    for individuals who desire a soft, sunlit effect or a stylish way to 
    transition between shades`,
    preferableSessions: `Achieving the perfect ombré usually requires one to 
    two sessions. Depending on your hair's current condition and the 
    extent of lightening desired, additional sessions might be needed 
    to reach the ideal gradient and ensure healthy, vibrant color`,
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
    img: "/images/braiding.jpg",
    what: `Braiding is a hairstyling technique where hair is woven together 
    in various patterns to create intricate and stylish looks. From classic 
    three-strand braids to elaborate fishtails and Dutch braids, it’s a 
    versatile way to enhance any hairstyle`,
    how: `We start by consulting with you to choose the perfect braid style 
    for your look and occasion. Our stylists then section and weave your 
    hair with precision, ensuring a tight, neat finish. We use high-quality 
    products to keep your braid secure and shiny throughout the day`,
    for: `Braiding is ideal for brides, bridesmaids, and anyone attending a 
    formal event or special occasion. It’s a sophisticated styling choice 
    designed to elevate your look and provide a standout, memorable 
    appearance for your celebrations`,
    preferableSessions: `Braiding is typically a one-time service tailored 
    for specific events. For ongoing styles or frequent special occasions, 
    consult with us to determine the best scheduling to keep your 
    braids looking stunning and fresh`,
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
    img: "/images/extension.jpg",
    what: `Hair extensions are strands of synthetic or natural hair added 
    to your own to increase length, volume, or add color. They offer a 
    versatile solution for achieving a dramatic change or enhancing your 
    current hairstyle with instant results`,
    how: `We start with a consultation to match the extensions to your 
    natural hair color and texture. Our specialists then apply them using 
    various methods, such as tape-ins, clip-ins, or keratin bonds, 
    ensuring a seamless blend and secure attachment. The result is 
    fuller, longer hair with a natural look`,
    for: `Hair extensions are ideal for anyone looking to quickly transform 
    their hairstyle, whether to add volume, length, or highlights. 
    They’re perfect for special occasions, everyday wear, or those 
    desiring a temporary change without permanent commitment`,
    preferableSessions: `Extensions typically require an initial application 
    session. To maintain their appearance and ensure proper care, 
    follow-up visits every 6-8 weeks are recommended for adjustments 
    or to replace any extensions as needed. Regular maintenance 
    will keep your extensions looking fabulous`,
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
    img: "/images/curly.jpg",
    what: `Curly or textured hair refers to hair with natural waves, 
    curls, or coils. This type of hair has unique patterns and volume, 
    offering a vibrant and dynamic look. It requires specific care and 
    styling techniques to enhance and maintain its natural beauty`,
    how: `We start with a consultation to understand your curl pattern 
    and styling preferences. Our experts use specialized products and 
    techniques tailored for textured hair, such as moisturizing 
    treatments and curl-enhancing styling. The goal is to define, 
    shape, and maintain your curls while keeping your hair healthy 
    and hydrated`,
    for: `Curly and textured hair services are perfect for individuals 
    with natural curls or waves who want to embrace and enhance their 
    unique hair type. Whether you’re looking for routine maintenance, 
    styling tips, or a complete transformation, our services cater to 
    the needs of textured hair`,
    preferableSessions: `Curly and textured hair typically requires 
    regular maintenance to keep curls defined and healthy. We 
    recommend scheduling appointments every 6-8 weeks for trims 
    and treatments. This ensures your curls remain vibrant and 
    well-managed, with customized care to address any specific needs`,
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
    img: "/images/blondes.jpg",
    what: `Blonde hair encompasses a range of shades from platinum and ash 
    to honey and golden. Achieving the perfect blonde involves lightening 
    your natural color to create a vibrant, luminous look, whether through 
    highlights, balayage, or all-over color`,
    how: `We begin with a thorough consultation to select the ideal blonde 
    shade for your complexion and style. Our colorists then use advanced 
    techniques and high-quality lighteners to carefully lift your hair to 
    the desired level. We finish with toning and conditioning treatments to 
    ensure a flawless, radiant blonde that suits you perfectly`,
    for: `Blonde hair services are ideal for anyone looking to brighten their 
    look, from those seeking a dramatic change to those wanting subtle 
    highlights. Whether you’re aiming for a bold platinum or a warm golden 
    tone, our services cater to all preferences and skin tones`,
    preferableSessions: `Achieving and maintaining the perfect blonde often 
    requires multiple sessions. For a first-time blonde transformation, 
    you might need 1-2 sessions. To keep your blonde looking fresh and 
    vibrant, regular touch-ups every 6-8 weeks are recommended, along 
    with occasional toning to maintain the desired shade`,
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
    img: "/images/balayage.jpg",
    what: `Balayage is a hair coloring technique where color is painted 
    directly onto the hair in a sweeping motion, creating a natural, 
    sun-kissed effect. Unlike traditional highlights, balayage offers 
    a more seamless, blended look with soft transitions and less maintenance`,
    how: `We start with a consultation to determine the ideal shades and 
    placement for your balayage. Our stylists then hand-paint the color 
    onto select sections of your hair, focusing on creating a gradient 
    effect from darker roots to lighter ends. The process is finished 
    with a toner and conditioning treatment to ensure a luminous, 
    natural-looking finish`,
    for: `Balayage is perfect for anyone seeking a low-maintenance, 
    natural-looking color enhancement. It suits a variety of hair types 
    and lengths, making it an ideal choice for those who want a sunlit 
    glow or a subtle transformation without the commitment of traditional 
    highlights`,
    preferableSessions: `Balayage usually requires one initial session 
    to achieve the desired effect. To maintain the look and adjust as 
    needed, follow-up appointments every 8-12 weeks are recommended. 
    This frequency helps keep your balayage fresh while allowing for 
    natural regrowth and color adjustments`,
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
    img: "/images/children.jpg",
    what: `Children’s haircuts are specifically tailored styles designed 
    for young clients. These haircuts focus on comfort and practicality, 
    offering age-appropriate styles that are easy to manage while ensuring 
    a neat, polished look`,
    how: `We start with a friendly consultation to understand your child’s 
    preferences and needs. Our stylists use gentle, kid-friendly techniques 
    to achieve the desired cut, making the experience enjoyable and 
    stress-free. We ensure a comfortable environment with kid-sized chairs 
    and distractions to keep them entertained`,
    for: `Children’s haircuts are ideal for kids of all ages who need a 
    fresh trim or a new style. From toddlers to teens, these services cater 
    to various hair types and lengths, ensuring a stylish yet manageable look 
    that suits each child’s unique personality`,
    preferableSessions: `Children typically need a haircut every 6-8 weeks 
    to keep their style looking sharp and to manage hair growth. For 
    younger children with fast-growing hair or specific style needs, 
    more frequent visits may be beneficial to maintain their preferred look`,
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
    img: "/images/occasion.jpg",
    what: `Special occasion hair services involve creating elaborate, 
    stylish looks for events such as weddings, proms, or parties. These 
    services include intricate updos, elegant curls, and personalized 
    styling to ensure you look your best for any memorable event`,
    how: `We start with a detailed consultation to understand your event 
    and personal style. Our stylists then craft a customized look, using 
    advanced techniques and high-quality products to achieve your desired result. 
    Whether it’s a classic updo or modern waves, we ensure a flawless 
    finish that complements your outfit and occasion`,
    for: `Special occasion hair services are perfect for anyone attending a 
    significant event, such as weddings, galas, or celebrations. 
    Whether you’re a bride, a guest, or someone celebrating a milestone, 
    these services are designed to enhance your appearance and ensure you 
    stand out on your special day`,
    preferableSessions: `Typically, special occasion hair services are a 
    one-time appointment tailored for your event. To ensure the best 
    results, schedule your session closer to the date of your event. 
    For complex styles or trial runs, consider an additional consultation 
    before the main appointment to finalize your look`,
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
    img: "/images/updo.jpg",
    what: `Updos are hairstyles where the hair is arranged and secured up away 
    from the neck and shoulders, creating a polished, elegant look. Ideal for 
    formal events or everyday sophistication, updos can range from classic buns 
    and chignons to intricate twists and braids`,
    how: `We start with a consultation to choose the perfect updo style based on 
    your hair type and event. Our stylists then carefully prepare and shape your 
    hair, using pins, sprays, and other tools to secure the style in place. 
    We ensure a flawless finish with attention to detail and long-lasting hold`,
    for: `LUpdos are perfect for anyone looking to elevate their look for formal 
    occasions, such as weddings, proms, or special events. They’re also a great 
    choice for those who want a refined and elegant appearance for professional 
    settings or festive gatherings`,
    preferableSessions: `Updos are typically a one-time service for specific 
    events. For complex styles or trial runs, consider an additional appointment 
    before the main event to perfect your look. For regular wear, updos can 
    be created as needed for different occasions, with no set frequency required`,
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
    img: "/images/correction.jpg",
    what: `Color correction is a specialized hair coloring process aimed at 
    fixing unwanted tones, adjusting color discrepancies, or achieving a 
    new shade after a previous coloring mishap. It involves balancing and 
    refining the color to achieve a desired, uniform look`,
    how: `We start with a thorough consultation to assess the current color 
    and understand your desired outcome. Our colorists then use advanced 
    techniques to neutralize unwanted tones and carefully reapply color 
    or highlights. We follow up with conditioning treatments to restore 
    hair health and ensure vibrant, even results`,
    for: `Color correction is ideal for anyone who is unhappy with their 
    current hair color, whether due to an accidental dye job, fading, or 
    inconsistent results. It’s also perfect for those looking to make a 
    significant color change or correct any previous color issues`,
    preferableSessions: `Color correction often requires one or more sessions, 
    depending on the complexity of the correction and the extent of the 
    color change needed. Follow-up appointments may be necessary to 
    perfect the color and ensure lasting results, with regular maintenance 
    to keep the corrected color vibrant`,
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
    img: "/images/fade.jpg",
    what: `Fades are a popular haircutting technique where the hair gradually 
    transitions from short to longer lengths. This style creates a seamless, 
    blended effect that can be tailored to various lengths and styles, 
    offering a clean and modern look`,
    how: `We begin with a consultation to determine the desired fade style 
    and length. Our barbers use clippers and scissors to carefully blend 
    different lengths, starting from a shorter length at the sides and back, 
    transitioning smoothly to longer hair on top. Precision and technique 
    are key to achieving a flawless, gradient fade`,
    for: `Fades are ideal for individuals looking for a sleek, contemporary 
    haircut with a gradual transition in length. This style suits a variety 
    of hair types and can be customized to match personal preferences, 
    making it a versatile choice for both casual and professional settings`,
    preferableSessions: `ades generally require maintenance every 3-4 weeks 
    to keep the transition looking sharp and fresh. Regular visits ensure 
    that the fade stays clean and well-blended, accommodating any hair 
    growth and maintaining the desired style`,
  },
];
