import React, { useState, useEffect } from "react";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { db, auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { CgClose } from "react-icons/cg";
import { GiNextButton, GiPreviousButton } from "react-icons/gi";
import { BiSave } from "react-icons/bi";
import Form from "../helper/Form";
import { formFieldsStep1, formFieldsStep2 } from "../../static/FormFields";
import { getUser } from "../../slices/userSlice";
import { useSelector } from "react-redux";

import { FaSave } from "react-icons/fa";

const AddVideo = ({ togglePopup, isNew }) => {
  const [step, setStep] = useState(1);
  const [userEmail, setUserEmail] = useState("");
  const user = useSelector(getUser);
  const _formData = useSelector((state) => state.videos.formData);

  const initialFormData = !isNew
    ? _formData
    : {
        category: "",
        channel: user?.displayName,
        description: "",
        duration: "",
        link: "",
        logo: user?.photoURL,
        name: "",
        subscribers: "",
        thumbnail: "",
        uploadTime: "",
        views: "",
      };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);
      }
    });
    return () => unsubscribe();
  }, []);

  const nextStep = () => {
    const currentStepErrors = validateForm(step);
    if (Object.keys(currentStepErrors).length > 0) {
      setErrors(currentStepErrors);
      return;
    }
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [e.target.name]: "",
    }));
  };

  const validateForm = (currentStep) => {
    const newErrors = {};
    const fieldsToValidate =
      currentStep === 1
        ? ["name", "description", "category", "link", "thumbnail"]
        : ["channel", "logo", "subscribers", "duration", "uploadTime", "views"];

    fieldsToValidate.forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } is required.`;
      }
    });

    return newErrors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(step);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      handleDatabaseOperation();
      togglePopup(); // Close the popup after the form is successfully submitted
    }
  };

  const handleDatabaseOperation = () => {
    if (!isNew) {
      // If editing existing data, update Firestore document
      updateDoc(doc(db, "videos", formData.id), formData)
        .then(() => {
          togglePopup();
        })
        .catch((e) => {
          console.error("Error updating document: ", e);
        });
    } else {
      // If creating new data, add new Firestore document
      addDoc(collection(db, "videos"), {
        ...formData,
        uploadedBy: userEmail,
      })
        .then(() => {
          togglePopup();
        })
        .catch((e) => {
          console.error("Error adding document: ", e);
        });
    }
  };

  return (
    <div className="fixed cursor-pointer inset-0 flex items-center justify-center  backdrop-filter backdrop-blur-[2px] bg-opacity-50 z-50">
      <div className="bg-[#1f1f1f] p-6 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2">
        <div className="flex flex-row text-yt-white m-0 pb-3 justify-between items-center border-b-[1px] border-[#3e3e3e] ">
          <h2 className="text-xl font-bold">Add Video Details</h2>
          <button
            title="Close"
            onClick={togglePopup}
            className="hover:text-yt-blue font-bold py-2 px-4 "
          >
            <CgClose size={25} />
          </button>
        </div>
        <form className="pt-3">
          {step === 1 && (
            <Form
              formData={formData}
              handleChange={handleChange}
              errors={errors}
              fields={formFieldsStep1}
            />
          )}
          {step === 2 && (
            <Form
              formData={formData}
              handleChange={handleChange}
              errors={errors}
              fields={formFieldsStep2}
            />
          )}
          <div className="mt-4 flex justify-around">
            {step > 1 && (
              <div className="flex justify-start">
                <button
                  title="Previous"
                  onClick={prevStep}
                  type="button"
                  className="flex flex-row text-yt-white justify-center py-[0.4rem] px-[0.75rem] items-center gap-2 font-medium text-sm border border-yt-border rounded-[0.2rem] hover:bg-yt-light-blue"
                >
                  <GiPreviousButton className="text-[#ff4e45] " size={25} />{" "}
                  Previous
                </button>
              </div>
            )}
            {step < 2 ? (
              <div className="flex justify-end ">
                <button
                  title="Next"
                  className="flex flex-row text-yt-white justify-center py-[0.4rem] px-[0.75rem] items-center gap-2 font-medium text-sm border border-yt-border rounded-[0.2rem] hover:bg-yt-light-blue"
                  onClick={nextStep}
                  type="button"
                >
                  <GiNextButton className="text-[#ff4e45] " size={25} />
                  Next
                </button>
              </div>
            ) : (
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="flex flex-row text-yt-white justify-center py-[0.4rem] px-[0.75rem] items-center gap-2 font-medium text-sm border border-yt-border rounded-[0.2rem] hover:bg-yt-light-blue"
                >
                  {initialFormData ? (
                    <FaSave
                      title="Save Changes"
                      className="text-[#ff4e45] "
                      size={20}
                    />
                  ) : (
                    <BiSave
                      title={"Submit"}
                      className="text-[#ff4e45] "
                      size={20}
                    />
                  )}
                  {initialFormData ? "Save Changes" : "Submit"}
                </button>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddVideo;