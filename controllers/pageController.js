const runAllSeeders = require("../seeders/runAllSeeders")
const resetDataBase = require("../createDatabaseTables")

async function resetDB(req, res) {
  try {
    await resetDataBase()
    await runAllSeeders()
    return res.json(
      { msg: "Database restored"}
    )
  } catch (err) {
    return res.json(
      { error: "Something went wrong, try again later"}
    )
    console.log(err)
  }
}

module.exports = {
  resetDB,
};
