const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const MONGO_URL =
  "mongodb+srv://simas2275:smarthome@smarthome-p5rsu.mongodb.net/test?retryWrites=true&w=majority";
const auth = require("./middleware/auth");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connected");
});

const userRouter = require("./Routes/User");
app.use("/user", userRouter);

const userRegisterRouter = require("./Routes/registerUser");
app.use("/userR", auth, userRegisterRouter);

const temperatureRouter = require("./Routes/Kitchen/Temperature");
const curtainsRouter = require("./Routes/Kitchen/Curtains");
const lightRouter = require("./Routes/Kitchen/Light");
const plantRouter = require("./Routes/Kitchen/Plant");
const coffeeRouter = require("./Routes/Kitchen/Coffee");
const petRouter = require("./Routes/Kitchen/Pet");

app.use("/temperature", auth, temperatureRouter);
app.use("/curtains", auth, curtainsRouter);
app.use("/light", auth, lightRouter);
app.use("/plants", auth, plantRouter);
app.use("/coffee", auth, coffeeRouter);
app.use("/petFood", auth, petRouter);

const garageLightRouter = require("./Routes/Garage/Light");
const garageTemperatureRouter = require("./Routes/Garage/Temperature");
const garageGatesRouter = require("./Routes/Garage/Gates");
app.use("/garageLight", auth, garageLightRouter);
app.use("/garageTemperature", auth, garageTemperatureRouter);
app.use("/garage", auth, garageGatesRouter);

const bedroomTemperatureRouter = require("./Routes/BedRoom/Temperature");
const bedroomCurtainsRouter = require("./Routes/BedRoom/Curtains");
const bedroomLightRouter = require("./Routes/BedRoom/Light");
const bedroomPlantRouter = require("./Routes/BedRoom/Plant");

app.use("/bedroomTemperature", auth, bedroomTemperatureRouter);
app.use("/bedroomCurtains", auth, bedroomCurtainsRouter);
app.use("/bedroomLight", auth, bedroomLightRouter);
app.use("/bedroomPlants", auth, bedroomPlantRouter);

const bathroomTemperatureRouter = require("./Routes/Bathroom/Temperature");
const bathroomCurtainsRouter = require("./Routes/Bathroom/Curtains");
const bathroomLightRouter = require("./Routes/Bathroom/Light");

app.use("/bathroomTemperature", auth, bathroomTemperatureRouter);
app.use("/bathroomCurtains", auth, bathroomCurtainsRouter);
app.use("/bathroomLight", auth, bathroomLightRouter);

const securityRouter = require("./Routes/Security/Security");
app.use("/security", auth, securityRouter);

const energyRouter = require("./Routes/Electricity/Energy");
const solarRouter = require("./Routes/Electricity/solarPanel");
app.use("/energy", auth, energyRouter);
app.use("/solar", auth, solarRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
