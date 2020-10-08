import React, { useState } from "react";

import { contact } from "apis/contacts";

const Contact = () => {
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      setLoading(true);
      const { data } = await contact({
        contact: { title, email, body },
      });
      alert(data.message);
    } catch (error) {
      alert(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="wrapper flex flex-grow">
      <div className="flex-col container mx-auto px-4">
        <div className="flex flex-col flex-grow h-full w-full items-center justify-center lg:w-5/12 mx-auto py-20">
          <h2 className="text-2xl text-center font-medium mb-5 text-gray-800">
            Contact us
          </h2>

          <form
            className="simple_form bg-white / border shadow-sm / rounded-lg px-10 py-8 / w-full"
            onSubmit={handleSubmit}
          >
            <div className="form-group mb-8 string required contact_title">
              <div>
                <label
                  className="string required control-label block mb-1 font-medium text-gray-600 text-sm tracking"
                  htmlFor="contact_title"
                >
                  Title
                </label>
              </div>
              <div className="controls">
                <input
                  className="string required form-control border border-gray-400 text-gray-800 focus:text-black / w-full px-3 py-2 rounded-md hover:border-gray-600 focus:border-gray-600 focus:outline-none transition duration-200 ease-in-out"
                  autoFocus
                  required
                  aria-required="true"
                  type="text"
                  name="title"
                  id="contact_title"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group mb-8 email required contact_email">
              <div>
                <label
                  className="email required control-label block mb-1 font-medium text-gray-600 text-sm tracking"
                  htmlFor="contact_email"
                >
                  Email
                </label>
              </div>
              <div className="controls">
                <input
                  className="string email required form-control border border-gray-400 text-gray-800 focus:text-black / w-full px-3 py-2 rounded-md / hover:border-gray-600 focus:border-gray-600 focus:outline-none / transition duration-200 ease-in-out"
                  required="required"
                  aria-required="true"
                  type="email"
                  name="email"
                  id="contact_email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group mb-8 string required contact_body">
              <div>
                <label
                  className="string required control-label block mb-1 font-medium text-gray-600 text-sm tracking"
                  htmlFor="contact_body"
                >
                  Description
                </label>
              </div>
              <div className="controls">
                <input
                  className="string required form-control border border-gray-400 text-gray-800 focus:text-black / w-full px-3 py-2 rounded-md / hover:border-gray-600 focus:border-gray-600 focus:outline-none / transition duration-200 ease-in-out"
                  required="required"
                  aria-required="true"
                  type="text"
                  name="body"
                  id="contact_body"
                  value={body}
                  onChange={e => setBody(e.target.value)}
                />
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="form-buttons"></div>
              <input
                type="submit"
                name="commit"
                value={loading ? "Loading..." : "Send"}
                disabled={loading}
                className="btn btn font-semibold text-base text-white / px-4 py-2 w-full rounded-md / bg-teal-600 border border-teal-600 / cursor-pointer / hover:opacity-75 / transition duration-200 ease-in-out"
                data-disable-with="Send"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
