let tours=[];
const tourModel = require('../models/tour.model');
exports.getTours = async (req,res) =>{
    try {
        const tours = await tourModel.find({});
        return res.status(200).json({
            data: tours
        })
    } catch (error) {
       return res.status(500).json({
        'message': 'Something went really wrong!'
       }) 
    }
   
}

exports.createTours = async (req, res) => {
    try{
        const reqBody= req.body;
        const result = await tourModel.create(reqBody);
        return res.status(201).json({
          data:result
    });
}catch(error)
{
    return res.status(500).json({
        message: error.message
    })
}
}

 exports.getToursByid = async (req,res)=>{
   try{
     const getToursByid= req.params.id;
    const tour= await tourModel.findById(tourId);
    if(!tour){
    return res.status(404).json(
        {
            message: `tour with this id not found: ${tourId}`
        }
    );
 }

 return res.status(200).json({
    data: tour
 })}
 catch(error){
    return res.status(500).json({
        message: error.message
    })
 }
}
 
 exports.patchTours = async (req,res)=>{
    try{
      const tourId= req.params.id; 
    const reqBody=req.body;
    const result = await tourModel.findByIdAndUpdate(tourId, reqBody, {
        new: true,
        runvalidators: true
    });

    return res.status(200).json({
        data: result
    })}
    catch(error){
        return res.status(500).json
({
    data: error.message
})    }
 }
    tours = tours.map((tour)=>{
        if(tour.id==tourId)
        {
            tour.price=reqBody.price;
            return tour;
        }
        return tour;
    })
    return res.status(200).json({
       data: tours[tourId]
    })
 }

 exports.deleteTours = (req,res)=>{
    const tourId=parseIntreq.params.id;
    const reqBody=req.body;
    tours = tours.map((tour)=>{
        if(tour.id==tourId)
        {
            tour.price=reqBody.price;
            return tour;
        }
        return tour;
    })
    return res.status(204).json({
       data: tours[tourId]
    })
 }