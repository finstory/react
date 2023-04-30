import { useEffect } from "react";
import { getList } from "../store/thunks";
import { useDispatch, useSelector } from "react-redux";
import { Galery } from "../components/Home/Galery/Galery";
export const Home = () => {
  const dispatch = useDispatch();

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

  useEffect(() => {
    // dispatch(getList());
  }, []);

  return (
    <main
      className="list container mt-3 
      "
    >
      <Galery />
    </main>
  );
};
