import React from "react";
import PageLayout from "../components/Book/PageLayout";
import Swal from "sweetalert2";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "1b3b61b2-7f1f-4466-b2ed-c1f32635ef35");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Message Sent!",
        text: "Thanks for reaching out 😊",
        icon: "success",
      });
    }
  };

  return (
    <PageLayout title="Final Chapter — The Story Continues" pageNumber={5}>
      <div className="max-w-2xl mx-auto">
        <div className="mb-2 text-center">
          <h2 className="text-2xl font-semibold text-[#6C8AE4] mb-4">
            Let’s Connect 🤝
          </h2>

          <p className="text-gray-700 mb-3 leading-relaxed">
            Whether you have an opportunity, a question, or just want to say hi,
            feel free to reach out.
          </p>

          <p className="text-gray-600 leading-relaxed">
            I’m always open to discussing new ideas, collaborations, or
            interesting projects.
          </p>
        </div>

        <div className="bg-[#FAFAFF] p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#2D3748] text-center">
            Send a Message
          </h3>

          <form onSubmit={onSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#6C8AE4]"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#6C8AE4]"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows="4"
              className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#6C8AE4]"
            />

            <button
              type="submit"
              className="w-full py-3 bg-[#6C8AE4] text-white rounded-lg hover:bg-[#5a74c9] transition"
            >
              Send Message →
            </button>
          </form>
        </div>

        <div className="flex justify-center gap-6 text-gray-600 text-sm">
          <a
            href="mailto:aditishaw2417@gmail.com"
            className="hover:text-[#6C8AE4]"
          >
            📧 Email
          </a>

          <a
            href="https://www.linkedin.com/in/aditi-shaw-a98754221/"
            className="hover:text-[#6C8AE4]"
          >
            💼 LinkedIn
          </a>

          <a
            href="https://github.com/aditishaw2417"
            className="hover:text-[#6C8AE4]"
          >
            💻 GitHub
          </a>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;
