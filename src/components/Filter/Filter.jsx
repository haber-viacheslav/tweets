import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';

const MenuData = [
  { name: 'all', label: 'show all' },
  { name: 'follow', label: 'follow' },
  { name: 'followings', label: 'followings' },
];
export const Filter = ({ onChange, filter }) => {
  const handleChange = event => {
    onChange(event.target.value);
  };
  return (
    <FormControl
      variant="standard"
      sx={{
        m: 1,
        minWidth: 120,
        color: 'text.primary',
        // bgcolor: 'text.primary',
        // bgcolor: 'secondary.main',
        // bgcolor: 'error.main',
        // bgcolor: 'warning.main',
        bgcolor: 'info.main',
        // bgcolor: 'success.main',
        // bgcolor: 'text.primary',
        // bgcolor: 'text.secondary',
        // bgcolor: 'text.disabled',
      }}
      size="small"
    >
      <InputLabel id="filter-select">Filter</InputLabel>
      <Select
        labelId="filter"
        label="filter"
        id="filter"
        onChange={handleChange}
        value={filter}
        input={<OutlinedInput label="Name" />}
      >
        {MenuData.map(({ name, label }) => {
          return (
            <MenuItem key={name} value={name}>
              {label}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};
