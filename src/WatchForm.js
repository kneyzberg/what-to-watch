import React, { useState } from "react";
import { decadeOptions, decadeMap } from "./decadeData";
import "./WatchForm.css";

function WatchForm({ genres, getMovies, streamers }) {
  console.log(streamers);

  const initialFormData = { genre: "", decade: "" };

  const [formData, setFormData] = useState(initialFormData);

  function handleChangeGenre(e) {
    console.log(e, "event");
    const { name, value } = e.target;
    setFormData((f) => ({ ...f, [name]: value }));
    console.log(formData, "form data");
  }

  function handleChangeDecade(e) {
    const { name, value } = e.target;
    console.log("value", value);

    const start = decadeMap[value].start;
    const end = decadeMap[value].end;
    setFormData((f) => ({
      ...f,
      start_date: start,
      end_date: end,
      [name]: value,
    }));
  }

  function handleCheckBox(e) {
    const { name, checked } = e.target;
    setFormData((f) => ({ ...f, [name]: checked }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    getMovies(formData);
  }

  console.log(formData, "form data");

  return (
    <div>
      <h3>
        Fill out the form below to get movie reccomendations based on your mood!
      </h3>
      <form className="WatchForm-form">
        <div>
          <span className="WatchForm-categories">Genre:</span>
          <select
            className="form-select m-2"
            onChange={handleChangeGenre}
            name="genre"
            id="genre"
            data-testid="genre"
          >
            <option value=""> Please pick a genre</option>
            {genres.map((g) => (
              <option value={g.id}>{g.name}</option>
            ))}
          </select>
        </div>
        <div>
          {" "}
          <span className="WatchForm-categories">Decade:</span>
          <select 
            className="form-select m-2"
            onChange={handleChangeDecade} 
            name="decade" 
            id="decade"
          >
            <option value=""> Please pick a decade</option>
            {decadeOptions.map((d) => (
              <option value={d}>{d}</option>
            ))}
          </select>
        </div>
        <div>
          <button className="btn btn-info mt-2" type="submit" onClick={handleSubmit}>
            submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default WatchForm;
