import "./dropdown.css";

const region = [
  { text: "Select a region", value: " " },
  { text: "West Midlands", value: "West%Midlands" },
  { text: "East Midlands", value: "East%Midlands" },
  { text: "Greater London", value: "Greater%London" },
  { text: "North East", value: "North%East" },
  { text: "North West", value: "North%West" },
  { text: "South East", value: "South%East" },
  { text: "South West", value: "South%West" },
  { text: "East of England", value: "East%of%England" },
  { text: "Yorkshire and the Humber", value: "Yorkshire" },
];

const bootcamp = [
  { text: "Select a bootcamp", value: "none" },
  { text: "Cohort 1", value: 1 },
  { text: "Cohort 2", value: 2 },
  { text: "Cohort 3", value: 3 },
  { text: "Cohort 4", value: 4 },
  { text: "Cohort 5", value: 5 },
  { text: "Cohort 6", value: 6 },
  { text: "Cohort 7", value: 7 },
  { text: "Cohort 8", value: 8 },
  { text: "Cohort 9", value: 9 },
  { text: "Cohort 10", value: 10 },
  { text: "Cohort 11", value: 11 },
  { text: "Cohort 12", value: 12 },
];

function Dropdown({ handleDropdownSelect, handleDropdownBootcamp }) {
  return (
    <div className="dropdown-bars">
      <select
        name="region"
        className="dropdown-region"
        onChange={handleDropdownSelect}
      >
        {region.map((regions, index) => (
          <option
            key={index}
            className="select"
            value={regions.value}
            aria-label="dropdown menu region"
          >
            {regions.text}
          </option>
        ))}
      </select>
      <select
        name="bootcamp"
        className="dropdown-bootcamp"
        onChange={handleDropdownBootcamp}
        aria-label="dropdown menu cohort number"
      >
        {bootcamp.map((cohort, index) => (
          <option key={index} className="select" value={cohort.value}>
            {cohort.text}
          </option>
        ))}
      </select>
    </div>
  );
}
export default Dropdown;
