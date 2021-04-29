import mongoose from "mongoose";

export const DEFAULT_TOPICS = ['ITEM_ADDED', 'ITEM_TOGGLED', 'ITEM_CONTENT_CHANGED', 'LIST_NAME_CHANGED'];

const EventSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        unique: true,
        index: true,
    },
}, { timestamps: true })

const EventsSchema = new mongoose.Schema({
    name: {
        type: [EventSchema],
        default: DEFAULT_TOPICS
    },
}, { timestamps: true })

export const eventModel = mongoose.model('Event', EventSchema);
export const eventsModel = mongoose.model('Events', EventsSchema);
