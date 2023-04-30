import { useState } from "react";
import { AppRouter } from "./router/AppRouter";
import { NavBar } from "./components/Global/NavBar";
import { ContextProvider } from "./context/context";
import "./assets/css/normalize.css";
import "./assets/css/list.css";
import "./assets/css/nav.css";
import "./assets/css/details.css";
import "./assets/css/alerts.css";
import "./assets/css/scroll.css";
import "./assets/css/animation.css";
import { AppMain } from "./router/AppMain";
import { store } from "./store/store";
import { Provider } from "react-redux";
import axios from 'axios';
function App() {
  const getPrice = async (name) => {
    let item = {};
    await new Promise((resolve, reject) => {
      let config = {
        method: "get",
        url: `http://csgobackpack.net/api/GetItemPrice/?id=${name}`,
      };
      axios
        .request(config)
        .then((response) => {
          let price = 0;
          if (response.data.median_price !== undefined) {
            price = parseFloat(response.data.median_price);
            item = { name, price };
            resolve();
          } else reject(new Error("Not found."));
        })
        .catch((error) => {
          reject(error);
        });
    }).catch((err) => {
      throw new Error(err);
    });
    return item;
  };

  return (
    // <ContextProvider>
    <Provider store={store}>
      <div className="container container-home">
        <button onClick={getPrice}>press</button>
        <AppMain />
      </div>
    </Provider>
    // </ContextProvider>
  );
}

export default App;
