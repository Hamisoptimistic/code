// let str = "hamim_basha";

function camelCase(name) {
  // let names = name.toLowerCase();
  let [first, last] = name.toLowerCase().split("_");
  // console.log(first);
  // console.log(last);
  let result = `${first}${last.replace(last[0], last[0].toUpperCase())}`;
  // replaces last variable 1st word with uppercase.
  // console.log(result)
  console.log(result.padEnd(20, "."));
}
camelCase("hamm_basha");
camelCase("Tgus_SHITrigHGtHere");
camelCase("ramjab_bee");
