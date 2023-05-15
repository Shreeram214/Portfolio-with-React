import React from "react";

function AboutMe() {
  return (
    <>
      <div className="container">
        <h1 className="text-center mt-5">About Me</h1>
        <div className="row mt-4">
          <div className="col-md-6">
            <h3>Our Company</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsam iste optio voluptas eveniet recusandae facere explicabo doloribus fuga. Beatae dignissimos mollitia, nobis explicabo vitae et ad commodi laborum ipsa?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et
              eros massa. In hac habitasse platea dictumst. Proin faucibus
              tellus id lacus tristique, a aliquam mauris finibus. Morbi feugiat
              tellus vel gravida iaculis.
            </p>
          </div>
          <div className="col-md-6">
            <h3>Our Team</h3>
            <ul>
              <li>John Doe - CEO</li>
              <li>Jane Smith - Marketing Manager</li>
              <li>Mike Johnson - Sales Representative</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
