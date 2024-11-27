export const adminAccessData = [
  { id: 1, user: "admin1", password: "admin001" },
  { id: 2, user: "admin2", password: "admin002" },
  { id: 3, user: "admin3", password: "admin003" },
  { id: 4, user: "admin4", password: "admin004" },
];
export const adminAccessData7 = [{ id: 1, user: "abid", password: "admin001" }];

export const isAccess = (data, cb, user, password) => {
  data.forEach((v) => {
    if (v.user === user && v.password === password) {
      cb(true);
      return;
    }
  });
};
