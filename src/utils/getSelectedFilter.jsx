const getSelectedFilter = (filter, setState) => {
  if (filter) {
    let filterSelected = document.getElementById(filter).value;
    setState(filterSelected);
  }
};
export default getSelectedFilter;
