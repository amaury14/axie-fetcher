import React, { useState } from "react";
import "./axie-form.css";
import { useSelector, useDispatch } from "react-redux";
import { setId } from "../../../store/axie";

export function AxieForm() {
  // Internal state handler
  const initialState = {
    id: '',
  };

  const [state, setState] = useState({
    ...initialState,
  });

  const handlePropChange = (name, value) => {
    setState({ ...state, [name]: value });
  };

  // Redux state handler
  const id = useSelector((state) => state.id);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    handlePropChange("id", e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.id.length === 0) {
      return;
    }
    handlePropChange("id", '');
    dispatch(setId(state.id));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="axie-id">Axie Id:</label>
        <input
          id="axie-id"
          type="number"
          onChange={handleChange}
          value={state.id}
        />
        <button>Fetch Axie</button>
      </form>
    </div>
  );
}

export default AxieForm;
