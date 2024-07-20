import Booking from "../models/BookingSchema.js";
import Doctor from "../models/DoctorSchema.js";

export const updateDoctor = async (req, res) => {
    const id = req.params.id;
    try {
        const updateDoctor = await Doctor.findByIdAndUpdate(id, { $set: req.body }, { new: true });
        res.status(200).json({ success: true, message: 'Successfully updated', data: updateDoctor });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to update' });
    }
};

export const deleteDoctor = async (req, res) => {
    const id = req.params.id;
    try {
        await Doctor.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: 'Successfully deleted' });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to delete' });
    }
};

export const getSingleDoctor = async (req, res) => {
    const id = req.params.id;
    try {
        const doctor = await Doctor.findById(id).populate('reviews').select("-password");
        if (doctor) {
            res.status(200).json({ success: true, message: 'User found', data: doctor });
        } else {
            res.status(404).json({ success: false, message: 'No user found' });
        }
    } catch (err) {
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

export const getAllDoctor = async (req, res) => {
    try {
        const {query}=req.query
        let doctors;
        if(query){
            doctors = await Doctor.find({isApproved:'approved', $or:[{name:{$regex:query,$options:"i"}},{specialization:{$regex:query,$options:"i"}}]}).select("-password");
        }else{
            doctors = await Doctor.find({isApproved:'approved'}).select("-password");

        }
        res.status(200).json({ success: true, message: 'Users found', data: doctors });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

export const getDoctorProfile = async(req,res)=>{
    const doctorId = req.userId; // Make sure this is being correctly set in your request
    try {
        const doctor = await Doctor.findById(doctorId);
        if (!doctor) {
            return res.status(404).json({ success: false, message: 'Doctor not found' });
        }
        const { password, ...rest } = doctor._doc; // Assuming _doc has the user document data
        const appoinments = await Booking.find({doctor:doctorId})
        res.status(200).json({ success: true, message: 'Profile info is getting', data: { ...rest,appoinments } });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Something went wrong, cannot get' });
    }
}