// export function Name({ Firstname, Lastname }) {
//   function handleEvent() {
//     alert(`${Firstname} ${Lastname}`);
//   }
//   return (
//     <>
//       <p onClick={handleEvent}>
//         {Firstname} {Lastname}
//       </p>
//     </>
//   );
// }
// export function Age({ Age }) {
//   return (
//     <>
//       <p >Age: {Age}</p>
//     </>
//   );
// }
// export function Class({ Class, section }) {
//   return (
//     <>
//       <p >
//         Class: {Class} Section: {section}
//       </p>
//     </>
//   );
// }
// export function StudentId({ ID }) {
//   return (
//     <>
//       <p >StudentId: {ID}</p>
//     </>
//   );
// }

export function Studentcard({ Firstname, LastName, Class, StudentId }) {
  function handleEvent() {
    alert(`${Firstname} ${Lastname}`);
  }
  return (
    <>
      <div className="card">
        <p>
          Name: {Firstname} {LastName}
        </p>
        <p>Age: {Age}</p>
        <p>
          Class:{Class} Section: {section}
        </p>
        <p>StudentId: {StudentId}</p>
      </div>
    </>
  );
}
