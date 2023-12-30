import React from 'react'
import { formateDate } from '../../utils/formateDate'
const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>
            About of
            <span className='text-irisBlueColor font-bold text-[24px] leading-9'>
                Umar
            </span>
        </h3>
        <p className="text__para">
            Dr. Umar is a highly respected medical professional renowned for his expertise in the field of pulmonology. As a dedicated lung specialist, he possesses an in-depth knowledge of pulmonary diseases and has earned a reputation as a leading authority in this critical medical discipline. With a passion for improving the respiratory health of his patients, Dr. Umar's commitment to excellence shines through in his compassionate care and innovative approach to diagnosing and treating lung diseases. His unwavering dedication to the well-being of his patients makes him a trusted figure in the realm of pulmonary medicine.
        </p>
      </div>


      <div className='mt-12'>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
            Education
        </h3>
        <ul className='pt-4 md:p-5'>
            <li className='mb-[30px]'>
                <div>
                    <span className='text-irisBlueColor text-[15px] leading-6 font-semibold block'>
                        {formateDate('12-04-2022')}-{formateDate('10-12-2023')}
                    </span>
                    <p className='text-[16px] leading-6 font-medium text-textColor mt-2'>
                        Ph.D. in Pulmonology
                    </p>
                </div>
                <p className='text-[14px] leading-5 font-medium text-textColor mt-2'>
                        KRL Hospital, Kahoota
                </p>
            </li>
            <li className='mb-[30px]'>
                <div>
                    <span className='text-irisBlueColor text-[15px] leading-6 font-semibold block'>
                    {formateDate('12-12-2023')}
                    </span>
                    <p className='text-[15px] leading-6 font-medium text-textColor mt-2'>
                        Specilization in Pulmonology
                    </p>
                </div>
                <p className='text-[14px] leading-5 font-medium text-textColor mt-2'>
                        PIMS Hospital, RWP
                </p>
            </li>
        </ul>
      </div>


    <div className='mt-12'>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
            Experince
        </h3>

        <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
            <li className='p-4 rounded bg-[#fff9ea]'>
                <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
                    {formateDate('12-04-2022')}-{formateDate('10-12-2023')}
                </span>
                <p className='text-[16px] leading-5 font-medium text-textColor mt-2'>
                        Sr. Surgeon
                </p>
                <p className='text-[14px] leading-5 font-medium text-textColor mt-2'>
                        PIMS Hospital, RWP
                </p>
            </li>
            <li className='p-4 rounded bg-[#fff9ea]'>
                <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
                    {formateDate('12-04-2022')}-{formateDate('10-12-2023')}
                </span>
                <p className='text-[16px] leading-5 font-medium text-textColor mt-2'>
                        Sr. Surgeon
                </p>
                <p className='text-[14px] leading-5 font-medium text-textColor mt-2'>
                        PIMS Hospital, RWP
                </p>
            </li>
        </ul>
    </div>
    
    </div>
  )
}

export default DoctorAbout
