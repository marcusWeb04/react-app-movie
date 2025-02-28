import { Link } from "react-router-dom";

export default function NoFoundPage() {
  return (
    <>
      <h2>
        404
        <Link to="/">Home</Link>
      </h2>
    </>
  );
}
