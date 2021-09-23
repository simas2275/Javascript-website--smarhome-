import React from "react";
import { Link } from "react-router-dom";

import "./SideDrawer.css";

const SideDrawer = (props) => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }

  const clickLogout = () => {
    localStorage.removeItem("x-auth-token");
    props.closeBackdrop();
  };
  return (
    <nav className={drawerClasses}>
      <div className="navigation-text">
        <h5>Navigation</h5>
      </div>
      <ul className="nav-links">
        <div className="upper">
          <Link to="/kitchen" onClick={props.closeBackdrop}>
            <li>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAB9klEQVRIia2Wz0tVQRTHP2MS8irCCp4IYvqQWjyiv0EKWkT/grVradv+iqi/oKWQFbRsEf0iF1GrCiIVQ1RKEsoXVsSnxZ3yOm/uUy99N2/mnHPnM+ecO/MuZKQ+UjvqT3VT3Yq/zUzssPpYXVfPp/6+HAA4A0wBD4CrwG3gOXA6Wfw48BCYBaaBy7sC1EHgF7CZuBaAVmK7AdwPIdwE1oGBdL3+zO5bwHzGPl8GqOPAJHAqE/tPuRKdjLtNtQCMleYXgZkQQprpngCLGfsiMFqat4C3vRavAowAHzP2pejbl3I9OAF8Ad4B94DXFA3/ChwrxW0Ag3UAc8BUCOEuxa4B3qhXou+v3gPndgN0Se1Xn6nTJVtbXVYnSrbhaOuL8wvq7F4hQ+qKOhbnL9VLmbgn6mQvQPYkhxDWgFW2D04DeJUJvQVc77XZqqsC4BDQiePvcZ7qDjCitv8HoJEGhBCkeKWP1gE04sJQvKaHK+KGgM91AAPAVhxnM1APUJzupdTXExAf/B1LAEWpcj0YB5ZDCD/2BWBneaC6yRMUB65SVYByg4njrhJRXHgf6gDSDDrkm9wEVuoA0gyyTY7Qb3UADbpLlOvBkbqAT8Co2lQPAmejLdUG23+ZbWCtF2yH1GvqavxcmVG7Mog36tP4ifNCHU1j/gBoj/eCV7qQSgAAAABJRU5ErkJggg==" />
              Kitchen
            </li>
          </Link>
          <Link to="/garage" onClick={props.closeBackdrop}>
            <li>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABfUlEQVRIibWWPUscURSGn91sClkDNhZpRHSTLqWCH42VVrIiYmdnbWn+gZIqsbGxsrRRsJCUEUEFYVsttLOwEL9YK/VJkSusZma8M6wvnGLOnPu8534NA5FSq+pKiGrsuFj4oHqi7oc4UQfbAa6oi+q9uqx+TMoVhfequ+qZOpLwfkA9Vg/Vr3nhc+qduq52ZtR1qL/UproQA+5WN9ULdTJHQ+Pqubqjfi5e9HZzW/81F47faliS+ZTBXeq0OhNiMm1z1fnAWlWrqNvqgVrL6G5MPWqJA7Uno74WarZRG2o9x2pESa2rjXK7wa9VeeVaATaATwV5t8BsqVR6SDQAOoGpluc14DIS3gfMBMZ1mkGrnoB94C7S4DIYvFCWQRn4zr9px6g7KZll8AhMAFeRBt+AP3kMPgCnkfBUvbUHX3jHGZSB38BNpEHuPXgClog/Rb3AjzwGZWCI+HvQnwZpl0xKPs9gOHx+W/8Wil60utoEBgBK6k9gtEjLEdr7CwviSbNC3C/7AAAAAElFTkSuQmCC" />
              Garage
            </li>
          </Link>
          <Link to="/bedroom" onClick={props.closeBackdrop}>
            <li>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABk0lEQVRIie2UMWtUURCFv9EgUTC4oFvYRJMqCFpYRnELA3YpLMU/sLXYBbaPbX5CqqiglaBFxGCXJqhVEky6jUJAIQERPpt57t11d9moIEIOXB53zp1z5jzefXCMf40YRqqTwDQwCZwDTiX1DdgHdoGtiNgZyU0dV++pj9W2o6OtrmTv+C8J1DPAQ6AJXAD2gFXgNfAO+Ah8Bb5k3wRwFrgMXAEawC2gDnwCloDFiDioJl/ISZ6oN9Shr25A+sjep6m1ADCW/EmAiLibh2fUeeAqcD4T7QAv8vwd4FKm/QxsAM8iYg1YU600K/dWFlGbOcF3dVN9q35QD4t3fqC+T24rz6o2U0O1VSYoUc/nxYjYK4Y4DbzJ7c2IOCy4OtAuen+iy0B9CUzldjlDlai45304gPvq7ECDxHauflgfUAd41a/YZRARc0MERoZFvBN/Q3AY/n+D3q/oGvDoDzUflJveBLdz1X5DuFb0d6O6yQUaR1VXGz0aLej8TafoXCKA9YjYP6JBDbhelLYjYtB9OkYHPwBgEDBSuJRUtgAAAABJRU5ErkJggg==" />
              Bedroom
            </li>
          </Link>
          <Link to="/bathroom" onClick={props.closeBackdrop}>
            <li>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABrklEQVRIia2VPWsUURSGn5tdv2B3xbiKSCCCpDQK2ihooYh/wNJOG/0FYn6ArY1YJClELWyEFAqClQTERi1sbLQQg7ExhcaI7j4WczaMkxXWu/M2czjnzHPmHe4HjCm1od5Q36vr6iv14rjc8oA7FvquflB/q331Uh3wfeov9ZO6P3Kn1J76dlz4GXUlvv6Heq1UexP5Ti68oX70b/XUmagvR67bzDTQAh4Mye/K5G2Vel89pD5Rd6gvS7VNB7nwhno84hPxPKzuqQ6YyDQwDVyNeE5tAReAc9XG3AFd4GbED4F14B5gXQOOANsjbgenBxyrNiZ1CTidOehfagNN4FFSt9iqU01gEbgMbAArNXEPAjuBBdRuLKnlmuC1LNORNQH0I95WI3fA6qMmdS1OxLytXZI6GRfPmpoGyVvxz56qu8eAt9XHwboNkKLQAZ4DR4EvwDPg23/yW8BZ4ADwDjiZUvpanT6vbpivn+rdwaG36aBic4FiX1wPJ6PoPMXZtJhSujK0Q92rvrC4sD+r7RHhqJ14px+MyWFNU+qq+lqdHRVeen/W4i5eVacG+T+iIsT78laWAAAAAABJRU5ErkJggg==" />
              Bathroom
            </li>
          </Link>
          <Link to="/security" onClick={props.closeBackdrop}>
            <li>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAA1UlEQVRIie2SOw6CQBCGN8ZEC7iB3Aek8RR0Po6JVmhvAzdQ+49mTFbYxc1gAoV/Ms3u/5idHWOmBrAGjsAZeEmVwAFYjTVPgBt+VMBmTOdv8yuQA5FUbt1VqpcAJ8s8ctzHwF04e03ARcT5AGcnnFIT8BRxr3uLEwvnoQkAYCxv4RCkQNM18MHi1UAa0nn9zXQAdUhA0GhCdb0R/RrzCQC2QCOVqRN9sxRj72dO9gc9DLwgkxV27nvw9v3XtIul46wxxiSaMYn2A64XFC5ioHmh0M0cLYZEpq7t4/gvAAAAAElFTkSuQmCC" />
              Security
            </li>
          </Link>
          <Link to="/electricity" onClick={props.closeBackdrop}>
            <li>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAACU0lEQVRYhb2XTYhNYRjH/8/cO9OMXCObMdM0mZIihSZlwWymlCxQSMzCRD6mmA2iiHzUvSVKpJDl3bCR1VBW0qyMwihDkW8muRkfzeBn80yd6J45c+85561T9/+8531+//e5nee8R6piAOf5f3wFZkTNYVXA2yQ9k3RA0iMPn5QkM1tWad6pGDgLPAFqXLcD48CaNOCzvNRbA7GLwNCEoaQNHAFeA3Wum4DvQHca8HrgHbAvECsAL4HaNAzsBkpAo+tG4AvQmwY8AwwD+UDsMPABaEjDwEbgJ9DiehrwETiYONyBA8CVgN7rf8fMNOBdwB9ggeta4AVwKnG4A/uBGwHdA/wAZleTN1IrBhZJGpTUaWZ3PTYoab6kNyFLL5lZISx3NqLR/ZIGJuA+jkuaV+b+Nkm9kkYi5i8/gDne49dOYU0ReAxMusEoFeiTlJHUDWwuc89DMzvh8KWSNklaZWa/4jDwQNL1kPnVknIBfVrSbTPrj5C7ugF0+qPZ4Xod8BtYkjjcgfeAov/O+uv4clrw9cAYMNf1Hn8lt6YBz/huz7nOAe+BY4nDHbjLT0RNrgtuIDfZ2jjgDcAr4KjrVi/99kryReqEwHJJzS67JNVJOuM6L2lM0iiwQVLJzG5VYibMwKjv8rNf2wJzQx775t8FJWB63AbuABdC5hcDz4GnwMJY4Q44BAyXmdviu7+Z2MEE6PDytgdiWSDvnS9Pkt8DQI0fPHe4bvEuOAKsTAz8j4kicA1YAbwF7gcrkoaBHn8SxoGrQH1qcDfQDHwCdsaZ9y/2B1uoCryiGAAAAABJRU5ErkJggg==" />
              Electricity
            </li>
          </Link>
        </div>
        <div className="lower">
          <Link to="/settings" onClick={props.closeBackdrop}>
            <li>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABx0lEQVRIieWVP0scURTFz6x/mqw2KTcWARV2ESWNSROi38Ay3fYpxE+hfRRFFLGMhNiEoKAQMBBLP0CKrWIaDbqoGBB/FnMWZ8c3uy8pzYXHe/fOufe+d97MGem/MGCOhzYbk1uK7PEiMvb3BtSAhnf9EnjldQOodctPcsVKkr5KOpH0QdIbSe+Mu5E06PW5pF5Jt5JWJB1IeivpqaTpJElui3ZbD3B9DbwHqhlcFVj0s7zVi4oPAMcGrQGHwA9gvAN948YcOgfXGAiBFzKAvgxlAkaBbaDp8QkYyWH6gV+usRBqMANcGrADlDPFfweoOAEqmdPvOn4JzBQdeRK4MnDMsW37n4EK8Az44tiWMWP2r4DJIkpbTS4MfmK/ab+SwQw5dma/bP8iXy/mQ8Nz0hFVYG0NfLxW7Lnnfc+rpmdI0qpjezlsqZCiDpc84gvN2ykwbEy56yXT+TWtAFvAucfHTPEWpo/713Q+1OBfPrQJY74D68792Tp9KKEeoOKaVBayUlEDloA/AXybVBSJ3alSsXutVOxKahe7pqQepWK3LOmb7sVuKkkSFGukwtbw7vJyXe1eIa7JZoCKjZjc2D/aUWTsEdod/w3IInoIHSoAAAAASUVORK5CYII=" />
              Settings
            </li>
          </Link>
          <Link to="/" onClick={clickLogout}>
            <li>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA/wD/AP+gvaeTAAAB+0lEQVRIia2VPWtUURCG3zluGlkTFCKIH5VVarFSIkEEETUxpg1WViL+AAuzaq3xP1jYrFqJrbWVVlGb7K5IDAlq6cc+FnsumRzuJ7tvNXdmzjx35g7nSg0EXAEGQB+43ORsI0VApt4kCs4DV3P8+5QTXwAu1AEE4JmrtVoXBCy50DoQfLyVsNYl3XHPM5Vvt6dZZ9+VhKR7ed3cSl74FTDVoKOpeMZrNYUcBX66hG4KqQI5WNel/ABmfcJTF+wBh/JmUwWKOdOxRqYnWaAN/HKBxbwCdUExbzHp6mC6LQPgwARAIenqWpB0zuU8N7N/RQXqysyGkl441/kgac45Po4Lcfrg7Lkg6bBz9CsODxrk+ivqSJD02zmqxnY7wvrRLtPQ2X9akr45x7Gyk2b2RtLJCkCm487+GiRtOsfZmkXq6IyzNwVcdGv4CbBxCYABn13dheza2HXOpQmAbrp6O0ArCzx2gQ2gPQakHSeTqeODM8C2C3ZJ/ic1IQF46epskd6bwAowTGC1O4udeMgQWC5K7rBfG8CNsgWJH345+fgAD3yepYckrUm6n8S+SHot6b32bocTGq3wdUmnfRlJHUlrZlZ48WbAFeA7zbVVOK4S2DTwiNF6VmkHeEjBD1PJeIqALUnzki5JOqXRyKTRCHuS3kp6Z2Z/y+r8Bwa4GOaAQeQnAAAAAElFTkSuQmCC" />
              Logout
            </li>
          </Link>
        </div>
      </ul>
    </nav>
  );
};

export default SideDrawer;
