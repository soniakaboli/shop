import { DevTool } from "@hookform/devtools";
import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

const Login = () => {
  const form = useForm();
  const { register } = form;
  const { t, i18n } = useTranslation();


  const onchangeLanguage = (e) => {
    const lang = e.target.textContent;
    lang === "English" ? i18n.changeLanguage("en") : i18n.changeLanguage("fa");
  };

  // ثبت‌نام
  const onSubmitRegister = async (data) => {
    try {

      const checkUser = await fetch(
        `http://localhost:9000/users?email=${data.email}`
      );
      const existingUsers = await checkUser.json();

      if (existingUsers.length > 0) {
        alert("این ایمیل قبلاً ثبت شده. لطفاً وارد شوید!");
        return;
      }

      const createUser = await fetch("http://localhost:9000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      localStorage.setItem("userEmail", data.email);
      localStorage.setItem("username", data.username);

      if (createUser.ok) alert("اکانت شما ساخته شد!");
      else alert("خطا در ساخت اکانت");
    } catch (err) {
      console.log(err);
      alert("ارتباط با سرور برقرار نشد!");
    }
  };


  const onSubmitLogin = async (data) => {
    try {
      const response = await fetch(
        `http://localhost:9000/users?email=${data.email}&password=${data.password}`
      );
      const users = await response.json();

      if (users.length > 0) {
        localStorage.setItem("userEmail", users[0].email);
        localStorage.setItem("username", users[0].username);

        
        alert(`خوش اومدی ${users[0].username}!`);
      } else {
        alert("ایمیل یا پسورد اشتباه است!");
      }
    } catch (err) {
      console.log(err);
      alert("ارتباط با سرور برقرار نشد!");
    }
  };

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

                    {/* انتخاب زبان */}
                    <div className="d-flex justify-content-end gap-2 mb-3">
                      <button
                        onClick={onchangeLanguage}
                        className="btn btn-outline-primary btn-sm"
                        type="button"
                      >
                        فارسی
                      </button>
                      <button
                        onClick={onchangeLanguage}
                        className="btn btn-outline-secondary btn-sm"
                        type="button"
                      >
                        English
                      </button>
                    </div>

                    <h3 className="mb-5 text-center">{t("form.title")}</h3>

                    {/* ورودی‌ها */}
                    <div className="form-outline mb-2">
                      <label className="form-label">{t("form.username")}</label>
                      <input
                        type="text"
                        {...register("username")}
                        className="form-control form-control-lg"
                      />
                    </div>

                    <div className="form-outline mb-2">
                      <label className="form-label">{t("form.email")}</label>
                      <input
                        type="email"
                        {...register("email")}
                        className="form-control form-control-lg"
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label">{t("form.password")}</label>
                      <input
                        type="password"
                        {...register("password")}
                        className="form-control form-control-lg"
                      />
                    </div>

                    {/* دکمه‌ها */}
                    <div className="d-flex justify-content-between">
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={form.handleSubmit(onSubmitRegister)}
                      >
                        ثبت‌نام
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={form.handleSubmit(onSubmitLogin)}
                      >
                        ورود
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