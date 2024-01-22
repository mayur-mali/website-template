import React, { useState } from "react";
import Modal from "../Modal/Modal";
import Form from "../Form/Form";
import Input from "../Input/Input";
import Select from "../Select/Select";
import axios from "axios";
import { toast } from "react-toastify";

function GetStartedButton() {
  const [openModal, setOpenModal] = useState(false);
  const [schoolName, setSchoolName] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [select_state, set_select_state] = useState({
    name: "Andhra Pradesh",
  });
  const [select_role, set_select_role] = useState({
    name: "Onwer",
  });
  const [select_no_of_students, set_select_no_of_students] = useState({
    name: "less than 350",
  });
  const [select_fees_of_school, set_select_fees_of_school] = useState({
    name: "less than 10000",
  });

  const stateOptions = [
    "Andhra Pradesh",
    "Andaman and Nicobar Islands",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chandigarh",
    "Chhattisgarh",
    "Dadar and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  const rols = [
    "owner",
    "trustee",
    "principal",
    "vice principal",
    "director",
    "teacher",
  ];
  const noOfStudent = [
    "less than 350",
    "350-600",
    "600-1000",
    "1000-1500",
    "more than 1500",
  ];
  const feeOfSchool = [
    "less than 10000",
    "10000-30000",
    "30000-50000",
    "50000-100000",
    "more than 100000 ",
  ];
  return (
    <div>
      <button
        onClick={() => setOpenModal(true)}
        className="px-6 py-2 bg-[#02fafe] rounded-lg text-black tracking-wide font-bold"
      >
        Get Started
      </button>
      <Modal open={openModal} setOpen={setOpenModal} className="max-w-3xl">
        <Form
          onSubmit={() => {
            axios
              .post(
                process.env.REACT_APP_BACKEND_URL +
                  "api/school-inquiry/create-inquiry",
                {
                  schoolname: schoolName,
                  role: select_role.name,
                  personename: name,
                  mobilenumber: mobileNo,
                  city: city,
                  studentcount: select_no_of_students.name,
                  schoolfees: select_fees_of_school.name,
                }
              )
              .then((response) => {
                setOpenModal(false);
                toast.success("Your inquiry has been sent successfully.");
              })
              .catch((error) => {
                setOpenModal(false);
                toast.error(error.massage);
              });
          }}
          className="grid grid-cols-2 gap-4"
        >
          <Input
            type="text"
            name="School Name"
            add_error={() => {}}
            onChange={(v) => {
              setSchoolName(v);
            }}
            required
          />
          <Input
            add_error={() => {}}
            type="text"
            name="Name"
            onChange={(v) => {
              setName(v);
            }}
            required
          />
          <Input
            add_error={() => {}}
            type="number"
            name="Mobile No."
            onChange={(v) => {
              setMobileNo(v);
            }}
            required
          />
          <Input
            add_error={() => {}}
            type="text"
            name="City"
            onChange={(v) => {
              setCity(v);
            }}
            required
          />
          <Select
            label="Role"
            selected={select_role}
            setSelected={set_select_role}
            options={rols.map((role) => {
              return { name: role };
            })}
            add_error={() => {}}
            required
          />

          <Select
            label="State"
            selected={select_state}
            setSelected={set_select_state}
            add_error={() => {}}
            options={stateOptions.map((state) => {
              return { name: state };
            })}
            required
          />
          <Select
            label="No. Of Students"
            selected={select_no_of_students}
            setSelected={set_select_no_of_students}
            add_error={() => {}}
            options={noOfStudent.map((studentCount) => {
              return { name: studentCount };
            })}
            required
          />
          <Select
            label="Fees Of School"
            selected={select_fees_of_school}
            setSelected={set_select_fees_of_school}
            add_error={() => {}}
            options={feeOfSchool.map((fee) => {
              return { name: fee };
            })}
            required
          />
          <div className="col-span-2 w-full flex justify-center items-center mt-4">
            <button className="bg-blue-500 text-white px-4 py-1.5 rounded-lg w-full max-w-56">
              Submit
            </button>
          </div>
        </Form>
      </Modal>
    </div>
  );
}

export default GetStartedButton;
