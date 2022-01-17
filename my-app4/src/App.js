import React, { useEffect, useState } from "react";

const Personagem = () => {
  const [data, setData] = useState([{name: 'loading...', id: 0}]);

  useEffect(() => {
    const fn = async () =>
      setData(
          await fetch("https://api.dotnetcrud.ml/api/users").then((response) => response.json()
      ));
    fn();
  }, []);

  return (
    <div>
      {
        data.map(personagem => {
          return (
            <div key={personagem.id}>
              {personagem.name}
            </div>
          );
        })
      }
    </div>
  );
};

export default Personagem;