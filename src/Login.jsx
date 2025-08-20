import { DevTool } from "@hookform/devtools";
import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const form=useForm()
  const {register}=form;

  return (
    <div>
      <form>
        <section className="vh-100" style={{ backgroundcolor: "#508bfc" }}>
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div
                  className="card shadow-2-strong"
                  style={{ borderradius: "1rem" }}
                >
                  <div className="card-body p-5 ">
                    <h3 className="mb-5 text-center">ایجاد حساب</h3>

                    <div data-mdb-input-init className="form-outline mb-2">
                      <label className="form-label" for="typeEmailX-2">
                        نام کاربری
                      </label>
                      <input
                        type="text" {...register("username")}
                        id="username"
                        className="form-control form-control-lg"
                      />
                    </div>


                    <div data-mdb-input-init className="form-outline mb-2">
                      <label className="form-label" for="typeEmailX-2">
                        ایمیل
                      </label>
                      <input
                        type="email" {...register("email")}
                        id="typeEmailX-2"
                        className="form-control form-control-lg"
                      />
                    </div>


                    <div data-mdb-input-init className="form-outline mb-4">
                      <label className="form-label" for="typePasswordX-2">
                        پسورد
                      </label>
                      <input
                        type="password" {...register("password")}
                        id="typePasswordX-2"
                        className="form-control form-control-lg"
                      />
                    </div>


                    <div className="text-center">
                      <button
                        data-mdb-button-init
                        data-mdb-ripple-init
                        className="btn btn-primary btn-lg btn-block "
                        type="submit"
                      >
                        ورود حساب
                      </button>
                    </div>
                    <hr className="my-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
      <DevTool control={form.control} />
    </div>
  );
};

export default Login;