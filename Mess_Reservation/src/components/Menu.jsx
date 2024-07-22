import { useParams, Link } from "react-router-dom";

const Menu = () => {
  const { mealType } = useParams();

  const menuItems = {
    BREAKFAST: {
      Monday: [
        "Aloo Pyaz Paratha",
        "Curd & Pickle",
        "Milk oats with apple and banana",
        "White/Brown Bread with Butter & Jam",
        "Warm Milk (200ml)",
        "Tea & Coffee powder/Bournvita",
        "Sprouts",
        "Orange (2) OR Boiled Egg (2)",
      ],
      Tuesday: [
        "Idli / Mendu Vada",
        "Sambar & Coconut Chutney",
        "Cornflakes",
        "White/Brown Bread with Butter & Jam",
        "Warm Milk (200ml)",
        "Tea & Coffee powder/Bournvita",
        "Sprouts",
        "Papaya OR Omelette (2)",
      ],
      Wednesday: [
        "Plain Paratha",
        "Aloo Tomato Masala",
        "Chocoflakes",
        "White/Brown Bread with Butter & Jam",
        "Warm Milk (200ml)",
        "Tea & Coffee powder/Bournvita",
        "Sprouts",
        "Apple (2) OR Boiled egg (2)",
      ],
      Thursday: [
        "Tawa Sandwich",
        "Coriander Chutney + Tomato Sauce",
        "Milk Dalia",
        "White/Brown Bread with Butter & Jam",
        "Warm Milk (200ml)",
        "Tea & Coffee powder/Bournvita",
        "Sprouts",
        "Grapes OR boiled egg (2)",
      ],
      Friday: [
        "Palak Puri",
        "Semi gravy channa",
        "Chocoflakes",
        "White/Brown Bread with Butter & Jam",
        "Warm Milk (200ml)",
        "Tea & Coffee powder/Bournvita",
        "Sprouts",
        "Pineapple OR Egg bhurji",
      ],
      Saturday: [
        "Pav bhaji with onion salad / Poha With Sev",
        "Jalebi",
        "Milk Dalia",
        "White/Brown Bread with Butter & Jam",
        "Warm Milk (200ml)",
        "Tea & Coffee powder/Bournvita",
        "Sprouts",
        "Banana (2) OR Omelette (2)",
      ],
      Sunday: [
        "Masala Dosa",
        "Sambhar with Coconut Chutney",
        "Sweet Corn",
        "White/Brown Bread with Butter & Jam",
        "Warm Milk (200ml)",
        "Tea & Coffee powder/Bournvita",
        "Sprouts",
        "Watermelon OR Boiled Egg (2)",
      ],
      timing: {
        Canary: "7:30 AM to 9:30 AM",
        Egret: "7:00 AM to 9:00 AM",
        Dedhar: "7:30 AM to 9:30 AM",
        Fulgar: "6:45 AM to 8:45 AM",
      },
    },
    LUNCH: {
      Monday: [
        "Dal Fry",
        "Aloo gobi matter dry / Mix veg",
        "Pudina Chhach (150 ml)",
        "Plain Rice",
        "Butter Roti",
        "Salad & Pickle",
        "Banana shake",
      ],
      Tuesday: [
        "Rajma Masala",
        "Cabbage matar / Lauki chana",
        "Plain Curd (150 ml)",
        "Plain Rice",
        "Butter Roti",
        "Salad & Pickle",
        "Macroni + Tea",
      ],
      Wednesday: [
        "Corn Palak Masala",
        "Aloo Tomato Masala",
        "Boondi Raita (200 ml)",
        "Paneer Biriyani OR Egg Biriyani",
        "Butter Roti",
        "Salad & Pickle",
        "Pani Puri (6pcs)",
      ],
      Thursday: [
        "Kadhi Pakoda",
        "Aloo fry Bhaji",
        "Fried Papad",
        "Jeera Rice",
        "Butter Roti",
        "Salad & Pickle",
        "Chana chaat / Sevai Upma",
      ],
      Friday: [
        "Arhar Dal",
        "Aloo bhindi masala",
        "Sweet Lassi (150 ml)",
        "Plain Rice",
        "Butter Roti",
        "Salad & Pickle",
        "Maggi",
      ],
      Saturday: [
        "Amritsari Chole",
        "Fried Green Chilli",
        "Pudina Jeera Chhach (150 ml)",
        "Lemon Rice",
        "Bhature",
        "Salad & Pickle",
        "Fruit Custard",
      ],
      Sunday: [
        "Dal Makhani",
        "Kashmiri Dum Aloo+ Fryums",
        "Thick Dahi Bada + Sweet Chutney",
        "Plain Rice",
        "Butter Roti",
        "Salad & Pickle",
        "Samosa (2) + green chutney + Tea",
      ],
      timing: {
        Canary: "12:00 PM to 2:00 PM",
        Egret: "12:00 PM to 2:00 PM",
        Dedhar: "12:00 PM to 2:00 PM",
        Fulgar: "12:00 PM to 2:00 PM",
      },
    },
    SNACKS: {
      Monday: ["Banana shake"],
      Tuesday: ["Macroni + Tea"],
      Wednesday: ["Pani Puri (6pcs)"],
      Thursday: ["Chana chaat / Sevai Upma"],
      Friday: ["Maggi"],
      Saturday: ["Fruit Custard"],
      Sunday: ["Samosa (2) + green chutney + Tea"],
      timing: {
        Canary: "5:30 PM to 6:30 PM",
        Egret: "5:30 PM to 6:30 PM",
        Dedhar: "5:30 PM to 6:30 PM",
        Fulgar: "5:30 PM to 6:30 PM",
      },
    },
    DINNER: {
      Monday: [
        "Arhar Dal",
        "Brinjal Fry Masala",
        "Salad & Pickle",
        "Butter Roti",
        "Plain Rice",
        "Ice Cream Butterscotch/Chocolate (2 scoop)",
      ],
      Tuesday: [
        "Masoor masala dry",
        "Paneer Capsicum Masala",
        "Salad & Pickle",
        "Butter Roti",
        "Matar Pulao/Veg Pulao",
        "Warm Milk (200ml)",
      ],
      Wednesday: [
        "Moong Dal",
        "Malai Kofta",
        "Salad & Pickle",
        "Butter Roti",
        "Vegetable Rice",
        "Kala jamun (2 pcs)",
      ],
      Thursday: [
        "Pindi chole",
        "Dry Soya Chilli",
        "Salad & Pickle",
        "Butter Roti",
        "Jeera Rice",
        "Warm Milk (200ml)",
      ],
      Friday: [
        "Dal Palak",
        "Aloo Tamatar Matar",
        "Salad & Pickle",
        "Butter Roti",
        "Plain Rice",
        "suji halwa with dry fruit / coconut ladoo",
      ],
      Saturday: [
        "Arhar Dal Fry",
        "Veg Noodles",
        "Manchurian Gravy",
        "Salad & Pickle",
        "Butter Roti",
        "Veg Fried Rice",
        "Warm Milk (200ml)",
      ],
      Sunday: [
        "Mix Dal Tadka",
        "Paneer Do Pyaza",
        "Kimchi Salad & Pickle",
        "Butter Roti",
        "Plain Rice",
        "Sevai kheer/ Rice Kheer",
      ],
      non_veg: {
        Monday: ["Butter Chicken (200 gms)"],
        Tuesday: ["Chicken Kadahi (200 gms)"],
        Wednesday: ["Masala Chicken (200 gms)"],
      },
      timing: {
        Canary: "7:30 PM to 9:30 PM",
        Egret: "7:30 PM to 9:30 PM",
        Dedhar: "7:30 PM to 9:30 PM",
        Fulgar: "7:30 PM to 9:30 PM",
      },
    },
  };

  const salad = ["beetroot", "radish", "carrot", "onion", "lemon", "cucumber"];

  const notes = [
    "Pickle and Ketchup are to always be available.",
    "On the basis of availability of seasonal fruits, there might be some changes in fruits served.",
    "Rasam will be served during lunch daily.",
    '"OR" indicates EGG OR NON-EGG (Students can choose only one from both).',
  ];

  const selectedMenu = menuItems[mealType?.toUpperCase()];

  return (
    <div className="menu">
      {selectedMenu ? (
        <>
          <h1 className="menu-title">{mealType} Menu</h1>
          {Object.entries(selectedMenu).map(([day, items]) => {
            if (day === "timing" || day === "non_veg") return null; // Skip timing and non_veg entry
            return (
              <div key={day} className="menu-day">
                <h2>{day}</h2>
                <ul>
                  {items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
          {selectedMenu.non_veg && (
            <>
              <h2>Non-Vegetarian Options</h2>
              <ul>
                {Object.entries(selectedMenu.non_veg).map(([day, item], index) => (
                  <li key={index}>
                    {day}: {item}
                  </li>
                ))}
              </ul>
            </>
          )}
          <h2>Timing</h2>
          <ul>
            {Object.entries(selectedMenu.timing).map(([location, time], index) => (
              <li key={index}>
                {location}: {time}
              </li>
            ))}
          </ul>
          <h2>Salad Options</h2>
          <ul>
            {salad.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <h2>Notes</h2>
          <ul>
            {notes.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </>
      ) : (
        <p>Invalid meal type.</p>
      )}
      <Link to="/mess" className="back-link">Back to Mess</Link>
      <Link to="/checkout" className="back-link m-4">BOOK YOUR MEAL</Link>
    </div>
  );
};

export default Menu;
