export const Filter = ({ onClick }) => {
  const buttonsData = [
    { name: 'all', label: 'show all' },
    { name: 'follow', label: 'follow' },
    { name: 'followings', label: 'followings' },
  ];

  const buttons = buttonsData.map(({ name, label }) => {
    // const active = props.filter === name;
    // const isActive = active ? ;
    return (
      <button type="button" key={name} onClick={() => onClick(name)}>
        {label}
      </button>
    );
  });

  return <div>{buttons}</div>;
};
