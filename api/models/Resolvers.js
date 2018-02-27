import { merge } from 'lodash';
import UserResolvers from './User/UserResolvers';
import NoteResolvers from './Note/NoteResolvers';
import GamePlayerResolvers from './soccer_club/GamePlayerResolvers';
import FieldResolvers from './soccer_club/FieldResolvers';
import InventoryItemResolvers from './soccer_club/InventoryItemResolvers';
import FieldElementResolvers from './soccer_club/FieldElementResolvers';

const Resolvers = merge(
  UserResolvers,
  NoteResolvers,
  GamePlayerResolvers,
  FieldResolvers,
  InventoryItemResolvers,
  FieldElementResolvers,
);

export default Resolvers;
