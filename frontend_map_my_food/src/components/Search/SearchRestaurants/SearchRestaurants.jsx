import React, { useState } from "react";
import classes from "./SearchRestaurants.module.css";
import SearchRestaurantHeading from "./SearchRestaurantHeading/SearchRestaurantHeading";
import SearchRestaurantsData from "../../TemporaryData/Search/SearchRestaurants.json";
import SearchRestaurantFood from "./SearchRestaurantFood/SearchRestaurantFood";
import Footer from "../../Footer/Footer";
import CheckBox from "../../ui/CheckBox";
import CartNotification from "../../CartNotification/CartNotification";

const SearchRestaurants = () => {
  const [data, setData] = useState(SearchRestaurantsData);
  const [isChecked, setisChecked] = useState(false);
  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <SearchRestaurantHeading />
        <div className={classes.part2}>
          <CheckBox setisChecked={setisChecked} isChecked={isChecked} />
        </div>
        {isChecked && <SearchRestaurantFood items={data.veg} veg={true} />}
        {!isChecked && <SearchRestaurantFood items={data.nonveg} veg={false} />}
      </div>
      <CartNotification />
      <Footer />
    </div>
  );
};

export default SearchRestaurants;
