import * as yup from "yup";

export const basicSchema = yup.object().shape({
  title: yup.string().required("Required").max(25, "the max is 25 chars"),
  author: yup.string().required("Required"),
  description: yup.string().max(255, "max is 255 char"),
  tags: yup.string().required("you should add one tag at least"),
});
