import { DevTool } from "@hookform/devtools";
import React from "react";
import { useForm } from "react-hook-form";
import i18n from "i18next";
import { useTranslation } from "react-i18next";

const Login = () => {
  const form = useForm();
  const { register } = form;
  const { t, i18n } = useTranslation();


  const onchangeLanguage = (e)=>{
    let lang= e.target.textContent
    lang== "English" ? i18n.changeLanguage("en") : i18n.changeLanguage("fa")
  }

  return (
    <div>
      <form>
        <section className="vh-100">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div
                  className="card shadow-2-strong"
                  style={{ borderRadius: "1rem" }}
                >
                  <div className="card-body p-5">
                    

                    <div className="d-flex justify-content-end gap-2 mb-3">
                      <button onClick={onchangeLanguage} className="btn btn-outline-primary btn-sm" type="button">
                        فارسی
                      </button>
                      <button onClick={onchangeLanguage} className="btn btn-outline-secondary btn-sm" type="button">
                        English
                      </button>
                    </div>

                    <h3 className="mb-5 text-center">{t("form.title")}</h3>

                    <div data-mdb-input-init className="form-outline mb-2">
                      <label className="form-label" htmlFor="typeEmailX-2">
                        {t("form.username")}
                      </label>
                      <input
                        type="text"
                        {...register("username")}
                        id="username"
                        className="form-control form-control-lg"
                      />
                    </div>

                    <div data-mdb-input-init className="form-outline mb-2">
                      <label className="form-label" htmlFor="typeEmailX-2">
                        {t("form.email")}
                      </label>
                      <input
                        type="email"
                        {...register("email")}
                        id="typeEmailX-2"
                        className="form-control form-control-lg"
                      />
                    </div>

                    <div data-mdb-input-init className="form-outline mb-4">
                      <label className="form-label" htmlFor="typePasswordX-2">
                        {t("form.password")}
                      </label>
                      <input
                        type="password"
                        {...register("password")}
                        id="typePasswordX-2"
                        className="form-control form-control-lg"
                      />
                    </div>

                    <div className="text-center">
                      <button
                        data-mdb-button-init
                        data-mdb-ripple-init
                        className="btn btn-primary btn-lg btn-block"
                        type="submit"
                      >
                        {t("form.enter")}
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