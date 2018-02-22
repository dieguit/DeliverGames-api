import { merge } from 'lodash';
import UserResolvers from './User/UserResolvers';
import NoteResolvers from './Note/NoteResolvers'

const Resolvers = merge(
  UserResolvers,
  NoteResolvers,
);

export default Resolvers;
