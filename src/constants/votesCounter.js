export const voteCounters = [
  { name: "Ass ss", no: "no", yes: "" },
  { name: "Ass ss", no: "", yes: "yes" },
  { name: "Ass ss", no: "", yes: "yes" },
  { name: "Ass ss", no: "", yes: "yes" },
  { name: "Ass ss", no: "", yes: "yes" },
  { name: "Ass ss", no: "no", yes: "" },
];

export const pozitive = () => {
  let votes = 0;
  for (let o of voteCounters) {
    if (o.yes) {
      votes += 1;
    }
  }
  return votes;
};
export const negative = () => {
  let votes = 0;
  for (let o of voteCounters) {
    if (o.no) {
      votes += 1;
    }
  }
  return votes;
};
