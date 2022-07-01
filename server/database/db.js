import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@blog-app-shard-00-00.imol9.mongodb.net:27017,blog-app-shard-00-01.imol9.mongodb.net:27017,blog-app-shard-00-02.imol9.mongodb.net:27017/?ssl=true&replicaSet=atlas-4qnh86-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;

//Xtp5hkgM2KvcKFbc
//${username}:${password}

//PrQ58fPbBAMubA9P
//8KiRTDx3H6LTjLBU
//o1E2US3XOwXwbt5r
//vBBTTsfHaF129EaT