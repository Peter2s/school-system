import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    students: Yup.array().of(
        Yup.object().shape({
            firstName: Yup.string().required('First Name is required').min(2, 'First Name must be at least 2 characters')
                .max(15,"First Name must be less than 15 characters"),
            lastName: Yup.string().required('Last Name is required').min(2, 'Last Name must be at least 2 characters')
                .max(15,"last Name must be less than 15 characters"),
            Note: Yup.string().required('Notes is required').min(2, 'Notes must be at least 2 characters')
                .max(200,"note must be less than 200 characters"),
            ImageFile: Yup.mixed().required('Image is required')
        })
    )
});

export default validationSchema;