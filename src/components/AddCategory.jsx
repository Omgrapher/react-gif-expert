import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState(""); //Hook para controlar el estado del Input

  const onInputChange = ({ target }) => {
    //Funcion para que nuestro input registre el valor al momento de cambiar en el Hook
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault(); //Quita el recargar de la pagina

    if (inputValue.trim().length <= 1) return; //Evalua si el inputa esta vacio

    // onNewCategory((categories) => [inputValue, ...categories]); //Anade una nueva categoria

    onNewCategory(inputValue.trim());

    setInputValue(""); //Re establece el valor del input
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue} //Recibe el Hook
        onChange={onInputChange} //Dispara el evento onchange dentro del hook
      />
    </form>
  );
};
