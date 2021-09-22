import React, { useState } from "react";
import { decadeOptions, decadeMap } from "./decadeData";

function WatchForm({ genres, getMovies, streamers }) {
  console.log(streamers);

  const initialFormData = { genre: "", decade: "" };

  const [formData, setFormData] = useState(initialFormData);

  function handleChange(e) {
    console.log(e);
    const { name, value } = e.target;
    setFormData((f) => ({ ...f, [name]: value }));
    console.log(formData, "form data");
  }

  function handleCheckBox(e) {
    const { name, checked } = e.target;
    setFormData((f) => ({ ...f, [name]: checked }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const start = decadeMap[formData.decade].start;
    const end = decadeMap[formData.decade].end;
    setFormData((f) => ({ ...f, start_date: start, end_date: end }));
    getMovies(formData);
  }

  console.log(formData, "form data");

  return (
    <div>
      WHAT ARE YOU IN THE MOOD FOR?
      <form>
        <div>
          Genre:
          <select
            onChange={handleChange}
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
          Decade:
          <select onChange={handleChange} name="decade" id="decade">
            <option value=""> Please pick a decade</option>
            {decadeOptions.map((d) => (
              <option value={d}>{d}</option>
            ))}
          </select>
        </div>
        {/* <div>
          Provider options:
          <ul>
            {streamers.map((s) => (
              <li>
                <input
                  onChange={handleCheckBox}
                  type="checkbox"
                  name={s.provider_id}
                  id={s.provider_id}
                ></input>
                <label htmlFor={s.provider_id}>{s.provider_name}</label>
              </li>
            ))}
          </ul>
        </div> */}
        <div>
          <button type="submit" onClick={handleSubmit}>
            submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default WatchForm;
