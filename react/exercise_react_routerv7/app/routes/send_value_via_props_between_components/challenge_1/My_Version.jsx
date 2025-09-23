import { getImageUrl } from "./utils.js";

function Profile({ person, imageSize = 70 }) {
  const imageSrc = getImageUrl(person);

  return (
    <section className="profile">
      <h2>{person.name}</h2>

      <img
        className="avatar"
        alt={person.namename}
        src={imageSrc}
        width={imageSize}
        height={imageSize}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {person.profession}
        </li>
        <li>
          <b>Awards: {person.awards.length} </b>({person.awards.join(", ")})
        </li>
        <li>
          <b>Discovered: </b>
          {person.discovery}
        </li>
      </ul>
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <hr />

      <Profile
        person={{
          profession: "physicist and chemist",
          name: "Maria Skłodowska-Curie",
          imageId: "szV5sdG",
          awards: [
            "Nobel Prize in Physics",
            "Nobel Prize in Chemistry",
            "Davy Medal",
            "Matteucci Medal",
          ],
          discovery: "polonium (chemical element)",
        }}
      />
      <hr />

      <Profile
        person={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2",
          profession: "geochemist",
          awards: ["Miyake Prize for geochemistry", "Tanaka Prize"],
          discovery: "a method for measuring carbon dioxide in seawater",
        }}
      />

      <hr />
    </div>
  );
}
