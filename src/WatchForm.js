import React, { useState } from "react";


function WatchForm({ genres, getMovies }) {
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

  const initialFormData = { genre: "", decade: "" };

  const [formData, setFormData] = useState(initialFormData);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(f => ({...f, [name] : value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    getMovies(formData);

  }

  console.log(formData);

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
        <div>
          <button type="submit" onClick={handleSubmit}>submit</button>
        </div>
      </form>

    </div>
  )
}

export default WatchForm