import "./battle-character-card.style.css";

export function BattlaCharacterCard({ character }) {
  const characterInfos = ["faction", "deaths", "kills", "level"];
  const characterInfosNames = ["Facção: ", "Mortes: ", "Abates: ", "Nível: "];

  return (
    <div className="battle-character-container">
      <div className="character-name">{character?.name}</div>
      <div className="character-inferior">
        <div className="character-inferior-left">
          <img
            className="character-image"
            src={character?.race.image}
            alt={character?.name}
          />
          <div className="characters-items">
            {character?.items?.map((item) => (
              <img
                key={item.id}
                className="character-item"
                src={item.image}
                alt={item.name}
              />
            ))}
          </div>
        </div>

        {character && (
          <div className="character-inferior-rigth">
            {characterInfos.map((info, index) => (
              <p key={index} className="battle_text">
                {characterInfosNames[index]}
                {character[info]}
              </p>
            ))}
            <p className="battle_text">Tipo: {character?.race.type}</p>
            <p className="battle_text">Raça: {character?.race.name}</p>
          </div>
        )}
      </div>
    </div>
  );
}
