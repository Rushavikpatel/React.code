import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";

export const AddSchedule = () => {
  const [schedules, setschedules] = useState();
  var navigate = useNavigate();
  

  const getSchedules = () => {
    axios.get("http://localhost:4000/schedule/get").then((res) => {
      //   console.log(res.data.data);
      setschedules(res.data.data);
    });
  };
  useEffect(() => {
    getSchedules();
    getCategorys();
  }, []);
  const [categorys, setcategorys] = useState();

  const getCategorys = () => {
    axios.get("http://localhost:4000/category/get").then((res) => {
        console.log(res.data.data);
      setcategorys(res.data.data);
    });
  };

  const submit = (data) => {
    console.log(data);
    var dataobj = {
      // user: localStorage.getItem("user"),
      Schedule: data.ScheduleType,
      category: data.categorytype,
      startdate:data.startdate,
      enddate:data.enddate,
    };
    console.log("..;.;.;.;",dataobj)
    axios
      .post("http://localhost:4000/schedule_master/add",dataobj)
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          navigate('/Schedulemasterlist');
        } else {
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //   var style1 = {width: "25%" , marginLeft:" 25%",marginTop:"3%",hight:"50%"}

  var style2 = { width: "95%", hight: "25" };
  const { register, handleSubmit } = useForm();

  return (
    <div
      class="card"
      style={{
        width: "25%",
        marginLeft: "28%",
        marginTop: "8%",
        height: "50%",
      }}
    >
      <form
              id="formAuthentication"
              class="mb-3"
              action="index.html"
              onSubmit={handleSubmit(submit)}
              method="POST"
            >
      <div class="card-body" style={style2}>
      
        <div
          class="app-brand justify-content-center"
          style={{ textAlign: "center" }}
        >
          <span class="app-brand-text demo text-body fw-bolder min-weight:6">
            ADD Schedule
          </span>
        </div>
        <br />
        <br />
        <label class="col-sm-5 col-form-label" for="basic-default-age">
         #: SCHEDULE_TYPE
        </label>

        <div>
          <div class="form-check">
            
            {schedules?.map((schedule) => {
              return (
                <div>
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    value={schedule._id}
                    {...register("ScheduleType")}
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    {schedule.name}
                  </label>
                </div>
              );
            })}
          </div>
          <label class="col-sm-5 col-form-label" for="basic-default-age">
           #: Category_Name
          </label>

          <div class="form-check">
            {categorys?.map((category) => {
              return (
                <div>
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    value={category._id}
                    {...register("categorytype")}
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    {category.name}
                  </label>
                </div>
              );
            })}
            <div style={{marginLeft:"-9%"}} >
          <label class="col-sm-4 col-form-label" for="basic-default-age">
             #: Start Date:
            </label>
            <input type="date" {...register("startdate")} />
            <br/>
            <label
                      class="col-sm-4 col-form-label"
                      for="basic-default-age"
                    >
                     #: End Date:
                    </label> <input type="date" {...register("enddate")} />
                    </div>
            
              <button class="m-2 btn btn-primary d-grid w-100 " type="submit">
                ADD Schedule
              </button>
           
          </div>
        </div>
        
      </div>
      </form>
    </div>
  );
};
