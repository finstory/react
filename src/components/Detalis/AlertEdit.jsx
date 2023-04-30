import React, { useEffect } from "react";
import { useDetailsContext } from "../../context/useDetalis";
import { useForm } from "../../hooks/useForm";
import { useServices } from "../../hooks/useServices";
export const AlertEdit = () => {
  const { editItemById } = useServices();

  const {
    details: { openEdit, itemById },
    setDetails,
  } = useDetailsContext();

  const [inputValue, handleInputChange] = useForm({
    image: itemById.image,
    name: itemById.name,
    prop2: itemById.prop2,
    prop1: itemById.prop1,
  });
  console.log(itemById);
  let { image, name, prop2, prop1 } = inputValue;

  const handleEdit = (ok) => {
    setDetails({ openEdit: false });
    ok && editItemById(inputValue);
  };

  useEffect(() => {
    return () => {
      setDetails({ itemById: {} });
    };
  }, []);

  return (
    <div className={`alert-edit anim-showing-fast ${!openEdit && "disabled"}`}>
      <h4>Image Url :</h4>
      <input
        name="image"
        type="text"
        value={image}
        onChange={handleInputChange}
      ></input>
      <h4>Name :</h4>
      <input
        name="name"
        type="text"
        value={name}
        onChange={handleInputChange}
      ></input>
      <h4>Breed :</h4>
      <input
        name="prop2"
        type="text"
        value={prop2}
        onChange={handleInputChange}
      ></input>
      <h4>Middle :</h4>
      <input
        name="prop1"
        type="text"
        value={prop1}
        onChange={handleInputChange}
      ></input>
      <div className="d-flex justify-content-center mt-4">
        <button
          className="alert-delete-no btn m-2"
          onClick={() => {
            handleEdit(false);
          }}
        >
          Cancel{" "}
        </button>{" "}
        <button
          className="alert-delete-ok btn m-2"
          onClick={() => {
            handleEdit(true);
          }}
        >
          Edit{" "}
        </button>
      </div>
    </div>
  );
};
