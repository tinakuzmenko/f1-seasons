export default function API() {
  const FIRST_SEASON_YEAR = 1950;
  const base = 'https://ergast.com/api/f1';
  const currentYear = new Date().getFullYear();

  const getSeasonsLimit = () => currentYear - FIRST_SEASON_YEAR + 1;

  this.seasons = () => `${base}/seasons.json?limit=${getSeasonsLimit()}`;
  this.driver = id => `${base}/drivers/${id}.json`;

  this.rounds = id => `${base}/drivers/${id}.json`;

  this.round = id => `${base}/drivers/${id}.json`;
}
