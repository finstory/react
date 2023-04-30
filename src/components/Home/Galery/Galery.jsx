import React from "react";
import { useSelector } from "react-redux";

export const Galery = () => {
  const home = useSelector((state) => state.home);
  const { list } = home;
  return (
    <div>
      {list.length > 0 &&
        list.map((item) => (
          <div style={{ background: "green" }} key={item.id}>
            {item.name}
          </div>
        ))}
    </div>
  );
};
