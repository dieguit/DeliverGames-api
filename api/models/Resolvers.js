import { merge } from 'lodash';
import userResolvers from './User/UserResolvers';

const Resolvers = merge(
  userResolvers,
);

export default Resolvers;
