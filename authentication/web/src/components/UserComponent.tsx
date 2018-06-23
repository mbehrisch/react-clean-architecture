import * as React from "react";
import "../stylesheets/App.css";
import {User} from "core";

interface PropsType {
  user?: User,
}

export const UserComponent = (props: PropsType) => {
  return props.user ? (
    <div>
      <h1>
        Name is: { props.user.name }
      </h1>
      <h1>
        Email is: { props.user.email }
      </h1>
    </div>
  ): <div />;
};