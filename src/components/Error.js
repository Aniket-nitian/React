import { useRouteError } from "react-router-dom";
const Error = ()=>{
  const err = useRouteError();
  console.log(err);
  return(
    <div className="error">
      <h1>OOPs !!!</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <h1>{err.data}</h1>
      <h3>{err.status}-{err.statustext}</h3>
    </div>
  )
}

export default Error;