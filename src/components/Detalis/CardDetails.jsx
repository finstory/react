import React from "react";
import { useDetailsContext } from "../../context/useDetalis";
import { useManagerText } from "../../hooks/useManagerText";
import { AlertDelete } from "./AlertDelete";
import { AlertEdit } from "./AlertEdit";

export const CardDetails = ({ name = "", image, prop2 = "", prop1 }) => {
  const { allFirstUpperCase, limitString } = useManagerText();
  const { setDetails } = useDetailsContext();

  name = limitString(allFirstUpperCase(name), 20);

  const alertDelete = () => {
    setDetails({ openEdit: false, openDelete: true });
  };

  const alertEdit = () => {
    setDetails({ openEdit: true, openDelete: false });
  };

  return (
    <section className="row d-flex flex-row justify-content-center">
      <AlertDelete />
      {name.length && <AlertEdit />}
      {name.length ? (
        <div className="card-list-details col-6 card">
          <div className="button-manager anim-translate-to-down">
            <div className="button-delete" onClick={alertDelete}>
              🗑️
            </div>
            <div className="button-edit" onClick={alertEdit}>
              ✏️
            </div>
          </div>
          <img src={image} className="card-img-top anim-earthquake" alt="..." />
          <div className="card-body text-center">
            <h2 className="card-title anim-translate-to-right">{name}</h2>
            <ul className="list-group list-group-flush text-center anim-translate-to-right">
              <li className="alert-warning list-group m-1">
                Breed: {prop2 ? allFirstUpperCase(prop2, "-") : "Unknown"}
              </li>
              <li className="alert-success list-group m-1">Middle: {prop1}</li>
            </ul>
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};
