const { Schema, model } = require('mongoose');

const feriadoSchema = new Schema(
    {
        motivo: { type: String, required: true},
        dia:    { type: Number, required: true },
        mes:    { type: Number, required: true },
        id:     { type: String, required: true },
        tipo: {
            type: String,
            enum: ["inamovible", "trasladable", "nolaborable", "puente"]
        },
        info:         { type: String, required: false },
        original:     { type: String, required: false },
        opcional:     { type: String, required: false },
    });

module.exports = model('Feriado', feriadoSchema);