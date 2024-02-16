import Select from "react-select";

export type OptionsProps = {
  label: string
  value: string
}

interface ControlsProps {
  onChangeSort: any
}

const Controls = ({
  onChangeSort
}: ControlsProps) => {
  const fieldOptions = [
    { label: "Name", value: "name" },
    { label: "Company", value: "company" },
    { label: "Email", value: "email" },
  ];
  const directionOptions = [
    { label: "Ascending", value: "ascending" },
    { label: "Descending", value: "descending" },
  ];

  return (
    <div className="gallery-controls controls">
      <div className="form-group group">
        <label htmlFor="sort-field" className="label">
          Sort Field
        </label>
        <Select
          defaultValue={fieldOptions[0]}
          options={fieldOptions}
          inputId="sort-field"
          className="input"
          onChange={onChangeSort}
        />
      </div>
      <div className="form-group group">
        <label htmlFor="sort-direction" className="label">
          Sort Direction
        </label>
        <Select
          defaultValue={directionOptions[0]}
          options={directionOptions}
          inputId="sort-direction"
          className="input"
          onChange={onChangeSort}
        />
      </div>
    </div>
  );
};

export default Controls;
