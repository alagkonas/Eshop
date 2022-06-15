import { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { ALL_PRODUCTS } from '../../config';

const filter = createFilterOptions<FilmOptionType>();

interface FilmOptionType {
  inputValue?: string;
  title: string;
  year?: number;
}

const SearchBar: React.FC = () => {
  const [value, setValue] = useState<FilmOptionType | null>(null);

  const { data, isLoading } = useQuery(
    'all products',
    async () => await axios.get(ALL_PRODUCTS)
  );

  const products = data?.data;

  if (isLoading)
    return (
      <Box sx={{ display: 'flex' }}>
        <TextField
          id='outlined-search'
          label='Find your product'
          type='search'
          fullWidth={true}
          sx={{ marginRight: 2 }}
        />
        <CircularProgress size='30px' sx={{ marginTop: 1.5 }} />
      </Box>
    );

  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        if (typeof newValue === 'string') {
          setValue({
            title: newValue,
          });
        } else if (newValue && newValue.inputValue) {
          // Create a new value from the user input
          setValue({
            title: newValue.inputValue,
          });
        } else {
          setValue(newValue);
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        const { inputValue } = params;
        // Suggest the creation of a new value
        const isExisting = options.some(
          (option) => inputValue === option.title
        );
        if (inputValue !== '' && !isExisting) {
          filtered.push({
            inputValue,
            title: `Add "${inputValue}"`,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id='free-solo-with-text-demo'
      options={products}
      getOptionLabel={(option) => {
        if (typeof option === 'string') {
          return option;
        }
        if (option.inputValue) {
          return option.inputValue;
        }
        return option.title;
      }}
      renderOption={(props, option) => <li {...props}>{option.title}</li>}
      sx={{ width: 'auto' }}
      freeSolo
      renderInput={(params) => (
        <TextField {...params} label='Find your product' />
      )}
    />
  );
};

export default SearchBar;
