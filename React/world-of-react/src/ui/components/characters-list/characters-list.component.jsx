import "./characters-list.style.component.css";
function CharactersList({ characterList = [], setCharacterFounded }) {
  function handleSelectCharacter(event) {
    const { value } = event.target;
    setCharacterFounded(value);
  }

  return (
    <div className="charactersList">
      {Array.isArray(characterList)
        ? characterList.map((character) => {
            return (
              <div key={character.id} className="charactersList_options">
                <label className="label_charactersList">{character.name}</label>
                <input
                  type="radio"
                  className="checkbox_character"
                  name="character"
                  value={character.id}
                  onChange={handleSelectCharacter}
                />
              </div>
            );
          })
        : null}
    </div>
  );
}

export default CharactersList;
