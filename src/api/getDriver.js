/**
 * API script to get data about single driver from the server.
 * @param id:string    the driver's id
 * @returns {Promise<{}>}
 */
export async function getDriver(id) {
  const response = await fetch(`https://ergast.com/api/f1/drivers/${id}.json`);
  const json = await response.json();
  return json.MRData.DriverTable.Drivers[0];
}
