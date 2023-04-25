import React from "react";
// import Gender from "./category/Gender";
// import Species from "./category/Species";
import InputGroup from "./category/InputGroup";
import Status from "./category/Status";

const Filter = ({
  pageNumber,
  setPageNumber,
  setStatus,
  setGender,
  setSpecies,
  setNumber,
}) => {
  let clear = () => {
    setStatus("");
    setGender("");
    setSpecies("");
    setPageNumber(1);
    window.location.reload(false);
  };

  return (
    <div className="col-lg-3 col-12 mb-5">
      <div className="text-center fw-bold fs-4 mb-2">Filters</div>
      <div
        style={{ cursor: "pointer" }}
        onClick={clear}
        className="text-primary text-decoration-underline text-center mb-3"
      >
        Clear Filters
      </div>
      <div className="accordion" id="accordionExample">
        <Status setStatus={setStatus} setPageNumber={setPageNumber} />
        <InputGroup name="Location" changeID={setNumber} total={126} />
      </div>
    </div>
  );
};

export default Filter;
