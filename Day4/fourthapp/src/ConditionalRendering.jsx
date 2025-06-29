function Item({ name, isPacked }) {
  //   if (isPacked) {
  //     /*    return (
  //        <del>
  //          <li className="item">{name} ✅</li>;
  //        </del>
  //      );*/
  //     // return <li className="item">{name} ✅</li>;

  //   }
  // return <li className="item">{name} ❌</li>;

  return (
    <li className="item">
      {name}
      {isPacked ? "✅😁" : "❌😯"}
    </li>
  );
  //   ) : (
  //     <li className="item">{name} ❌😯</li>
  //   );
}
export default function PackingList() {
  return (
    <section>
      <h1>Aashis Kafle Packing List </h1>
      <ul>
        <Item isPacked={true} name="Space Suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}
