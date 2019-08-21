import mongoose, {Schema} from "mongoose"

const ParkingSpotSchema = new Schema({
    location: {
        type: String,
        required: "What are the cross streets closest to your parking spot?"
    },
    note: {
        type: String,
        required: "Any additional notes to remember where you parked."
    },
    date: {
        type: Date,
        default: new Date
    }
})

export default mongoose.model('ParkingSpot', ParkingSpotSchema)