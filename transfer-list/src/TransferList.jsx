
import { useState } from "react";
import './index.scss';

export default function TransferList() {
  const leftData = ["HTML", "JavaScript", "CSS", "TypeScript"];
  const rightData = ["React", "Angular", "Vue", "Nodejs"];

  const [selected, setSelected] = useState([]);

  const [leftContents, setLeftContents] = useState(leftData);
  const [rightContents, setRightContents] = useState(rightData);

  const moveAllLeft = () => {
    let leftItems = [...leftContents, ...rightContents];
    setLeftContents(leftItems);
    setRightContents([]);
  };

  const moveAllRight = () => {
    let rightItems = [...rightContents, ...leftContents];
    setRightContents(rightItems);
    setLeftContents([]);
  };

  const moveToLeft = () => {
    let leftItems = Array.from(new Set([...leftContents, ...selected]));
    setLeftContents(leftItems);

    let rightSet = new Set(selected);
    let rightItems = rightContents.filter((ele) => !rightSet.has(ele));
    setRightContents(rightItems);
    setSelected([]);
  };

  const moveToRight = () => {
    let rightItems = Array.from(new Set([...rightContents, ...selected]));
    setRightContents(rightItems);

    let leftSet = new Set(selected);
    let leftItems = leftContents.filter((ele) => !leftSet.has(ele));
    setLeftContents(leftItems);
    setSelected([]);
  };

  const onSelect = (e, item) => {
    const { checked } = e.target;
    if (checked) {
      setSelected((prev) => [...prev, item]);
    } else {
      setSelected((prev) => {
        return prev.filter((ele) => ele != item);
      });
    }
  };

  return (
    <div className="container">
      <div className="left-content">
        {leftContents.map((item) => {
          return (
            <div className={"list-item"}>
              <input
                key={item}
                type="checkbox"
                name={item}
                id={item}
                chec
                onChange={(e) => onSelect(e, item)}
              />
              <label htmlFor={item}>{item}</label>
            </div>
          );
        })}
      </div>
      <div className="control-buttons">
        <button key={"<<"} onClick={moveAllLeft}>
          {"<<"}
        </button>
        <button key={"<"} onClick={moveToLeft}>
          {"<"}
        </button>
        <button key={">"} onClick={moveToRight}>
          {">"}
        </button>
        <button key={">>"} onClick={moveAllRight}>
          {">>"}
        </button>
      </div>
      <div className="right-content">
        {rightContents.map((item) => {
          return (
            <div>
              <input
                key={item}
                type="checkbox"
                name={item}
                id={item}
                onChange={(e) => onSelect(e, item)}
              />
              <label htmlFor={item}>{item}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
