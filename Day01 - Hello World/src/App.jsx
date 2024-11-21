import React from "react";

export default function App() {
  return (
    // There are two ways to create react fragments 
    // 1. <React.Fragment> </React.Fragment> 
    // 2. <> </>

    <React.Fragment>
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
    </React.Fragment>
  )
}

// Creating Component
const NetflixSeries = () => {
  const name = "Queen of Tears";
  const rating = "8.2";
  const summary = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, dignissimos voluptate omnis voluptates exercitationem cumque mollitia earum quod architecto esse perspiciatis quaerat! Doloremque sed dignissimos consequuntur! Provident, deserunt qui eius itaque voluptates quaerat molestias sit cumque corrupti repellat corporis nam. Eius vero saepe qui voluptates molestiae ipsum, tempora neque asperiores dolorem. Tempora beatae odio animi quo voluptas corporis perferendis, soluta, eveniet facilis sapiente nostrum."

  return (
    <div>
      {/* dynamic values in react */}
      <h2>Name: {name}</h2>
      <h3>Rating: {rating}</h3>
      <p>Summary: {summary} </p>
    </div>
  );
}