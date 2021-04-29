import mongoose from 'mongoose';

export const DEFAULT_TOPICS = [
  'ITEM_ADDED',
  'ITEM_TOGGLED',
  'ITEM_CONTENT_CHANGED',
  'LIST_NAME_CHANGED',
];

const EventSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      index: true,
    },
  },
  { timestamps: true },
);

export const EventModel = mongoose.model('Event', EventSchema);
