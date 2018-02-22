const User = `
  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
    notes: [Note]
  }
`;

export default User;
