import React from "react";
import Select from "react-select";

const customStyle = {
  control: (provided) => ({
    ...provided,
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
    borderBottom: "1px solid #050e29 !important",
    color: "rgba(5, 14, 41, 0.4)",
    fontSize: "1.5rem",
    borderRadius: "none",
    fontWeight: "400",
    boxShadow: "none",
    backgroundColor: "transparent",
    outline: "none",
  }),

  option: (provided) => ({
    ...provided,
    fontSize: "1.6rem",
    fontWeight: 300,
    outline: "none",
    "&:hover": {
      backgroundColor: "#E7E7E7",
    },
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: "2px 0px",
  }),
};

export const renderReactSelect = ({ options, placeholder, field, form }) => {
  return (
    <Select
      value={options ? options.find((option) => option.value === field.value) : field.value}
      placeholder={placeholder}
      options={options}
      isSearchable={true}
      theme={(theme) => ({
        ...theme,
        colors: {
          ...theme.colors,
          neutral20: "#74788D",
          neutral50: "#495057",
        },
      })}
      key={field.value === undefined}
      onChange={(option) => form.setFieldValue(field.name, option?.value)}
      onBlur={field.onBlur}
      styles={customStyle}
      components={{
        IndicatorSeparator: () => null,
      }}
      className="container"
    />
  );
};
