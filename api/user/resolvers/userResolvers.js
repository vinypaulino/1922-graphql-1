const users = [
  {
    nome: "Ana",
    ativo: true,
  },
  {
    nome: "Marcia",
    ativo: false,
  },
];

const userResolvers = {
  Query: {
    users: () => users,
    firstUser: () => users[1],
  },
};

module.exports = userResolvers;
