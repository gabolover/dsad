import React, { useState } from "react";
import "./dropdownestimate.css";
import estimateIcon from "../../assets/images/estimateIcon.svg";

const DropDownEstimate = ({ setEstimate, setEstimateVisible }) => {
  /*  const { data, error, loading } = useQuery(GET_POINTS);
  if (loading) return <p>loading</p>;
  if (error) return <p>error... {error.message}</p>;
  const array = data.tasks.map((item) => item.pointEstimate);
  let uniqueArr = [...new Set(array.map((item) => NUMBER_ARRAY[item]))].sort(); */
  const points = [0, 1, 2, 4, 8];
  return (
    <div className="dropDownEstimate">
      <p className="dropDownEstimate__text body--xl">Estimate</p>
      {points.map((item) => (
        <DropDownEstimateItem
          item={item}
          key={`itemEstimate ${item}`}
          setEstimate={setEstimate}
          setEstimateVisible={setEstimateVisible}
        />
      ))}
    </div>
  );
};
export default DropDownEstimate;

const DropDownEstimateItem = ({ item, setEstimate, setEstimateVisible }) => {
  const convert = (item) => {
    switch (item) {
      case 0:
        return "ZERO";
      case 1:
        return "ONE";
      case 2:
        return "TWO";
      case 3:
        return "FOUR";
      case 4:
        return "EIGHT";
      default:
        return;
    }
  };

  const load = () => {
    setEstimate([convert(item), item]);
    setEstimateVisible(false);
  };
  return (
    <div className="dropDownEstimateItem" onClick={() => load(item)}>
      <img src={estimateIcon} alt="estimateIcon" />
      <p className="dropDownEstimateItem__text body--m">{item} Points</p>
    </div>
  );
};
