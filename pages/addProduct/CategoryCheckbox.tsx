import { Checkbox } from '@mui/material';
import React, { useState } from 'react';

interface CheckboxItem {
  title: string;
  status: boolean;
}

interface CategoryCheckboxProps {
  filterCheckboxes: (title: string) => void;
}

function CategoryCheckbox({ filterCheckboxes }: CategoryCheckboxProps) {
  const [checkboxes, setCheckboxes] = useState<CheckboxItem[]>([
    { title: 'Halal', status: true },
    { title: 'Vegan', status: true },
    { title: 'Vegetarian', status: true },
    { title: 'Alcohol', status: true },
  ]);

  const handleCheckboxClick = (title: string) => {
    const updatedCheckboxes = checkboxes.map((checkbox) => {
      if (checkbox.title === title) {
        return { ...checkbox, status: !checkbox.status };
      }
      return checkbox;
    });
    setCheckboxes(updatedCheckboxes);
    filterCheckboxes(title); // filterCheckboxes funksiyasini çağıraraq AddProduct sehifesindeki durumu güncelleye bilirik.
  };

  const selectedCheckboxTitles = checkboxes
    .filter((checkbox) => !checkbox.status)
    .map((checkbox) => checkbox.title);

  return (
    <div>
      <ul className="flex items-center justify-center gap-10">
        {checkboxes.map((checkbox, index) => (
          <li key={index} className="flex items-center justify-center">
            <p>{checkbox.title}</p>
            <Checkbox
              checked={!checkbox.status}
              onClick={() => handleCheckboxClick(checkbox.title)}
            />
          </li>
        ))}
      </ul>
      {selectedCheckboxTitles.map((title, index) => (
        <div
          key={index}
          style={{
            color:
              title === 'Halal'
                ? 'green'
                : '' || title === 'Vegan'
                ? 'green'
                : '' || title === 'Vegetarian'
                ? 'green'
                : '' || title === 'Alcohol'
                ? 'red'
                : '',
          }}
        >
          {title === 'Halal'
            ? title
            : '' || title === 'Vegan'
            ? title
            : '' || title === 'Vegetarian'
            ? title
            : '' || title === 'Alcohol'
            ? title
            : ''}
        </div>
      ))}
    </div>
  );
}

export default CategoryCheckbox;
