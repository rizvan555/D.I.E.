import { Checkbox } from '@mui/material';
import React, { useState } from 'react';

interface CheckboxItem {
  title: string;
  status: boolean;
}
function AllergicCheckbox() {
  const [checkboxAllergic, setCheckboxAllergic] = useState<CheckboxItem[]>([
    { title: 'Gluten', status: true },
    { title: 'Milk', status: true },
    { title: 'Egg', status: true },
    { title: 'Nuts', status: true },
    { title: 'Sesame', status: true },
    { title: 'Wheat', status: true },
    { title: 'Fish', status: true },
  ]);

  const filterAllergic = (title: string) => {
    const selectedAllergic = checkboxAllergic.find(
      (allergic) => allergic.title === title
    );
    if (selectedAllergic) {
      selectedAllergic.status = !selectedAllergic.status;
      setCheckboxAllergic([...checkboxAllergic]);
    }
  };

  const selectedCheckboxAllergic = checkboxAllergic
    .filter((checkAllergic) => !checkAllergic.status)
    .map((checkboxAllergic) => checkboxAllergic.title);

  return (
    <div>
      <ul className="flex items-center justify-center gap-10">
        {checkboxAllergic.map((allergic, index) => (
          <li key={index} className="flex items-center justify-center">
            <p>{allergic.title}</p>
            <Checkbox
              checked={!allergic.status}
              onClick={() => filterAllergic(allergic.title)}
            />
          </li>
        ))}
      </ul>
      {selectedCheckboxAllergic.map((title, index) => (
        <div
          key={index}
          style={{
            color:
              title === 'Gluten'
                ? 'red'
                : '' || title === 'Milk'
                ? 'red'
                : '' || title === 'Egg'
                ? 'red'
                : '' || title === 'Nuts'
                ? 'red'
                : '' || title === 'Sesame'
                ? 'red'
                : '' || title === 'Wheat'
                ? 'red'
                : '' || title === 'Fish'
                ? 'red'
                : '',
          }}
        >
          {title === 'Gluten'
            ? title
            : '' || title === 'Milk'
            ? title
            : '' || title === 'Egg'
            ? title
            : '' || title === 'Nuts'
            ? title
            : '' || title === 'Sesame'
            ? title
            : '' || title === 'Wheat'
            ? title
            : '' || title === 'Fish'
            ? title
            : ''}
        </div>
      ))}
    </div>
  );
}

export default AllergicCheckbox;
