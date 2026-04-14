import { useContext } from "react";
import { TabContext } from "../context/CurrentTabContext";

export default function Status() {
  const { setCurrTab } = useContext(TabContext);

  setCurrTab("stats");
  return <p>Hello World from Status!</p>;
}
