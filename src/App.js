import { useState } from "react";
import { useEffect } from "react";
import Card from "./card";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    let newData = {};

    // API: https://api.artic.edu
    fetch("https://api.artic.edu/api/v1/artworks/129884")
      .then((response) => response.json())
      .then(({ data }) => {
        newData = {
          ...newData,
          artist_title: data.artist_title,
          credit_line: data.credit_line,
          thumbnail: data.thumbnail,
          title: data.title,
        };

        return fetch(
          `https://lakeimagesweb.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg`
        );
      })
      .then((response) => {
        newData = {
          ...newData,
          url: response.url,
        };

        setData(newData);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="App">
      {data && (
        <Card
          author={data.artist_title}
          description={data.credit_line}
          image={data.thumbnail}
          title={data.title}
          url={data.url}
        />
      )}
      {!data && <p>Loading...</p>}
    </div>
  );
}

export default App;
