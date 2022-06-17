//Transportation on vacation
function rentalCarCost(d) {
  // Your solution here
  let week = 7;
  let min_days = 3;
  if(week>=7)
    {
    return (d*40)-50;
    }
  else if(min_days>=3)
    {
      return (d*40)-20;
    }
  else
    {
      return d*40;
    }
}