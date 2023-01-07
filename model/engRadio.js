// const {Schema, Mongoose} = require("mongoose")
const mongoose = require('mongoose')
const engRadio = mongoose.Schema(
  {
    title: {
      type: String,
    },
    station: {
      type: String,
    },
    live: {
      type: Boolean,
    },
    countNow: {
      type: Number,
    },
    totalListeners: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "listenersModel",
      },
    ],
    date: {
      type: String,
      default: Date.now()
    },
    time: { 
      type: String,
      default: Date.now()
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('engRadioMsg', engRadio)