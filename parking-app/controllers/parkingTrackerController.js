import mongoose from "mongoose"
import spot from "../models/parkingTrackerModel"

exports.getSpot = (req, res) => {
    spot.findById(req.params.spotId, (error, spot) => {
        error ? res.send(err) : res.json(spot)
    })
}

exports.getAllSpots = (req, res) => {
    spot.find({}, (error, spots) => {
        error ? res.send(error) : res.json(spots)
    })    
}

exports.createSpot = (req, res) => {
    const newSpot = new spot(req.body)

    newSpot.save((error, spot) => {
        error ? res.send(error) : res.json(spot)
    })
}

exports.updateSpot = (req, res) => {
    spot.findOneAndUpdate({
        _id: req.params.spotId
    }, req.body, (error, spot) => {
        error ? res.send(error) : res.json(spot)
    })
}

exports.deleteSpot = (req, res) => {
    spot.remove({
        _id: req.params.spotId
    }, (error) => {
        error ? res.send(error) : res.json({
            message: `Parking spot successfully deleted`
        })
    })
}