import { merge } from 'lodash';
import UserResolvers from './User/UserResolvers';
import NoteResolvers from './Note/NoteResolvers';
import GamePlayerResolvers from './soccer_club/GamePlayerResolvers';
import FieldResolvers from './soccer_club/FieldResolvers';

const Resolvers = merge(
  UserResolvers,
  NoteResolvers,
  GamePlayerResolvers,
  FieldResolvers,
);

export default Resolvers;
