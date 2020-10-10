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
    <div className="flex flex-grow wrapper">
      <div className="w-full px-4">
        <div className="flex flex-col items-center justify-center flex-grow w-full h-full py-20 mx-auto lg:w-5/12">
          <h2 className="mb-5 text-2xl font-medium text-center text-gray-800">
            Contact us
          </h2>

          <form
            className="w-full px-10 py-8 bg-white border rounded-lg shadow-sm simple_form /"
            onSubmit={handleSubmit}
          >
            <div className="mb-8 form-group string required contact_title">
              <div>
                <label
                  className="block mb-1 text-sm font-medium text-gray-600 string required control-label tracking"
                  htmlFor="contact_title"
                >
                  Title
                </label>
              </div>
              <div className="controls">
                <input
                  className="w-full px-3 py-2 text-gray-800 transition duration-200 ease-in-out border border-gray-400 rounded-md string required form-control focus:text-black / hover:border-gray-600 focus:border-gray-600 focus:outline-none"
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

            <div className="mb-8 form-group email required contact_email">
              <div>
                <label
                  className="block mb-1 text-sm font-medium text-gray-600 email required control-label tracking"
                  htmlFor="contact_email"
                >
                  Email
                </label>
              </div>
              <div className="controls">
                <input
                  className="w-full px-3 py-2 text-gray-800 transition duration-200 ease-in-out border border-gray-400 rounded-md string email required form-control focus:text-black / hover:border-gray-600 focus:border-gray-600 focus:outline-none"
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

            <div className="mb-8 form-group string required contact_body">
              <div>
                <label
                  className="block mb-1 text-sm font-medium text-gray-600 string required control-label tracking"
                  htmlFor="contact_body"
                >
                  Description
                </label>
              </div>
              <div className="controls">
                <input
                  className="w-full px-3 py-2 text-gray-800 transition duration-200 ease-in-out border border-gray-400 rounded-md string required form-control focus:text-black / hover:border-gray-600 focus:border-gray-600 focus:outline-none"
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

            <div className="flex items-center justify-between">
              <div className="form-buttons"></div>
              <input
                type="submit"
                name="commit"
                value={loading ? "Loading..." : "Send"}
                disabled={loading}
                className="w-full px-4 py-2 text-base font-semibold text-white transition duration-200 ease-in-out bg-teal-600 border border-teal-600 rounded-md cursor-pointer btn / hover:opacity-75"
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
