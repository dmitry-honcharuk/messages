import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      index: true,
    },
  },
  { timestamps: true },
);

export const EventModel = mongoose.model('Event', eventSchema);
