const fruits = ["apple", "banana", "cherry"];
const people = [
  {
    id: 0,
    name: "Aashis Kafle",
    profession: "Youtuber",
  },
  {
    id: 1,
    name: "Rijan Mohane Shrestha",
    profession: "Women supplier",
  },
  {
    id: 2,
    name: "Aaduu Gaihre",
    profession: "Website maker",
  },
  {
    id: 3,
    name: "Sanjitey kadelni",
    profession: "Gender changer",
  },
  {
    id: 4,
    name: "Sauravi chapagain",
    profession: "Cake Maker",
  },
];

export default function List() {
  //map function
  //   const number = [1, 2, 3, 4, 5];
  //   const nunberDoubled = number.map((num) => num * 2);
  //   console.log(nunberDoubled);

  //   const number = [1, 2, 3, 4, 5];
  //   const oddNumbers = number.filter((num) => num % 2 !== 0);
  //   console.log(oddNumbers);

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const evennumbers = numbers.filter((num) => num % 2 == 0);
  console.log(evennumbers);

  return (
    <>
      <ul>
        {fruits.map((friuts) => {
          return <li>{friuts}</li>;
        })}
      </ul>
      <ul>
        {evennumbers.map((numbers) => (
          <li>{numbers}</li>
        ))}
      </ul>
    </>
  );
}
