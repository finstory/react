import React from "react";
import { useDetailsContext } from "../../context/useDetalis";
import { useServices } from "../../hooks/useServices";
export const AlertDelete = () => {
  const { deleteItemById } = useServices();
  const {
    details: { openDelete },
    setDetails,
  } = useDetailsContext();

  const handleEdit = (ok) => {
    ok && deleteItemById();
    setDetails({ openDelete: false });
  };

  return (
    <div className={`alert-delete anim-showing-fast ${!openDelete && "disabled"}`}>
      <h4>Are you sure you want to delete?</h4>
      <div className="d-flex justify-content-center">
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
          Sure{" "}
        </button>
      </div>
    </div>
  );
};
