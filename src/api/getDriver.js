export async function getDriver(id) {
  const response = await fetch(`https://ergast.com/api/f1/drivers/${id}.json`);
  const json = await response.json();
  return json.MRData.DriverTable.Drivers[0];
}
