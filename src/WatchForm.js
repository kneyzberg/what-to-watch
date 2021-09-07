import React, { useState } from "react";


function WatchForm({ genres, getMovies, streamers }) {
  console.log(streamers);
  const decadeOptions = [
    "1920s",
    "1930s",
    "1940s",
    "1960s",
    "1970s",
    "1980s",
    "1990s",
    "2000s",
    "2010s",
    "2020s"
  ]

  const initialFormData = { genre: "", decade: "", 8: ""};

  const [formData, setFormData] = useState(initialFormData);

  function handleChange(e) {
    console.log(e);
    const { name, value } = e.target;
    setFormData(f => ({...f, [name] : value }));
  }

  function handleCheckBox(e){
    const {name, checked} = e.target;
    setFormData(f => ({...f, [name] : checked}));
  }

  function handleSubmit(e) {
    e.preventDefault();
    getMovies(formData);

  }

  console.log(formData, "form data");

  return (
    <div>WHAT ARE YOU IN THE MOOD FOR?
      <form>
        <div>Genre:
          <select onChange={handleChange} name="genre" id="genre">
            <option value=""> Please pick a genre</option>
            {genres.map(g => <option value={g.id}>{g.name}</option>)}
          </select>
        </div>
        <div> Decade:
          <select name="decade" id="decade-pick">
            <option value=""> Please pick a decade</option>
            {decadeOptions.map(d => <option value={d}>{d}</option>)}
          </select>
        </div>
        <div>Provider options:
          <ul>
            {streamers.map(s => <li><input onChange={handleCheckBox} type="checkbox" name={s.provider_id} id={s.provider_id}></input>
            <label htmlFor={s.provider_id}>{s.provider_name}</label>
            </li>)}
          </ul>
        </div>
        <div>
          <button type="submit" onClick={handleSubmit}>submit</button>
        </div>
      </form>

    </div>
  )
}

export default WatchForm