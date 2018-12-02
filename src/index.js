import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>WARNING!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>

      {/* Load child component */}
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:45PM"
          avatar={faker.image.avatar()}
          content="This is great!"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Adam"
          timeAgo="Today at 2:00AM"
          avatar={faker.image.avatar()}
          content="This is okay."
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="John"
          timeAgo="Yesterday at 4:00AM"
          avatar={faker.image.avatar()}
          content="This is not so good..."
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
