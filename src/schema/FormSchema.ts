import * as Yup from "yup"

export const PersonalInfoSchema=Yup.object().shape(
    {
        dateOfBirth:Yup.date().required("Date Of Birth is required"),
        location:Yup.string().required("Location is Required"),
        city:Yup.string().required("City is required"),
        email:Yup.string().email('invalid email format').required("E-Mail is required"),
        phoneNo:Yup.string().required("Phone No is Required"),
        gender:Yup.string().required("Please Select Gender")
    }
)


export const AreaOfInterestSchema = Yup.object().shape({
    areasOfinterest: Yup.array()
      .of(
        Yup.object().shape({
          category: Yup.string().required("Category is required"),
          interest: Yup.string().required("Interest is required"),
        })
      )
      .min(1, "At least one area of interest is required"),
  });

  export const ProfessionalInfoSchema = Yup.object().shape({
    education: Yup.string().required("Education is Required"),
    experiences: Yup.array()
      .of(
        Yup.object().shape({
          position: Yup.string().required("Position is Required"),
          companyName: Yup.string().required("Company Name is Required"),
          startDate: Yup.string().required('Start Date is required'),
          endDate: Yup.string().required('End Date is required'),
        })
      )
      .min(1, "At least one experience is required"),
  });

export const BioSchema=Yup.object().shape({
    bio:Yup.string().required("Bio is required")
})