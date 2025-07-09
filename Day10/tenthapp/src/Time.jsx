import { useEffect, useState } from "react";

export function Clock() {
  const [clock, setClock] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setClock(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <>
      <h1>Time</h1>
      <div
      
      style={{
        border:'5px solid Black ',
        margin:"50px",
        width:"80px", 
        borderRadius:"2rem",
        textAlign:"center"
      }}> {clock} </div>
    </>
  );
}
