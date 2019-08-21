import ParkingTracker from "../controllers/parkingTrackerController"

export default (app) => {
    app.route("/spots")
        .get(ParkingTracker.getAllSpots)
        .post(ParkingTracker.createSpot)

    app.route("/spots/:spotID")
        .get(ParkingTracker.getSpot)
        .put(ParkingTracker.updateSpot)
        .delete(ParkingTracker.deleteSpot)
}