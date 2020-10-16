
import { useState, useCallback, ChangeEvent } from 'react';

export const useFormField = (initialValue: string = "") => {
  const [value, setValue] = useState(initialValue);
  const onChange = useCallback(
    (e: ChangeEvent<any>) => setValue(e.target.value),
    []
  );
  return { value, onChange };
};


export const useNumberFormField = (initialValue: number = 0) => {
  const [value, setValue] = useState(initialValue);
  const onChange = useCallback(
    (e: ChangeEvent<any>) => setValue(e.target.value),
    []
  );
  return { value, onChange };
};