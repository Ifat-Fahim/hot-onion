const foods = [
    {
        title: "Healthy Meal Plan",
        subtitle: "How we dream about our future",
        description:
            "Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.",
        img: "https://i.ibb.co/Ph7HZpK/lunch1.png",
        categories: "lunch",
        price: 9.99,
        id: 100123,
    },
    {
        title: "Fried Chicken Bento",
        subtitle: "How we dream about our future",
        description:
            "Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.",
        img: "https://i.ibb.co/8Yfk9Y4/lunch2.png",
        categories: "lunch",
        price: 12.99,
        id: 1001234,
    },
    {
        title: "Trragon-Rubbed-Salmon",
        subtitle: "How we dream about our future",
        description:
            "Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.",
        img: "https://i.ibb.co/5BPBJKH/lunch3.png",
        categories: "lunch",
        price: 23.99,
        id: 100145234,
    },
    {
        title: "Indian Lunch",
        subtitle: "How we dream about our future",
        description:
            "Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.",
        img: "https://i.ibb.co/R3rLv58/lunch4.png",
        categories: "lunch",
        price: 15.99,
        id: 10012347,
    },
    {
        title: "Beaf Steak",
        subtitle: "How we dream about our future",
        description:
            "Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.",
        img: "https://i.ibb.co/zxQ2mR3/lunch5.png",
        categories: "lunch",
        price: 7.99,
        id: 1001423,
    },
    {
        title: "Honey Soy Salmon",
        subtitle: "How we dream about our future",
        description:
            "Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.",
        img: "https://i.ibb.co/Vttm4HL/lunch6.png",
        categories: "lunch",
        price: 19.99,
        id: 1770123,
    },
    {
        title: "Salmon with Grapefruits",
        subtitle: "How we dream about our future",
        description:
            "Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.",
        img: "https://i.ibb.co/fqzz97r/dinner1.png",
        categories: "dinner",
        price: 9.99,
        id: 108453,
    },
    {
        title: "Lemony Salmon",
        subtitle: "How we dream about our future",
        description:
            "Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.",
        img: "https://i.ibb.co/qFcr7vr/dinner2.png",
        categories: "dinner",
        price: 12.99,
        id: 199123,
    },
    {
        title: "Pork Tenderiain",
        subtitle: "How we dream about our future",
        description:
            "Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.",
        img: "https://i.ibb.co/pLtqXfB/dinner3.png",
        categories: "dinner",
        price: 23.99,
        id: 10483,
    },
    {
        title: "Baked Chicken",
        subtitle: "How we dream about our future",
        description:
            "Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.",
        img: "https://i.ibb.co/McDVR1C/dinner4.png",
        categories: "dinner",
        price: 15.99,
        id: 107484,
    },
    {
        title: "Curlic Butter baked salmon",
        subtitle: "How we dream about our future",
        description:
            "Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.",
        img: "https://i.ibb.co/Kynmst1/dinner5.png",
        categories: "dinner",
        price: 7.99,
        id: 114414,
    },
    {
        title: "French fries with cheese",
        subtitle: "How we dream about our future",
        description:
            "Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.",
        img: "https://i.ibb.co/Kmvyhdn/dinner6.png",
        categories: "dinner",
        price: 19.99,
        id: 1178123,
    },
    {
        title: "Bagel and cream cheese",
        subtitle: "How we dream about our future",
        description:
            "Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.",
        img: "https://i.ibb.co/YWxtdqc/breakfast1.png",
        categories: "breakfast",
        price: 9.99,
        id: 1001234854,
    },
    {
        title: "Breakfast sandwich",
        subtitle: "How we dream about our future",
        description:
            "Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.",
        img: "https://i.ibb.co/t2pmW5S/breakfast2.png",
        categories: "breakfast",
        price: 12.99,
        id: 10012374874,
    },
    {
        title: "baked chicken",
        subtitle: "How we dream about our future",
        description:
            "Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.",
        img: "https://i.ibb.co/0FGxwXy/breakfast3.png",
        categories: "breakfast",
        price: 23.99,
        id: 10014564723,
    },
    {
        title: "Eggs benedict",
        subtitle: "How we dream about our future",
        description:
            "Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.",
        img: "https://i.ibb.co/QC0KJPt/breakfast4.png",
        categories: "breakfast",
        price: 15.99,
        id: 1001778623,
    },
    {
        title: "Toast fried Egg Butter",
        subtitle: "How we dream about our future",
        description:
            "Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.",
        img: "https://i.ibb.co/pwjPPM3/breakfast5.png",
        categories: "breakfast",
        price: 7.99,
        id: 100123545444,
    },
    {
        title: "Full breakfast egg toast",
        subtitle: "How we dream about our future",
        description:
            "Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.",
        img: "https://i.ibb.co/fSvwzpZ/breakfast6.png",
        categories: "breakfast",
        price: 19.99,
        id: 100142447423,
    },
];

const chooseData = [
    {
        title: "Fast Delivery",
        description:
            "Keep your system om sync with automated web hook based notification each time link is paid and how we dream about our future",
        img:
            "https://i.ibb.co/1MjJtHP/adult-blur-blurred-background-687824.png",
        id: 2001,
        icon: "https://i.ibb.co/m6TDjxS/g1.png",
    },
    {
        title: "A Good Auto Responder",
        description:
            "Keep your system om sync with automated web hook based notification each time link is paid and how we dream about our future",
        img: "https://i.ibb.co/3sFqDc1/chef-cook-food-33614.png",
        id: 2002,
        icon: "https://i.ibb.co/Lh9MFpK/g3.png",
    },
    {
        title: "Home Delivery",
        description:
            "Keep your system om sync with automated web hook based notification each time link is paid and how we dream about our future",
        img: "https://i.ibb.co/pj7ps21/architecture-building-city-2047397.png",
        icon: "https://i.ibb.co/C2DG0ZV/g2.png",
        id: 2003,
    },
];
export { chooseData };
export default foods;
