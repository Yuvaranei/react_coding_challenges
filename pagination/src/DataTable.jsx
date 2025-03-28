import { useState } from "react";
import users from "./data/users.json";
import './style.css';

export default function DataTable() {
  const [message, setMessage] = useState("Data Table");

  const totalRecords = users.length;
  const [page, setPage] = useState(1);
  const [showPageContent, setShowPageContent] = useState(5);

  let startIndex = (page - 1) * showPageContent + 1;
  let totalPages = Math.ceil(totalRecords / showPageContent);
  let endIndex =
    page * showPageContent <= totalRecords
      ? page * showPageContent
      : totalRecords;

  const prevHandler = () => {
    setPage((prev) => prev - 1);
  };

  const nextHandler = () => {
    setPage((prev) => prev + 1);
  };

  const onSelectHandler = (e) => {
    setShowPageContent(e.target.value);
    setPage(1);
  };

  // useEffect(() => {});

  return (
    <div>
      <h1>{message}</h1>
      <table>
        <thead>
          <tr>
            {[
              { label: "ID", key: "id" },
              { label: "Name", key: "name" },
              { label: "Age", key: "age" },
              { label: "Occupation", key: "occupation" },
            ].map(({ label, key }) => (
              <th key={key}>{label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {}
          {users
            .slice(startIndex - 1, endIndex)
            .map(({ id, name, age, occupation }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{age}</td>
                <td>{occupation}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <select onChange={onSelectHandler} value={showPageContent}>
        <option value="5">Show 5</option>
        <option value="10">Show 10</option>
        <option value="15">Show 15</option>
      </select>
      <button onClick={prevHandler}>Prev</button>
      <span>{`Page ${page} of ${totalPages}`}</span>
      <button onClick={nextHandler}>Next</button>
    </div>
  );
}
