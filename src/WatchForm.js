import React, { useState } from "react";


function WatchForm() {
  const initialFormData = { genre: "", decade: "" };

  const [formData, setFormData] = useState(initialFormData);

  return (
    <div>
      <h1>Welcome to Kathrin's What to Watch App!</h1>
      <h3>Fill out the form below to get movie reccomendations based on your mood!</h3>
    </div>
  )
}

export default WatchForm