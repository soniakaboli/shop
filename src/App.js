import { Link, Outlet } from "react-router-dom";


function App() {
  return (
    <div>
      <div className="navbar-custom d-flex justify-content-around flex-wrap w-100 text-center pt-3 pb-1">
        <Link to="/" className="flex-fill text-decoration-none text-dark">صفحه اصلی</Link>
        <Link to="cosmetics" className="flex-fill text-decoration-none text-dark">لوازم ارایشی</Link>
        <Link to="cloth" className="flex-fill text-decoration-none text-dark">عطرا و دکلن</Link>
        <Link to="shoses" className="flex-fill text-decoration-none text-dark">کیف و کفش</Link>
        <Link to="about" className="flex-fill text-decoration-none text-dark">درباره ما</Link>
      </div>
        <hr />
        <div>
          <Link to="login" className="btn btn-outline-primary mx-5">ایجاد حساب کاربری / ورود</Link>
        </div>
      <Outlet />
    </div>
  );
}

export default App;
