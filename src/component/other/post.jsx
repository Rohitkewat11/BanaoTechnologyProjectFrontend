export function Post() {
  return (
    <>
      <div className="d-flex gap-3 m-auto mt-3" style={{width:"88%"}}>
        <div className="col">
          <div>
            <div className="cart border rounded mb-2 mobile_cart">
              <div cart-header>
                <img
                  id="mobile_cart_img"
                  src="./assest/image/Rectangle 5.png"
                  alt=""
                  width="100%"
                />
              </div>
              <div className="cart-body">
                <div className="p-2 position-relative">
                  <div>
                    <button
                      className="btn p-1 pb-2 bi bi-three-dots position-absolute end-0 me-3"
                    ></button>
                    <p id="artical" className="mt-1 fw-bold">
                      Artical
                    </p>
                  </div>
                  <div>
                    <p className="fw-bold">
                      What if famous brands had regular fonts? Meet
                      <br /> RegulaBrands!
                    </p>
                    <p>
                      I’ve worked in UX for the better part of a decade. From
                      now on, I plan to rei…
                    </p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div>
                      <img
                        src="./assest/image/Rectangle 3 (1).png"
                        alt=""
                        height="48px"
                        width="48px"
                      />
                      <span className="fw-bold">&nbsp;&nbsp;Sarthak Kamra</span>
                    </div>
                    <div>
                      <span className="bi bi-eye text-secondary fw-bold me-2">
                        &nbsp;1.4k views
                      </span>
                      <button
                        className=" btn bi bi-share"
                        // style="background-color:rgba(128, 128, 128, 0.237)"
                      ></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="cart border rounded mb-2 mobile_cart">
              <div cart-header>
                <img
                  id="mobile_cart_img"
                  src="./assest/image/Rectangle 5 (1).png"
                  alt=""
                  width="100%"
                />
              </div>
              <div className="cart-body">
                <div className="p-2 position-relative">
                  <div>
                    <button
                      className="btn p-1 pb-2 bi bi-three-dots position-absolute end-0 me-3"
                      // style="height:28px;width:28px;"
                    ></button>
                    <p id="education" className="mt-1 fw-bold">
                      Education
                    </p>
                  </div>
                  <div>
                    <p className="fw-bold">
                      Tax Benefits for Investment under National Pension
                      <br />
                      Scheme launched by Government
                    </p>
                    <p>
                      I’ve worked in UX for the better part of a decade. From
                      now on, I plan to rei…
                    </p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div>
                      <img
                        src="./assest/image/Rectangle 3 (2).png"
                        alt=""
                        height="48px"
                        width="48px"
                      />
                      <span className="fw-bold">&nbsp;&nbsp;Sarah West</span>
                    </div>
                    <div>
                      <span className="bi bi-eye text-secondary fw-bold me-2">
                        &nbsp;1.4k views
                      </span>
                      <button
                        className=" btn bi bi-share"
                        // style="background-color:rgba(128, 128, 128, 0.237)"
                      ></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="cart border rounded mb-2 mobile_cart">
              <div cart-header>
                <img
                  id="mobile_cart_img"
                  src="./assest/image/Rectangle 5 (2).png"
                  alt=""
                  width="100%"
                />
              </div>
              <div className="cart-body">
                <div className="p-2 position-relative">
                  <div>
                    <button
                      className="btn p-1 pb-2 bi bi-three-dots position-absolute end-0 me-3"
                      // style="height:28px;width:28px;"
                    ></button>
                    <p id="calendar" className="mt-1 fw-bold">
                      Meetup
                    </p>
                  </div>
                  <div>
                    <p className="fw-bold">
                      Finance & Investment Elite Social Mixer @Lujiazui
                    </p>
                    <span
                      className="bi bi-calendar-event"
                      // style="font-weight: 600;"
                    >
                      &nbsp;Fri, 12 Oct 2018
                    </span>
                    <span
                      className="bi bi-geo-alt ms-4"
                      // style="font-weight: 600;"
                    >
                      Ahmedabad, India
                    </span>
                  </div>
                  <button
                    className="btn border form-control mt-2"
                    // style="color:#FF6B6B;font-weight: 600;"
                  >
                    Visit Website
                  </button>
                  <div className="d-flex justify-content-between mt-2">
                    <div>
                      <img
                        src="./assest/image/Rectangle 3 (3).png"
                        alt=""
                        height="48px"
                        width="48px"
                      />
                      <span className="fw-bold">&nbsp;&nbsp;Ronal Jones</span>
                    </div>
                    <div>
                      <span className="bi bi-eye text-secondary fw-bold me-2">
                        &nbsp;1.4k views
                      </span>
                      <button
                        className=" btn bi bi-share"
                        // style="background-color:rgba(128, 128, 128, 0.237)"
                      ></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="cart border rounded mb-2 mobile_cart">
              <div className="cart-body">
                <div className="p-2 position-relative">
                  <div>
                    <p id="job" className="mt-1 fw-bold">
                      Job
                    </p>
                  </div>
                  <div>
                    <button
                      className="btn p-1 pb-2 bi bi-three-dots position-absolute end-0 me-3"
                      // style="height:28px;width:28px;background-color:#868E96;"
                    ></button>
                    <p className="fw-bold w-50">Software Developer</p>
                    <span
                      className="bi bi-bag"
                    >
                      &nbsp;Innovaccer Analytics Private Ltd.
                    </span>
                    <span
                      className="bi bi-geo-alt ms-4"
                      //  style="font-weight:600;"
                    >
                      Nodia, India
                    </span>
                  </div>
                  <button
                    className="btn border form-control mt-2"
                    // style="color:#02B875;font-weight: 600;"
                  >
                    Apply on Timesjobs
                  </button>
                  <div className="d-flex justify-content-between mt-2">
                    <div>
                      <img
                        src="./assest/image/Rectangle 3 (4).png"
                        alt=""
                        height="48px"
                        width="48px"
                      />
                      <span className="fw-bold">&nbsp;&nbsp;Josehp Gray</span>
                    </div>
                    <div>
                      <span className="bi bi-eye text-secondary fw-bold me-2">
                        &nbsp;1.4k views
                      </span>
                      <button
                        className=" btn bi bi-share"
                        // style="background-color:rgba(128, 128, 128, 0.237)"
                      ></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col d-none d-sm-none d-md-block d-lg-block">
          <div className="d-flex justify-content-end">
            <div id="userLocation">
              <div className="border-bottom border-2">
                <span className="bi bi-geo-alt"></span>&nbsp;
                <input
                  type="text"
                  placeholder="Nodia, India"
                  style={{ outline: "none", border: "none",width:"78.5%"}}
                />
                <span className="bi bi-pencil btn"></span>
              </div>
              <div className="mt-4 text-secondary d-flex">
                <div className="bi bi-exclamation-circle me-2"></div>
                <div id="userQuote" className="word-wrap">
                  Your location will help us serve better <br/> and extend a
                  personalised experience.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
